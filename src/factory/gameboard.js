import ship from "./ships";
import generateValidSquares from "./functions/ship-validation";

function gameboard() {
  let ships = [];

  function addShip(length) {
    const direction =
      Math.floor(Math.random() * 2) === 0 ? "horizontal" : "vertical";
    const validSquares = generateValidSquares(length, ships, direction);

    const randomSquare =
      validSquares[Math.floor(Math.random() * validSquares.length)];

    ships.push(ship(length, randomSquare, direction));
  }

  const shipsLength = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  shipsLength.forEach((length) => addShip(length));

  return { ships };
}

export default gameboard;
