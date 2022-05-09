//                                  DOM Elements
const boardContainer = document.querySelector('#gameboard-container');
const controlsContainer = document.querySelector('#controls-container');
const playerOneContainer = document.querySelector('#player-one-container');
const playerTwoContainer = document.querySelector('#player-two-container');
const playerOnePic = document.querySelector('#pic-one-container');
const playerTwoPic = document.querySelector('#pic-two-container');
const playerOneWinner = playerOneContainer.querySelector('.win-status');
const playerTwoWinner = playerTwoContainer.querySelector('.win-status');
const resetButton = document.getElementById('reset-btn');




//player object (factory function)
const player = (name, number) => {
    name;
    number; 
    
    const toggleTurnStatus = (number) => {
        if (number == 1) {
            playerOneContainer.classList.toggle('your-turn');
            playerOneStatus = playerOneContainer.querySelector('.turn-status');
            playerOneStatus.classList.toggle('your-turn');
            playerOneStatus.classList.toggle('not-your-turn');
            playerOnePic.classList.toggle('your-turn');
            playerOnePic.classList.toggle('not-your-turn');
        } else if (number == 2) {
            playerTwoContainer.classList.toggle('your-turn');
            playerTwoStatus = playerTwoContainer.querySelector('.turn-status');
            playerTwoStatus.classList.toggle('your-turn');
            playerTwoStatus.classList.toggle('not-your-turn');
            playerTwoPic.classList.toggle('your-turn');
            playerTwoPic.classList.toggle('not-your-turn');
        } else {console.log('No player # input')}

    }

    const toggleWinner = (number) => {
        if (number == 1) {
            playerOneContainer.classList.toggle('winner');
            playerOneWinner.classList.toggle('winner');
            playerOneWinner.classList.toggle('off');
        } else if (number == 2) {
            playerTwoContainer.classList.toggle('winner');
            playerTwoWinner.classList.toggle('winner');
            playerTwoWinner.classList.toggle('off');


        } else {console.log('no player # for winner')}
    }

    const toggleLoser = (number) => {
        if (number == 1) {
            playerOneContainer.classList.toggle('loser');
        } else if (number == 2) {
            playerTwoContainer.classList.toggle('loser');
        } else {console.log('no player # for loser')}
    }

    return {name, toggleTurnStatus, toggleWinner, toggleLoser}
}

const playerOne = player('Player 1',1);
const playerTwo = player('Player 2',2);

//gameboard object (module pattern)
const gameboard = (() => {
    const board = [];
    (() => {
        for (let i = 0; i < 9; i++) {board.push(i);}
        return board;
    })();

    const updateBoard = (cellClicked) => {
        let symbol;
        if (boardContainer.classList.contains('player-1')) {symbol = 'x'}
        else {symbol = 'o'}
        boardContainer.classList.toggle('player-1')
        boardContainer.classList.toggle('player-2')
        const cellNumber = cellClicked.target.id;
        cell = document.getElementById(cellNumber);
        cell.textContent = symbol;
    }

    const gameFinish = () => {
        board.forEach(cell => {
            cell = document.getElementById(cell);
            cell.removeEventListener('click', gameboard.updateBoard, {once:true});
            cell.removeEventListener('click', gameboard.runAllChecks);
            playerOneContainer.querySelector('.turn-status').classList.add('off');
            playerTwoContainer.querySelector('.turn-status').classList.add('off');
        });

    }

    const checkForWinner = (cellOne, cellTwo, cellThree) => {
        let symbol = 'x';
        let cellNumbers = [cellOne, cellTwo, cellThree];
        let i = 0;
        cellNumbers.forEach(cell => {
            const cellContent = document.getElementById(cell).textContent;
            if (cellContent === symbol) {i++}
        })
        if (i === 3) {
            playerOne.toggleWinner(1);
            playerTwo.toggleLoser(2);
            // playerOneContainer.querySelector('.player-status').textContent = 'WINNER!'
            gameFinish();
        }
        
        symbol = 'o';
        i = 0;
        cellNumbers.forEach(cell => {
            const cellContent = document.getElementById(cell).textContent;
            if (cellContent == symbol) {i++}
            })
        if (i === 3) {
            playerOne.toggleLoser(1);
            playerTwo.toggleWinner(2);

            gameFinish();
        }
    }

    const runAllChecks = () => {
        checkForWinner(0,1,2);
        checkForWinner(3,4,5);
        checkForWinner(6,7,8);
        checkForWinner(0,3,6);
        checkForWinner(1,4,7);
        checkForWinner(2,5,8);
        checkForWinner(0,4,8);
        checkForWinner(2,4,6);
    }

    return {board, updateBoard, runAllChecks}
})();

//game controls (module pattern)
const gameControls = (() => {
    
})();

//add board to the document
gameboard.board.forEach((cell) => {
    newDiv = document.createElement('div');
    newDiv.classList.add('board-cell');
    newDiv.setAttribute('id',`${gameboard.board[cell]}`);
    newDiv.addEventListener('click', gameboard.updateBoard, {once:true});
    newDiv.addEventListener('click', gameboard.runAllChecks);
    newDiv.addEventListener('click', () => {playerOne.toggleTurnStatus(1)},{once:true});
    newDiv.addEventListener('click', () => {playerTwo.toggleTurnStatus(2)}, {once:true});
    boardContainer.appendChild(newDiv);
});