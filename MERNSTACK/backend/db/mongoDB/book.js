const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("Connection Successfully setup!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min:[1,"Selling price is too low"]
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

// const book2 = new Book({
//   title: "Mathematic VIII",
//   author: "RD Sharma",
//   price: 1200,
//   category:"non-fiction"
// });

// book2
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

Book.findByIdAndUpdate("67b6a98d93545a42bb5b8ea0",{price:-100},{runValidators:true})
      .then(res=>console.log(res)).catch(err=>console.log(err.errors.price.message));
