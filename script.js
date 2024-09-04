function getComputerChoice() {
	let choice = Math.random();
  if (choice < 0.3 ) {
		return 'paper';
	} else if (choice > 0.6 ) {
		return 'rock';
	} else {
		return 'scissors';
	}
}

function getHumanChoice() {
	let choice = prompt('write rock, scissors or paper:')
	if (choice.toLowerCase() == 'rock') {
		return 'rock'
	} else if (choice.toLowerCase() == 'scissors') {
		return 'scissors'
	} else if (choice.toLowerCase() == 'paper') {
		return 'paper'
	}
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	if (humanChoice == "paper" && computerChoice == "paper") {
		return console.log("Draw");
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		return console.log("You WIN!!!");
	} else if (humanChoice == "paper" && computerChoice == "scissors") {
		return console.log("You lost");

	} else if (humanChoice == "rock" && computerChoice == "rock") {
		return console.log("Draw");
	} else if (humanChoice == "rock" && computerChoice == "scissors") {
		return console.log("You WIN!!!");
	} else if (humanChoice == "rock" && computerChoice == "paper") {
		return console.log("You lost");

	} else if (humanChoice == "scissors" && computerChoice == "scissors") {
		return console.log("Draw");
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		return console.log("You WIN!!!");
	} else if (humanChoice == "scissors" && computerChoice == "rock") {
		return console.log("You lost");
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
