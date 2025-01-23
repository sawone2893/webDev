const express=require("express");
const path=require("path");
const app=express();

app.use(express.static("public/css"));
app.use(express.static("public/js"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
res.send("Request Recieved!");
});

//Start Server:
const port=8080;
app.listen(port,()=>{
console.log(`Listening at port ${port}`);
});