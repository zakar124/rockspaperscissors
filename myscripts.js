let choices = ["Rocks", "Paper", "Scissors"];

let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(getComputerChoice);

let playerSelection = window.prompt ("Type your Selection: rock, paper or scissors").toUpperCase();
 let computerSelection = choices[Math.floor(Math.random()*choices.length)];
console.log(getComputerChoice);



if (playerSelection == "rocks" && computerSelection == "rocks") {
console.log("Tie!");
}

if (playerSelection == "rocks" && computerSelection == "scissors") {
    console.log("You Win!");
}