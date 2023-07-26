const readline = require('readline-sync');
// Ask user input
// Take input and compare with computer
// assign objects to numbers so computer can randomize
// use random function to choose between 1-3
// compare your input with computer
// create conditional statements
// points tracker


// Choices
const playerChoice = readline.question("rock, paper, or scissors? ").toLowerCase();
const rpsChoices = ["rock", "paper", "scissors"];

//Computer choice maker
const compDecider = (listChoices) => {
	const randNum = Math.floor(Math.random() * 3);
	const choice = listChoices[randNum];
	return choice;
}

const compChoice = compDecider(rpsChoices);

if (playerChoice == compChoice){
	console.log("Tie");
} else if (playerChoice == "rock"){
	if (compChoice == "scissors"){
		console.log("Player Wins")
	} else {
		console.log("Computer Wins")
	}
} else if (playerChoice == "paper"){
	if (compChoice == "rock"){
		console.log("Player Wins")
	} else {
		console.log("Computer Wins")
	}
} else if (playerChoice == "scissors"){
	if (compChoice == "paper"){
		console.log("Player Wins")
	} else {
		console.log("Computer Wins")
	}
}

