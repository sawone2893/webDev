const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

//Exporing session options
const sessionOptions = {
  secret: "supersecret",
  resave: false,
  saveUninitialized: true,
};

//This to set the view engine and views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/reqCount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }

  res.send(`You request ${req.session.count} times`);
});

app.get("/test", (req, res) => {
  res.send("Test Route is working");
});

//Storing infromation in session .
app.get("/register", (req, res) => {
  let { name = "anonmyous" } = req.query;
  req.session.name = name;
  //Storing flash message.
  if (name === "anonmyous") {
    req.flash("error", "user not register");
  } else {
    req.flash("success", "User is successfully registered!");
  }
  res.redirect("/hello");
});

//using session information.
app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name});
});

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});
