import React, { useEffect } from "react";
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
      <Grid player="player1" description="Your grid" />
      <Grid player="player2" description="Opponent's grid" />
      <button type="button" className="randomize-btn">
        Randomize grid
      </button>
    </div>
  );
}

export default App;
/*ships={newGame.player1.board}*/
