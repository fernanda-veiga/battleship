function ship(length, firstSquare, direction = "horizontal") {
  let squares = [];
  for (let i = 0; i < length; i++) {
    if (direction === "horizontal") {
      squares.push({ x: firstSquare.x + i, y: firstSquare.y, hit: false });
    } else {
      squares.push({ x: firstSquare.x, y: firstSquare.y + i, hit: false });
    }
  }

  function hit(coordinate) {
    for (let i = 0; i < length; i++) {
      if (squares[i].x === coordinate.x && squares[i].y === coordinate.y) {
        squares[i].hit = true;
      }
    }
  }

  function isSunk() {
    return squares.every((square) => square.hit === true);
  }

  return { length, squares, hit, isSunk };
}

export default ship;
