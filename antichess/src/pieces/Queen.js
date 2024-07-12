import { isValidRookMove } from "./Rook";
import { isValidBishopMove } from "./Bishop";

export const isValidQueenMove = (from, to, board) => {
  return isValidRookMove(from, to, board) || isValidBishopMove(from, to, board);
};
