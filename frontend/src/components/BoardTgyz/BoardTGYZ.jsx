import { board } from "./board"
import { useState } from "react"
import './BoardTGYZ.css'

export function BoardTGYZ() {
  // Estado del tablero 
  const [initialBoard, setBoard] = useState(board);
  // pintar hoyo
  const [lastPit, setLastPit] = useState(null)
  
  // funcion principal de movimiento 
  const handlemove = (pit, index, player) => {
    let realIndex = index 
    // Inversion del inidice si el jugador es el player2
    if(player == 'player2'){
      realIndex = (initialBoard['player2'].pits.length - 1) - index
    }
    const rival = player ==='player1'? 'player2':'player1'
    if(initialBoard[rival].tuzdik === realIndex)return

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
                // esto cambia de lado cuando la ultima semilla llega al ultimo hoyo y todavia faltan semillas por repartir
                if(currentIndex > 8){
                  currentIndex = 0
                  currentPLayer = currentPLayer =='player1'? 'player2':'player1'
                }
                newBoard[currentPLayer].pits[currentIndex] += 1
                // verifica si hay tuzdik en esa casilla(indice), si es asi suma una semilla al kazan dueño del tuzdik y le resta al sondeo de semillas
                const rivalPlayer = currentPLayer === 'player1' ? 'player2' : 'player1'
                if(newBoard[rivalPlayer].tuzdik === currentIndex){
                    newBoard[rivalPlayer].kazan += 1
                    newBoard[currentPLayer].pits[currentIndex] -= 1
                  }
                if(seeds == 0){
                  setLastPit({player:currentPLayer,index:currentIndex})
                  if(newBoard[currentPLayer].pits[currentIndex] %2==0 && player != currentPLayer){
                    newBoard[player].kazan += newBoard[currentPLayer].pits[currentIndex]
                    newBoard[currentPLayer].pits[currentIndex] = 0
                  }

                  if(newBoard[currentPLayer].pits[currentIndex] === 3 && player != currentPLayer){
                    if(
                      newBoard[player].tuzdik == null && currentIndex != 8 && newBoard[currentPLayer].tuzdik != currentIndex
                    ){
                      newBoard[player].tuzdik = currentIndex
                      newBoard[player].kazan += newBoard[currentPLayer].pits[currentIndex]
                      newBoard[currentPLayer].pits[currentIndex] = 0
                    }
                  }
              }
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
      <div className='row-pits-player2'>
        {initialBoard['player2'].pits.toReversed().map((pit, index) => {
          const indiceAlRevez = initialBoard['player2'].pits.length - 1 - index;
          return(
            <div onClick={() => handlemove(pit, index,'player2')} className={lastPit?.player === 'player2' && lastPit?.index === indiceAlRevez ? 'pitPainted' : 'pit'} key={index}>
              {pit}
              <div className="number-hole">
                {indiceAlRevez + 1}
              </div>
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
            <div onClick={() => handlemove(pit, index, 'player1')} className={lastPit?.player === 'player1' && lastPit?.index === index ? 'pitPainted' : 'pit'} key={index}>
              {pit}
              <div className="number-hole">
                {index +1}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

