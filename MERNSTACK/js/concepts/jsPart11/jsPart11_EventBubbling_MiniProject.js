/**
 * Event bubbling:When event for the inner element is triggred then event for the parent element also got triggered automatically.
 * This phenomenon is called Event Bubbling.
 * To stop this we use event.stopPropogation() mehtod inside event listener.
 */

//Example: Event bubbling

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
/** 
div.addEventListener("click", () => {
  console.log("Div is clicked!");
});

ul.addEventListener("click", () => {
  console.log("ul is clicked!");
});

for (li of lis) {
  li.addEventListener("click", () => {
    console.log("li is clicked!");
  });
}
*/
//Example: To Stop Event bubbling
div.addEventListener("click", (event) => {
  console.log("Div is clicked!");
});

ul.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("ul is clicked!");
});

for (li of lis) {
  li.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("li is clicked!");
  });
}

/**
 * Event Delegation:In this action is performed on the child element but event got triggered of the parent.
 */
