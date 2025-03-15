const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const listings = require("./routes/listing");
const reviews = require("./routes/review");
const session = require("express-session");
const flash = require("connect-flash");

const MONGODB_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Database connection setup...");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGODB_URL);
}
//This to set the view engine and views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//This is to read the parms or request body
app.use(express.urlencoded({ extended: true }));

//This is to serve patch,put,delete request
app.use(methodOverride("_method"));

// use ejs-locals for all ejs templates:
app.engine("ejs", ejsMate);

//This is to service static file like css and js
app.use(express.static(path.join(__dirname, "/public")));

//Setting session options
const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookies: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.get("/", (req, res) => {
  res.send("Root is working");
});

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/listings", listings);

app.use("/listings/:id/reviews", reviews);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

//Error Handler Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("listings/error.ejs", { message });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
