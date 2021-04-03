//import ship from "./ships";

function gameboard(ships) {
  const board = new Array(100).fill(false);

  ships.forEach((item) => {
    item.squares.forEach((square) => {
      board[square] = true;
    });
  });

  return { board };
}

export default gameboard;
