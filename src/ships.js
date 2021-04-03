function ship(length) {
  const squares = [1, 2, 3, 4];
  let hits = [false, false, false, false];

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
