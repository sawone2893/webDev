let maxNum = prompt("Enter the max number");
let guess = prompt("Guess the number generated");
let randNum = Math.floor(Math.random() * maxNum) + 1;
while (true) {
  if (guess == "quit") {
    alert("You Quit!!");
    break;
  }

  if (guess == randNum) {
    alert("Congratulation! You guess it right.");
    break;
  } else {
    guess = prompt("Wrong guess! Try again.");
  }
}
