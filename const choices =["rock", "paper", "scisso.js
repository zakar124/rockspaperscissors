const choices =["rock", "paper", "scissors"];

computerSelection = choices[Math.floor(Math.random() * choices.length)];

console.log(computerSelection);

playerSelection = prompt("Let's Play 5 Rounds...\n\nMan Vs. Computer!\n\nType ROCK, PAPER or SCISSORS");

function playRound (playerSelection, computerSelection) {

  if ((playerSelection === "rocks" && computerSelection === "paper" ) || (playerSelection === "paper" && computerSelection === "scissors" )) {
    alert ("Sorry! You Lose!");
  }
  
  if ((playerSelection === "rocks" && computerSelection === "scissors") || (playerSelection === "scissors" & computerSelection == "paper")) {
    alert ("Hooray! You Win!");
  }
  if (playerSelection === computerSelection) {
    alert ("Tie! Nice work!");
  }

console.log(playRound(playerSelection, computerSelection));