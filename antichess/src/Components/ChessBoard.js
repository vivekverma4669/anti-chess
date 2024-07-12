import React, { useState } from "react";
import { Chessboard as ReactChessboard } from "react-chessboard";
import Game from "./Logic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Chessboard = () => {

  const [game, setGame] = useState(new Game());
  const [position, setPosition] = useState(game.position);
  const [turn, setTurn] = useState(game.turn);

  
  const handlePieceDrop = (from, to) => {
    const result = game.move(from, to);
    setPosition({ ...game.position });

    if (result.includes("Winner")) {
      alert(`${result} 🎉🎉`);
     
      handleReset();
      return;
    }

    if (result !== "Move successful") {
      toast.error(result, { autoClose: 2000 });
    } else {
      setTurn(game.turn);
    }
  };

  const handleQuit = () => {
    const winner = game.turn === "w" ? "Black" : "White";
    alert(`Winner is ${winner}`);
    handleReset();
  };

  const handleReset = () => {
    const newGame = new Game();
    setGame(newGame);
    setPosition(newGame.position);
    setTurn(newGame.turn);
  };

  return (
    <div>
    <ToastContainer />
    <h2> {turn === "w" ?  <span>White 's </span> :  <span style={{color :'black'}}>Black 's </span>}  Turn</h2>


      <ReactChessboard
        position={position}
        onPieceDrop={handlePieceDrop}
        boardWidth={430}
        customBoardStyle={{
         border :'3px solid black',
        }}
      />
     

      <button onClick={handleQuit}>Quit</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  );
};

export default Chessboard;
