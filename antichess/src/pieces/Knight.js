export const isValidKnightMove = (from, to) => {
    const [fromFile, fromRank] = [from.charCodeAt(0), parseInt(from[1], 10)];
    const [toFile, toRank] = [to.charCodeAt(0), parseInt(to[1], 10)];
    const fileDiff = Math.abs(fromFile - toFile);
    const rankDiff = Math.abs(fromRank - toRank);
  
    return (
      (fileDiff === 2 && rankDiff === 1) || (fileDiff === 1 && rankDiff === 2)
    );
  };
  