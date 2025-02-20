const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successfully setup!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//Schema creation
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
//Model Creation
const User = mongoose.model("User", userSchema);

User.findOneAndDelete({age:{$gte:30}}).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err);
});

