// Module pattern
const gameBoard = (() => {
  const arrayGameBoard = ['X', 'O', 'X', '', 'X', 'O', '', '', ''];
  const renderGameBoard = () => {
    const container = document.querySelector('.gameboard');
    arrayGameBoard.forEach((marker) => {
      const boardCell = document.createElement('div');
      boardCell.classList.add('gameboard__cell');
      boardCell.textContent = marker;
      container.appendChild(boardCell);
    });
  };

  // TODO create a function that decides that current player and switches after they place their marker
  const currentTurn = () => {};

  return { arrayGameBoard, renderGameBoard };
})();

// Factory function
// TODO Create a function inside player object that allows players to add their marker in board
const Player = (name, marker) => {
  // const wins = 0;
  const addMarkerToBoard = () => {
    const boardCells = document.querySelectorAll('.gameboard__cell');
    boardCells.forEach((boardCell) => {
      boardCell.addEventListener('click', () => {
        if (!boardCell.textContent) {
          boardCell.textContent = marker;
          console.log('test');
        }
      });
    });
  };
  return { name, addMarkerToBoard };
};

// displayController
const displayController = () => {
  gameBoard.renderGameBoard();
};

displayController();

// Winning conditions
// [0, 1 , 2] , [3, 4, 5] , [6, 7, 8]
// [0, 3, 6] , [1, 4, 7], [2, 5, 8]
// [0, 4, 8], [2, 4, 6]
