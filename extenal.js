function computerPlay() {
  let random = Math.random();
  // console.log(random);
  if (random > 0 && random <= 0.3)
    return "rock";
  else if (random > 0.3 && random <= 0.6)
    return "paper";
  else
    return "scissors";
}

// console.log(computerPlay());

function playAround(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return ("tie")
  }
  else if ((playerSelection == "rock" && computerSelection == "scissors") | (playerSelection == "paper" && computerSelection == "rock") | (playerSelection == "scissors" && computerSelection == "paper")) {
    return ("player")
  }
  else {
    return ("computer")
  }
}
// console.log(playAround(playerSelection,computerSelection));

function game() {
  let playerCount = 0;
  let computerCount = 0;
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter any one choice : rock, paper or scissors").toLowerCase();
    if (playerSelection == "rock" | playerSelection == "scissors" | playerSelection == "paper") {
      let computerSelection = computerPlay();
      let arr = playAround(playerSelection, computerSelection);
      if (arr == "player") {
        playerCount++;
        console.log("You won!!" + " " + playerSelection + " " + "beats" + " " + computerSelection);
      }
      else if (arr == "computer") {
        computerCount++;
        console.log("You lose!!" + " " + computerSelection + " " + "beats" + " " + playerSelection);
      }
      else {
        console.log("Both chose " + " " + playerSelection);
      }
    }
    else {
      i--;
      console.log("Enter valid choice")
    }
  }
  if (playerCount > computerCount) {
    return "You won " + " " + playerCount + "-" + computerCount
  }
  else if (computerCount > playerCount) {
    return "You Lost " + " " + playerCount + "-" + computerCount
  }
  else {
    return "Its a tie" + " " + playerCount + "-" + computerCount;
  }

}

console.log(game());
