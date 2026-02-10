const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW='DRAW';
const RESULT_PLAYER_WINNER='PLAYER_WINS';
const RESULT_COMPUTER_WINNER='COMPUTER_WINS';

const getPlayerChoice = function() {
  const selection=prompt(`${ROCK},${PAPER} or ${SCISSORS} ?`,'').toUpperCase();
  if(selection!==ROCK && selection!==PAPER && selection!==SCISSORS){
    alert('Invalid User Input');
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getWinner=(cChoice,pChoice) => cChoice===pChoice ? RESULT_DRAW : cChoice===ROCK && pChoice===PAPER || cChoice===PAPER && pChoice===SCISSORS || cChoice===SCISSORS && pChoice===ROCK ? RESULT_PLAYER_WINNER : RESULT_COMPUTER_WINNER;
const getComputerChoice=function() {
  const randomValue=Math.random();
  if(randomValue<0.34){
    return ROCK;
  }else if(randomValue<0.67){
    return PAPER;
  }else{
    return SCISSORS;
  }
};

startGameBtn.addEventListener('click', function() {
  console.log("Game is starting...");
  const playerSelection=getPlayerChoice();
  const computerSelection=getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  const winner=getWinner(computerSelection,playerSelection);
  console.log(winner);
});
