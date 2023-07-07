const CHOICES = ["Rock", "Paper", "Scissors"];
const computerSelection = "";
const playerSelection = prompt("Choose between Rock, Paper, and Scissors: ");

function getComputerChoice(){
    return computerSelection = CHOICES[Math.floor(Math.random()*3)];
}

