//                                  DOM Elements
const boardContainer = document.querySelector('#gameboard-container');
const controlsContainer = document.querySelector('#controls-container');

//player object (factory function)
const player = (name) => {
    name;
    return {name} 
}

const playerOne = player('Player 1');
const playerTwo = player('Player 2');

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

    const checkForWinner = (cellOne, cellTwo, cellThree) => {
        let symbol = 'x';
        let cellNumbers = [cellOne, cellTwo, cellThree];
        let i = 0;
        cellNumbers.forEach(cell => {
            const cellContent = document.getElementById(cell).textContent;
            if (cellContent === symbol) {i++}
        });
        if (i === 3) {
            console.log('Player 1 is the winner!');
         } else {}
        
         symbol = 'o';
         i = 0;
         cellNumbers.forEach(cell => {
            const cellContent = document.getElementById(cell).textContent;
            if (cellContent == symbol) {i++}
        });
        if (i === 3) {
            console.log('Player 2 is the winner!');
         } else {}
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

//                                  Gameplay
//add board to the document
gameboard.board.forEach((cell) => {
    newDiv = document.createElement('div');
    newDiv.classList.add('board-cell');
    newDiv.setAttribute('id',`${gameboard.board[cell]}`);
    newDiv.addEventListener('click', gameboard.updateBoard);
    newDiv.addEventListener('click',gameboard.runAllChecks)
    boardContainer.appendChild(newDiv);
    
});
