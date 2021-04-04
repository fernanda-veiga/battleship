import ship from "../ships";

function generateValidSquares(length, ships, direction) {
  const validSquares = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const currentSquare = { x, y };
      const currentShip = ship(length, currentSquare, direction);

      //Validations
      if (isShipInvalid(currentShip) === true) continue;
      if (isShipOverlapping(currentShip.squares, ships) === true) continue;
      if (isShipAdjacent(currentShip, ships) === true) continue;

      validSquares.push(currentSquare);
    }
  }
  return validSquares;
}

function isShipInvalid(ship) {
  const lastSquare = ship.squares[ship.length - 1];

  if (lastSquare.x > 9 || lastSquare.y > 9) {
    return true;
  }
  return false;
}

function isShipOverlapping(squares, ships) {
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < ships.length; j++) {
      for (let k = 0; k < ships[j].squares.length; k++) {
        if (
          squares[i].x === ships[j].squares[k].x &&
          squares[i].y === ships[j].squares[k].y
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

function isShipAdjacent(ship, ships) {
  function generateAdjacentSquares(square) {
    return [
      { x: square.x - 1, y: square.y },
      { x: square.x + 1, y: square.y },
      { x: square.x, y: square.y - 1 },
      { x: square.x, y: square.y + 1 },
      { x: square.x - 1, y: square.y - 1 },
      { x: square.x - 1, y: square.y + 1 },
      { x: square.x + 1, y: square.y - 1 },
      { x: square.x + 1, y: square.y + 1 },
    ];
  }

  for (let i = 0; i < ship.squares.length; i++) {
    const adjacentSquares = generateAdjacentSquares(ship.squares[i]);
    return isShipOverlapping(adjacentSquares, ships);
  }
  return false;
}

export default generateValidSquares;
export { isShipInvalid, isShipOverlapping, isShipAdjacent };
