const gameCells = document.querySelectorAll('.cel');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const restartBtn = document.querySelector('.restartBtn');
const alertBox = document.querySelector('.alertBox');

// Making Variables
let currentplayer = 'X';
let nextPlayer = 'O';
let playerTurn = currentplayer;
player1.textContent = `Player 1: ${currentplayer}`;
player2.textContent = `Player 2: ${nextPlayer}`;


// Function to Start your Game
const startGame = ()=> {
    gameCells.forEach(cell => {
        cell.addEventListener('click',handleClick);
    });
}

// Click handling Function
const handleClick = (e)=>{
    if(e.target.textContent === ''){
        e.target.textContent = playerTurn;
        if(checkWin()){
            //console.log(`${playerTurn} is a Winner!`);
            showAlert(`${playerTurn} Player is a Winner!`);
            disableCells();
        }else if(checkTie()){
            //console.log('Its a Tie');
            showAlert(`It's a Tie!`);
            disableCells();
        }else{
            playerChangeTurn();
            showAlert(`Turn for player: ${playerTurn}`);
        }   
    }
}

// Function to playerChangeTurn your Game
const playerChangeTurn = ()=>{
    // if(playerTurn === currentplayer){
    //     playerTurn = nextPlayer;
    // }else{
    //     playerTurn = currentplayer;
    // }
    playerTurn = playerTurn === currentplayer ? nextPlayer : currentplayer;
}

// Function to check Win
const checkWin = ()=>{
    const winningConditions = [
        [0, 1 ,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for(let i = 0; i < winningConditions.length; i++){
        const [pos1, pos2, pos3] = winningConditions[i];
        if( gameCells[pos1].textContent !== '' && 
            gameCells[pos1].textContent === gameCells[pos2].textContent &&
            gameCells[pos2].textContent === gameCells[pos3].textContent){
                return true;
        }
    }
    return false;
}

// Function to check Tie
const checkTie = ()=>{
    let emptyCellsCount = 0;
    gameCells.forEach(cell=>{
        if(cell.textContent === ''){
            emptyCellsCount++
        }
    });
    return emptyCellsCount === 0 && !checkWin();
}

//Function disable cell after win and tie the game
const disableCells = ()=>{
    gameCells.forEach(cell=>{
        cell.removeEventListener('click',handleClick);
        cell.classList.add('disabled');
    });
}

// Function Restart the Game
const restartGame = ()=>{
    gameCells.forEach(cell=>{
        cell.textContent = '';
        cell.classList.remove('disabled');
    });
    startGame();
}

//function to show alert msg
const showAlert = (msg)=>{
    alertBox.style.display = 'block';
    alertBox.textContent = msg;
    setTimeout(()=>{
        alertBox.style.display = 'none';
    },3000)

}

//addeventlistener to restart button
restartBtn.addEventListener('click',restartGame);
//calling start game function
startGame();

