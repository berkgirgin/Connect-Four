import { game } from "./index.js";

export function CreateMaterialsDOM() {
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

  function EventListenerToColumns() {
    const columns = document.querySelectorAll(".column");

    function add() {
      columns.forEach((column) => {
        column.addEventListener("click", (event) => {
          // console.log(event.target.dataset.column_number);
          playRoundClickEvent(event);
        });
      });
    }

    function remove() {
      columns.forEach((column) => {
        column.removeEventListener("click", (event) => {
          // console.log(event.target.dataset.column_number);
          playRoundClickEvent(event);
        });
      });
    }

    return { add, remove };
  }

  function addEventListenerToNewGameButton() {
    const newGameButton = document.querySelector(".new_game_button");
    newGameButton.addEventListener("click", () => {
      game.startNewGame();
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
        if (game.gameboard.getBoard()[i][j].status == 1) {
          newRow.setAttribute(
            "style",
            "background-color: var(--player-1-color);"
          );
        } else if (game.gameboard.getBoard()[i][j].status == 2) {
          newRow.setAttribute(
            "style",
            "background-color: var(--player-2-color);"
          );
        }

        if (game.gameboard.getBoard()[i][j].isWinningCell == true) {
          newRow.classList.add("winning_row");
        }
        newColumn.appendChild(newRow);
      }
    }

    const player1Name = document.querySelector(".player_1_name");
    const player2Name = document.querySelector(".player_2_name");
    player1Name.innerHTML = game.getPlayers()[0].name.toUpperCase();
    player2Name.innerHTML = game.getPlayers()[1].name.toUpperCase();
  }

  function displayRoundStatusMessage(activePlayer, status_message) {
    const player1_StatusRound = document.querySelector(
      ".player_1_status_round"
    );
    const player2_StatusRound = document.querySelector(
      ".player_2_status_round"
    );

    if (activePlayer === game.getPlayers()[0]) {
      player1_StatusRound.innerHTML = status_message;
      player2_StatusRound.innerHTML = "...";
    } else if (activePlayer === game.getPlayers()[1]) {
      player1_StatusRound.innerHTML = "...";
      player2_StatusRound.innerHTML = status_message;
    }
  }

  function displayWinningStatusMessage(status_message) {
    const statusWinning = document.querySelector(".status_winning");
    statusWinning.innerHTML = status_message;
  }

  function endGameDOM() {
    const overlay = document.querySelector(".overlay_for_pop_ups");

    const gameoverPopUp = document.querySelector(".gameover_pop_up");

    function add() {
      overlay.classList.add("active");
      gameoverPopUp.classList.add("active");
    }
    function remove() {
      overlay.classList.remove("active");
      gameoverPopUp.classList.remove("active");
    }
    return { add, remove };
  }
  return {
    EventListenerToColumns,
    cleanExistingGameboardElements,
    displayGameboardDOM,
    displayRoundStatusMessage,
    displayWinningStatusMessage,
    addEventListenerToNewGameButton,
    endGameDOM,
  };
}
