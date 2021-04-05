import React from "react";
import "../styles/Grid.css";

function Grid(props) {
  const gridX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const gridY = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let idWithShip = [];

  console.log(props.ships);

  props.ships.forEach((ship) => {
    ship.squares.forEach((square) => {
      idWithShip.push(`${square.x}${square.y}`);
    });
  });

  return (
    <div className="grid">
      {gridX.map((x) => {
        return gridY.map((y) => {
          return idWithShip.includes(x + y) ? (
            <div key={`${x + y}`} id={`${x + y}`} className="ship">{`${
              x + y
            }`}</div>
          ) : (
            <div key={`${x + y}`} id={`${x + y}`}>{`${x + y}`}</div>
          );
        });
      })}
    </div>
  );
}

export default Grid;
