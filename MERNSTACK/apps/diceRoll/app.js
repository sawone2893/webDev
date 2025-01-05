let diceImage = document.querySelector("#diceImg");
let rollDiceBtn = document.querySelector("#rollDice");

let getDiceImage = (num) => {
  switch (num) {
    case 1:
      return `./assets/dice-number-1.jpg`;
      break;
    case 2:
      return `./assets/dice-number-2.jpg`;
      break;
    case 3:
      return `./assets/dice-number-3.jpg`;
      break;
    case 4:
      return `./assets/dice-number-4.jpg`;
      break;
    case 5:
      return `./assets/dice-number-5.jpg`;
      break;
    default:
      return `./assets/dice-number-6.jpg`;
  }
};

let getDiceNum = () => {
  return Math.floor(Math.random() * 6) + 1;
};

rollDiceBtn.addEventListener("click", () => {
  diceImage.setAttribute("src", getDiceImage(getDiceNum()));
});
