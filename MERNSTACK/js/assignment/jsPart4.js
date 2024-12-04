// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]
let num = 2;
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
console.log(
  `Array before deleting all occurrences of element ‘num:${num}’:\n${arr}`
);
for (element of arr) {
  if (element === num) {
    arr.splice(arr.indexOf(element), 1);
  }
}
console.log(
  `Array after deleting all occurrences of element ‘num:${num}’:\n${arr}`
);
// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
let number = 287152;
console.log(
  `No of digits in a number - ${number} : ${number.toString().length}`
);

let copy=number;
let count=0;
while(copy>0){
    count++;
    copy=Math.floor(copy / 10);
}
console.log(
    `No of digits in a number - ${number} : ${count}`
  );
// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
let sum = 0;
let digit;
let num1 = 287152;
while (num1 > 0) {
  digit = num1 % 10;
  num1 = Math.floor(num1 / 10);
  sum = sum + digit;
}
console.log(`sum of digits in a number - ${number} : ${sum}`);
// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1
let n = 8;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log(`factorial of a number- ${n}: ${fact}`);
// Qs5. Find the largest number in an array with only positive numbers.
let arrNum=[1, 2, 3, 4, 5, 6, 2, 3];
let temp;
for(let i=0;i<arrNum.length;i++){
    for(let j=0;j<arrNum.length;j++){
        if(arrNum[i]<arrNum[j]){
            temp=arrNum[i];
            arrNum[i]=arrNum[j];
            arrNum[j]=temp;
        }
    }
}

console.log(`largest number in an array-${arrNum} = ${arrNum[arrNum.length-1]}`);

let largest=0;

for( ele of arrNum){
    if(largest<ele){
        largest=ele;
    }
}

console.log(`largest number in an array-${arrNum} = ${largest}`);
