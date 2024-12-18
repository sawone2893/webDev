/**
 * Array Method which are higher order functions.
 */
/*1. forEach() method:*/
//Example:
let arrNum = [12, 5, 65, 74, 4, 8];

console.log("forEach implementation with arrays of numbers");

console.log("Passing normal function:");
arrNum.forEach(function (item) {
  console.log(item);
});

console.log("Passing arrow function:");
arrNum.forEach((item) => {
  console.log(item);
});

console.log("forEach implementation with arrays of Objects");

const students = [
  { name: "Raj", marks: 95 },
  { name: "Vivek", marks: 80 },
  { name: "Shab", marks: 100 },
];

console.log("Passing normal function:");
students.forEach(function (stud) {
  console.log(stud);
  console.log(stud.name);
});

console.log("Passing arrow function:");
students.forEach((stud) => {
  console.log(stud);
  console.log(stud.name);
});

/*2. map and filter method:
map method: retun the array of the same size with after operation performed in the call function.
filter method:retun the array of the same size which satisfy the condition in the callback function.
*/

//Example of map method:I want to duble the value of the Array.
console.log(`Array values:${arrNum}`);
let newArray = arrNum.map((num) => {
  return num * 2;
});
console.log(`New Array values:${newArray}`);

//Example of filter method:I want to get even numbers from Array.

let evenNum = arrNum.filter((num) => {
  return num % 2 == 0;
});

console.log(`Even Number: ${evenNum}`);

/*3. every and some method:
every method: it behaves like a logical operator AND.It return true if all elemet in the array satisfy the condtion which in the callback function;
some method: it behaves like a logical operator OR.It return true if some of the  elemet in the array satisfy the condtion which in the callback function;
 */

//Example of every method:
let result = evenNum.every((item) => item % 2 == 0);
console.log(`Result: ${result}`);

result = evenNum.every((item) => item % 2 != 0);
console.log(`Result: ${result}`);

//Example of some method:

result = arrNum.some((item) => item % 2 == 0);
console.log(`Result: ${result}`);

/**
 * 4. reduce mehtod:reduces the array to single value.
 * Syntax:
 * arr.reduce(reducer function with 2varibles for (accumulator,elemet));
 */

//Eaxample of reduce method:
result = arrNum.reduce((sum, item) => (sum += item));
console.log(`Result: ${result}`);
//Example:Find the max number from Array.
let maxNum = arrNum.reduce((max, item) => {
  if (max < item) {
    return item;
  } else {
    return max;
  }
});

console.log(`Max Number: ${maxNum}`);

/**
 * Default Parameters in functions: Giving default value to  the arguements.
 * Default parameters will be used in the end of the function arguements.
 * 
 */
//Example:

const sub=(num1,num2=25)=>(num1-num2);
console.log(sub(2,1));
console.log(sub(50));

/**
 * Spread operator:Expand iterable into multiple values.Itrable can arrays,string,object etc...
 */

//Example:
let arr=[12,1,4,5,2,6,5,2,6,5,52,6,5,2,6,5,52,8];
let minNum=Math.min(...arr);
maxNum=Math.max(...arr);
console.log(...arr);
console.log(`Min Number: ${minNum}`);
console.log(`Max Number: ${maxNum}`);


/**
 * Spread with Array literals.
 */

let newArr=[...arr];
console.log(`Array Copy: ${newArr}`);
let chars=[..."shabbir"];

console.log(`Chars array:${chars}`);

let odd=[1,3,5,7];
let even=[2,4,6,8];
let num1=[...odd,...even];
console.log(`Consolidated Numbers: ${num1}`);

/**
 * Spread with Object literals.
 */

let data={
  name:'shabbir',
  age:31
};

let info={...data,id:25};

console.log(`Info:Name- ${info.name}`);
console.log(`Info:Age- ${info.age}`);
console.log(`Info:Id- ${info.id}`);

//Note:Array/String can be spread inside the object.In this case key will become index of the array.

let numData={...num1};
console.log(numData[0]);
console.log(numData[1]);
console.log(numData[2]);
console.log(numData[3]);
let strData={..."shabbir"};
console.log(strData[0]);
console.log(strData[1]);
console.log(strData[2]);
console.log(strData[3]);

/**
 * Rest Concept: Syntax for the Rest and spreasd is same.It work in the reverse way as spread.
 * In this, you can send indefinte number of arguement which will bve bundled into array and got passed inside the function
 */

//Example of Rest: 
let numSum=(...nums)=>{
return nums.reduce((sum,num)=>(sum+=num));
};

console.log(`Sum using rest concept:numSum(1,2,3): ${numSum(1,2,3)}`);
console.log(`Sum using rest concept:numSum(1,2,3,4,5,56,7): ${numSum(1,2,3,4,5,56,7)}`);
console.log(`Sum using rest concept:numSum(1,2,3,56,5,58,91245,5,5,6,7): ${numSum(1,2,3,56,5,58,91245,5,5,6,7)}`);

/**
 * Destructuring Array
 */

let names=["Shabbir","Raj","Sam","Ajay","Peter","John"];
let[winner,runnerUp,secondReunnerUp,...others]=names;
console.log(`Winner: ${winner}`);
console.log(`Runner Up: ${runnerUp}`);
console.log(`Second Runner Up: ${secondReunnerUp}`);
console.log(`Others: ${others}`);

/**
 * Destructuring Object:
 */

let student={
  name:"Aman",
  username:"abc@gmail.com",
  password:"sjdfgkasdg@786587",
  city:"Jhansi"
};

let {username,password}=student;
console.log(`Username:${username}`);
console.log(`Password:${password}`);
let {username:user,password:secret}=student;
console.log(`Username:${user}`);
console.log(`Password:${secret}`);
