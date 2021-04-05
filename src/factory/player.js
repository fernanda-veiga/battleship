import gameboard from "./gameboard";

function player(turn) {
  let board = gameboard().ships;
  let availablePlays = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      availablePlays.push({ x, y });
    }
  }

  function play(playedSquare) {
    for (let i = 0; i < availablePlays.length; i++) {
      console.log(availablePlays[i]);
      console.log(i);
      if (
        playedSquare.x === availablePlays[i].x &&
        playedSquare.y === availablePlays[i].y
      ) {
        availablePlays.splice(i, 1);
        console.log(availablePlays);
        return;
      }
    }
  }

  return { board, turn, availablePlays, play };
}

export default player;
