export const isValidPawnMove = (from, to, board, color) => {
    const [fromFile, fromRank] = [from.charCodeAt(0), parseInt(from[1], 10)];
    const [toFile, toRank] = [to.charCodeAt(0), parseInt(to[1], 10)];
    const rankDiff = toRank - fromRank;
    const fileDiff = Math.abs(fromFile - toFile);
  
    if (color === "w") {
      if (rankDiff === 1 && fileDiff === 0 && !board[to]) return true; // move forward
      if (rankDiff === 1 && fileDiff === 1 && board[to]?.[0] === "b") return true; // capture
    } else {
      if (rankDiff === -1 && fileDiff === 0 && !board[to]) return true; // move forward
      if (rankDiff === -1 && fileDiff === 1 && board[to]?.[0] === "w")
        return true; // capture
    }
  
    return false;
  };
  