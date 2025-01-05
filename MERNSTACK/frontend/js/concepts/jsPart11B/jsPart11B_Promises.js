/**
 * Call Stack: pile of function calls in the memory.
 */
//Eample:

let one = () => {
  return 1;
};
let two = () => {
  return one() + one();
};
let three = () => {
  return two() + one();
};

console.log(`Ans is :${three()}`);

/**
 * JS is Single threaded: this means JS excute code in squenctial order.
 */

//Example:
let a = 5;
let b = 14;
console.log(a);
console.log(b);

/**
 * Callback Hell: Nesting of callback is called callback hell.
 */

//Example:callback hell
// let h1 = document.querySelector("h1");
// let changeColor = (color, delay, nextChangeColor) => {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextChangeColor) nextChangeColor();
//   }, delay);
// };

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("yellow", 1000);
//   });
// });

/**
 * Promises:repesents eventual completion or failure of the asynchronous operation and return  result.
 * Promise is an object.
 * Promise has state like - fulfilled or rejected or pending.
 */

//Example of Asynchronous operation:callback hell.
/*
let saveToDB = (data, success, failure) => {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  console.log(`Saving Data: ${data}`);
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
};

saveToDB(
  "Shab",
  () => {
    console.log("Data Saved!");
    saveToDB(
      "Rayeen",
      () => {
        console.log("Nested 1:Data Saved!");
        saveToDB(
          "Class",
          () => {
            console.log("Nested 2:Data Saved!");
          },
          () => {
            console.log("Nested 2: Data not saved, weak connection!");
          }
        );
      },
      () => {
        console.log("Nested 1: Data not saved, weak connection!");
      }
    );
  },
  () => {
    console.log("Data not saved, weak connection!");
  }
);
*/
//Example:Rectoring code with Promises
let saveToDB = (data) => {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success: Data was saved!");
    } else {
      reject("Failure: Weak connection!");
    }
  });
};

let request = saveToDB("Shabbir");
console.log(request);
/**
 * then and catch methods-
 * then is used when promise is fullfilled.
 * catch is used when promise is rejected.
 * callback is passed inside the then or catch method to perform certain task after promise is fullfilled or rejected.
 */

request
  .then(() => {
    console.log("promise is fullfilled");
  })
  .catch(() => {
    console.log("promise is rejected");
  });

/**
 * Promise chaining -
 * Result and Error in Chaining
 */

//Example:1
saveToDB("Shabbir")
  .then((result) => {
    console.log(`Result: ${result}`);
    console.log("Data1 Saved");
    return saveToDB("Rayeen");
  })
  .then((result) => {
    console.log(`Result: ${result}`);
    console.log("Data2 Saved");
    return saveToDB("Raj");
  })
  .then((result) => {
    console.log(`Result: ${result}`);
    console.log("Data3 Saved");
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
    console.log("promise is rejected");
  });

//Example:2
//Example:callback hell
let head1 = document.querySelector("h1");
let changeColors = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      head1.style.color = color;
      resolve("Color Changed");
    }, delay);
  });
};

changeColors("red", 1000)
  .then((result) => {
    console.log(`Promise Result: ${result}`);
    console.log("Red Color Chnaged.");
    return changeColors("pink", 1000);
  })
  .then((result) => {
    console.log(`Promise Result: ${result}`);
    console.log("Pink Color Chnaged.");
    return changeColors("brown", 1000);
  })
  .then((result) => {
    console.log(`Promise Result: ${result}`);
    console.log("Brown Color Chnaged.");
    return changeColors("green", 1000);
  }).then((result) => {
    console.log(`Promise Result: ${result}`);
    console.log("Green Color Chnaged.");
  });
