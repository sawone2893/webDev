const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listings");

const MONGODB_URL = "mongodb://127.0.0.1:27017/wanderlust";

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

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data=initData.data.map((obj)=>({...obj,owner:"67da4ba8f7191919b82b0c35"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
