// console.log("Hello SHabbir");
// console.log("Do you Want to learn JavaScript?");
//Console Printing:
let a = 5;
let b = 10;
console.log("Sum is ", a + b);
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

//String Methods:
// 1. trim() method
let msg = "     shab      ";
let newMsg = msg.trim();
console.log(`String before trim: ${msg}`);
console.log(`String After trim: ${newMsg}`);

// Note: String are immutable.
// No chnage can be made to strings.
// Whenever we try to make a chnage, a new string is created and old one remains same.

//2. toUpperCase() and toLowerCase method.

let str = "Random String";
console.log(`Uppercase: ${str.toUpperCase()}`);
console.log(`Lowercase: ${str.toLowerCase()}`);

//3. indexOf() method

let message = "I Love India";
console.log(`Message: ${message}`);
console.log(`Index of Love: ${message.indexOf("Love")}`);
console.log(`Index of Z: ${message.indexOf("Z")}`);
console.log(`Index of o: ${message.indexOf("o")}`);

//Method Chaining

let msg1 = "    Welcome to India      ";
let newMsg1 = msg1.trim().toUpperCase();
console.log(`Message: ${msg1}`);
console.log(`Message after trim and uppercase: ${newMsg1}`);

//4. slice method
let msg2 = "Hello";
console.log(`Message: ${msg2}`);

console.log(`Message after slice(0,4): ${msg2.slice(0, 4)}`);
console.log(`Message after slice(4): ${msg2.slice(4)}`);
console.log(`Message after slice(-2): ${msg2.slice(-2)}`);

//5. replace  and repeat method
let msg3 = "I love  love coding";
console.log(`Message: ${msg3}`);
console.log(
  `Message after repalce("love","do"): ${msg3.replace("love", "do")}`
);
console.log(`Message after repalce("l","d"): ${msg3.replace("l", "d")}`);
console.log(`Message after repeat(2): ${msg3.repeat(2)}`);

//Arrays:Linear collection of things.
let student=["Shab","Anish","Yaseen","Ali","Afroz","Zoya","Bushra"];
console.log(` Student Arrays Values are : ${student}`);
console.log(`Size of student array ${student.length}`);
console.log(`student array item on first place : ${student[0]}`);
console.log(`student array item on first place and it's first character : ${student[0][0]}`);

let num=[25,56,23,41,25,23.8,9.36];
console.log(`Num Arrays Values are: ${num}`);
console.log(`Size of num array ${num.length}`);
console.log(`num array item on first place : ${num[0]}`);
console.log(`num array item on first place and it's first character : ${num[0]}`);

let info=["Shabbir","Rayeen",25.6,31];
console.log(`info Arrays Values are: ${info}`);
console.log(`Size of info array ${info.length}`);
console.log(`info array item on first place : ${info[0]}`);
console.log(`info array item on first place and it's first character : ${info[0][0]}`);

//Arrays are mutable.
let fruits=["Banana","Apple","Orange","Papaya"];
console.log(`Fruits arrays values: ${fruits}`);
fruits[0]="Litchi";
console.log(`Fruits arrays values after replacing first place item with Litchi: ${fruits}`);

//We can store values in array on any index;
console.log(`Size of fruits array ${fruits.length}`);
fruits[10]="Kiwi";
console.log(`Fruits arrays values after adding kiwi at 10th index: ${fruits}`);
console.log(`Size of fruits array after adding kiwi at 10th index ${fruits.length}`);

//Array methods
let cars=["BMW","Mercedes","Ferrari"];
console.log(`cars array values: ${cars}`);

//1. push method-add element at end
cars.push("Lamborghini");
console.log(`cars array values after adding one item at end ${cars}`);
cars.push("Audi");
console.log(`cars array values after adding one more item at end ${cars}`);

//2. pop method-delete element from end.
cars.pop();
console.log(`cars array values after deleting one item from end ${cars}`);
cars.pop();
console.log(`cars array values after deleting one more item from end ${cars}`);

//3. unshift method-add element at start.
cars.unshift("Lamborghini");
console.log(`cars array values after adding one item at start ${cars}`);
cars.unshift("Audi");
console.log(`cars array values after adding one more item at start ${cars}`);

//4. shift method-delete element from start.
cars.shift();
console.log(`cars array values after deleting one item from start ${cars}`);
cars.shift();
console.log(`cars array values after deleting one more item from start ${cars}`);

//5. indexOf method-find index of array element.
console.log(`Index of BMW: ${cars.indexOf("BMW")}`);
console.log(`Index of bMW: ${cars.indexOf("bMW")}`);
console.log(`Index of Toyota: ${cars.indexOf("Toyota")}`);

//6. includes method-search for any particular array element
console.log(`Search for ferrari: ${cars.includes("ferrari")}`);
console.log(`Search for Ferrari: ${cars.includes("Ferrari")}`);
console.log(`Search for Audi: ${cars.includes("Audi")}`);

//7. concat method - to merge two arrays
let primaryColor=["Red","Green","Blue"];
console.log(`Primary Color names list: ${primaryColor}`);
let secomdaryColor=["Orange","Brown","White"];
console.log(`Secondary Color names list: ${secomdaryColor}`);
let colors=primaryColor.concat(secomdaryColor);
console.log(`Color names list after merge: ${colors}`);

//8. reverse method - to reverse an array.
console.log(`Reverse array: ${colors.reverse()}`);

//9. slice method - copies portion of an array
console.log(`colors.slice(): ${colors.slice()}`);
console.log(`colors.slice(2): ${colors.slice(2)}`);
console.log(`colors.slice(3,6): ${colors.slice(3,6)}`);
console.log(`colors.slice(-3): ${colors.slice(-3)}`);

//10. splice method - to remove/replace/add element in place.
console.log(`Color names list: ${colors}`);
console.log(`colors.splice(4): ${colors.splice(4)}`);
console.log(`Color names list: ${colors}`);
console.log(`colors.splice(0,1): ${colors.splice(3,6)}`);
console.log(`Color names list: ${colors}`);
console.log(`colors.splice(1,1,"Grey","Black"): ${colors.splice(1,1,"Grey","Black")}`);
console.log(`Color names list: ${colors}`);
console.log(`colors.splice(1,0,"Orange","Wheatish"): ${colors.splice(1,0,"Orange","Wheatish")}`);
console.log(`Color names list: ${colors}`);

//11. sort method- to sort String array elements.
console.log(`Array after sorting: ${colors.sort()}`);

//Array References:For every array new memory is allocated in memory pool.

let arr=['a','b','c'];
let arrCopy=['a','b','c'];
console.log(`arr==arrCopy: ${arr==arrCopy}`);
console.log(`arr===arrCopy: ${arr===arrCopy}`);
arrCopy=arr;
console.log(`arr==arrCopy after assignment arrCopy=arr: ${arr==arrCopy}`);
console.log(`arr===arrCopy after assignment arrCopy=arr: ${arr===arrCopy}`);

//Constant array:if any array is declared const then new array cannot be assigned to it.As it's address in the memory is fixed.

const number3=[1,2,3,4];
number3.push(5);
number3.pop();
console.log(`number3 Array values: ${number3}`);
// number3=[7,8,9];
// console.log(`number3 Array values after new array assigned [7,8,9]: ${number3}`);

//Nested Array:Array inside an array or multi-dimesional arrays.
let nums=[[2,3],[5,6],[7,8,9]];
console.log(`Multi-dimensional Array: ${nums}`);
console.log(`Multi-dimensional Array length: ${nums.length}`);
console.log(`Accessing Multi-dimensional Array element: ${nums[0][1]}`);