import React from "react";
import "../styles/Grid.css";

function Grid(props) {
  const gridX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const gridY = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const gridCoordTop = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const gridCoordLeft = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  let idArray = [];
  for (let x = 0; x < gridX.length; x++) {
    for (let y = 0; y < gridY.length; y++) {
      idArray.push(gridX[x] + gridY[y]);
    }
  }

  return (
    <div className="Grid-container">
      <div className="Grid-coord-top">
        {gridCoordTop.map((letter) => {
          return <div key={`${props.player}-coord-${letter}`}>{letter}</div>;
        })}
      </div>
      <div className="Grid-coord-left">
        {gridCoordLeft.map((number) => {
          return <div key={`${props.player}-coord-${number}`}>{number}</div>;
        })}
      </div>
      <div className={`Grid ${props.player}`}>
        {idArray.map((id) => {
          return (
            <div
              key={`${props.player}-${id}`}
              id={`${props.player}-${id}`}
            ></div>
          );
        })}
      </div>
      <div className="Grid-description">{props.description}</div>
    </div>
  );
}

export default Grid;
