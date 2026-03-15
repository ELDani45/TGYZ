import { board } from "./board"
import { useState } from "react"
import './BoardTGYZ.css'
import { SiFreedesktopdotorg } from "react-icons/si";

export function BoardTGYZ() {
  // Estado del tablero 
  const [initialBoard, setBoard] = useState(board);
  // funcion principal de movimiento 
  const handlemove = (pit, index, player) => {
    let realIndex = index 
    // Inversion del inidice si el jugador es el player2
    if(player == 'player2'){
      realIndex = (initialBoard['player2'].pits.length - 1) - index
    }
    // funcion del movimiento 
    function move(pit,realIndex, player) {
      setBoard(prevBoard => {
        const newBoard = structuredClone(prevBoard);
          newBoard[player].pits[realIndex] = 0
          
          let seeds = pit
          let currentPLayer = player  
          let currentIndex = seeds === 1 ?realIndex: realIndex - 1
          if (seeds) {
          
              while(seeds > 0) {
                seeds -= 1
                currentIndex ++
                if(currentIndex > 8){
                  currentIndex = 0
                  currentPLayer = currentPLayer ==='player1'? 'player2':'player1'
                }
                newBoard[currentPLayer].pits[currentIndex] += 1
              
            }
          }
        return newBoard;
      });
      
    }

    move(pit, realIndex, player)
    console.log(pit, realIndex, player)
  }
  return (
  
    <div className="board-game">
      {/* fila de hoyos del jugador 2 */}
      <div className="row-pits-player2">
        {initialBoard['player2'].pits.toReversed().map((pit,index) => {
          return(
            <div onClick={() => handlemove(pit, index,'player2')} className="pit" key={index}>
              {pit}
            </div>
          )
        })}
      </div>
      {/* kazan1 */}
      <div className="kazan-player1">
        {initialBoard['player1'].kazan}
      </div>
      {/* kazan2 */}
      <div className="kazan-player2">
        {initialBoard['player2'].kazan}
      </div>
      {/* fila de hoyos del jugador 1 */}
      <div className="row-pits-player1">
        {initialBoard['player1'].pits.map((pit, index) =>{
          return(
            <div onClick={() => handlemove(pit, index, 'player1')} className="pit" key={index}>
              {pit}
            </div>
          )
        })}
      </div>
    </div>
  )
}

