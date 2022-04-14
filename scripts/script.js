// Pseudocode:
// Paper > Rock > Scissors > Paper

// Pseudocode:
// Create a function called computerPlay that will randomly return Paper, Scissors, or Rock.

function computerPlay() {
  let computerHand = ["Paper", "Scissors", "Rock"];
  return computerHand[Math.floor(Math.random() * computerHand.length)];
}

// console.log(computerPlay());

// Pseudocode:
// Create a function called playRound with two paremeters; playerSelection and computerSelection, that will return a string to declare the winner of a round.

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You lose!";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return "You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win!";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You lose!";
  } else return "Draw!";
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
