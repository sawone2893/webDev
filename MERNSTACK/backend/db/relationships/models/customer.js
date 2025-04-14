const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGODB_URL = "mongodb://127.0.0.1:27017/zomato";

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

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

//post mongoose middleware:

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log("Calling post Middleware...")
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);



// const addOrders = async () => {
//   let result = await Order.insertMany([
//     {
//       item: "Samosa",
//       price: 12,
//     },
//     {
//       item: "Chips",
//       price: 10,
//     },
//     {
//       item: "Cold Drink",
//       price: 20,
//     },
//   ]);
//   console.log(result);
// };

// addOrders();

// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Rahul Kumar",
//   });
//   let order1 = await Order.findOne({ item: "Chips" });
//   let order2 = await Order.findOne({ item: "Samosa" });
//   let order3 = await Order.findOne({ item: "Cold Drink" });
//   cust1.orders.push(order1);
//   cust1.orders.push(order2);
//   cust1.orders.push(order3);

//   let result = await cust1.save();
//   console.log(result);
// };

// addCustomer();

// const findCustomer = async () => {
//   let result = await Customer.find({}).populate("orders");
//   console.log(result);
// };

// findCustomer();
const addCust = async () => {
  const newCust = new Customer({
    name: "Raju Bist",
  });

  const newOrder = new Order({
    item: "Dosa",
    price: 50,
  });
  newCust.orders.push(newOrder);
  await newOrder.save();
  await newCust.save();
};

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("67ce3dccca111727e7cf5db5");
  console.log(data);
};
//addCust();
delCust();
