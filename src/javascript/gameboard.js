import { CreateMaterialsDOM } from "./dom_materials.js";

export function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];
  const domCreator = CreateMaterialsDOM();

  function getBoard() {
    return board;
  }

  function createGameboardGrids() {
    board.length = 0;

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
      console.log("this column is full");
      return;
    }

    for (let i = rows - 1; i >= 0; i--) {
      if (column[i].status === 0) {
        return column[i];
      }
    }
  }

  function dropToken(column, playerToken) {
    //TO DO: edit with column parameter
    let myColumn = column;
    //TO DO: remove this line below later
    // myColumn = board[0];

    let selectedCell = whichCellIsAvailable(myColumn);

    if (selectedCell == undefined) {
      return;
    }

    // TO DO: edit as player.status
    selectedCell.status = playerToken;
  }

  function displayGameboard() {
    domCreator.cleanExistingGameboardElements();
    domCreator.displayGameboardDOM();
    domCreator.addEventListenerToColumns();
  }

  function checkGameOver() {
    if (getBoard()[0][0].status != 0) {
      return true;
    } else {
      return false;
    }
  }

  return {
    // board,
    getBoard,
    createGameboardGrids,
    displayGameboard,
    dropToken,
    whichCellIsAvailable,
    checkGameOver,
  };
}
