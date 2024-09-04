function getComputerChoice() {
	choice = Math.random();
  if (choice < 0.3 ) {
		return console.log('paper');
	} else if (choice > 0.6 ) {
		return console.log('rock');
	} else {
		return console.log('scissors');
	}
}

getComputerChoice()
