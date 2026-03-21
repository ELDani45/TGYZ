// Creacion del tablero de Togyzqumalaq
import { board } from "./board"
import { useState } from "react"
import './BoardTGYZ.css'

export function BoardTGYZ({winner, setWinner}) {
  // Estado del tablero 
  const [initialBoard, setBoard] = useState(board);
  // pintar hoyo
  const [lastPitPlayer1, setLastPitPlayer1] = useState(null)
  const [lastPitPlayer2, setLastPitPlayer2] = useState(null)
  // turno 
  const [turn, seTurn] = useState('player1');
  
  const getPitClass = (pitPlayer, pitIndex) => {
    // si es tuzdik 
    const rival = pitPlayer === 'player1' ? 'player2' : 'player1'
    if(initialBoard[rival].tuzdik === pitIndex) return 'pitTuzdik'
    
    // Pinta el ultimo hoyo
   
    if(lastPitPlayer1?.player === pitPlayer && lastPitPlayer1?.index === pitIndex ){
      return 'pitBlue'
    }
    if(lastPitPlayer2?.player === pitPlayer && lastPitPlayer2?.index === pitIndex){
      return 'pitRed'
    }

    // if(lastPit?.player === pitPlayer && lastPit?.index === pitIndex) return 'pitPainted'
    
    // normal
    return 'pit'
  }
  
  // funcion principal de movimiento 
  const handlemove = (pit, index, player) => {
    if(pit == 0)return

    if(player !== turn){
      return
    }
    if(winner != null){
      return
    }

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
                  // objeto con dos propiedades[ player : index ]
                  if(player === 'player1'){
                    setLastPitPlayer1({player:currentPLayer,index:currentIndex})
                    setLastPitPlayer2(null)
                  }else{
                    setLastPitPlayer2({player: currentPLayer, index:currentIndex})
                    setLastPitPlayer1(null)
                  }


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
            // definicion del ganador por tiempos
         
            const player1Seeds = newBoard['player1'].pits.reduce((a,b)=>a+b,0)
            const player2Seeds = newBoard['player2'].pits.reduce((a,b)=>a+b,0)

            if(player1Seeds === 0 || player2Seeds === 0){
              // sumar semillas restantes
              newBoard['player1'].kazan += player1Seeds
              newBoard['player2'].kazan += player2Seeds

              // vaciar pits (opcional pero correcto)
              newBoard['player1'].pits = newBoard['player1'].pits.map(() => 0)
              newBoard['player2'].pits = newBoard['player2'].pits.map(() => 0)

              // decidir ganador
              if(newBoard['player1'].kazan === newBoard['player2'].kazan){
                setWinner('Draw')
              } else if(newBoard['player1'].kazan > newBoard['player2'].kazan){
                setWinner('player1')
              } else {
                setWinner('player2')
              }
            }

             
              
          }
        return newBoard;
      });
      
    }
    move(pit, realIndex, player)
    // cambio de turno 
    seTurn(player === 'player1' ? 'player2' : 'player1')
    
    console.log(pit, realIndex, player)
   
  }
  return (
  
    <div className="board-game">
      {/* fila de hoyos del jugador 2 */}
      <div className='row-pits-player2'>
        {initialBoard['player2'].pits.toReversed().map((pit, index) => {
          const indiceAlRevez = initialBoard['player2'].pits.length - 1 - index;
          const seedTotal = initialBoard['player2'].pits[indiceAlRevez];
          // mostrar maximo 20 semillas en el hoyo 
          const maxVisible = 10
          const seedsToShow = Math.min(pit, maxVisible)
          return(
            <div onClick={() => handlemove(pit, index,'player2')} className={getPitClass('player2', indiceAlRevez)} key={index}>
              <div>
                {/* Numero total de semillas  */}
                <div className="total-seeds">
                  {seedTotal}
                </div>
                {/*            //           lista                    //              */}
                <div className="seeds-container">
                  {Array.from({length: seedsToShow}, (_, i) => (
                    <div className="seed" key={i} />
                  ))}
                </div>
              </div>
              {/* Numero de hoyo */}
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
          const totalSeeds = initialBoard['player1'].pits[index]
          // mostrar maximo 20 semillas en el hoyo 
          const maxVisible = 10
          const seedsToShow = Math.min(pit, maxVisible)
          return(
            <div onClick={() => handlemove(pit, index, 'player1')} className={getPitClass('player1', index)} key={index}>
              <div>
                <div className="total-seeds">
                  {totalSeeds}
                </div>
                {/*            //           lista                    //              */}
                <div className="seeds-container">
                  {Array.from({length: seedsToShow}, (_, i) => (
                    <div className="seed" key={i} />
                  ))}
                </div>    
              </div>
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

