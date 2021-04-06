import gameboard from "./gameboard";

function player(name) {
  let board = gameboard().ships;
  let availablePlays = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      availablePlays.push({ x, y });
    }
  }

  function removeClassFromShips() {
    const grid = document.querySelector(`.${name}`);
    const gridShips = grid.querySelectorAll(".ship");
    gridShips.forEach((ship) => {
      ship.classList.remove("ship");
    });
  }

  function addClassToShips() {
    board.forEach((ship) => {
      ship.squares.forEach((square) => {
        document
          .querySelector(`#${name}-${square.x}${square.y}`)
          .classList.add("ship");
      });
    });
  }
  addClassToShips();

  function randomizeBoard() {
    removeClassFromShips();
    board = gameboard().ships;
    addClassToShips();
  }

  function removeAvailablePlay(playedSquare) {
    for (let i = 0; i < availablePlays.length; i++) {
      if (
        playedSquare.x === availablePlays[i].x &&
        playedSquare.y === availablePlays[i].y
      ) {
        availablePlays.splice(i, 1);
        return;
      }
    }
  }

  function sunkAllShips() {
    if (board.every((ship) => ship.isSunk() === true)) {
      return true;
    }
  }

  function getHit(playedSquare) {
    const playedDiv = document.querySelector(
      `#${name}-${playedSquare.x}${playedSquare.y}`
    );
    playedDiv.classList.add("hit");

    if (playedDiv.classList[0] === "ship") {
      board.forEach((ship) => {
        ship.hit(playedSquare);

        if (ship.isSunk()) {
          ship.squares.forEach((square) => {
            document
              .querySelector(`#${name}-${square.x}${square.y}`)
              .classList.add("sunk");
          });
        }
      });
    }
  }

  return {
    name,
    board,
    playedSquare: {},
    availablePlays,
    getHit,
    removeAvailablePlay,
    sunkAllShips,
    randomizeBoard,
  };
}

export default player;
