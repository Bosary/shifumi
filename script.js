function computerPlay() {
    // Create the choice
    let computerHand = ['Rock', 'Paper', 'Scissors'];

    // Randomly pick
    const randomChoice = computerHand[Math.floor(Math.random() * computerHand.length)];

    return randomChoice;
}

