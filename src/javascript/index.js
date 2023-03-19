import "../styles/index.css";

function CreateMaterialsDOM() {
  const gameboardContainer = document.querySelector(".gameboard_container");

  function playRoundClickEvent(event) {
    let columnNumber = event.target.dataset.column_number;
    let selectedColumn = game.gameboard.getBoard()[columnNumber];
    // console.log(columnNumber);
    // console.log(selectedColumn);
    game.playRound(selectedColumn);
    console.log(selectedColumn);
    // console.log(game.getActivePlayer());
  }

  function addEventListenerToColumns() {
    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
      column.addEventListener("click", (event) => {
        // console.log(event.target.dataset.column_number);
        playRoundClickEvent(event);
      });
    });
  }

  function cleanExistingGameboardElements() {
    const childrenOfContainer = document.querySelectorAll(
      "div.gameboard_container > *"
    );
    childrenOfContainer.forEach((element) => {
      element.remove();
    });
  }

  function displayGameboardDOM() {
    for (let i = 0; i < game.gameboard.getBoard().length; i++) {
      const newColumn = document.createElement("div");
      newColumn.classList.add("column");
      newColumn.setAttribute("data-column_number", i);
      // newColumn.classList.add(`column${i}`);
      gameboardContainer.appendChild(newColumn);

      for (let j = 0; j < game.gameboard.getBoard()[i].length; j++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.setAttribute("data-row_number", j);
        // newRow.classList.add(`row${j}`);
        //add innerHTML for the cell status ??
        newRow.innerHTML = game.gameboard.getBoard()[i][j].status;
        newColumn.appendChild(newRow);
      }
    }
  }

  return {
    addEventListenerToColumns,
    cleanExistingGameboardElements,
    displayGameboardDOM,
  };
}

function Gameboard() {
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

  return {
    // board,
    getBoard,
    createGameboardGrids,
    displayGameboard,
    dropToken,
    whichCellIsAvailable,
  };
}

function GameController() {
  const gameboard = Gameboard(); // don't change the name

  const playerOneName = "Berk";
  const playerTwoName = "Efe";

  const players = [
    {
      name: playerOneName,
      token: "token_player_1",
    },
    {
      name: playerTwoName,
      token: "token_player_2",
    },
  ];

  let activePlayer = players[0];

  function getActivePlayer() {
    return activePlayer;
  }

  function switchPlayerTurn() {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  }

  function startNewGame() {
    gameboard.createGameboardGrids();
    gameboard.displayGameboard();
  }

  function displayNewRound() {
    gameboard.displayGameboard();
    console.log(`it is ${getActivePlayer().name}´s turn`);
  }

  function playRound(column) {
    console.log(`${getActivePlayer().name} is playing his turn`);
    if (gameboard.whichCellIsAvailable(column) != undefined) {
      gameboard.dropToken(column, getActivePlayer().token);
      gameboard.displayGameboard();
      switchPlayerTurn();
    }
  }

  return {
    gameboard,
    switchPlayerTurn,
    displayNewRound,
    getActivePlayer,
    playRound,
    startNewGame,
  };
}

const game = GameController(); // don't change the name
game.startNewGame();

console.log(game.gameboard.getBoard());
console.log(game.gameboard.getBoard()[0]);
console.log(game.gameboard.getBoard()[0][0]);

// game.gameboard.createGameboardGrids();
game.playRound(game.gameboard.getBoard()[0]);
game.startNewGame();
