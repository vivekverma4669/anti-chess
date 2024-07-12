export const isValidBishopMove = (from, to, board) => {
  
    const [fromFile, fromRank] = [from.charCodeAt(0), parseInt(from[1], 10)];
    const [toFile, toRank] = [to.charCodeAt(0), parseInt(to[1], 10)];
    const fileDiff = Math.abs(fromFile - toFile);
    const rankDiff = Math.abs(fromRank - toRank);
  
    if (fileDiff !== rankDiff) return false;
  

    const fileStep = fromFile < toFile ? 1 : -1;
    const rankStep = fromRank < toRank ? 1 : -1;
    let file = fromFile + fileStep;
    let rank = fromRank + rankStep;
    while (file !== toFile && rank !== toRank) {
      if (board[String.fromCharCode(file) + rank]) return false;
      file += fileStep;
      rank += rankStep;
    }
  
    return true;
  };
  