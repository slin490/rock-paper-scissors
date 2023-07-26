const readline = require('readline-sync');

const gamePlays = Number(readline.question("How many games? \n"));
const rpsChoices = ["rock", "paper", "scissors"];
let compPoints = 0;
let playerPoints = 0;

for (let i = 0; i < gamePlays; i++){
	const playerChoice = readline.question("rock, paper, or scissors? \n").toLowerCase();
	
	const compDecider = (listChoices) => {
		const randNum = Math.floor(Math.random() * 3);
		const choice = listChoices[randNum];
		return choice;
	}

	const compChoice = compDecider(rpsChoices);

	console.log(`You chose ${playerChoice}`);
	console.log(`Computer chose ${compChoice}\n`)

	if (playerChoice == compChoice){
		console.log("Tie");
	} else if (playerChoice == "rock"){
		if (compChoice == "scissors"){
			console.log("Player Wins");
			playerPoints += 1;
		} else {
			console.log("Computer Wins");
			compPoints += 1;
		}
	} else if (playerChoice == "paper"){
		if (compChoice == "rock"){
			console.log("Player Wins");
			playerPoints += 1;
		} else {
			console.log("Computer Wins");
			compPoints += 1;
		}
	} else if (playerChoice == "scissors"){
		if (compChoice == "paper"){
			console.log("Player Wins");
			playerPoints += 1;
		} else {
			console.log("Computer Wins");
			compPoints += 1;
		}
	}
}
