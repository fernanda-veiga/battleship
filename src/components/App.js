import React from "react";
import Grid from "./Grid";
import game from "../factory/game";
import "../styles/App.css";

const newGame = game();

function App() {
  return (
    <div className="App">
      <Grid player="player1" ships={newGame.player1.board} />
      <Grid player="player2" ships={newGame.player2.board} />
    </div>
  );
}

export default App;
