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
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You lose! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock.";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats Scissors";
  } else return "Draw!";
}

// Create a function called game that calls the playRound function inside of it to play a 5 round game that keeps score and reports a winnor loser at the end.

function game() {}
console.log(game());
