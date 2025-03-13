const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGODB_URL = "mongodb://127.0.0.1:27017/demoDB";

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
  username: String,
  addresses: [
    {
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  const user1 = new User({
    username: "shab@258",
    addresses: [
      {
        location: "P545, WallStreet",
        city: "London",
      },
    ],
  });
  user1.addresses.push({ location: "S2313, Avenue mark", city: "London" });
  const result = await user1.save();
};

addUser();
