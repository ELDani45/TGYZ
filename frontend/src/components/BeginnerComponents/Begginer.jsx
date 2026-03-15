import { BoardTGYZ } from "../BoardTgyz/BoardTGYZ"
import '../BoardTgyz/BoardTGYZ.css'

export function Begginer() {
  return (
    <div>
          <h1 className="title">TGYZ tablero</h1>
          <div className='board-center'>
            <BoardTGYZ />
          </div>
    </div>
  )
}
