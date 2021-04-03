//import ship from "./ships";

function gameboard() {
  //const board = new Array(100).fill(false);
  let board = [];

  function validateShip(ship) {
    const lastSquare = ship.squares[ship.length - 1];

    if (lastSquare.x > 9 || lastSquare.y > 9) {
      return false;
    }
    return true;
  }

  /*function generateShip() {
    const availableFirstSquareHorizontal = [];
    const availableFirstSquareVertical = [];

    board.forEach(square => {
      if ()
    })
  }*/

  /*ships.forEach((item) => {
    item.squares.forEach((square) => {
      board[square] = true;
    });
  });*/

  return { board, isShipValid };
}

export default gameboard;
