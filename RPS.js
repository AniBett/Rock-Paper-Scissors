let r = "rock";
let p = "paper";
let s = "scissors"
let choice = [r,p,s];
const results = document.querySelector('#Results');
const content = document.createElement('div');
content.classList.add('content');

let playAgain = document.createElement('button');
playAgain.id = 'myButton';
playAgain.innerHTML = 'Play Again?';

let winCount = document.createElement('div')
winCount.id = "winCount"

let gameNum = document.createElement('div')



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
        content.textContent = 'Tie';
        results.appendChild(content);
        return 0;
    }
    else if ((computerSelection == 'rock') && (playerSelection == 'paper')){
        console.log ("Computer chose "+computerSelection+" "+pWin);
        content.textContent = "Computer chose "+computerSelection+" "+pWin;
        results.appendChild(content);
        return pWinCount++;
    }
    else if ((computerSelection == 'rock') && (playerSelection == 'scissors')){
        console.log("Computer chose "+computerSelection+" "+cWin);
        content.textContent = "Computer chose "+computerSelection+" "+cWin;
        results.appendChild(content);
        return cWinCount++;
    }
    else if ((computerSelection == 'scissors') && (playerSelection == 'paper')){
        console.log("Computer chose "+computerSelection+" "+cWin);
        content.textContent = "Computer chose "+computerSelection+" "+cWin;
        results.appendChild(content);
        return cWinCount++;
    }
    else if ((computerSelection == 'scissors') && (playerSelection == 'rock')){
        console.log("Computer chose "+computerSelection+" "+pWin);
        content.textContent = "Computer chose "+computerSelection+" "+pWin;
        results.appendChild(content);
        return pWinCount++;
    }
    else if ((computerSelection == 'paper') && (playerSelection == 'rock')){
        console.log("Computer chose "+computerSelection+" "+cWin)
        content.textContent = "Computer chose "+computerSelection+" "+cWin;
        results.appendChild(content);
        return cWinCount++;
    }
    else if ((computerSelection == 'paper') && (playerSelection == 'scissors')){
        console.log("Computer chose "+computerSelection+" "+pWin);
        content.textContent = "Computer chose "+computerSelection+" "+pWin;
        results.appendChild(content);
        return pWinCount++;
    }
    else{
        console.log("You did not choose Rock, Paper or Scissors "+cWin)
        content.textContent = "You did not choose Rock, Paper or Scissors "+cWin;
        results.appendChild(content);
        return cWinCount++;
    }

}

function winner(playerWins, compWins){
    if (playerWins > compWins){
        console.log("Player Wins!")
        
        content.textContent = 'Player Wins!';
        results.appendChild(content);

    }
    else{
        console.log("Computer Wins")
        
        content.textContent = 'Computer Wins!';
        results.appendChild(content);
    }
}
function again() {
  
    document.querySelectorAll('#container button').forEach(elem => {
        elem.disabled = true;
      });
    let buttonPress = document.querySelector("#myButton")
    buttonPress.addEventListener('click', () => {
        results.removeChild(content)
        results.removeChild(playAgain)
        results.removeChild(winCount)
        results.removeChild(gameNum)
        document.querySelectorAll('#container button').forEach(elem => {
            elem.disabled = false;
          });
        
    
    
      });
}

function game(playerSelection){
 
        gameCount++;
        gameNum.textContent = 'Game Number: '+gameCount
        results.appendChild(gameNum) 

        console.log("Game "+ gameCount);
        playGame(playerSelection);
        console.log("Score : "+cWinCount, pWinCount);
        winCount.textContent = "Computer: "+cWinCount+" Player:"+pWinCount;
        results.appendChild(winCount)
        if (cWinCount >= 5 || pWinCount >= 5){
            winner(pWinCount, cWinCount)
            gameCount = 0
            pWinCount = 0
            cWinCount = 0
            results.appendChild(playAgain);
            again()
        }

        
        
        
        
    }
  

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    game(playerSelection)

  });
});




