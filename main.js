
const userChoicePara = document.getElementById("user-choice-para");
const computerChoicePara = document.getElementById("computer-choice-para");
const resultPara = document.getElementById("result-para");

function PlayGame(UserChoice) {
    let options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3); // 0,1,2
    let computerChoice = options[randomNum];

    
    userChoicePara.innerText = "User choice: " + UserChoice;
    computerChoicePara.innerText = "Computer choice: " + computerChoice;

    if (computerChoice === UserChoice) {
        resultPara.innerText = "Result : It's a Draw 😊";
    } else if (
        (UserChoice === "rock" && computerChoice === "scissors") ||
        (UserChoice === "paper" && computerChoice === "rock") ||
        (UserChoice === "scissors" && computerChoice === "paper")
    ) {
        resultPara.innerText = "Result : You WON! 😍";
    } else {
        resultPara.innerText = "Result : You LOST! 😞";
    }
}
