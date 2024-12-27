let randNum = () => {
  return Math.floor(Math.random() * 255);
};

let getRandomColor = () => {
  return `rgb(${randNum()},${randNum()},${randNum()})`;
};

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let heading = document.querySelector("#head");
    let div = document.querySelector("#displayColor");
    let randColor=getRandomColor();
    heading.innerText=randColor;
    div.style.backgroundColor=randColor;
});
