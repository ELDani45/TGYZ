import { useState } from "react";
import { BoardTGYZ } from "../BoardTgyz/BoardTGYZ"
import { Winner } from "../BoardTgyz/Winner"
import '../BoardTgyz/BoardTGYZ.css'

const cards = [
  {title:'titulo', description:'descripcion de la card', question:'¿Como mover?'},
  {title:'titulo', description:'descripcion de la card', question:'¿Como capturar?'},
  {title:'titulo', description:'descripcion de la card', question:'¿Como gano?'}
  ]

export function Begginer() {
  const [winner, setWinner] = useState(null);
  const[card, setCard] = useState(1);

  const handleNext = () => {
    setCard(prev => (prev + 1) % cards.length)
  }

  const actualCard = cards[card]

  return (
    <div className="main-container">
      {/* Tablero */}
      <div>
        <br />
          <h1 className="title">TGYZ tablero</h1>
        <br />
          <div className='board-center'>
            <BoardTGYZ winner={winner} setWinner={setWinner}/>
          </div>
      </div>
          <div className="">
            {winner && <div> <Winner playerWinner={winner}/> </div>}
          </div>
          <div className="intructions">
           
            <div className="rules">
              <h3>{actualCard.question}</h3>
              <p>{actualCard.description}</p>
              <button onClick={handleNext}>Siguiente</button>
              <div>
                  {card} /{cards.length}
              </div>
            </div>
            
          </div>
    </div>
  )
}
