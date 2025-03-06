const express = require("express");
const app = express();

const port = 8080;
//Note:Whatever request you send but only middleware will be getting executed.
/**
 * Example 1:
  app.use(()=>{
    console.log("I am middleware"); 
});
 */

/**
 app.use((req, res) => {
  console.log("I am middleware");
  res.send("Middleware finish!");
});
 */
//Note: We can access req and res object. Also we can manipulate them.
/**
app.use((req, res) => {
  let { query } = req.query;
  console.log(query);
  res.send("Middleware finish!");
});
 */
//If we have define multiple middlewares then these will be executing sequencially one by one.
//And we should not write any code after next() method calling as next is the end of the middleware.
/**
app.use((req, res, next) => {
  console.log("Middleware1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware2");
  next();
});
 */
//API Token as Query String
app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
});
//Note: Middleware are also used for the client authenticaion.


let checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new Error("ACCESS DENIED!");
};

app.get("/", (req, res) => {
  res.send("Root is up!");
});

app.get("/api", (req, res) => {
  res.send("data");
});

//Passing multiple middlewares:
app.get("/random", checkToken, (req, res) => {
  res.send("data");
});

//Error handling:
app.get("/wrong", (req, res) => {
  abcd="nsda";
});
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
