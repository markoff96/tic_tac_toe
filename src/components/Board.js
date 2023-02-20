import { useState } from 'react'
import Square from './Square'

function Board() {
        const [xIsNext, setXIsNext] = useState(true);
        const [squares, setSquares] = useState(Array(9).fill(null));
      
        function handleClick (i){
          if (squares[i] || calculateWinner(squares)) {
            return;
          }
          const nextSquare = squares.slice();
          if (xIsNext) {
            nextSquare[i] = "X";
          }else {
            nextSquare[i] = "O";
          }
          setSquares(nextSquare);
          setXIsNext(!xIsNext);
        
        }
        const winner = calculateWinner(squares);
        let status;
        if (winner) {
          status = "Winner:" + winner;
         }else {
          status = "Next player:" + (xIsNext ? "X" : "O")
         }
      
      
        return (<div className="App">
          <>
            <div className="status">{status}</div>
            <div className='boardRow'>
              <Square value = {squares[0]} onSqureClick={() => handleClick(0)}/>
              <Square value = {squares[1]} onSqureClick={() => handleClick(1)}/>
              <Square value = {squares[2]} onSqureClick={() => handleClick(2)}/>
            </div>
            <div className='boardRow'>
              <Square value = {squares[3]} onSqureClick={() => handleClick(3)}/>
              <Square value = {squares[4]} onSqureClick={() => handleClick(4)}/>
              <Square value = {squares[5]} onSqureClick={() => handleClick(5)}/>
            </div>
            <div className='boardRow'>
              <Square value = {squares[6]} onSqureClick={() => handleClick(6)}/>
              <Square value = {squares[7]} onSqureClick={() => handleClick(7)}/>
              <Square value = {squares[8]} onSqureClick={() => handleClick(8)}/>
            </div>
          </>
        </div>
      
        )
      
       function calculateWinner(squares){
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for(let i = 0; i < lines.length; i++){
          const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
              return squares[a];
            }
          }
        return null;
       }
    
}

export default Board