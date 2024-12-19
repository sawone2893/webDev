//Template Literals:operator
console.log(`Sum is ${a + b}`);

//Operators
//Arithmetic Operators
console.log(`Addition Result:${a + b}`);
console.log(`Subtraction Result:${a - b}`);
console.log(`Division Result: ${a / b}`);
console.log(`Multiplication Result: ${a * b}`);
console.log(`Modulus Result: ${a % b}`);
console.log(`Power Result: ${a ** b}`);

//Unary Operators
console.log(`Value of a: ${a}`);
console.log(`Unary operator a++ ${a++}`);
console.log(`Value of a: ${a}`);
console.log(`Unary operator a-- ${a--}`);
console.log(`Value of a: ${a}`);
console.log(`Unary operator ++a ${++a}`);
console.log(`Value of a: ${a}`);
console.log(`Unaary operator --a ${--a}`);
console.log(`Value of a: ${a}`);
//Assignment Operators
console.log(`Assignment operator a=b ${(a = b)}`);
console.log(`Assignment operator a += 1 ${(a += 1)}`);
console.log(`Assignment operator a -= 2 ${(a -= 2)}`);
console.log(`Assignment operator a /= 5 ${(a /= 5)}`);
console.log(`Assignment operator *= ${(a *= 8)}`);
console.log(`Assignment operator a *= 8 ${(a %= 2)}`);
console.log(`Assignment operator a **= 2 ${(a **= 2)}`);

//Comparison Operators
console.log(`Value of a: ${a} and b: ${b}`);
console.log(`Comparison operator a>b ${a > b}`);
console.log(`Comparison operator a>=b ${a >= b}`);
console.log(`Comparison operator a<b ${a < b}`);
console.log(`Comparison operator a<=b ${a <= b}`);
console.log(`Comparison operator a==b ${a == b}`);
console.log(`Comparison operator a!=b ${a != b}`);
a = 123;
b = "123";
console.log(`Value of a: ${a} and b: ${b}`);
console.log(`Comparison operator a===b ${a === b}`);

let age = 17;
//Conditional Statement
//If statement
if (age >= 18) {
  console.log("You are Adult");
}

//if-elsestatement

if (age >= 18) {
  console.log("You are Adult");
} else {
  console.log("You are not Adult");
}

//else-if statement
if (age >= 18) {
  console.log("You are Adult");
} else if (age <= 17) {
  console.log("You age is less then 18 years");
} else {
  console.log("You age too young");
}

//Nested if else stattement

let marks = 33;
if (marks >= 33) {
  if (marks >= 80) {
    console.log("O");
  } else {
    console.log("A");
  }
} else {
  console.log("Better Luck Next Time");
}

//Logical Operators:
//AND Operator:&&
//true && true=true
//false && true=false
//true && false=false
//false && false=false

if (marks >= 33 && marks < 60) {
  console.log("Your Grade is C");
} else if (marks >= 60 && marks < 70) {
  console.log("Your Grade is B");
} else if (marks >= 70 && marks < 80) {
  console.log("Your Grade is B+");
} else if (marks >= 80 && marks < 90) {
  console.log("Your Grade is A");
} else if (marks >= 90 && marks <= 100) {
  console.log("Your Grade is A+");
} else {
  console.log("Your Grade is F");
}
//OR Operator:|
//true || true=true
//false || true=true
//true || false=true
//false || false=false

if (marks >= 33 || marks <= 100) {
  console.log("Pass");
}
//NOT operator:!
//!true=false
//!false=true

if (!(marks < 33)) {
  console.log("Pass");
}

//Switch Statement
let color = "pink";
switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  case "yellow":
    console.log("Go Slow!");
    break;
  default:
    console.log("Broken Light");
}

//Alert and Prompt
//Prompt:
// let firstName=prompt("Enter your First Name:");
// let lastName=prompt("Enter your Last Name:");
// //Alert:
// alert(`Welcome ${firstName} ${lastName} !`);