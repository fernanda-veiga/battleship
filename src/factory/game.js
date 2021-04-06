import player from "./player";

function game() {
  const player1 = player("player1");
  const player2 = player("player2");

  const player2Grid = document.querySelector(".player2");
  const player2Divs = player2Grid.querySelectorAll("div");

  player2Divs.forEach((div) => {
    div.addEventListener("click", function gameRound() {
      if (player1.sunkAllShips() || player2.sunkAllShips()) {
        div.removeEventListener("click", gameRound);
        return;
      }

      //Player1 plays
      player1.playedSquare = {
        x: Number(div.id.slice(8).split("")[0]),
        y: Number(div.id.slice(8).split("")[1]),
      };

      player1.removeAvailablePlay(player1.playedSquare);
      player2.getHit(player1.playedSquare);
      if (player2.sunkAllShips()) {
        div.removeEventListener("click", gameRound);
        console.log("All player 2 ships sunk");
        return;
      }

      //Player2 plays
      player2.playedSquare =
        player2.availablePlays[
          Math.floor(Math.random() * player2.availablePlays.length)
        ];

      player2.removeAvailablePlay(player2.playedSquare);
      player1.getHit(player2.playedSquare);
      if (player1.sunkAllShips()) {
        div.removeEventListener("click", gameRound);
        console.log("All player 1 ships sunk");
        return;
      }

      div.removeEventListener("click", gameRound);
      return;
    });
  });

  function addClassToShips(player) {
    player.board.forEach((ship) => {
      ship.squares.forEach((square) => {
        document
          .querySelector(`#${player.name}-${square.x}${square.y}`)
          .classList.add("ship");
      });
    });
  }
  addClassToShips(player1);
  addClassToShips(player2);

  return { player1, player2 };
}

export default game;
