const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const rockPaperScissorArr = [rock, paper, scissors];
const GAMES_TO_PLAY = 5;
let playerPointCount = 0;
let computerPointCount = 0;
let round = 0;

// get button elements
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

// get text elements to update
const gameResult = document.querySelector(".win-lose-result");
const roundCount = document.querySelector(".round-count");
const playerPoints = document.getElementById("player-points");
const computerPoints = document.getElementById("computer-points");

// get divs that contains icons representing choice
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");

// Event Listeners
document.addEventListener('DOMContentLoaded', gameReset);
rockBtn.addEventListener("click", handleSelection);
paperBtn.addEventListener("click", handleSelection);
scissorBtn.addEventListener("click", handleSelection);


function computerPlay() {
    let randValue = Math.floor(Math.random() * rockPaperScissorArr.length);
    let computerSelection = rockPaperScissorArr[randValue];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}\nComputer chose ${computerSelection}`);
    let result;

    switch (true) {
        case (playerSelection ===  computerSelection):
            result = `It's a tie!`;
            break;
        case (playerSelection === rock && computerSelection === scissors):
        case (playerSelection === paper && computerSelection === rock):
        case (playerSelection === scissors && computerSelection === paper):
            result = `You win, ${playerSelection} beats ${computerSelection}!`;
            playerPointCount++;
            break;
        default:
            result = `You lost, ${computerSelection} beats ${playerSelection}!`;
            computerPointCount++;
            break;
    }
    return result;
}

function playGame() {
    gameReset();
    for (let round = 1; round <= GAMES_TO_PLAY; round++) {
        console.log("Round " + round);
        let computerSelection = computerPlay();
        let validInput = false;
        let playerSelection;
        while (!validInput) {
            playerSelection = window.prompt("Choose rock, paper, or scissors: ");
            validInput = validateInput(playerSelection);
        }
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score: ${playerPointCount} \nComputer's score: ${computerPointCount}`);
    }
    console.log("%c~ * ~ FINAL RESULTS ~ * ~", `
                color: pink;
                font-weight: bold;`);
    console.log(`Your score: ${playerPointCount} \nComputer's score ${computerPointCount}`);
    if (playerPointCount > computerPointCount) {
        console.log("%cYou win!!! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)", "color: green;");
    } else if (playerPoints === computerPoints) {
        console.log("%cIt's a tie! (☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜) ", "color: blue;");
    } else {
        console.log("%cYou lost... ༼ つ ಥ_ಥ ༽つ", "color: red;");
    }
} 

function gameReset() {
    playerPointCount = 0;
    computerPointCount = 0;
    round = 0;
}

function validateInput(playerSelection) {
    if (playerSelection === null) {
        return false;
    }
    return (rockPaperScissorArr.includes(playerSelection))? true : false;
}

function displaySelection(selection, choiceDiv) {
    switch(selection) {
        case rock:
            choiceDiv.innerHTML = '<i class="fas fa-hand-rock"></i>';
            break;
        case paper:
            choiceDiv.innerHTML = '<i class="fas fa-hand-paper"></i>';
            break;
        case scissors:
            choiceDiv.innerHTML = '<i class="fas fa-hand-scissors"></i>';
            break;
    }
}

function handleSelection(e) {
    const playerSelection = e.target.value;
    const computerSelection = computerPlay();
    if (round !== GAMES_TO_PLAY) {
        let result = playRound(playerSelection, computerSelection);
        console.log(gameResult);
        displaySelection(playerSelection, playerChoice);
        displaySelection(computerSelection, computerChoice);
        gameResult.innerText = result;
    }
}


//document.getElementById("play-button").addEventListener("click", playGame);