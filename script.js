// Rock Paper Scissors game

// The 2 arrays are different in order to use index as victory condition
// paper beats rock, so playerHand[0] beats computerHand[0] etc...
const playerHand = ['paper', 'scissors', 'rock'];
const computerHand = ['rock', 'paper', 'scissors'];

function computerPlay() {

    // Random pick
    const randomChoice = computerHand[Math.floor(Math.random() * computerHand.length)];

    return randomChoice;
}


function compareHands(playerChoice, computerChoice) {
    //  The string is checked for draw. The index is used to check victory
    if (playerChoice == computerChoice) {
        console.log(`${playerChoice} VS ${computerChoice}. It's a draw`);
        return ('draw');

    } else if (playerHand.indexOf(playerChoice) == computerHand.indexOf(computerChoice)) {
        console.log(`${playerChoice} VS ${computerChoice}. You win !!!!`);
        return ('win');

    } else {
        console.log(`${playerChoice} VS ${computerChoice}. You lose !`);
        return ('lose');
    }
}

// Main Loop
function playRound(){

    // Get player choice from button click
    const playerChoice = this.textContent.toLowerCase();
    const computerChoice = computerPlay();

    compareHands(playerChoice, computerChoice);
}

function game() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', playRound);
    });
};

game();


/* 

    let playerScore = 0;
    let computerScore = 0;
// Play 5 rounds
    for(let round = 0; round < 5; round++){

        const playerChoice = playerPlay();
        const computerChoice = computerPlay();
        const result = compareHands(playerChoice, computerChoice);

        // Update score
        if (result == 'win') {
            playerScore += 1;
        } else if (result == 'lose') {
            computerScore += 1;
        }

        console.log(`The current score is: player:${playerScore} - computer:${computerScore}`);
    }

    // Score check
    if (playerScore > computerScore) {
        console.log('Congratz! You won!!');
    } else {
        console.log('Better luck next time!');
    }
*/