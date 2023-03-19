import "../styles/index.css";

function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];

  function getBoard() {
    return board;
  }

  function createGameboardGrids() {
    for (let i = 0; i < columns; i++) {
      board[i] = [];

      for (let j = 0; j < rows; j++) {
        board[i].push(Cell(0));
      }
    }
  }

  function Cell(status) {
    function addToken(player) {
      status = player;
    }
    function getStatus() {
      return status;
    }

    return { status, addToken, getStatus };
  }

  function whichCellIsAvailable(column) {
    //returns which cell on the selected column is available

    if (column[0].status !== 0) {
      return;
    }

    for (let i = rows - 1; i >= 0; i--) {
      if (column[i].status === 0) {
        return column[i];
      }
    }
  }

  function dropToken(player) {
    //TO DO: edit with column parameter
    let myColumn = board[0];
    let selectedCell = whichCellIsAvailable(myColumn);

    if (selectedCell == undefined) {
      return;
    }

    // TO DO: edit as player.status
    selectedCell.status = "yy";
  }

  function displayGameboard() {
    const gameboardContainer = document.querySelector(".gameboard_container");

    const childrenOfContainer = document.querySelectorAll(
      "div.gameboard_container > *"
    );
    childrenOfContainer.forEach((element) => {
      element.remove();
    });

    for (let i = 0; i < board.length; i++) {
      const newColumn = document.createElement("div");
      newColumn.classList.add("column");
      newColumn.classList.add(`column${i}`);
      gameboardContainer.appendChild(newColumn);

      for (let j = 0; j < board[i].length; j++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.classList.add(`row${j}`);
        //add innerHTML for the cell status ??
        newRow.innerHTML = board[i][j].status;
        newColumn.appendChild(newRow);
      }
    }
  }

  return {
    board,
    getBoard,
    createGameboardGrids,
    displayGameboard,
    dropToken,
    whichCellIsAvailable,
  };
}

const gameboard = Gameboard();

gameboard.createGameboardGrids();
gameboard.displayGameboard();
console.log(gameboard.board);
console.log(gameboard.board[0]);
console.log(gameboard.board[0][0]);

//adding click events to columns
// const columns = document.querySelectorAll(".column");
// columns.forEach((column) => {
//   column.addEventListener("click", () => {
//     console.log(column);
//     gameboard.whichCellIsAvailable(column);
//   });
// });

// gameboard.dropToken();
// console.log(gameboard.board[0]);
// gameboard.dropToken();
// console.log(gameboard.board[0]);
// gameboard.displayGameboard();
