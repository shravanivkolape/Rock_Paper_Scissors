let gamesPlayed = 0;
let userWins = 0;
let computerWins = 0;
let gameDraw = 0;

const userChoicePara = document.getElementById("user-choice-para");
const computerChoicePara = document.getElementById("computer-choice-para");
const resultPara = document.getElementById("result-para");
const gamesCount = document.getElementById("games_count_para");
const userScore = document.getElementById("user_score_para");
const computerScore = document.getElementById("computer_score_para");
const gamesDraw = document.getElementById("games_draw_para");

function playGame(UserChoice) {
  let options = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3); // 0,1,2
  let computerChoice = options[randomNum];

  
  userChoicePara.innerText = "User choice: " + UserChoice;
  computerChoicePara.innerText = "Computer choice: " + computerChoice;

  
  if (computerChoice === UserChoice) {
    resultPara.innerText = "Result: It's a Draw 😊";
    gameDraw++;
  } else if (
    (UserChoice === "rock" && computerChoice === "scissors") ||
    (UserChoice === "paper" && computerChoice === "rock") ||
    (UserChoice === "scissors" && computerChoice === "paper")
  ) {
    resultPara.innerText = "Result: You WON! 😍";
    userWins++;
  } else {
    resultPara.innerText = "Result: You LOST! 😞";
    computerWins++;
  }

  
  gamesPlayed++;
  gamesCount.innerText = "Games Played: " + gamesPlayed;
  userScore.innerText = "Your Wins: " + userWins;
  computerScore.innerText = "Computer Wins: " + computerWins;
  gamesDraw.innerText = "Games Draw: " + gameDraw;
}

function resetGame() {
  gamesPlayed = 0;
  userWins = 0;
  computerWins = 0;
  gameDraw = 0;

  gamesCount.innerText = "Games Played: " + gamesPlayed;
  userScore.innerText = "Your Wins: " + userWins;
  computerScore.innerText = "Computer Wins: " + computerWins;
  userChoicePara.innerText = "User choice: ";
  computerChoicePara.innerText = "Computer choice: ";
  resultPara.innerText = "Result: ";
  gamesDraw.innerText = "Games Draw: " + gameDraw;
}
