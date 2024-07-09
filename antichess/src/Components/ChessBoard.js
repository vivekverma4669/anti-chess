// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { Chess } from 'chess.js';

// const BoardWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(8, 50px);
//   grid-template-rows: repeat(8, 50px);
// `;

// const Square = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: ${(props) => props.isDark ? 'gray' : 'white'};
// `;

// const Piece = styled.div`
//   font-size: 40px;
//   text-align: center;
//   line-height: 50px;
// `;




// const ChessBoard = () => {
//   const [game, setGame] = useState(new Chess());

//   useEffect(() => {
    
//   }, []);


//   const renderSquare = (i, isDark) => (

//     <Square key={i} isDark={isDark}>
//       {renderPiece(i)}
//     </Square>
//   );


//   const renderPiece = (i) => {
//     const piece = game.board()[Math.floor(i / 8)][i % 8];
//     if (piece) {
//       const unicode = {
//         p: '♟', r: '♜', n: '♞', b: '♝', q: '♛', k: '♚',
//         P: '♙', R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔'
//       };
//       return <Piece>{unicode[piece.type]}</Piece>;
//     }
//     return null;
//   };

//   const squares = [];
//   for (let i = 0; i < 64; i++) {
//     const isDark = (Math.floor(i / 8) + (i % 8)) % 2 === 1;
//     squares.push(renderSquare(i, isDark));
//   }


//   return <BoardWrapper>{squares}</BoardWrapper>;
// };

// export default ChessBoard;
import React from 'react';
import styled from 'styled-components';

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 50px);
  grid-template-rows: repeat(8, 50px);
  gap: 1px;
`;

const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isDark ? 'gray' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Piece = styled.div`
  font-size: 40px;
`;

const ChessBoard = ({ board, onSquareClick }) => {
  const renderSquare = (i, isDark) => (
    <Square key={i} isDark={isDark} onClick={() => onSquareClick(i)}>
      {renderPiece(i)}
    </Square>
  );

  const renderPiece = (i) => {
    const piece = board[Math.floor(i / 8)][i % 8];
    if (piece) {
      const unicode = {
        p: '♟', r: '♜', n: '♞', b: '♝', q: '♛', k: '♚',
        P: '♙', R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔'
      };
      return <Piece>{unicode[piece.type]}</Piece>;
    }
    return null;
  };

  const squares = [];
  for (let i = 0; i < 64; i++) {
    const isDark = (Math.floor(i / 8) + (i % 8)) % 2 === 1;
    squares.push(renderSquare(i, isDark));
  }

  return <BoardWrapper>{squares}</BoardWrapper>;
};

export default ChessBoard;
