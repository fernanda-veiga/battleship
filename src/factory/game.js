import player from "./player";

function game() {
  const player1 = player("player1");
  const player2 = player("player2");

  const player2Grid = document.querySelector(".player2");
  const player2Divs = player2Grid.querySelectorAll("div");

  function addEventToDivs(gameStarted) {
    player2Divs.forEach((div) => {
      div.addEventListener("click", function gameRound() {
        if (!gameStarted) return;

        if (player1.sunkAllShips() || player2.sunkAllShips()) {
          div.removeEventListener("click", gameRound);
          return;
        }

        const infoDisplay = document.querySelector(".info-display");

        //Player1 plays
        player1.playedSquare = {
          x: Number(div.id.slice(8).split("")[0]),
          y: Number(div.id.slice(8).split("")[1]),
        };

        player1.removeAvailablePlay(player1.playedSquare);
        player2.getHit(player1.playedSquare);
        if (player2.sunkAllShips()) {
          div.removeEventListener("click", gameRound);
          infoDisplay.textContent = addInfoToDisplay(player2.name);
          const playAgainBtn = document.querySelector(".play-again-btn");
          playAgainBtn.disabled = false;
          playAgainBtn.addEventListener("click", () => {
            window.location.reload();
            return false;
          });
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
          infoDisplay.textContent = addInfoToDisplay(player1.name);
          const playAgainBtn = document.querySelector(".play-again-btn");
          playAgainBtn.disabled = false;
          playAgainBtn.addEventListener("click", () => {
            window.location.reload();
            return false;
          });
          return;
        }

        infoDisplay.textContent =
          addInfoToDisplay(player2.name, player1.playedSquare) +
          " " +
          addInfoToDisplay(player1.name, player2.playedSquare);
        div.removeEventListener("click", gameRound);
        return;
      });
    });
  }

  function addInfoToDisplay(player, playedSquare = undefined) {
    if (playedSquare === undefined) {
      if (player === player2.name)
        return "All your opponent's ships sunk. You won!";
      return "All your ships ships sunk. Your opponent won!";
    }

    const playedDiv = document.querySelector(
      `#${player}-${playedSquare.x}${playedSquare.y}`
    );

    if (player === player2.name) {
      if (playedDiv.classList.contains("sunk"))
        return "You sunk one of your opponent's ships.";
      if (playedDiv.classList.contains("ship"))
        return "You hit one of your opponent's ships.";
      return "You missed.";
    }
    if (playedDiv.classList.contains("sunk"))
      return "Your opponent sunk one of your ships.";
    if (playedDiv.classList.contains("ship"))
      return "Your opponent hit one of your ships.";
    return "Your opponent missed.";
  }

  return { player1, player2, addEventToDivs };
}

export default game;
