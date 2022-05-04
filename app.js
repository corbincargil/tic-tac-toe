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
            const cellContent = board[cell].textContent;
            if (cellContent == symbol) {i++}
        });
        if (i === 3) {
            console.log('Player 1 is the winner!');
         } else {}
        
         symbol = 'o';
         i = 0;
         cellNumbers.forEach(cell => {
            const cellContent = board[cell].textContent;
            if (cellContent == symbol) {i++}
        });
        if (i === 3) {
            console.log('Player 2 is the winner!');
         } else {}
    }

    return {board, updateBoard, checkForWinner}
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
    newDiv.addEventListener('click',gameboard.checkForWinner(0,1,2))
    boardContainer.appendChild(newDiv);
    
});
