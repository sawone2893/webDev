//Loops
// 1. for Loop
//============

// Syntx:
// for(initialisation;condition;updatation){
//do something here
// }
console.log("For loop================================");
//Example 1
for (let i = 1; i <= 10; i++) {
  console.log(`Counter: ${i}`);
}

//Example 2
console.log("print odd number from 1 to 15");
for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}
//Example 3
console.log("print odd number from 15 to 1");
for (let i = 15; i >= 1; i = i - 2) {
  console.log(i);
}

//Example 4
console.log("print even number from 2 to 10");
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
//Example 5
console.log("print even number from 10 to 2");
for (let i = 10; i >= 2; i = i - 2) {
  console.log(i);
}

//Example 5
console.log("Print multiplication of 5");
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

//2. Infinite Loop: When condtion is true or missing.
//Example 1
// for(let i=1;i>=0;i++){}
// for(let i=1;i<=5;i--){}
// for(let i=1;;i++){}

//3. Nested Loops
console.log("Nested loop================================");
//Example 1
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(j);
  }
}

//4. While Loop
//Syntax:
// let i=1;
// while(condition){
//     do something here
// }

//Example 1
console.log("While loop================================");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//Break keyword:when you want to exist the  loop.

//Favorite Movie

let favMovie = "Avatar";

let guess = prompt("Guess the Favorite Movie");
while (guess != favMovie) {
  if (guess == "quit") {
    alert("You quit game!");
    break;
  }
  alert("Wrong guess:", guess);
  guess = prompt("Guess the Favorite Movie again");
}

if (guess === favMovie) {
  alert("Congratulation you win!");
}

//Example
console.log("Break Keyword Example: ");
for (let i = 0; i <= 5; i++) {
  console.log(i);
  if (i == 3) {
    break;
  }
}

console.log("Loops with Array");
let fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}

console.log("Nested Loops with Nested Array");
let heroes = [
  ["Spiderman", "Thor", "Wonderwoman"],
  ["Krish", "Hulk", "Antman", "Panther"],
];
for (let i = 0; i < heroes.length; i++) {
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(`Hero Name:${heroes[i][j]}`);
  }
}

console.log("For of loop");
for (fruit of fruits) {
  console.log(`Fruit:${fruit}`);
}

console.log("Nested For of loop");
for (heroesList of heroes) {
    console.log(`Hero List:${heroesList}`);
    for(hero of heroesList){
        console.log(`Hero Name:${hero}`);
    }
  }
