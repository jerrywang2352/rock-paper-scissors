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

