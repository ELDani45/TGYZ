import { useState } from "react";
import { BoardTGYZ } from "../BoardTgyz/BoardTGYZ"
import '../BoardTgyz/BoardTGYZ.css'
import { Winner } from "../BoardTgyz/Winner"

export function Begginer() {
  const [winner, setWinner] = useState(null);

  return (
    <div className="main-container">
      <div>
          <h1 className="title">TGYZ tablero</h1>
          <div className='board-center'>
            <BoardTGYZ winner={winner} setWinner={setWinner}/>
          </div>
      </div>
          <div className="">
            {winner && <div> <Winner playerWinner={winner}/> </div>}
          </div>
    </div>
  )
}
