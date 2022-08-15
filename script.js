// Module pattern
const gameBoard = (() => {
  const arrayGameBoard = ['', '', '', '', '', '', '', '', ''];
  const renderGameBoard = () => {
    const container = document.querySelector('.gameboard');
    arrayGameBoard.forEach((marker) => {
      const boardCell = document.createElement('div');
      boardCell.classList.add('gameboard__cell');
      boardCell.textContent = marker;
      container.appendChild(boardCell);
    });
  };

  return { arrayGameBoard, renderGameBoard };
})();

// Factory function
// TODO Create a function inside player object that allows players to add their marker in board
const Player = (name, marker) => {
  let currentScore;
  let wins;
  const displayName = name;
  return { name, marker, displayName };
};

// displayController
const displayController = () => {
  gameBoard.renderGameBoard();
  const playerOne = Player('One', 'X');
  const playerTwo = Player('Two', 'O');
  let currentPlayer = playerOne;

  const addMarkerToBoard = () => {
    const boardCells = document.querySelectorAll('.gameboard__cell');
    boardCells.forEach((boardCell) => {
      boardCell.addEventListener('click', () => {
        if (!boardCell.textContent) boardCell.textContent = currentPlayer.marker;
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
      });
    });
  };

  addMarkerToBoard();
};

displayController();

// Winning conditions
// [0, 1 , 2] , [3, 4, 5] , [6, 7, 8]
// [0, 3, 6] , [1, 4, 7], [2, 5, 8]
// [0, 4, 8], [2, 4, 6]
