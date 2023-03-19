import { Gameboard } from "./gameboard.js";

export function GameController() {
  const gameboard = Gameboard(); // don't change the name

  const playerOneName = "Berk";
  const playerTwoName = "Efe";

  const players = [
    {
      name: playerOneName,
      token: "1",
    },
    {
      name: playerTwoName,
      token: "2",
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

  function gameOver() {
    if (checkGameOver()) {
      alert("Gameover bro");
      startNewGame();
    }
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
    gameOver,
  };
}
