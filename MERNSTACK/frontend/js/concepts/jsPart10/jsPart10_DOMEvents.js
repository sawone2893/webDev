/**
 * DOM Events:
 * When any Keyword or mouse action is performed  an event is triggered.
 * This event is called DOM Event.
 * onclick:This event is triggered when we clicked on any button.
 * onmouseenter:This event is triggered when we hovered on any button.
 */

//example1:onclick and onmouseenter
let btn = document.querySelector("#btn");
let sayHello = () => {
  console.log("You cliked me");
};
let onMe = () => {
  console.log("You hover me!");
};
btn.onclick = sayHello;
btn.onmouseenter = onMe;
//example2:When you want to perform same action:onclick & onmouseenter on multiple buttons.
let btnList = document.querySelectorAll(".likeMe");
let sayLikeMe = () => {
  alert("You liked me!");
};

for (btn of btnList) {
  btn.onclick = sayLikeMe;
  btn.onmouseenter = onMe;
}

/**
 * Event Listeners
 * syntx:
 * element.addEventListener(event,callback)
 */

//example:Event Listener
let dblBtn = document.querySelector("#dblbtn");
dblBtn.addEventListener("dblclick", () => {
  console.log("You Double clicked me");
});

dblBtn.addEventListener("click", () => {
  console.log("You clicked me");
});

/**
 * Event Listener for Elements.
 */
//Example1:
let p = document.querySelector("p");
p.addEventListener("click", () => {
  console.log("Clicked on para!");
});
//Example2:
let div = document.querySelector("div");
div.addEventListener("mouseenter", () => {
  console.log("You hovered dive");
});

/**
 * this in event listener:
 */

let changeColor = () => {
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
};
let h1=document.querySelector("h1");
h1.addEventListener("click", changeColor);

/**
 * Keyboard Events:Action performed using keyboard event is triggered.This is called Keyboard event.
 */

///Example:
let input=document.querySelector("input");
input.addEventListener("keypress",(event)=>{
  console.log(`You ${event.type} key ${event.key} with code ${event.code}`);
});
input.addEventListener("keydown",(event)=>{
  console.log(`You ${event.type} key ${event.key} with code ${event.code}`);
});
input.addEventListener("keyup",(event)=>{
  console.log(`You ${event.type} key ${event.key} with code ${event.code}`);
});

/**
 * Form Event:This event is triggered when is submitted.
 * Extracting form data
 */
//Example:
let form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
  event.preventDefault();//this method is used to stop the default action of the form.
  let user=document.querySelector("form #user");
  let pass=document.querySelector("form #pwd");
  console.dir(user);
  console.dir(pass);
  alert(`Hi, ${user.value} your password is ${pass.value}`);
});

/**
 * Change Event and Input Event
 * Change Event: This event tracks the final change in the value of input or textarea or select element from the initial state.
 * Input Event: This event tracks the every change in the value of input or textarea or select element from the initial state.
 */

//Example:
input.addEventListener("change",(event)=>{
  console.log("Change Event")
  console.log(`Changed Value:${input.value}`);
});

input.addEventListener("input",()=>{
  console.log("Input Event")
  console.log(`Changed Value:${input.value}`);
});