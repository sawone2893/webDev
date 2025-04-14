// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]

let nums=[7, 9, 0, -2];
let n=3;
console.log(`First n elements of an array:${nums.slice(0,n)}`);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]

console.log(`last n elements of an array:${nums.slice(-n)}`);

//Qs3. Write a JavaScript program to check whether a string is blank or not
let str="sdfgd";
if(str.length===0){
    console.log("String is blank");
}else{
    console.log("String is not blank");
}

// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

let ch='x';

if(ch>='a' && ch<='z'){
    console.log(`Lowercase Character: ${ch}`);
}else{
    console.log(`Not a lowercase Character: ${ch}`);
}

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let str1="   Welocome     ";
console.log(`String Value before removing leading and trailing spaces ${str1}`);
console.log(`String Value after removing leading and trailing spaces ${str1.trim()}`);
// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let arr=["shab","ray","vish","raj"];
let findElement="rayee";
if(arr.includes(findElement)){
console.log(`Element: ${findElement} exists in an array`);
}else{
    console.log(`Element: ${findElement} do not exists in an array`);
}

