/**
 * Qs1. Try out the following events in Event Listener on your own :
- mouseout
- keypress
- Scroll
- load
[Use MDN for help]

 */
let body = document.querySelector("body");
let input1 = document.createElement("input");
body.append(input1);
input1.addEventListener("mouseout", () => {
  alert("You move your mouse out of the div");
});

input1.addEventListener("keypress", (event) => {
  alert(`You pressed ${event.key}`);
});

window.addEventListener("scroll", () => {
  alert("Scroll Performed!");
});

window.addEventListener("load", () => {
  alert("Body loaded");
});
/**
 * Qs2. Create a button on the page using JavaScript. Add an event listener to the button
that changes the button’s color to green when it is clicked.
 */

let button = document.createElement("button");
button.innerText = "click Me";
body.append(button);
button.addEventListener("click", () => {
  button.style.backgroundColor = "green";
});

/**
 * Qs3. Create an input element on the page with a placeholder ”enter your name” and an
H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s name so it should only input
letters from a-z, A-Z and space (all other characters should not be detected).
Whenever the user inputs their name, their input should be dynamically visible inside
the heading.
[Please note that no other character apart from the allowed characters should be
visible in the heading]
*/

let input = document.createElement("input");
input.setAttribute("placeholder", "enter your name");
let h2 = document.createElement("h2");
body.append(h2);
body.append(input);
input.addEventListener("input", () => {
  let ch = input.value;
  if (!((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || ch == " ")) {
    alert("Please enter input letter from a-z , A-Z and Space");
  } else {
    h2.innerText = ch;
  }
});
