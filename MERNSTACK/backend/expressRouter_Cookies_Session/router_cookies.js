const express = require("express");
const app = express();
const port = 3000;
const users = require("./routes/users");
const posts = require("./routes/posts");
const cookieParser = require("cookie-parser");

app.use("/users", users);
app.use("/posts", posts);

//app.use(cookieParser());
app.use(cookieParser("secretcode"));//this for signed cookies.

app.get("/", (req, res) => {
  res.send("Root is working");
});

//Sending cookies
app.get("/setCookies", (req, res) => {
  res.cookie("greet", "Namaste");
  res.cookie("madeIn", "India");
  res.send("We sent you cookies");
});

//Parsing the cookies.
app.get("/getCookies", (req, res) => {
  console.log(req.cookies);
  let { name = "anonymous" } = req.cookies;
  res.send(`Hi,${name}`);
});

//Sending Signed cookies
app.get("/setSignedCookies", (req, res) => {
  res.cookie("made-in", "india", { signed: true });
  res.send("We sent you cookies");
});

//Parsing the signed cookies.
app.get("/getSignedCookies", (req, res) => {
  console.log(req.signedCookies);
  let { name = "anonymous" } = req.signedCookies;
  res.send(`Hi,${name}`);
});

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});
