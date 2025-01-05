//Print Q1 Print poem using function.
function printPoem() {
  console.log("Twinkle Twinkle litle star");
  console.log("How I wonder what you are");
}

printPoem();

//Q2 create function to roll a dice.

function rollDice() {
  let randNum = Math.floor(Math.random() * 6) + 1;
  console.log(randNum);
}

rollDice();

//Q3 Create a function to give us average of 3 numbers

function find3NumberAverage(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
  console.log(`Average Value of (${num1},${num2},${num3}): ${avg}`);
}

find3NumberAverage(21, 456, 865);

//Q4 Create function to print multiplication table of a number

function printNumberTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num}*${i}=${num * i}`);
  }
}

printNumberTable(3);

//Q5 Create a function to returns sum of numbers from 1 to n

function getSumOfNNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(`Sum of Number: ${getSumOfNNumbers(5)}`);

//Q6 Create a function that return concatenation of all the string in an array.

function getConcatenatedString(arr) {
  let str = "";
  for (s of arr) {
    str += s;
  }
  return str;
}

let arr = ["I", "Love", "India"];
console.log(`Arrays Values: ${arr}`);
console.log(`Concatenated Array String : ${getConcatenatedString(arr)}`);

//Q7 print the out of below code.

let greet = "hello";//Global Scope.
function chnageGreet() {
  let greet = "namaste";//function scope.
  console.log(greet);
  function innerGreet() {
    console.log(greet);//lexical scope.
  }
  innerGreet();//function scope.
}
console.log(greet);//output=hello
chnageGreet();//output=namaste namaste
