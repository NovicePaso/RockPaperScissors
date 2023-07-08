const CHOICES = ["Rock", "Paper", "Scissors"];
var computerSelection = "";
var playerInput = prompt("Choose between Rock, Paper, and Scissors: ");
var playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
var result = "";

function getComputerChoice(){
    return computerSelection = CHOICES[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Paper" ||
    playerSelection == "Paper" && computerSelection == "Scissors" ||
    playerSelection == "Scissors" && computerSelection == "Rock"){
        return result = `You lose! ${computerSelection} beats ${playerSelection}`;}
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection == "Scissors" && computerSelection == "Paper"){        
        return result = `You Win! ${playerSelection} beats ${computerSelection}`;}
    else {
        return result = "It's a Tie!";
    }
}


console.log(getComputerChoice());
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));
