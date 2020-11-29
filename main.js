const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const rockPaperScissorArr = [rock, paper, scissors];
let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let randValue = Math.floor(Math.random() * rockPaperScissorArr.length);
    let computerSelection = rockPaperScissorArr[randValue];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    console.log(`Player chose ${player}\nComputer chose ${computerSelection}`);
    let result;

    switch (true) {
        case (player ===  computerSelection):
            result = `Both chose ${player}, so it's a tie!`;
            break;
        case (player === rock && computerSelection === scissors):
        case (player === paper && computerSelection === rock):
        case (player === scissors && computerSelection === paper):
            result = `You win, ${player} beats ${computerSelection}!`;
            playerPoints++;
            break;
        default:
            result = `You lost, ${computerSelection} beats ${player}!`;
            computerPoints++;
            break;
    }
    return result;
}

function playGame() {
    gameReset();
    const GAMES_TO_PLAY = 5;
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
        console.log(`Your score: ${playerPoints} \nComputer's score: ${computerPoints}`);
    }
    console.log("%c~ * ~ FINAL RESULTS ~ * ~", `
                color: pink;
                font-weight: bold;`);
    console.log(`Your score: ${playerPoints} \nComputer's score ${computerPoints}`);
    if (playerPoints > computerPoints) {
        console.log("%cYou win!!! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)", "color: green;");
    } else if (playerPoints === computerPoints) {
        console.log("%cIt's a tie! (☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜) ", "color: blue;");
    } else {
        console.log("%cYou lost... ༼ つ ಥ_ಥ ༽つ", "color: red;");
    }
} 

function gameReset() {
    playerPoints = 0;
    computerPoints = 0;
}

function validateInput(playerSelection) {
    if (playerSelection === null) {
        return false;
    }
    return (rockPaperScissorArr.includes(playerSelection))? true : false;
}

document.getElementById("play-button").addEventListener("click", playGame);