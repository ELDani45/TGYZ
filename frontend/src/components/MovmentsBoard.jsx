import style from  './MovmentsBoard.module.css'

export default function MovmentsBoard({movment}) {
    // dartos dependiendo del jugador

    function jugador (movment) {
        if(movment.jugador === 'player1'){
            let jugador_1 = {
                jugador:'Jugador 1', 
                hoyoInicial :movment.hoyoInicial,
                hoyoFinal:movment.hoyoFinal
            }
            // console.log(jugador_1);
            return jugador_1;
        }

        if (movment.jugador === 'player2'){
            let jugador_2 = {
                jugador:'Jugador 2',
                hoyoInicial:movment.hoyoInicial,
                hoyoFinal:movment.hoyoFinal
            }
            return jugador_2
        }

        
    }
    const movimientoProcesado = jugador(movment);
    // console.log(jugador)


  return (
    <div className={style['container-movments']}>

      <section className={style['board-movments-details']}>
        <h2 className={style['title-movments']}>Movimientos</h2>
        <article className={style['box-movments']}>
            <div>
                <h4>jugador 1</h4>
                <br />
                <div className='movments-player1'>
                    {movimientoProcesado && 
                    <span>
                        jugador: {movimientoProcesado.jugador}  <br />
                        hoyo inicial: {movimientoProcesado.hoyoInicial} <br />
                        hoyo final: {movimientoProcesado.hoyoFinal} 
                        </span> }
                </div>
            </div>
            <div>
                <h4>jugador 2</h4>
                <div className='movments-player2'>
                    {movimientoProcesado && 
                    <span>
                        jugador: {movimientoProcesado.jugador}  <br />
                        hoyo inicial: {movimientoProcesado.hoyoInicial} <br />
                        hoyo final: {movimientoProcesado.hoyoFinal} 
                        </span> }
                </div>
            </div>
        </article>
      </section>
    </div>
  )
}

