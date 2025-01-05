/**
 * Selecting element by Id : getElemntById("IdOfTheElement")
 */
//Example:
let imgElement = document.getElementById("mainImg");
console.dir(imgElement); //object form of the element

/**
 * Selecting element by ClassName : getElemntByClassName("ClassNameOfTheElement")
 * This returns the HTML Collection if element found else empty collection.
 */
//Example:
let imgElement1 = document.getElementsByClassName("oldImg");
console.dir(imgElement1); //object form of the element

/**
 * Selecting element by TagName : getElementsByTagName("TagNameOfTheElement")
 * This returns the HTML Collection if element found else empty collection.
 */
//Example:
let allParagrphs = document.getElementsByTagName("p");
console.dir(allParagrphs); //object form of the element

/**
 * Query Selector
 * querySelector("CSSSelectorOfTheElement"): This returns first matching element if element found else null.
 * querySelectorAll("CSSSelectorOfTheElement"): This returns the NodeList if element found else empty NodeList.
 *
 */
//Example:
console.dir(document.querySelector("#mainImg")); //select the first element with Id=mainImg.
console.dir(document.querySelector(".oldImg")); //select the first element with className=oldImg.
console.dir(document.querySelector("p")); //select the first p element.
console.dir(document.querySelectorAll("p")); //select all p elements.
console.dir(document.querySelectorAll("div a")); //select the all a elements under div.

/**
 * Setting content in object:
 * innerText:It gets the text which displays on the screen.
 * textContent:It gets the text which inside the html code.
 * innerHTML:It gets the full HTML markup.
 */
//Example:
let para = document.querySelector("p");
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);

para.innerText = "Shabbir Rayeen";
para.innerHTML = `<u>Shabbir Rayeen</u>`;

/**
 * Manipulating attributes
 * obj.getAttribue(attributeName)
 * obj.setAttribue(attributeName,attributeValue)
 */
//Example
let src = imgElement.getAttribue("src");
imgElement.setAttribute("src", "/MERNSTACK/resources/apple.jpeg");

/**
 * Manipulating Style-using style property:
 * This property only manipulates the inline style of the element.
 */

//Example:

let heading = document.querySelector("h1");
heading.style.color = "yellow";
heading.style.backgroundColor = "black";
heading.style.font = "35px";

/**
 * Manipulating Style-using classList property:
 * With this we can manipulate multiple sytling attributes.
 * This returns classes name assigned to the element.
 * classList.add()-This assigns new class to element.
 * classList.remove()-This remove the class from the element.
 * classList.contain()-This check if class assigned to the element.
 * classList.toggle()-This toggle between assigns or remove to/from the the element.
 *
 * */
//Example:

heading.classList;
heading.classList.add("head");
heading.classList.remove("head");
heading.classList.contains("head");
heading.classList.toggle("head");

/**
 * Navigation:Using below properties we can navigate through the DOM.
 * parentElement:find the parent of the current element.
 * children: find the child of the current element.
 * previousElementSibling:find previous sibling of the current element.
 * nextElementSibling:find next sibling of the current element.
 * childElementCount: find the number of child current element has.
 */
heading.parentElement;
heading.children;
heading.previousElementSibling;
heading.nextElementSibling;
heading.childElementCount;

/**
 * Adding elements to DOM: document.createElement("tagname");
 * appendChild(element): This method insert new element as child of the target element.
 * append(element): This method insert new element at the end of the target element.
 * prepend(element): This method insert new element at the start of the target element.
 * insertAdjacentElement(position,element): This method insert new element at the specific position of the target element.
 *position arguement can have four value: beforebegin,afterbegin,beforeend,afterend
 */

 let newP=document.createElement("p");
 heading.appendChild(newP);
 heading.append(newP);
 heading.prepend(newP);
 heading.insertAdjacentElement("afterbegin",newP);
 heading.insertAdjacentElement("beforebegin",newP);
 heading.insertAdjacentElement("beforeend",newP);
 heading.insertAdjacentElement("afterend",newP);

 /**
  * Removing element:
  * removeChild(element):This method removes the child of the target element
  * remove():This method removes the  target element.
  */
 //Example:
 heading.removeChild(newP);
 heading.append(newP);
 newP.remove();
