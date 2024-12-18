/*Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.*/

const sqrSumAvg = (numArr) => {
  let sqr = numArr.map((num) => {
    return num * num;
  });
  console.log(`Square of the array elements:${sqr}`);

  let sum = sqr.reduce((sum, num) => {
    return sum + num;
  });
  console.log(`Sum of the array elements:${sum}`);

  return sum / numArr.length;
};

let nums = [1, 2, 3, 4, 5];
console.log(`Array number: ${nums}`);
console.log(
  `Average of the array number after Square and sum: ${sqrSumAvg(nums)}`
);

/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.*/
console.log(`Array number: ${nums}`);
let newArrayWithplus5 = nums.map((num) => {
  return num + 5;
});
console.log(
  `Array number after adding 5 to original elements: ${newArrayWithplus5}`
);
/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array.*/

let strs = ["Shabbir", "Raj", "Vivek", "Salman"];
console.log(`original array: ${strs}`);
let uppercaseElement = strs.map((str) => {
  return str.toUpperCase();
});
console.log(
  `Uppercase of words present in the original array: ${uppercaseElement}`
);
/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/
let doubleAndReturnArgs = (arr, ...nums) => {
  return [
    ...arr,
    ...nums.map((num) => {
      return num * 2;
    }),
  ];
};

console.log(
  `New array with the original array values and all of the additional arguments doubled: ${doubleAndReturnArgs(
    [25, 50],
    1,
    2,
    3,
    4,
    5,
    6
  )}`
);

/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.*/

let mergeObjects = (object1, object2) => {
  return { ...object1, ...object2 };
};
let student = {
  name: "Shabbir",
  age: 31,
};

let subjectMarks = {
  math: 99,
  eng: 99,
  phy: 99,
  chem: 99,
};
console.log("object 1:");
console.log(student);

console.log("object 2:");
console.log(subjectMarks);

console.log("Merged object:");
console.log(mergeObjects(student, subjectMarks));
