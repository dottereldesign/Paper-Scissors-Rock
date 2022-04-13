// Pseudocode:
// computerPlay will randomly return Paper, Scissors, or Rock when called.

function computerPlay() {
  let computerHand = ["Paper", "Scissors", "Rock"];
  return computerHand[Math.floor(Math.random() * computerHand.length)];
}

console.log(computerPlay());
