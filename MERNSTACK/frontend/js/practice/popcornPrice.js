let orderSize = "XXL";

if (orderSize == "XL") {
  console.log("Price is Rs 250");
} else if (orderSize == "L") {
  console.log("Price is Rs 200");
} else if (orderSize == "M") {
  console.log("Price is Rs 100");
} else if (orderSize == "S") {
  console.log("Price is Rs 50");
} else {
  console.log(`Order size: ${orderSize} is not available.`);
}
