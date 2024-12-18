/**
Function in JS
============

Function without arguements
---------------------------
Syntax:
function functionName(){
do something here
}
 */

function hello() {
  console.log("Hello");
}

function printNumFrom1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

function isAdult() {
  let age = 17;
  if (age >= 18) {
    console.log("Yes, an adult");
  } else {
    console.log("No, Not an adult");
  }
}

console.log(`Message:`);
hello();
console.log(`Numbers:`);
printNumFrom1to5();
console.log("Is Adult:");
isAdult();

/*
Function with arguements
---------------------------
Syntax:
function functionName(arg1,arg2...){
do something here
}
*/

function printName(name) {
  console.log(`Welcome ${name}`);
}

function sum(num1, num2) {
  console.log(num1 + num2);
}

function isEvenOdd(num) {
  if (num % 2 == 0) {
    console.log(`Even Number: ${num}`);
  } else {
    console.log(`Odd Number: ${num}`);
  }
}

printName("Shabbir Rayeen");
sum(25, 23);
isEvenOdd(54564);

/*
Function with Return value
---------------------------
Syntax:
function functionName(arg1,arg2...){
do something here
return val
}
*/

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(`Multiplication is equal to ${multiply(12, 5)}`);

/**
 * Scope: Accessibility of variable,object,and function from different part of the code.
 * -----
 * Function Scope:Varible is accessible inside the function but not outside it.
 * Global Scope:It can be accessible from anywhere inside file.
 * Block Scope:Variable declared inside the {} block can not be access outside the block.
 * Lexical Scope:Variable inside a function can be access from another function defined inside this function.
 */

//Example of Function & Global Scope:

let sum1 = 54; //sum1 have global scope.
function findSum(num1, num2) {
  let sum1 = num1 + num2; //sum1 have functional scope.
}

console.log(`Sum:${sum1}`); //it will print the value of 54 as it's a global scope.

//Example1 of Block Scope:
{
  let str1 = "Welcome"; //str1 have block scope
}

//console.log(str1);//str1 can not be access here and will through error.

//Example2 of Block Scope:

for (let i = 1; i < 5; i++) {
  console.log(i); //i has block scope.
}
//console.log(i)// i can not be access here and will through error

//Example of Lexical Scope:

function outerFunction() {
  let a = 4;
  let b = 8;
  function innerFunction() {
    console.log(`Value of a ${a}`); //Here a has lexical scope.
    console.log(`Value of b ${b}`); //Here b has lexical scope.
    let x = 4;
  }
  innerFunction(); //innerfunction can be called inside the outerfunction.it has function scope.
  //console.log(x);//Here x  can not be access outside the interfunction
}
outerFunction();

/**
 * Function Expression:nameless function and are assigned to a varible.
 * Syntax:
 * const varibale=funtion(arg1,arg2....){
 * do  or returnsomething
 * }
 */
//Example1 of Function expression:
const add = function (n1, n2) {
  return n1 + n2;
};
add(12, 65);
//Example2 of Function expression:
let hello1 = function () {
  console.log("Hello");
};
hello();

//inside the hello another function can be assigned.
hello1 = function () {
  console.log("Namste");
};
hello();

/**
 * Higher Order Function:These are the special type of functions in we can pass one or multiple function as an arguements or can return function.
 */

//Example of Higher order function which take function as arguement.
function multipleGreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let greeting = function () {
  console.log("Hello! Namaste...");
};
multipleGreet(greeting, 4);

//Example of Higher order function which retuns function.

function evenOddTest(request) {
  if (request == "even") {
    return function (num) {
      console.log(num % 2 == 0);
    };
  } else if (request == "odd") {
    return function (num) {
      console.log(!(num % 2 == 0));
    };
  } else {
    console.log(`Invalid Request: ${request}`);
  }
}

let evenNum = evenOddTest("even");
evenNum(45);
evenNum(42);
let oddNum = evenOddTest("odd");
oddNum(44);
oddNum(49);

/**
 * Mehtods:Action that can be perform on the object.
 */

//Example of Methods

let calculator = {
  num: 88,
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
};
console.log(`Approach 1:`);
console.log(calculator);
console.log(calculator.num);
console.log(calculator.add(5, 8));
console.log(calculator.subtract(5, 8));
console.log(calculator.multiply(5, 8));

//Alernative approach to define Methods
let calculator1 = {
  num: 88,
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
};
console.log(`Approach 2:`);
console.log(calculator1);
console.log(calculator1.num);
console.log(calculator1.add(5, 8));
console.log(calculator1.subtract(5, 8));
console.log(calculator1.multiply(5, 8));
