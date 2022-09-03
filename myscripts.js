


const choices = document.querySelectorAll(".choices");

let yourScore = document.querySelector(".yourScore");
let computerScore = document.querySelector(".computerScore");
let imageBorder = document.querySelector(".imageBorder");
let winner = document.querySelector(".winner");
let youChose = document.querySelector(".youChose");
let computerChose = document.querySelector(".computerChose");
let round = document.querySelector(".round");

yourScore.textContent = 0;
computerScore.textContent = 0;
round.textContent = 0;


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

  if ((playerInput === "Rock" && computerInput === "Paper" ) 
  || (playerInput === "Paper" && computerInput === "Scissors" )) {
    winner.textContent = `YOU LOSE Round ${round.textContent}`;
    youChose.textContent = `${playerInput}`;
    computerChose.textContent = `${computerInput}`;
    computerScore.textContent++;
    
  }

 
  else if ((playerInput === "Rock" && computerInput === "Scissors") 
  || (playerInput === "Paper" && computerInput === "Rock") 
  || (playerInput === "Scissors" & computerInput == "Paper")) {
    winner.textContent = `YOU WIN Round ${round.textContent}`;
    youChose.textContent = `${playerInput}`;
    computerChose.textContent = `${computerInput}`;
    yourScore.textContent++;
  }

  else if (playerInput === computerInput) {
    winner.textContent = `TIED for Round ${round.textContent}`;
    youChose.textContent = `${playerInput}`;
    computerChose.textContent = `${computerInput}`;;
  }

  if ((round.textContent == 5) && (computerScore.textContent > yourScore.textContent)) {
    winner.textContent = `Final Round: Bully Wins All
    😩😒`;
    yourScore.textContent = 0;
  computerScore.textContent =0;
  
  }
    else if ((round.textContent == 5) && (yourScore.textContent > computerScore.textContent)) {
      winner.textContent =`Final Round: You Win 
      All!   
      🎉 🏆 🎉 🏆  🎉 `;
      yourScore.textContent = 0;
      computerScore.textContent =0;

  } else if ((round.textContent == 5) && (yourScore.textContent == computerScore.textContent)) {
    winner.textContent =`Final Round: Tied 🙃`;
    yourScore.textContent = 0;
    computerScore.textContent =0;
     
  }
  if (round.textContent == 5) {
    round.textContent = 0;
  }
  });
});
document.querySelector('.button').addEventListener('click', function () {
  let changeBackground = document.getElementById("scores");
  changeBackground.style.display = "none";
  let changeBackground1 = document.getElementById("playerChoices");
  changeBackground1.style.display = "none";
  round.textContent = 0;
  yourScore.textContent = 0;
  computerScore.textContent =0;
  winner.textContent = "";
  youChose.textContent = "";
  computerChose.textContent = "";

  
});

style.display = 'block';
