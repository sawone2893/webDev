/**
 * Templating:We will be using EJS(Embeded Javascript templates) for templating.
 * EJS is simple templating language that let us to generate HTML markup with plain javscript.
 */
const express=require("express");
const path=require("path");
const app=express();
const port=8080;

app.use(express.static(path.join(__dirname,"/public/css")));//Serving Static files.
app.use(express.static(path.join(__dirname,"/public/js")));//Serving Static files.
app.set("view engine","ejs")//here we are setting templating as EJS
app.set("views",path.join(__dirname,"/views"));//setting view directory

app.listen(port,()=>{
console.log(`Listening at port: ${port}`);
});

app.get("/",(req,res)=>{
res.render("home.ejs");//render method is used to send file that need to be render as response.
});

//Passing data to EJS 
app.get("/rollDice",(req,res)=>{
    let diceValue=Math.floor(Math.random()*6)+1
    res.render("rollDice.ejs",{diceValue});//render method is used to send file that need to be render as response along with value to be passed in the file.
});

//Activity:Create simple template for instagram page for different users.
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let instaData=require("./data.json");
    let data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs",{username});
    }
   
});