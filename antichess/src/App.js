import logo from './logo.svg';
import './App.css';
import Game from './Components/Game';
import { BLACK } from 'chess.js';

function App() {
  return (
    <div className="App" >
       <h1>Anti chess Game</h1>
      {/* <ChessBoard/> */}
      <p> first tap for select chess piece and then secound tap to move the chess piece  </p>

      <div style={{display :'flex', justifyContent :'center' , alignItems :'center', width :'80%' ,margin :'auto', border :"2px solid black"}}>
      <Game/>
      </div>
    </div>
  );
}

export default App;
