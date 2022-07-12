game(); 

function computerPlay() {
    random = Math.floor(Math.random()*3);
    if (random == 0) {
        return "Rock"
    } else if (random == 1) {
        return "Paper";
    } else {
        return "Scissors"; 
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock!"; 
        } else if (computerSelection =="Scissors") {
            return "You Win! Rock beats Scissors!"; 
        } else {
            return "Draw!!"; 
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return "You Lose! Scissors beats Paper!"; 
        } else if (computerSelection =="Rock") {
            return "You Win! Paper beats Rock!"; 
        } else {
            return "Draw!!"; 
        }        
    } else {
        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors!"; 
        } else if (computerSelection =="Paper") {
            return "You Win! Scissors beats Paper!"; 
        } else {
            return "Draw!!"; 
        }
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0; 
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay(); 
        let results = playRound(playerSelection,computerSelection); 
        console.log(`Player chose: ${playerSelection}`); 
        console.log(`Computer chose: ${computerSelection}`); 
        console.log(results);
        console.log("-------------------------------");
        if (results.slice(0,9) == "You Lose!") {
            computerCount ++; 
        } else if (results.slice(0,8) == "You Win!") {
            playerCount ++; 
        } 
    } 

    //evaluate results of the 5 rounds 
    if (playerCount > computerCount) {
        console.log("Player has won!!!!"); 
    } else if (playerCount < computerCount) {
        console.log("Computer has won!!!!");
    } else {
        console.log("Draw!!!");
    }
}
