//gameboard object (module pattern)
const gameboard = (() => {
    const board = [];
    const _createGameboard = () => {
        for (let i = 0; i < 9; i++) {
            board += array[i];
        }
    }

})();

//player object (factory function)
const player = (name,symbol,) => {
    name;
    symbol;
    selection;
    return {name, symbol, selection} 
}

const playerOne = player('Player 1','x');

console.log(playerOne.name);

//game controls (module pattern)