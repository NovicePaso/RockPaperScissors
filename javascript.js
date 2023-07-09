const CHOICES = ["Rock", "Paper", "Scissors"];
var computerSelection = "";
var playerInput = "";
var playerSelection = "";
var result = "";

// gets player choice from a prompt
// case insensitive
function getPlayerChoice(){
    playerInput = prompt("Choose between Rock, Paper, and Scissors: ");
    return playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
}

// gets computer choice from a rounded random integer between 0-3
// associates integer to CHOICES array
function getComputerChoice(){
    return computerSelection = CHOICES[Math.floor(Math.random()*3)];
}

// establishes win, lose, and tie conditions
// takes 2 arguments: the player's selection and computer's random selection
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

// calls funtions and plays 5 rounds
function game(){
    for(let i = 0; i < 5; i++){  
    console.log(getComputerChoice());
    console.log(getPlayerChoice());
    console.log(playRound(playerSelection,computerSelection));
}
}

game();