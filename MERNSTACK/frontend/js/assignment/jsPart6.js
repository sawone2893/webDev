/*Qs1. Write a JavaScript function that returns array elements larger than a number.*/

function getLargerthanNum(arr, num) {
  let largerNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      largerNums.push(arr[i]);
    }
  }
  return largerNums;
}
let arrNum = [78, 89, 2, 5, 4, 98, 0, 6, 1];
let num = 45;
console.log("Actual Array");
console.log(arrNum);
console.log("Larger Numbers than ", num);
console.log(getLargerthanNum(arrNum, num));

/*Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”*/

function getUniqueCharacters(strValue) {
    let uniqueStr="";
    for(let i=0;i<strValue.length;i++){
        let currChar=strValue[i];
        if(uniqueStr.indexOf(currChar)==-1){
            uniqueStr+=currChar;
        }
    }
    return uniqueStr;
}

let strValue="abcdabcdefgggh";

console.log(`Unique String for ${strValue}:${getUniqueCharacters()}`);
console.log();

/*Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America" */

function getLongestCountryName(countriesList) {
  let longCountry = "";
  for (country of countriesList) {
    if (country.length > longCountry.length) {
      longCountry = country;
    }
  }
  return longCountry;
}

let country = ["Australia", "Germany", "United States of America"];
console.log(`Longest Country Name: ${getLongestCountryName(country)}`);

/*Qs4. Write a JavaScript function to count the number of vowels in a String argument.*/
function getVowelsCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }

  return count;
}
let str = "welcomeee";
console.log(`Vowels in ${str}: ${getVowelsCount(str)}`);
/*Qs5. Write a JavaScript function to generate a random number within a range (start, end).*/

let randNumRange = function (start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
};

console.log(`Random Number Generated from 10 to 50: ${randNumRange(10, 50)}`);
