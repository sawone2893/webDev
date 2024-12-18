/**
 * this keywword in JS: refer as object of the executing code.
 */

let student = {
  name: "Shabbir Rayeen",
  age: 31,
  eng: 95,
  math: 99,
  phy: 99,
  avgMarks() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks:${avg}`);
  },
};

student.avgMarks();

/**
 * Try and Catch:This is used to handle error.
 */

try {
  console.log(xys);
} catch (err) {
  console.error(err);
}

console.log("Error handled.");

/**
 * Arrow Function:These are nameless function.
 * Syntax:
 * const func=(args1,args2...)=>{ do or return something here };
 */

//Example of arrow function

const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(`Sum of Numbers: ${sum(12, 56)}`);

/**
 * Note: if function has single arguement then parenthesis are optional.
 */

const cube = (n) => {
  return n * n * n;
};
console.log(`Cube of Number: ${cube(5)}`);

/**
 * Implicit return in arrow function.
 * Syntax:\
 * const func=(args1,args2...)=>(value);
 */

//Example of implicit return

const multiply = (a, b) => a * b;
console.log(`Multiplication of numbers: ${multiply(12, 8)}`);

/**
 * setTimeout Function:If we want to wait for some time for function to execute.
 * Syntax:\
 * setTimeout(function,timeout);
 */
//Example:
console.log("Hi there!");
setTimeout(() => {
  console.log("Apna College");
}, 4000);
console.log("Welcome to ");

/**
 * setInterval function:this will execute after T milliseconds
 Syntax:\
 * setInterval(function,timeout);
 */

//Example:
const id1 = setInterval(() => {
  console.log("Apna College");
}, 2000);

const id2 = setInterval(() => {
  console.log("Apna College");
}, 2000);

clearInterval(id1);
clearInterval(id2);

/**
 * this keyword in arrow function:In arrow function, this has the scope of the parent of the calling object not the calling object.This follows the lexical scope.
 */
//Example:
const stud = {
  name: "Aman",
  marks: 95,
  prop: this, //global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); //parent's scope->window
    return this.marks;
  },
  getinfo1:function(){
    setTimeout(()=>{
        console.log(this);
    });
  },
  getinfo2:function(){
    setTimeout(function(){
        console.log(this);
    });
  }
};
console.log(stud.getName());
console.log(stud.getMarks());
console.log(stud.getinfo1());
console.log(stud.getinfo1());
