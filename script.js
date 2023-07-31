const buttons = document.querySelectorAll(".choices");
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resetBtn = document.querySelector("#reset");
const winner = document.getElementById("winnerNote");
let playerPoints = 0;
let computerPoints = 0;

//Computer Deicision
const computerDecision = () => {
	const randNumber = Math.floor(Math.random() * 3);

	switch(randNumber){
		case 0:
			computerChoice = "Rock";
			break;
		case 1:
			computerChoice = "Paper";
			break;
		case 2:
			computerChoice = "Scissors";
			break;
	}
}

//Condition Checker
const checkCondition = () => {
	if (playerChoice == computerChoice){
		console.log("Tie");
	} else if (playerChoice == "Rock"){
		return computerChoice == "Scissors" ? playerPoints += 1 : computerPoints += 1;
	} else if (playerChoice == "Paper"){
		return computerChoice == "Rock" ? playerPoints += 1 : computerPoints += 1;
	} else if (playerChoice == "Scissors"){
		return computerChoice == "Paper" ? playerPoints += 1 : computerPoints += 1;
	}
}

//First to Reach Five Points
const checkWinner = () => {
	if(playerPoints == 5){
		winner.textContent = "Player Wins";
	} else if (computerPoints == 5) {
		winner.textContent = "Computer Wins";
	}
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playerChoice = button.textContent;
		// console.log(playerChoice);
		computerDecision();
		// console.log(computerChoice);
		checkCondition();
		playerText.textContent = playerPoints;
		computerText.textContent = computerPoints;
		checkWinner();
	});
})

const resetGame = () => {
	playerPoints = 0;
	computerPoints = 0;
	playerText.textContent = playerPoints;
	computerText.textContent = computerPoints;
	winner.textContent = "Default Winner";
}

resetBtn.addEventListener("click", resetGame);

// buttons.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		playerText.textContent = button.textContent;
// 	})
// })


