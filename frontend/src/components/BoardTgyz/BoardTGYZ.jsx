import { board } from "./board"
import { useState } from "react"
import './BoardTGYZ.css'

export function BoardTGYZ() {
  const [initialBoard, setBoard] = useState(board);

  return (
    <div className="board-game">
      {/* fila de hoyos del jugador 1 */}
      <div className="row-pits-player1">
        {initialBoard['player1'].pits.map((pit,index) => {
          return(
            <div className="pit" key={index}>
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
      {/* fila de hoyos del jugador 2 */}
      <div className="row-pits-player2">
        {initialBoard['player2'].pits.map((pit, index) =>{
          return(
            <div className="pit" key={index}>
              {pit}
            </div>
          )
        })}
      </div>
    </div>
  )
}

