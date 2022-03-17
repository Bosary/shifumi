// 3 possibles choices. The 2 arrays are different to help checking victory conditions
const computerHand = ['rock', 'paper', 'scissors'];
const playerHand = ['paper', 'scissors', 'rock'];


function computerPlay() {

    // Randomly pick
    const randomChoice = computerHand[Math.floor(Math.random() * computerHand.length)];

    return randomChoice;
}

const computerChoice = computerPlay();

function playerSelection(){
    const selection = prompt("Make your choice ! (write 'rock', 'paper' or 'scissors'): ").toLowerCase();
    // Check if user input is correct
    if (playerHand.includes(selection)) {
        return selection;
    } else {
        console.log("Wrong input.");
        playerSelection();
    }
}

const playerChoice = playerSelection();

function compareHands(playerChoice, computerChoice){
    //  The string is check for draw. The index are used to check victory
    if (playerChoice == computerChoice) {
        console.log(`${playerChoice} VS ${computerChoice}. It's a draw`);
    } else if (playerHand.indexOf(playerChoice) == computerHand.indexOf(computerChoice)) {
        console.log(`${playerChoice} VS ${computerChoice}. You win !!!!`);
    } else {
        console.log(`${playerChoice} VS ${computerChoice}. You lose !`);
    }
}

compareHands(playerChoice, computerChoice);