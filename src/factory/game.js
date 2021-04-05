import player from "./player";

function game() {
  const player1 = player(true);
  const player2 = player(false);
  return { player1, player2 };
}

export default game;
