import { useState } from "react";
import { BoardTGYZ } from "../BoardTgyz/BoardTGYZ"
import { Winner } from "../BoardTgyz/Winner"
import '../BoardTgyz/BoardTGYZ.css'

const cards = [
  {title:'titulo', description:'Para mover en el togyzqumalaq, toma todas las semillas de uno de tus nueve hoyos (excepto si es un tuz), dejando una si solo hay una, y distribúyelas una por una en sentido antihorario hacia la derecha. Si el último hoyo del movimiento está en el lado del oponente y resulta en un número par, capturas esas semillas', question:'¿Como mover?'},
  {title:'titulo', description:'Para capturar en el Togyzqumalaq, debes lograr que la última bolita de tu movimiento caiga en un hoyo del lado contrario y resulte en un número par de bolitas (2, 4, 6, etc.), lo que te permite llevarte todas esas bolitas a tu kazna (almacén). También puedes capturar creando un tuzdyk (lugar sagrado) cuando obtienes exactamente tres bolitas', question:'¿Como capturar?'},
  {title:'titulo', description:'Para ganar en el Togyzqumalaq (Toguz Kumalak), el objetivo principal es capturar la mayor cantidad de semillas, siendo necesario conseguir más de 81 en tu kazna (tesoro), lo que ocurre al lograr al menos 82 (o 42 en variantes cortas) para ganar. La estrategia clave implica crear un tuz (casa) en los primeros movimientos para acumular semillas rápidamente y controlar el tablero', question:'¿Como gano?'}
  ]

export function Begginer({isOpen, setIsOpen}) {
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
            <BoardTGYZ isOpen={isOpen} setIsOpen={setIsOpen} winner={winner} setWinner={setWinner}/>
            <div className="">
            {winner && <div> <Winner playerWinner={winner}/> </div>}
            </div>
          </div>
      </div>
         
          <div className="intructions">
           
            <div className="rules">
              <div className="container-question">
                <h3 className={`${isOpen?"text-question-isClosed":"text-question"}`}>{actualCard.question}</h3>
              </div>
              <br />
              <div className="container-rules">
                <p className={isOpen?"text-rules-isClosed":"text-rules"}>{actualCard.description}</p>
              </div>
              <br />
              <button className={isOpen?"boton-black-next-card-isclosed":"boton-black-next-card"} onClick={handleNext}>Siguiente</button>
              <div>
                  {card} /{cards.length}
              </div>
            </div>
            
          </div>
    </div>
  )
}
