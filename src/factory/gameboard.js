import ship from "./ships";
import generateValidSquares from "./functions/ship-validation";

function gameboard() {
  let ships = [];

  function addShip(length) {
    const direction =
      Math.floor(Math.random() * 2) === 0 ? "horizontal" : "vertical";
    console.log(length);
    console.log(ships);
    console.log(direction);
    const validSquares = generateValidSquares(length, ships, direction);

    const randomSquare =
      validSquares[Math.floor(Math.random() * validSquares.length)];
    console.log("random square:");
    console.log(randomSquare);

    ships.push(ship(length, randomSquare, direction));
  }

  addShip(4);
  addShip(3);
  addShip(3);
  addShip(2);
  addShip(2);
  addShip(2);
  addShip(1);
  addShip(1);
  addShip(1);
  addShip(1);

  console.log(ships);

  return { addShip };
}

export default gameboard;
