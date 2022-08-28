const choices =["rock", "paper", "scissors"];

computerSelection = choices[Math.floor(Math.random() * choices.length)];


function rockspopUp() {
  let popupRocks = document.getElementById("Rocks");
  popupRocks.classList.toggle("show");
  } 

  function paperpopUp() {
  let popupPaper = document.getElementById("Paper");
  popupPaper.classList.toggle("show");
  }
  
  function scissorspopUp () {
  let popupScissors = document.getElementById("Scissors");
  popupScissors.classList.toggle("show");

}

function playRound (playerSelection, computerSelection) {

  if ((playerSelection === "rock" && computerSelection === "paper" ) 
  || (playerSelection === "paper" && computerSelection === "scissors" )) {
   alert ("Sorry. You Lose.");
  }
  
  if ((playerSelection === "rock" && computerSelection === "scissors") 
  || (playerSelection === "paper" && computerSelection === "rock") 
  || (playerSelection === "scissors" & computerSelection == "paper")) {
    return "Hooray! You Win!";
  }

  if (playerSelection === computerSelection) {
    return "Tie! Nice try.";
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