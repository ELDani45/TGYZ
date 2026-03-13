import '../components/Register.css'
import { useForm } from "react-hook-form"

export function RegisterUsers() {
  const {register, handleSubmit, formState:{
    errors
  }
  } = useForm();

  const onSubmit = handleSubmit( async data => {
    try{
      const dataUser = FormData();
      //       nombre del campo / data.value
      dataUser.append('username', data.username)
      dataUser.append('email', data.email)
      dataUser.append('password', data.password)
      dataUser.append('password', data.password)

    } catch (error){
      console.log('Hay un error en el sistema', error)
    }


  })

  return (
    <div>
      <div className='box-main-register'>
        <form onSubmit={onSubmit}>
          <h2 className='title-form'>Crear una cuenta</h2>
          {/* Inicio input nombre de usuario */}
          <div className='box-input' >
          <label htmlFor="input-username">Nombre de usuario</label>
          <input 
          placeholder='nombre de usuario'
          id="input-username"
          type="text" 
          {...register('username', {required:true})}
          />
          {errors.username && <span>El nombre de usuario es un campo obligatorio </span>}
          </div >
          {/* Inicio input email de usuario */}
          <div className='box-input'>
            <label htmlFor="input-email">Correo electroníco</label>
            <input
            placeholder='example@gmail.com'
            id="input-email" 
            type="email"
            {...register('email', {required:true})} 
            />
            {errors.email && <span>El correo es un campo requierido </span>}
          </div>
          {/* Inicio input email de usuario */}
          <div className='box-input'>
            <label htmlFor="input-pasword">Contraseña</label>
            <input
            id="input-pasword" 
            placeholder='*******'
            type="password" 
            {...register('password', {required:true})}
            />
            {errors.password && <span>Este campo es requerido</span>}
          </div>
          {/* Inicio input País de usuario */}
          <div className='box-input'>
            <label htmlFor="input-country">País de usuario</label>
            <input type=""
            placeholder='Colombia'
            />
          </div>

          <button className='boton-save'>
            Guardar
          </button>
        </form>
        {/* final del contenedor principal de register */}
      </div>

    </div>
  )
}

