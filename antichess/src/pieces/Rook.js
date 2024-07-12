export const isValidRookMove = (from, to, board) => {
    const [fromFile, fromRank] = [from.charCodeAt(0), parseInt(from[1], 10)];
    const [toFile, toRank] = [to.charCodeAt(0), parseInt(to[1], 10)];
  
    if (fromFile !== toFile && fromRank !== toRank) return false;
  
    const fileStep = fromFile === toFile ? 0 : fromFile < toFile ? 1 : -1;
    const rankStep = fromRank === toRank ? 0 : fromRank < toRank ? 1 : -1;
    let file = fromFile + fileStep;
    let rank = fromRank + rankStep;
    while (file !== toFile || rank !== toRank) {
      if (board[String.fromCharCode(file) + rank]) return false;
      file += fileStep;
      rank += rankStep;
    }
  
    return true;
  };
  