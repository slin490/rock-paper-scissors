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
let compChoice = (listChoices) => {
	const randNum = Math.floor(Math.random() * 3);
	const choice = listChoices[randNum];
	return choice;
}

if (playerChoice == compChoice(rpsChoices)){
	console.log("Tie");
} else if (playerChoice == "rock"){
	if (compChoice(rpsChoices) == "scissors"){
		console.log("Player Wins")
	} else {
		console.log("Computer Wins")
	}
} else if (playerChoice == "paper"){
	if (compChoice(rpsChoices) == "rock"){
		console.log("Player Wins")
	} else {
		console.log("Computer Wins")
	}
} else if (playerChoice == "scissors"){
	if (compChoice(rpsChoices) == "paper"){
		console.log("Player Wins")
	} else {
		console.log("Computer Wins")
	}
}

