/**
 * Qs1 Check if all numbers in an array are multiple of 10 or not.
 */

let arrNum = [10, 20, 30, 40, 30, 50, 71];
let result = arrNum.every((num) => num % 10 == 0);
console.log(
  `Check if all numbers in an array are multiple of 10 or not: ${result}`
);

/**
 * Qs2 Create a function to find the min number in the array
 */

let minNum = (arrNum) => {
  return arrNum.reduce((min, item) => {
    if (min < item) {
      return min;
    } else {
      return item;
    }
  });
};

console.log(`Min number from array: ${minNum(arrNum)}`);
