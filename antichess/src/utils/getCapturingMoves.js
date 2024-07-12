import { isValidBishopMove } from "../pieces/Bishop";
import { isValidKingMove } from "../pieces/King";
import { isValidKnightMove } from "../pieces/Knight";
import { isValidPawnMove } from "../pieces/Pawn";
import { isValidQueenMove } from "../pieces/Queen";
import { isValidRookMove } from "../pieces/Rook";

const getCapturingMoves = (position, turn) => {
  const capturingMoves = [];

  Object.keys(position).forEach((square) => {
    const piece = position[square];
    if (piece[0] === turn) {
      Object.keys(position).forEach((targetSquare) => {
        if (position[targetSquare][0] !== turn) {
          let isValidCapture = false;
          switch (piece[1]) {
            case "B":
              isValidCapture = isValidBishopMove(
                square,
                targetSquare,
                position
              );
              break;
            case "K":
              isValidCapture = isValidKingMove(square, targetSquare, position);
              break;
            case "N":
              isValidCapture = isValidKnightMove(square, targetSquare);
              break;
            case "P":
              isValidCapture = isValidPawnMove(
                square,
                targetSquare,
                position,
                piece[0]
              );
              break;
            case "Q":
              isValidCapture = isValidQueenMove(square, targetSquare, position);
              break;
            case "R":
              isValidCapture = isValidRookMove(square, targetSquare, position);
              break;
            default:
              break;
          }
          if (isValidCapture) capturingMoves.push(targetSquare);
        }
      });
    }
  });

  return capturingMoves;
};

export default getCapturingMoves;
