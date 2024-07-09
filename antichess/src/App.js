import logo from './logo.svg';
import './App.css';
import Game from './Components/Game';
import { BLACK } from 'chess.js';

function App() {
  return (
    <div className="App" >
       <h1>Anti chess Game</h1>
      {/* <ChessBoard/> */}
      <div style={{display :'flex' , justifyContent :'center' , alignItems :'center', width :'50%' ,margin :'auto', border :"2px solid black"}}>
      <Game/>
      </div>
    </div>
  );
}

export default App;
