import React, { useEffect } from "react";
import Grid from "./Grid";
import game from "../factory/game";
import "../styles/App.css";

function App() {
  useEffect(() => {
    const newGame = game();
    console.log(newGame);
  }, []);

  return (
    <div className="App">
      <Grid player="player1" description="Your grid" />
      <Grid player="player2" description="Opponent's grid" />
    </div>
  );
}

export default App;
/*ships={newGame.player1.board}*/
