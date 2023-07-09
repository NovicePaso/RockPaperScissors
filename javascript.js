const CHOICES = ["Rock", "Paper", "Scissors"];
var computerSelection = "";
var playerInput = "";
var playerSelection = "";
var result = "";

function getPlayerChoice(){
    playerInput = prompt("Choose between Rock, Paper, and Scissors: ");
    return playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
}

function getComputerChoice(){
    return computerSelection = CHOICES[Math.floor(Math.random()*3)];
}

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

function game(){
    for(let i = 0; i < 5; i++){  
    console.log(getComputerChoice());
    console.log(getPlayerChoice());
    console.log(playRound(playerSelection,computerSelection));
}
}

game();