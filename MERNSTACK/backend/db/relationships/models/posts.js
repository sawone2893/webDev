const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGODB_URL = "mongodb://127.0.0.1:27017/insta";

main()
  .then(() => {
    console.log("Database connection setup...");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGODB_URL);
}

const userSchema = new Schema({
  name: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  const user1 = new User({
    name: "Umesh Kumar",
    email: "umesh@gmail.com",
  });

  const user2 = new User({
    name: "Raj Kumar",
    email: "raj@gmail.com",
  });

  const post1 = new Post({
    content: "I love India",
    likes: 200,
  });

  const post2 = new Post({
    content: "I love Coding",
    likes: 200,
  });

  post1.user = user1;
  post2.user = user2;

  await user1.save();
  await user2.save();
  await post1.save();
  await post2.save();
};

addData();
