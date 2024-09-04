function getComputerChoice() {
	let choice = Math.random();
  if (choice < 0.3 ) {
		return console.log('paper');
	} else if (choice > 0.6 ) {
		return console.log('rock');
	} else {
		return console.log('scissors');
	}
}

function getHumanChoice() {
	let choice = prompt('write rock, scissors or paper:')
	if (choice.toLowerCase() === 'rock') {
		return console.log('rock')
	} else if (choice.toLowerCase() === 'scissors') {
		return console.log('scissors')
	} else if (choice.toLowerCase() === 'paper') {
		return console.log('paper')
	}
}

getHumanChoice()

