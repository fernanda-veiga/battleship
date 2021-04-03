import React from "react";
import "../styles/Grid.css";

function Grid() {
  //const gridLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  //const gridNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const gridNumbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const gridLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  /*return (
    <div className="grid">
      {gridNumbers.map((number) => {
        return gridLetters.map((letter) => {
          return (
            <div
              key={`${letter}${number}`}
              id={`${letter}${number}`}
            >{`${letter}${number}`}</div>
          );
        });
      })}
    </div>
  );*/

  return (
    <div className="grid">
      {gridNumbers.map((number) => {
        return gridLetters.map((letter) => {
          return (
            <div key={`${number + letter}`} id={`${number + letter}`}>{`${
              number + letter
            }`}</div>
          );
        });
      })}
    </div>
  );
}

export default Grid;
