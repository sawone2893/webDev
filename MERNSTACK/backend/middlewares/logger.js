const express = require("express");
const app = express();

const port = 8080;
//Note: We should always write middleware before the request methods.
//Below middleware will print logs for all request send to the server.
app.use((req, res, next) => {
    req.responseTime=new Date(Date.now());
    console.log(req.method,req.path,req.host,req.responseTime);
    next();
  });

app.get("/", (req, res) => {
    res.send("Root is up!");
  });
  
  app.get("/random", (req, res) => {
    res.send("Random!");
  });
  
  app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
  });