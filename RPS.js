let r = "rock";
let p = "paper";
let s = "scissors"
let choice = [r,p,s];

let pWin = "Player Wins";
let cWin = "Computer Wins"
let cWinCount = 0;
let pWinCount = 0;
let gameCount = 0;

function computerPlay(){
    let x = choice[Math.floor(Math.random()*choice.length)];
    return x;
}
function playGame(playerSelection){
    computerSelection = computerPlay();
    if (playerSelection == computerSelection){
        console.log("Tie!");
        return 0;
    }
    else if ((computerSelection == 'rock') && (playerSelection == 'paper')){
        console.log ("Computer chose "+computerSelection+" "+pWin);
        return pWinCount++;
    }
    else if ((computerSelection == 'rock') && (playerSelection == 'scissors')){
        console.log("Computer chose "+computerSelection+" "+cWin);
        return cWinCount++;
    }
    else if ((computerSelection == 'scissors') && (playerSelection == 'paper')){
        console.log("Computer chose "+computerSelection+" "+cWin);
        return cWinCount++;
    }
    else if ((computerSelection == 'scissors') && (playerSelection == 'rock')){
        console.log("Computer chose "+computerSelection+" "+pWin);
        return pWinCount++;
    }
    else if ((computerSelection == 'paper') && (playerSelection == 'rock')){
        console.log("Computer chose "+computerSelection+" "+cWin)
        return cWinCount++;
    }
    else if ((computerSelection == 'paper') && (playerSelection == 'scissors')){
        console.log("Computer chose "+computerSelection+" "+pWin);
        return pWinCount++;
    }
    else{
        console.log("You did not choose Rock, Paper or Scissors "+cWin)
        return cWinCount++;
    }

}

function winner(playerWins, compWins){
    if (playerWins > compWins){
        console.log("Player Wins!")
    }
    else{
        console.log("Computer Wins")
    }
}

function game(){
    while ((cWinCount<5) && (pWinCount<5)){
        gameCount++;
        const playerSelection = prompt("Enter your move: ").toLowerCase();
        console.log("Game "+ gameCount);
        playGame(playerSelection);
        console.log("Score : "+cWinCount, pWinCount);
        
        
    }
   winner(pWinCount, cWinCount)
}
console.log(game());