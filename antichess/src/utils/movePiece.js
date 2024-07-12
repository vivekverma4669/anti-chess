import { isValidBishopMove } from "../pieces/Bishop";
import { isValidKingMove } from "../pieces/King";
import { isValidKnightMove } from "../pieces/Knight";
import { isValidPawnMove } from "../pieces/Pawn";
import { isValidQueenMove } from "../pieces/Queen";
import { isValidRookMove } from "../pieces/Rook";

const movePiece = (position, from, to, turn) => {
  const piece = position[from];
  const pieceType = piece[1];
  const pieceColor = piece[0];

  if (pieceColor !== turn) return position;

  let isValidMove = false;
  switch (pieceType) {
    case "B":
      isValidMove = isValidBishopMove(from, to, position);
      break;
    case "K":
      isValidMove = isValidKingMove(from, to, position);
      break;
    case "N":
      isValidMove = isValidKnightMove(from, to);
      break;
    case "P":
      isValidMove = isValidPawnMove(from, to, position, pieceColor);
      break;
    case "Q":
      isValidMove = isValidQueenMove(from, to, position);
      break;
    case "R":
      isValidMove = isValidRookMove(from, to, position);
      break;
    default:
      break;
  }

  if (!isValidMove) return position; // Invalid move

  const newPosition = { ...position };
  newPosition[to] = newPosition[from];
  delete newPosition[from];

  return newPosition;
};

export default movePiece;
