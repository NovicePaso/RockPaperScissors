const CHOICES = ["Rock", "Paper", "Scissors"];
var computerSelection = "";
var playerSelection = "";
var result = "";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return computerSelection = CHOICES[Math.floor(Math.random()*3)];
}

// establishes win, lose, and tie conditions
function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Paper" ||
    playerSelection == "Paper" && computerSelection == "Scissors" ||
    playerSelection == "Scissors" && computerSelection == "Rock"){
        return result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection == "Scissors" && computerSelection == "Paper"){        
        return result = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    else {
        return result = "It's a Tie!";
    }
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#computerScore').innerText = `${computerScore}`;
    document.querySelector('#playerScore').innerText = `${playerScore}`;
}

// assigns button functions and DOM elements
const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        console.log(playerSelection);
        document.querySelector('#playerChoice').innerText = `You chose: ${playerSelection}`;

        getComputerChoice();
        console.log(computerSelection);
        document.querySelector('#computerChoice').innerText = `Computer chose: ${computerSelection}`;

        playRound(playerSelection, computerSelection);
        console.log(result);
        document.querySelector('#resultStatement').innerText = `${result}`;

        // keeps track of score
        let resultArray = result.split(" ");
        if (resultArray[1] === "Lose!"){
            computerScore ++;
            document.querySelector('#computerScore').innerText = `${computerScore}`;
        }
        else if (resultArray[1] === "Win!"){
            playerScore ++;
            document.querySelector('#playerScore').innerText = `${playerScore}`;
        }
        console.log(playerScore);
        console.log(computerScore);


        // establishes overall win condition
        if (playerScore == 5){
            document.querySelector('#resultStatement').innerText = "The Humans Win!";
            resetScore();
        }
        else if (computerScore == 5){
            document.querySelector('#resultStatement').innerText = "The Computers Win!"; 
            resetScore();
         }
})
})



