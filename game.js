game(); 
function game() {
    let playerCount = 0;
    let computerCount = 0; 
    const output = document.querySelector(".output");

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click',() => {
            let playerSelection = button.innerHTML;
            let computerSelection = computerPlay(); 
            let results = playRound(playerSelection,computerSelection); 
            
            //Update win counters
            if (results.slice(0,9) == "You Lose!") {
                computerCount ++; 
            } else if (results.slice(0,8) == "You Win!") {
                playerCount ++; 
            } 
            
            //display results
            if (computerCount == 5) {
                output.textContent = "Player has won!!!!"; 
            } else if (playerCount == 5) {
                output.textContent = "Computer has won!!!!";
            } else {
                output.innerHTML = `Player chose: ${playerSelection}<br>`+ 
                `Computer chose: ${computerSelection}<br>`+"-------------------------------<br>"
                +results;
            }
        });
    }); 
}

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

