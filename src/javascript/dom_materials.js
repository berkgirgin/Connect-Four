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
