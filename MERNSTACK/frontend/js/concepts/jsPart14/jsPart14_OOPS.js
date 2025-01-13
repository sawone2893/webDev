/**
 OOPs: Object Oriented Programming
 1. prototypes
 2. new operator
 3. constructor
 4. classes
 5. extend and super keywords
 */

/*
Object Prototypes:
Prototypes are the mechanism  by which javascript objects inherit features of one another.
It is lke a single template object that all the object inherit methods and property from without having thier own copy.
Every object in Javascript has built in property called Prototype.
1. We use below code to access prototype reference .
    arr._proto_
2. We use below code to access prototype object .
    a. Array.prototype for Array
    b. String.prototype  for String
*/

//Example:Acccesing Prototype object reference using "arr.__proto__"

let arr = [1, 5, 7.8, 78, 6, 9, 46];
console.log(arr.__proto__); //This is refering reference of the prototype object.
//We are changing the definition of the push function and giving it custom definition in the below example. Now whenever we are calling push function on Array then it will perform our defined statement in the function.

arr.__proto__.push = (n) => {
  console.log("Pushing Number", n);
};
arr.push(5);

//Example:Acccesing Prototype object using Array.prototype.

console.log(
  `Accessing prottype methods: ${"abc".toLowerCase == "xyz".toLowerCase}`
); //This return true beacause it referring same prototype object method.
//-----------------------------------------------------------------------------------------------------
/**
 * Factory Function: These are functions which are used to create objects.
 */

//Example: We want to create 100 object.We are trying to achieve it using Factory Function.

function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi,My name is ${this.name}`);
    },
  };

  return person;
}

let p1 = PersonMaker("Raj", 25); //creates copy in the memory.
p1.talk();
let p2 = PersonMaker("Raja", 28); //creates copy in the memory.
p2.talk();

//Disadvantage of Factory Function:It create new memory refernce for all different object, even we have define it once.
/*As in the above example  we want to create 100 object of the person but drawback is it will create 100 copies of itself and seperate memory allocation will be done which is inefficient.
example shows the same behaviour.*/
//Example:
console.log("Comparing p1 and p2 talk: ", p1.talk === p2.talk); //This will retun "false" as output which shows that it is not using same memory reference

//-----------------------------------------------------------------------------------------------------
/**
 * Constructor Function and New Operator:
 *
 * Constructors are the special type of function whose name start with capital letters and they don't return anything.
 * New is used to initialise any object instance.It create blank object in the memory.
 */
//Example:
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hi,My name is ${this.name}`);
};

let person1 = new Person("Shab", 31);
person1.talk();
let person2 = new Person("Umesh", 39);
person2.talk();
console.log(
  "Comparing person1 and person2 talk: ",
  person1.talk === person2.talk
); //This will retun "true" as output which shows that it is not using different memory reference.
*/
//-----------------------------------------------------------------------------------------------------
/**
 * Classes: Classes are the template of create objects.
 * The constructor method  is spacial method of the class which is used to create and initialise object instance that class.
 */
//Example:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi,My name is ${this.name}`);
  }
}

let per1 = new Person("Faraz", 31);
per1.talk();
let per2 = new Person("Shivam", 31);
per2.talk();

console.log("Comparing per1 and per2 talk: ", per1.talk === per2.talk); //This will retun "true" as output which shows that it is not using different memory reference and not create different copies.

//-----------------------------------------------------------------------------------------------------
/**
 * Inheritance:It is mechanism in which child class inherits the property of the parent or base class.
 */

//Example:

class Sutdent extends Person {
  constructor(name, age, marks) {
    super(name, age); //Parent constructor is being called using super
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subjects) {
    super(name, age); //Parent constructor is being called using super
    this.subjects = subjects;
  }
}

let student1 = new Sutdent("Raj", 31, 88);
student1.talk();
let teacher1 = new Teacher("Umesh", 40, "English");
teacher1.talk();

//Example 2

class Mammal {
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }
  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("Woof...............");
  }
}

class Cat extends Mammal {
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("Meow...............");
  }
}

let dog1=new Dog("Tuffie");
console.log(dog1.name);
console.log(dog1.type);
dog1.eat()
let cat1= new Cat("Simon");
console.log(cat1.name);
console.log(cat1.type);
cat1.eat()