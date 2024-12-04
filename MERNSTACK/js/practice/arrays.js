//Practice Q1 using slice.
let months=["january","july","march","august"];
console.log(`Array Start State: ${months}`);
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");


//Practice Q1 using Splice.
months.splice(0,2,"july","june");
console.log(`Array Final State: ${months}`);

//Practice Q2
let lang=['c','c++','html','javascript','python','java','c#','sql'];
console.log(`Lang Array: ${lang}`);
lang.reverse();
console.log(`Lang Array after reverse: ${lang}`);
console.log(`Index of "javascript" in lang array after reverse: ${lang.indexOf("javascript")}`);
