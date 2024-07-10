

import React, { useState } from 'react';
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
  background-color: ${(props) => (props.isDark ? '#8B4513' : '#F5DEB3')};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.isDark ? '#A0522D' : '#EEE8AA')};
  }
`;

const Piece = styled.div`
  cursor: pointer;
  font-size: 40px;
  font-family: 'Georgia', serif;
  color: ${(props) => (props.isWhite ? 'white' : 'black')};
`;

const ChessBoard = ({ board, onSquareClick }) => {
  const [currentPlayer, setCurrentPlayer] = useState('w');

  const handleSquareClick = (i) => {
    onSquareClick(i);
    setCurrentPlayer((prevPlayer) => (prevPlayer === 'w' ? 'b' : 'w'));
  };

  const renderSquare = (i, isDark) => (
    <Square key={i} isDark={isDark} onClick={() => handleSquareClick(i)}>
      {renderPiece(i)}
    </Square>
  );

  const renderPiece = (i) => {
    const piece = board[Math.floor(i / 8)][i % 8];
    if (piece) {
      const unicode = {
        p: '♟', r: '♜', n: '♞', b: '♝', q: '♛', k: '♚',
        P: '♙', R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔',
      };
      const isWhite = piece.color === 'w';
      return <Piece isWhite={isWhite}>{unicode[piece.type]}</Piece>;
    }
    return null;
  };

  const squares = [];
  for (let i = 0; i < 64; i++) {
    const isDark = (Math.floor(i / 8) + (i % 8)) % 2 === 1;
    squares.push(renderSquare(i, isDark));
  }

  return (
    <>
      <BoardWrapper>{squares}</BoardWrapper>
      <p>Current Player: {currentPlayer === 'w' ? 'White' : 'Black'}</p>
    </>
  );
};

export default ChessBoard;
