//Q1 Write an arrowe function to return the square of the number.

const sqre = (num) => num * num;
console.log(`Sqaure of Number: ${sqre(5)}`);

//Write a function that prints "Hello World" 5 times at interval of 2s each.
const printHello = () => {
  let id = setInterval(() => {
    console.log("Hello World");
  }, 2000);
  setTimeout(() => {
    clearInterval(id);
  }, 10000);
};

printHello();
