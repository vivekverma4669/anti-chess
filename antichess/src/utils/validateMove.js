import movePiece from "./movePiece";
import getCapturingMoves from "./getCapturingMoves";

const validateMove = (position, from, to, turn) => {
  const capturingMoves = getCapturingMoves(position, turn);
  if (capturingMoves.length > 0 && !capturingMoves.includes(to)) {
    return { valid: false, message: "can't Move you have to capture pieces!" };
  }

  const newPosition = movePiece(position, from, to, turn);
  if (newPosition === position) {
    return { valid: false, message: "Invalid move!" };
  }

  return { valid: true, newPosition };
};

export default validateMove;
