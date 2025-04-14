
/*i) a <p> with red text thats says "Hey I'm red!" */
let body=document.querySelector("body");
let newP=document.createElement("p");
body.append(newP);
newP.innerText="Hey I'm red!";
newP.style.color = "red";

/*ii) a <h3> with blue text that says "I'm a blue H3!".*/
let newH3=document.createElement("h3");
body.append(newH3);
newP.innerText="I'm a blue H3!";
newP.style.color = "blue";

/**
 * iii) a <div>  with a black border  and pink background color with following element inside it.
 *  another <h1> that says "I'm in a div"
 *  a <p> that says "ME TOO!"
 */

let newDiv=document.createElement("div");
body.append(newDiv);
newDiv.style.border="2px solid black";
newDiv.style.backgroundColor="pink";

let newH1=document.createElement("h1");
newDiv.insertAdjacentElement("afterbegin",newH1);
newH1.innerText="I'm in a div";

let p=document.createElement("p");
newDiv.insertAdjacentElement("beforeend",p);
p.innerText="ME TOO!";