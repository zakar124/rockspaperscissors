const choices =["rock", "paper", "scissors"];

computerSelection = choices[Math.floor(Math.random() * choices.length)];


playerSelection = prompt("Let's Play 5 Rounds...\n\nMan Vs. Computer!\n\nType ROCK, PAPER or SCISSORS");


function playRound (playerSelection, computerSelection) {

  if ((playerSelection === "rock" && computerSelection === "paper" ) || (playerSelection === "paper" && computerSelection === "scissors" )) {
    alert ("Sorry. You Lose.");
  }
  
  if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" & computerSelection == "paper")) {
    alert ("Hooray! You Win!");
  }

  if (playerSelection === computerSelection) {
    alert ("Tie! Nice work!");
  }
}

console.log("You chose " + playerSelection);
console.log("Computer chose " + computerSelection);
console.log(playRound(playerSelection.toLowerCase(), computerSelection));

for (let i = 0; i < 4; i++) {
  playerSelection = prompt("Let's Play 5 Rounds...\n\nMan Vs. Computer!\n\nType ROCK, PAPER or SCISSORS");
  console.log("You chose " + playerSelection);
  console.log("Computer chose " + computerSelection);
  console.log(playRound(playerSelection.toLowerCase(), computerSelection));

}