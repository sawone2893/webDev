/**
 * Async Function: These function which retrun a promise by defult.
 * To make a function async we use keyword "async" in front of function name.
 */

//Example:Async normal Function
async function hello() {
  return "hello";
}

hello()
  .then((result) => {
    console.log("Promise resolved!");
    console.log(`Result: ${result}`);
  })
  .catch((error) => {
    console.log("Promise rejected!");
    console.log(`Result: ${result}`);
  });

//Example:Async arrow Function

let greet = async () => {
  return "Hello! Welcome...";
};

greet()
  .then((result) => {
    console.log("Promise resolved!");
    console.log(`Result: ${result}`);
  })
  .catch((error) => {
    console.log("Promise rejected!");
    console.log(`Result: ${result}`);
  });

/**
 * await keyword:This is used to pause execution of surrounding  async function untill promise get resolved or rejected.
 * This can be used inside the async function only.
 */

//Example Handling rejection with await

let head1 = document.querySelector("h1");
//asynchronous function
let changeColors = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let speed = Math.floor(Math.random() * 10) + 1;
      if (speed <= 3) {
        reject("Weak Internet Connection");
      } else {
        head1.style.color = color;
        resolve("Color Changed");
      }
    }, delay);
  });
};

let colorDemo = async () => {
  try {
    await changeColors("red", 1000);
    await changeColors("green", 1000);
    await changeColors("orange", 1000);
    await changeColors("pink", 1000);
    await changeColors("blue", 1000);
    await changeColors("yellow", 1000);
  } catch (error) {
    console.log("Error caught");
    console.log(error);
  }

  let name = "shabbir";
  console.log(`Welcome ${name}`);
};
colorDemo();

/**
 * API-Application programming interface.
 * This is the medium to interact between the client and server.
 * Sample APIs:
 * 1. https://catfact.ninja/fact
 * 2. https://www.boredapi.com/api/activity
 * 3. https://dog.ceo/api/breeds/image/random
 */

/**
 * JSON- Javascript Object Notation
 * JSON is used to send data between client and server.
 * JSON format can accept data of type-string,array,object,boolean and null;
 * Genrally JSON data is in string fromat.
 */

/**
 * Accessing data from JSON:
 * 1. JSON.parse(data) method: To parse  string data into a JS object;
 * 2. JSON.stringify(json) method: To parse a JS object data into JSON;
 */

//Example:To parse  string data into a JS object

let data =
  '{"message":"https://images.dog.ceo/breeds/husky/n02110185_8397.jpg","status":"success"}';

const jsObject = JSON.parse(data);
console.log(jsObject.message);
console.log(jsObject.status);

//Example:To parse a JS object data into JSON

let jsonString = JSON.stringify(jsObject);
console.log(`JSON FORMAT DATA: ${jsonString}`);

/**
 * API Testing tool:
 * 1. Hoppscoth- https://hoppscotch.io/
 * 2. Postman
 */

/**
 * Ajax: Asynchronous Javascript andm xml
 */

/**
 * Http verbs: GET,POST,DELETE
 * Status codes:
 * 1. Informational responses - (100-199)
 * 2. Successfull response - (200-299)
 * 3. Redirectional response - (300-399)
 * 4. Client error response - (400-499)
 * 5. Server error response - (500-599)
 */

/**
 * Query String: Way of passing additional information in the url.
 */

/**
 * Http Headers: Accepts inputs in the key-value pairs.
 * Headers are of two types: request header and response header.
 */

/**
 * Send First API Request using Fetch handling promise with then and catch.
 */
let body = document.querySelector("body");
let url = "https://catfact.ninja/fact";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let div = document.createElement("div");
    div.innerHTML = `Fun Fact1: <br>${data.fact}`;
    body.append(div);
    console.log(`Response data: ${data.fact}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

/**
 * Send First API Request using Fetch with async and await.
 */

let getFact = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let factValue = data.fact;
    let label = document.createElement("label");
    label.innerHTML = `Fun Fact2: <br>${factValue}`;
    body.append(label);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

getFact(url);
