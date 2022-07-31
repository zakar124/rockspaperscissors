
const choices = ["Rocks", "Paper", "Scissors"]
function getComputerChoice() {
    return choices[Math.floor(Math.random() * Math.floor(choices.length))]
}
let playerSelection = prompt("Please choose Rocks, Paper or Scissors");
alert("HiiiYOOOO, you chose " + playerSelection.toUpperCase()+"!" + "\nMay the odds ever be in your favor!");

const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {

    if ((playerSelection === 'Rocks' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rocks' || playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return "YOU WIN!";
    }

    else if ((playerSelection === 'Rocks' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rocks')) {
        return "YOU LOSE!";
    }

    else if (playerSelection === computerSelection) {
        return "TIE!";
    }
}

console.log("You chose " + playerSelection.toUpperCase());
console.log("Computer chose " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please choose Rocks, Paper or Scissors");
alert("HiiiYOOOO, you chose " + playerSelection.toUpperCase()+"!" + "\nMay the odds ever be in your favor!");
    console.log(playRound(playerSelection, computerSelection));
}