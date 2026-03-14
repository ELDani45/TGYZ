import { GrServicePlay } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import imageTogyzqunalaq from '../../assets/togyzqumalaq_board.png'
import './DescriptionTGYZ.css'

export function DescriptionTGYZ() {
  const navigation = useNavigate();

  return (
    <div className="box-main-description">
      <div className="div-center-divs">
        
        
        <div className="container-buttoms">
          <div>
            <button className="boton-login">
              iniciar sesion
            </button>
          </div>
          <div>
            <button onClick={ () => navigation('/register') } className="boton-register">
              Registrarse
            </button>
          </div>
        </div>

        {/* 2. Bloque de Juego e Imagen */}
        <div className="box-des-image">
          <div className='box-content1'>
            <h2 className='text-togyzqunalaq'>Juega Togyzqumalaq Online</h2>
            <p className='text-description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis voluptate, 
              consectetur tenetur libero perferendis enim natus qui veniam repellendus harum quas nam 
              consequuntur repellat dicta quia atque doloremque quidem.
            </p>
            <div className='botons'>
              <button className='boton-old'>
                <GrServicePlay className="icon-play" />
                Jugar
              </button> 
              
              <button className='boton-gray'>
                Jugar con Bot
              </button>
            </div>
          </div>

          {/* Parte derecha (imagen) */}
          <div className='box-content2'>
            <img className='image-board' src={imageTogyzqunalaq} alt="image of togyzqunalq" />
          </div> 
        </div>
      </div>

      {/* Second row */}
      <div className="box-end">
        <div className="box-new">
          <h3 className="text-new">
            ¿ Eres principiante ?
          </h3>
          <p className="text-new-des">
            Aprende las reglas básicas, aperturas y tácticas de Togyzqumalaq en 5 minutos.
          </p>
          <button onClick={() => navigation('/beginner')} className="boton-gray-new-user">
            Empezar Lección
          </button>
        </div>
      </div>
    </div>
  );
}