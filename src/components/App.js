import React, { useEffect } from "react";
import Header from "./Header";
import Grid from "./Grid";
import game from "../factory/game";
import "../styles/App.css";

function App() {
  useEffect(() => {
    const newGame = game();
    const randomizeBtn = document.querySelector(".randomize-btn");
    randomizeBtn.addEventListener("click", newGame.player1.randomizeBoard);
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
          <button type="button" className="randomize-btn">
            Randomize grid
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
