
const choices = document.querySelectorAll(".choices");

let yourScore = document.querySelector(".yourScore");
let computerScore = document.querySelector(".computerScore");
let imageBorder = document.querySelector(".imageBorder");
let winner = document.querySelector(".winner");
let youChose = document.querySelector(".youChose");
let computerChose = document.querySelector(".computerChose");
let round = document.querySelector("#round");

yourScore.textContent = 0;
computerScore.textContent = 0;
round.textContent = 0;

let finalWinner = function (message) {
  winner.textContent = message;
     yourScore.textContent = 0;
     computerScore.textContent =0;
 }

 let scoresDisappear = function () {
  let changeBackground = document.getElementById("scores");
  changeBackground.style.display = "none";
 }

//  let winnerOfRound = function (message) {
//   winner.textContent = message;
//   let playerInput = choices.value;
//   youChose.textContent = `${playerInput}`;
//   computerChose.textContent = `${computerInput}`;
//  }


// choices.classList.add("imageBorder");
let playerInput = choices.value;


const computerChoices = ["Rock", "Paper", "Scissors"];
let computerInput = computerChoices[Math.floor(Math.random() * computerChoices.length)];



choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const playerInput = this.value;
    let computerInput = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    round.textContent++
    let changeBackground = document.getElementById("scores");
     changeBackground.style.display = "block";
     let changeBackground1 = document.getElementById("playerChoices");
     changeBackground1.style.display = "block";

  let winnerOfRound = function (message) {
  winner.textContent = message;
  youChose.textContent = `${playerInput}`;
  computerChose.textContent = `${computerInput}`;
 }


  if ((playerInput === "Rock" && computerInput === "Paper" ) 
  || (playerInput === "Paper" && computerInput === "Scissors" )) {
    winnerOfRound(`YOU LOSE Round ${round.textContent}`);
    computerScore.textContent++;
    
  }

  
  else if ((playerInput === "Rock" && computerInput === "Scissors") 
  || (playerInput === "Paper" && computerInput === "Rock") 
  || (playerInput === "Scissors" & computerInput == "Paper")) {
    winnerOfRound (`YOU WIN Round ${round.textContent}`);
    yourScore.textContent++;
  }

  else if (playerInput === computerInput) {
    winnerOfRound (`TIED for Round ${round.textContent}`);
  }

  if ((round.textContent == 5) && (computerScore.textContent > yourScore.textContent)) {
    finalWinner(`Final Round: Bully Wins All
    😩😒`);

  }
    else if ((round.textContent == 5) && (yourScore.textContent > computerScore.textContent)) {
     finalWinner(`🎉🏆🎉 Final Round: Winner, Winner, Chicken Dinner!   
     🎉🏆🐣🎉   `);
     

  } else if ((round.textContent == 5) && (yourScore.textContent == computerScore.textContent)) {
    finalWinner(`Final Round: Tied. Try again 🙃`);

     
  }
  if (round.textContent == 5) {
    round.textContent = 0;
   scoresDisappear();
  }
  });
});
document.querySelector('.button').addEventListener('click', function () {
  scoresDisappear();
  let changeBackground1 = document.getElementById("playerChoices");
  changeBackground1.style.display = "none";
  round.textContent = 0;
  yourScore.textContent = 0;
  computerScore.textContent =0;
  winner.textContent = "";
  youChose.textContent = "";
  computerChose.textContent = "";


  
});

// style.display = 'block';


