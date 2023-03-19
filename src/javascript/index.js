import "../styles/index.css";
// import { CreateMaterialsDOM } from "./dom_materials.js";
// import { Gameboard } from "./gameboard.js";
import { GameController } from "./gamecontroller.js";

export const game = GameController(); // don't change the name
game.startNewGame();

console.log(game.gameboard.getBoard());
console.log(game.gameboard.getBoard()[0]);
console.log(game.gameboard.getBoard()[0][0]);

game.playRound(game.gameboard.getBoard()[0]);
game.startNewGame();
