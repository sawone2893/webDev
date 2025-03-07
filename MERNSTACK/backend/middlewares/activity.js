const express = require("express");
const app = express();
const ExpressError = require("../middlewares/ExpressError");

const port = 8080;

//Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error" } = err;
  res.status(status).send(message);
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to Admin is forbidden");
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
