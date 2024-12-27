/**
 * Qsl. Create a new input and button element on the page using JavaScript only. Set the
text of button to "Click me'
 */
let body=document.querySelector("body");
let input=document.createElement("input");
let button=document.createElement("button");
body.append(input);
body.append(button);
button.innerText="Click Me";
/** 
 * Qs2. Add following attributes to the element :
Change placeholder value of input to "username"
Change the id of button to "btn'
*/
input.setAttribute("placeholder","username");
button.setAttribute("id","btn");
/**
 * Qs3. Access the btn using the querySelector and button id.
 * Change the button background color to blue and text color to white.
 */
let btn=document.querySelector("#btn");
btn.style.backgroundColor="blue";
btn.style.color="white";

/**
 * Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
 * Change its color to purple.
 */
let h1=document.createElement("h1");
h1.innerText="DOM Practice";
h1.style.textDecoration="underline";
h1.style.color="purple";
body.append(h1)
/** 
 * Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
where Delta is bold.
*/

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
body.append(p);
