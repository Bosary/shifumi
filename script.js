// Rock Paper Scissors game

// globals
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const playerHand = ['paper', 'scissors', 'rock']; 
const computerHand = ['rock', 'paper', 'scissors']; // See compareHands


function computerPlay() {

    // Random pick
    const randomChoice = computerHand[Math.floor(Math.random() * computerHand.length)];

    return randomChoice;
}

function compareHands(playerChoice, computerChoice) {

    // Display hands
    const handsDisplay = document.getElementById('hands');
    handsDisplay.setAttribute('style', 'font-size: 20px');
    handsDisplay.textContent = `${playerChoice} vs ${computerChoice}.`

    // The string is checked for draw. The index is used to check victory
    // At equal index, player wins
    if (playerChoice == computerChoice) {
        return ("It's a draw");

    } else if (playerHand.indexOf(playerChoice) == computerHand.indexOf(computerChoice)) {
        playerScore += 1;
        return ("You win !!!");

    } else {
        computerScore += 1;
        return ("You lose.");
    }
}

function playRound(){

    // 5 rounds limit
    if (roundCount < 5) {

        // Get player choice from button click
        const playerChoice = this.textContent.toLowerCase();
        const computerChoice = computerPlay();

        const result = `${compareHands(playerChoice, computerChoice)}`;
        displayResult(result);
        displayScore();

        roundCount++;
    }

    if (roundCount == 5) {
        displayFinalScore();
    }
}

function displayResult(result) {

    const resultDisplay = document.getElementById('result');
    resultDisplay.setAttribute('style', 'padding: 8px; font-size: 28px');
    resultDisplay.textContent = `${result}`;
}

function displayScore() {

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Your score: ${playerScore} - computer: ${computerScore}`;
}

function displayFinalScore() {

    const finalScore = document.getElementById('finalScore');

    if (playerScore == computerScore) {
        finalScore.setAttribute('style', 'font-size: 36px');
        finalScore.textContent = "It's a draw";
    } else if (playerScore > computerScore) {
        finalScore.setAttribute('style', 'font-size: 36px; color: blue');
        finalScore.textContent = "You win!!!";
    } else {
        finalScore.setAttribute('style', 'font-size: 36px; color: red');
        finalScore.textContent = "You lose";
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});


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