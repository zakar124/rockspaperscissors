let choices = ["Rocks", "Paper", "Scissors"];

let getComputerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(getComputerChoice);

let playerSelection = window.prompt ("Type your Selection: rock, paper or scissors").toUpperCase();
 let computerSelection = choices[Math.floor(Math.random()*choices.length)];
console.log(getComputerChoice);


function 
if (playerSelection == "rocks" && computerSelection == "rocks") {
return "Tie!";
}

if (playerSelection == "rocks" && computerSelection == "scissors") {
    return "You Win!";
}