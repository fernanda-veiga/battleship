import React from "react";
import "../styles/Grid.css";

function Grid() {
  //const gridLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  //const gridNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const gridNumbers = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
  const gridLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  /*return (
    <div className="grid">
      {gridNumbers.map((number) => {
        return gridLetters.map((letter) => {
          return (
            <div
              key={`${number}${letter}`}
              id={`${number}${letter}`}
            >{`${number}${letter}`}</div>
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
