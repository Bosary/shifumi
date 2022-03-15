function computerPlay() {
    // Create the choice
    let computerHand = ['Rock', 'Paper', 'Scissors'];

    // Randomly pick
    const randomChoice = computerHand[Math.floor(Math.random() * computerHand.length)];

    return randomChoice;
}

function playerSelection(){
    const selection = prompt("Make your choice ! (write 'rock', 'paper' or 'scissors'): ");
    // Check if user input is correct
    if (selection.toLowerCase() === 'rock' || selection.toLowerCase() === 'paper' || selection.toLowerCase() === 'scissors') {
        return selection.toLowerCase();
    } else {
        console.log("Wrong input.");
        playerSelection();
    }
}

const playerChoice = playerSelection();
console.log(playerChoice);