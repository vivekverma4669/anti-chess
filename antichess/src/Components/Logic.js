import validateMove from "../utils/validateMove";

class Game {
  constructor() {
    this.position = {
      a2: "wP",
      b2: "wP",
      c2: "wP",
      d2: "wP",
      e2: "wP",
      f2: "wP",
      g2: "wP",
      h2: "wP",
      a7: "bP",
      b7: "bP",
      c7: "bP",
      d7: "bP",
      e7: "bP",
      f7: "bP",
      g7: "bP",
      h7: "bP",
      a1: "wR",
      b1: "wN",
      c1: "wB",
      d1: "wQ",
      e1: "wK",
      f1: "wB",
      g1: "wN",
      h1: "wR",
      a8: "bR",
      b8: "bN",
      c8: "bB",
      d8: "bQ",
      e8: "bK",
      f8: "bB",
      g8: "bN",
      h8: "bR",
    };
    this.turn = "w";
    this.winner = null;
  }

  move(from, to) {
    if (this.winner) return "Game Over";

    const { valid, newPosition, message } = validateMove(
      this.position,
      from,
      to,
      this.turn
    );
    if (!valid) return message;

    this.position = newPosition;
    this.turn = this.turn === "w" ? "b" : "w";

    if (this.checkWin()) {
      this.winner = this.turn === "w" ? "White" : "Black"; // Invert the winner for anti-chess
      return `Winner is ${this.winner}`;
    }

    return "Move successful";
  }

  checkWin() {
    const pieces = Object.values(this.position);
    const whitePieces = pieces.filter((p) => p[0] === "w");
    const blackPieces = pieces.filter((p) => p[0] === "b");

    return whitePieces.length === 0 || blackPieces.length === 0;
  }
}

export default Game;
