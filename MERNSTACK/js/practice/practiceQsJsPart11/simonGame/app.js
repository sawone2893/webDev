let gameSeq = [];
let userSeq = [];
let userScoreList=[];

let btns = ["red", "yellow", "green", "blue"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");
/**
 * Step1:
 * User Press any key.
 * Then start the Game.
 * Level up and Flash any button
 * Add the button color into the Game Sequence
 * Reset the user sequence when level up.
 * */
document.addEventListener("keypress", () => {
  if (start==false) {
    console.log(":::::::::::::::::::::::::::::::::Game Started::::::::::::::::::::::");
    start = true;
    levelUp();
  }
});

let randBtn = () => {
  let randIndx = Math.floor(Math.random() * 3);
  let randColor = btns[randIndx];
  let btn = document.querySelector(`.${randColor}`);
  return btn;
};

let gameFlash = (btn) => {
  btn.classList.add("gameFlash");
  setTimeout(() => {
    btn.classList.remove("gameFlash");
  }, 250);
};

let userFlash = (btn) => {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
};

let levelUp = () => {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let btn = randBtn();
  gameFlash(btn);
  let btnColor = btn.getAttribute("id");
  gameSeq.push(btnColor);
  console.log(`Game Sequence:${gameSeq}`);
};

/**
 * Step2:
 * User Press the button
 * Button flashed.
 * Add the button color to user srquence.
 * Check the game result
 */
let gameResult = (index) => {
  if (userSeq[index] == gameSeq[index]) {
    if (userSeq.length == gameSeq.length) {
        setTimeout(levelUp,1000);
    }
  } else {
    userScoreList.push(level);
    let high=highestScore(userScoreList);
    h2.innerHTML = `Game Over! Your score: <b>${level}</b> <br><b>Your all time highest score: ${high}</b <br> <br> Press any key to restart the game.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{document.querySelector("body").style.backgroundColor="white";},150);
    resetGame();
  }
};

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", () => {
    userFlash(btn);
    let btnColor = btn.getAttribute("id");
    userSeq.push(btnColor);
    console.log(`User Sequence:${userSeq}`);
    gameResult(userSeq.length - 1);
  });
}

let resetGame=()=>{
    start = false;
    gameSeq = [];
    userSeq=[];
    level=0;
}

let highestScore=(scores)=>{
    let high=0;
    for(score of scores){
        if(score>high){
            high=score;
        }
    }

    return high;
}
