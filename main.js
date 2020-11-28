const rockPaperScissorArr = ["rock", "paper", "scissors"];

function computerPlay() {
    let randValue = Math.floor(Math.random() * rockPaperScissorArr.length);
    let computerSelection = rockPaperScissorArr[randValue];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    // stub
}