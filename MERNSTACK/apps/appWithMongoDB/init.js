const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection Successfully setup!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Shabbir",
    to: "Umesh",
    message: "Where are you",
    created_at: new Date(),
  },
  {
    from: "Mani",
    to: "Umesh",
    message: "Put this to end",
    created_at: new Date(),
  },
  {
    from: "Shabbir",
    to: "Umesh",
    message: "Let go",
    created_at: new Date(),
  },
  {
    from: "Rakesh",
    to: "Umesh",
    message: "Hey,how are you",
    created_at: new Date(),
  },
  {
    from: "Shabbir",
    to: "Shivam",
    message: "You are doing great.",
    created_at: new Date(),
  },
  {
    from: "Shabbir",
    to: "Shankar",
    message: "I like Dosa.",
    created_at: new Date(),
  },
  {
    from: "Uzma",
    to: "Om",
    message: "Whio are you.",
    created_at: new Date(),
  },
  {
    from: "Shabbir",
    to: "Raja",
    message: "I love Programming",
    created_at: new Date(),
  },
  {
    from: "Raj",
    to: "Umesh",
    message: "I love India.",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);