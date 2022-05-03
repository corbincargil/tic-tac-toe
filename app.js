//                                  DOM Elements
const boardContainer = document.querySelector('#gameboard-container');
const controlsContainer = document.querySelector('#controls-container');

//player object (factory function)
const player = (name,symbol) => {
    name;
    symbol;
    let selection;
    return {name, symbol, selection} 
}

const playerOne = player('Player 1','x');
const playerTwo = player('Player 2', 'o');

//gameboard object (module pattern)
const gameboard = (() => {
    const board = [];
    (() => {
        for (let i = 0; i < 9; i++) {board.push(i);}
        return board;
    })();
    const updateBoard = (player, cellNumber) => {
        symbol = player.symbol;
        const cell = boardContainer.getElementById(cellNumber);
    }
    return {board}
})();



//game controls (module pattern)

//                                  Gameplay

//add board to the document
gameboard.board.forEach((cell) => {
    newDiv = document.createElement('div');
    newDiv.classList.add('board-cell');
    newDiv.setAttribute('id',`${gameboard.board[cell]}`);
    boardContainer.appendChild(newDiv);
});
