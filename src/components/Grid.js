import React from "react";
import "../styles/Grid.css";

function Grid() {
  const gridLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const gridNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
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
  );
}

export default Grid;
