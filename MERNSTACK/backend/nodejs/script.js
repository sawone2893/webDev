//importing file
const math = require("./math");
//importing folder
const fruit = require("./fruits");

let args = process.argv;
for (let i = 2; i < args.length; i++) {
  console.log(`Count ${args[i]}`);
}

console.log(`Add: ${math.sum(2, 5)}`);
console.log(`Multiply: ${math.multiply(2, 5)}`);
console.log(fruit[0]);
