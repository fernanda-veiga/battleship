function ship(length, firstSquare, direction = "horizontal") {
  let squares = [];
  for (let i = 0; i < length; i++) {
    if (direction === "horizontal") {
      squares.push(firstSquare + i);
    } else {
      squares.push(firstSquare + 10 * i);
    }
  }

  let hits = new Array(length).fill(false);

  function hit(number) {
    if (squares.includes(number)) {
      hits[squares.indexOf(number)] = true;
    }
  }

  function isSunk() {
    return hits.every((hit) => hit === true);
  }

  return { length, squares, hits, hit, isSunk };
}

export default ship;
