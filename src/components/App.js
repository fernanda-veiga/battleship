import React, { useEffect } from "react";
import Header from "./Header";
import Grid from "./Grid";
import game from "../factory/game";
import "../styles/App.css";

function App() {
  useEffect(() => {
    const newGame = game();
    console.log(newGame);

    const randomizeBtn = document.querySelector(".randomize-btn");
    randomizeBtn.addEventListener("click", newGame.player1.randomizeBoard);

    const startGameBtn = document.querySelector(".start-btn");
    startGameBtn.addEventListener("click", () => {
      newGame.addEventToDivs(true);
      startGameBtn.disabled = true;
      randomizeBtn.disabled = true;
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="game-container">
          <Grid player="player1" description="Your grid" />
          <Grid player="player2" description="Opponent's grid" />
        </div>
        <div className="info-container">
          <div className="info-display"></div>
          <div className="button-container">
            <button type="button" className="randomize-btn">
              Randomize Grid
            </button>
            <button type="button" className="start-btn">
              Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
