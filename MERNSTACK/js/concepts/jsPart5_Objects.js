//Js Object Literals:group of collections or complex entities.Properties are stored in form of key value pair.
//Example 1

console.log("Creating JS object Literals:");
const student = {
  name: "Shabbir Rayeen",
  age: 31,
  birthplace: "Konch",
  state: "Uttar Pradesh",
};
console.log(student);
const item = {
  price: 100.56,
  discount: 15,
  colors: ["red", "pink"],
};
console.log(item);

const post = {
  username: "@shab2893",
  content: "I Love India",
  like: 5600,
  repost: 200,
  tags: ["@shabray", "@welDot"],
};
console.log(post);

console.log("Accessing object properties for Student.");
console.log(student["name"]);
console.log(student["age"]);
console.log(student["birthplace"]);
console.log(student["state"]);

console.log("Accessing object properties for item.");
console.log(item.price);
console.log(item.discount);
console.log(item.colors);

console.log("Accessing object properties for post.");
console.log(post.username);
console.log(post.content);
console.log(post.like);
console.log(post["repost"]);
console.log(post["tags"]);

console.log(
  "//Note:Keys in javascript automatically gets converted to string."
);
//Example:
let obj = {
  1: "a",
  2: "b",
  null: "c",
  undefined: "d",
  true: "e",
};
console.log(obj);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log(obj[true]);

console.log("Adding/Updating value of Object Literals:");

student.state = "Maharastra";
console.log("Updated State Naame: ", student.state);
console.log("Updated Student object: ", student);

student.gender = "Male";
console.log("Added new property gender: ", student.gender);
console.log("Updated Student object after addition of new property: ", student);

console.log("Deleting properties of object: ");
delete student.birthplace;
console.log(
  "Updated Student object after deletion bithplace property: ",
  student
);

console.log(":::::::::::::::Nested Object - Object of objects:::::::::::");
//example
const classinfo = {
  shab: {
    grade: "A+",
    city: "Konch",
  },
  raj: {
    grade: "B+",
    city: "Delhi",
  },
  raja: {
    grade: "A",
    city: "Mumbai",
  },
};

console.log("Accessing values of Nested Objects");
console.log(classinfo.shab);
console.log(classinfo.shab.grade);
console.log(classinfo.shab.city);

console.log(classinfo.raj);
console.log(classinfo.raj.grade);
console.log(classinfo.raj.city);

console.log(classinfo.raja);
console.log(classinfo.raja.grade);
console.log(classinfo.raja.city);

console.log(":::::::::::::::Array of Objects:::::::::::");

const studentinfo = [
  { name: "Aman", grade: "A+", city: "Konch" },
  { name: "Raj", grade: "B+", city: "Delhi" },
  { name: "Raja", grade: "A", city: "Mumbai" },
];

console.log("Accessing values for Array of Objects");

console.log(studentinfo[0]);
console.log(studentinfo[0].name);
console.log(studentinfo[0].grade);
console.log(studentinfo[0].city);

console.log(studentinfo[1]);
console.log(studentinfo[1].name);
console.log(studentinfo[1].grade);
console.log(studentinfo[1].city);

console.log(studentinfo[2]);
console.log(studentinfo[2].name);
console.log(studentinfo[2].grade);
console.log(studentinfo[2].city);


console.log("::::::::::::::::::::Math Object:::::::::::::::::::::");
console.log(`Absolute value of -12: ${Math.abs(-12)}`);
console.log(`2 to the power 3: ${Math.pow(2,3)}`);
console.log(`Floor value for 12.9523: ${Math.floor(12.9523)}`);//round off to nearest smallest number
console.log(`Ceiling value for 12.5468489: ${Math.ceil(12.5468489)}`);//round off to nearest largest number
console.log(`Random  value in between 0 and 1: ${Math.random()}`);


console.log("::::Generate Random Number between 1 to 10::::");

let randNum=Math.random();
randNum=Math.floor(randNum*10)+1;
console.log(`Random Number between 1 to 10: ${randNum}`);
