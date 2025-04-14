const express = require("express");
const app = express();
const port = 8080;
//To handle Post request: ------------------------------------------------------------------------------
//Below line of code enables expres to parse data send in the url.
app.use(express.urlencoded({ extended: true }));
//Below line of code enables expres to parse json data send in the request.
app.use(express.json());
//-------------------------------------------------------------------------------------------------------
//Below line of code listens every request send by client.
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`The Standard Get response!.Welcome ${user}`);
});

app.post("/register", (req, res) => {
  let { user, password } = req.body;
  res.send(`The Standard POST response!.Welcome ${user}`);
});
