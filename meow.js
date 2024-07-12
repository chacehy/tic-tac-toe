let gameBoard = [null, null, null, null, null, null, null, null, null];
class player {
  constructor(marker) {
    this.marker = marker;
  }
}

const p1 = new player("X");
const p2 = new player("O");
let currentPlayer = p1;

const resetGame = () => {
  gameBoard = [null, null, null, null, null, null, null, null, null];
  currentPlayer = p1;
};
let game = (index) => {
  if (gameBoard[index] === null) {
    gameBoard[index] = currentPlayer.marker;

    if (checkWin(currentPlayer.marker)) {
      console.info(`Game Over, ${currentPlayer.marker} won!`);
      resetGame();
    } else if (gameBoard.every((cell) => cell !== null)) {
      console.info("Game Over, it's a draw!");
      resetGame();
    } else {
      switchPlayer();
    }
  } else {
    console.error("Non-valid move due to an existing play");
  }
};
let checkWin = (marker) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winPatterns.some((pattern) => {
    return pattern.every((index) => {
      return gameBoard[index] === marker;
    });
  });
};

let switchPlayer = () => {
  currentPlayer = currentPlayer === p1 ? p2 : p1;
};
let gameFlow = () => {
  let currentPlayer = p1.marker;
};
