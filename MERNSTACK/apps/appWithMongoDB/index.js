const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection Successfully setup!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Server is ready!");
});
//Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//Create Route
app.post("/chats", async (req, res) => {
  let { from, msg, to } = req.body;
  await Chat.insertOne({
    from: from,
    message: msg,
    to: to,
    created_at: new Date(),
  });
  res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit",async (req,res)=>{
  let {id}=req.params;
  let chat=await Chat.findById(id);
  res.render("edit.ejs",{chat});
});

//Update Route
app.put("/chats/:id",async (req,res)=>{
  let {id}=req.params;
  let {msg}=req.body;
  await Chat.findByIdAndUpdate(id,{message:msg});
  res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id",async (req,res)=>{
  let {id}=req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

const port = 8080;
app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
