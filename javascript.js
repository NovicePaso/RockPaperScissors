const CHOICES = ["Rock", "Paper", "Scissors"];
var computerSelection = "";
var playerSelection = "";
var result = "";
let computerScore = 0;
let playerScore = 0;

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

        let resultArray = result.split(" ");
        if (resultArray[1] === "Lose!"){
            computerScore ++;
            console.log(computerScore);
            document.querySelector('#computerScore').innerText = `${computerScore}`;
        }
        else if (resultArray[1] === "Win!"){
            playerScore ++;
            console.log(playerScore);
            document.querySelector('#playerScore').innerText = `${playerScore}`;
        }
    })
})
