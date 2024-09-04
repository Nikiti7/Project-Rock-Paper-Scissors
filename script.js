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

function playRound(humanChoice, computerChoice) {
	if (humanChoice == "paper" && computerChoice == "paper") {
		return "Draw";
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		humanScore++;
		return "You WIN!!!";
	} else if (humanChoice == "paper" && computerChoice == "scissors") {
		computerScore++;
		return "You lost";

	} else if (humanChoice == "rock" && computerChoice == "rock") {
		return "Draw";
	} else if (humanChoice == "rock" && computerChoice == "scissors") {
		humanScore++;
		return "You WIN!!!";
	} else if (humanChoice == "rock" && computerChoice == "paper") {
		computerScore++;
		return "You lost";

	} else if (humanChoice == "scissors" && computerChoice == "scissors") {
		return "Draw";
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		humanScore++;
		return "You WIN!!!";
	} else if (humanChoice == "scissors" && computerChoice == "rock") {
		computerScore++;
		return "You lost";
	}
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
	for (let cycle = 0; cycle < 5; cycle++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		let game = playRound(humanSelection, computerSelection);
	}

	if (humanScore > computerScore) {
		return console.log("You WIN!!!");
	} else if (humanScore < computerScore) {
		return console.log("You lost");
	} else {
		return console.log("Draw");
	}
}

playGame()
