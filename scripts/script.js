// Paper > Rock > Scissors > Paper

// Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.

function computerPlay() {
  let computerHand = ["Paper", "Scissors", "Rock"];
  return computerHand[Math.floor(Math.random() * computerHand.length)];
}
// console.log(computerPlay());

// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  let youLose = `You lose! ${computerSelection} beats ${playerSelection}`;
  let youWin = `You win! ${playerSelection} beats ${computerSelection}`;
  let draw = "Draw!";
  let wrongMove = "Please type paper, scissors, or rock.";

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore += 1;
    return youLose;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore += 1;
    return youWin;
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return draw;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore += 1;
    return youWin;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore += 1;
    return youLose;
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return draw;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore += 1;
    return youWin;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore += 1;
    return youLose;
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return draw;
  } else if (
    playerSelection != "Paper" ||
    playerSelection != "Rock" ||
    playerSelection != "Scissors"
  ) {
    return wrongMove;
  }
}

// Creates the game function and runs a for loop of 5 rounds.

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = window.prompt("Paper, scissors, or rock?");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

// Calls the game function to run it and displays score in the console.
game();
console.log(playerScore, computerScore);
console.log(wrongMove);
