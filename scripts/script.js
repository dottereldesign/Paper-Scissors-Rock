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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats scissors.";
  } else if (
    playerSelection != "scissors" ||
    playerSelection != "rock" ||
    playerSelection != "scissors"
  ) {
    return "Please type paper, scissors, or rock.";
  } else return "Draw!";
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("Paper, scissors, or rock?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

console.log(game());
