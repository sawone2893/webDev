// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].
let randNum=(Math.floor(Math.random()*6))+1;
alert(`Dice Roll: ${randNum}`);
// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

let car={
    name:"BMW",
    Model:"Latest",
    color:"White"
};
console.log(`Car Object: ${car}`);
console.log(`Car Name: ${car.name}`);
// Qs3. Create an object Person with their name, age and city.
let person={
    name:"Shab",
    age:31,
    city:"Konch"
};
console.log(`Person Details:`);
console.log(person);
// Edit their city’s original value to change it to “New York”.
person.city="New York";
console.log(`Person's city name after update: ${person.city}`)
console.log(`Person Details after update:`);
console.log(person);
// Add a new property country and set it to the United States.
person.country="United States";
console.log(`Person Details after New property addition:`);
console.log(person);

