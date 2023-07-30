const buttons = document.querySelectorAll("button");
const winner = document.getElementById("notification");
const playerPoints = document.getElementById("playerPoints");
const botPoints = document.getElementById("computerPoints");

buttons.forEach((button) => {
	button.addEventListener("click", checkCondition);
})

const checkCondition = () => {
	
}

// const compDecider = (listChoices) => {
// 	const randNum = Math.floor(Math.random() * 3);
// 	const choice = listChoices[randNum];
// 	return choice;
// }

// const compChoice = compDecider(rpsChoices);

// console.log(`You chose ${playerChoice}`);
// console.log(`Computer chose ${compChoice}\n`)

// if (playerChoice == compChoice){
// 	console.log("Tie");
// } else if (playerChoice == "rock"){
// 	if (compChoice == "scissors"){
// 		console.log("Player Wins");
// 		playerPoints += 1;
// 	} else {
// 		console.log("Computer Wins");
// 		compPoints += 1;
// 	}
// } else if (playerChoice == "paper"){
// 	if (compChoice == "rock"){
// 		console.log("Player Wins");
// 		playerPoints += 1;
// 	} else {
// 		console.log("Computer Wins");
// 		compPoints += 1;
// 	}
// } else if (playerChoice == "scissors"){
// 	if (compChoice == "paper"){
// 		console.log("Player Wins");
// 		playerPoints += 1;
// 	} else {
// 		console.log("Computer Wins");
// 		compPoints += 1;
// 	}
// }


