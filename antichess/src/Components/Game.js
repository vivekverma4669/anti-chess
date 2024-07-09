import React, { useState } from 'react';
import { Chess } from 'chess.js';
import ChessBoard from './ChessBoard';

const Game = () => {
  const [game, setGame] = useState(new Chess());
  const [playerTurn, setPlayerTurn] = useState('w');
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSquareClick = (i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    const square = String.fromCharCode(97 + col) + (8 - row);

    if (selectedSquare) {
      makeMove(selectedSquare, square);
    } else {
      const piece = game.get(square);
      if (piece && piece.color === playerTurn) {
        setSelectedSquare(square);
      }
    }
  };

  const makeMove = (from, to) => {
    const move = game.move({ from, to });

    if (move) {
      setSelectedSquare(null);
      setPlayerTurn(playerTurn === 'w' ? 'b' : 'w');
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid move, please try again.');
    }
  };

  const handleQuit = () => {
    alert(`${playerTurn === 'w' ? 'Black' : 'White'} wins!`);
    setGame(new Chess());
    setPlayerTurn('w');
  };

  return (
    <div>
      <ChessBoard board={game.board()} onSquareClick={handleSquareClick} />
      <div>
        <button onClick={handleQuit}>Quit</button>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      {game.isCheckmate() && (
        <div>
          {playerTurn === 'w' ? 'Black' : 'White'} wins by checkmate!
        </div>
      )}
      {game.isDraw() && <div>Draw!</div>}
    </div>
  );
};

export default Game;
