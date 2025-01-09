const express = require("express");

let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

/**
 * Handing request and Sending a response.
 * use method:this listen every request send by user.
 */
/**
 * app.use((req, res) => {
  console.log(`Request received! ${req}`);
  //Sending String in response.
  //res.send("This basic response");
   //Sending object in response
        // let fruit={
        //     name:"apple",
        //     color:"red"
        // }
        // res.send(fruit);
   
  //Sending html in resonse
  let code = "<h1>Fruits:</h1><ul><li>apple</li><li>apple</li></ul>";
  res.send(code);
});
 * 
 */

/**
 * Routing:it is the process of selecting a path for traffic in a network or between or acrross multiple network.
 * Sending request to specific path
 * 1. get method:
 */

//Defining routes
app.get("/", (req, res) => {
  res.send("Hi,You connected to root path.");
});

// app.get("/apple", (req, res) => {
//   res.send("{name:'apple',color:'red'}");
// });

// app.get("/banana", (req, res) => {
//   res.send("{name:'banana',color:'yellow'}");
// });

// app.get("/orange", (req, res) => {
//   res.send("{name:'orange',color:'orange'}");
// });

// app.get("*", (req, res) => {
//   res.send("This route does not exist!");
// });

// app.post("/", (req, res) => {
//   res.send("You send the post request to root");
// });

/**
 * Nodemon: This package is used to restart server automatically whenever there is change in the server side code.
 * It is advisable to install this globally.
 * Syntax: npm i -g nodemon
 * To start the server type below command.
 *  nodemon index.js
 */

/**
 * Path Parameters:These are variables that passed with request.
 * colon is used to pass path parameters.
 */
// //Example:Passing single param
// app.get("/:username", (req, res) => {
//   res.send(`Hi, Welcome ${req.params.username}`);
// });

// //Example:Passing multiple params
// app.get("/:username/:id", (req, res) => {
//   let {username,id}=req.params;
//   let htmlStr=`Hi, Welcome ${username}.Your ID is ${id}`;
//   res.send(htmlStr);
// });

/**
 * Query Strings:
 */
//Example:Passing single param
app.get("/search", (req, res) => {
  console.log(req.query)
  let htmlStr=`Search result for ${req.query.q}`
  res.send(htmlStr);
});
//Request url for single query string: http://localhost:3000/search?q=orange
//Request url for multiple query string: http://localhost:3000/search?q=orange& limit=10
