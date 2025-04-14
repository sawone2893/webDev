//Q1
let num = 146841;
if (num % 10 === 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

//Q2
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
alert(`${name} is ${age} years old.`);

//Q3
let quaterindex = 2;
switch (quaterindex) {
  case 1:
    console.log("Janauary,February,March");
    break;
  case 2:
    console.log("April,May,June");
    break;
  case 3:
    console.log("July,August,September");
    break;
  case 4:
    console.log("Octomber,November,December");
    break;
  default:
    console.log("Wrong Quarter Index!");
}

//Q4
let str = "Shabbir";
if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
  console.log("Golden String!");
} else {
  console.log("Not Golden String!");
}

//Q5
let num1 = 25;
let num2 = 36;
let num3 = 78;
if (num1 > num2 && num1 > num3) {
  console.log(`Largest Number: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`Largest Number: ${num2}`);
} else {
  console.log(`Largest Number: ${num3}`);
}

//Q6
let number1 = 34562;
let number2 = 564562;
let num1LastDigit = number1 % 10;
let num2LastDigit = number2 % 10;
if (num1LastDigit === num2LastDigit) {
  console.log(`Same Last Digit:${num1LastDigit}`);
} else {
  console.log(
    `Different last Digit: Number1-${num1LastDigit} Number2-${num2LastDigit}`
  );
}
