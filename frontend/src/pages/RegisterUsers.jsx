import '../components/Register.css'
import { useForm } from "react-hook-form"
import { useState, useEffect } from 'react'
import { createUser } from '../Routes/api/usersRegister.api'
import { getCountries } from '../Routes/api/usersRegister.api'

export function RegisterUsers() {
  const [countries, setCountries] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const response = await getCountries(); 
        setCountries(response.data);
      } catch (error) {
        console.error("Error cargado países", error);
      }
    };
    loadCountries();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createUser(data);
    } catch (error) {
      if(error.response && error.response.data){
        const errors = error.response.data          
      };
    }
  });

  return (
    <div>
      <div className='box-main-register'>
        <form onSubmit={onSubmit}>
          <h2 className='title-form'>Crear una cuenta</h2>

          <div className='box-input'>
            <label htmlFor="input-username">Nombre de usuario</label>
            <input 
              placeholder='nombre de usuario'
              id="input-username"
              type="text" 
              {...register('username', { required: true })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <div className='box-input'>
            <label htmlFor="input-email">Correo electrónico</label>
            <input
              placeholder='example@gmail.com'
              id="input-email" 
              type="email"
              {...register('email', { required: true })} 
            />
            {errors.email && <span>El correo es requerido</span>}
          </div>

          <div className='box-input'>
            <label htmlFor="input-password">Contraseña</label>
            <input
              id="input-password" 
              placeholder='*******'
              type="password" 
              {...register('password', { required: true })}
            />
            {errors.password && <span>La contraseña es requerida</span>}
          </div>

          <div className='box-input'>
            <label htmlFor="input-country">País de usuario</label>
            <select
              className = 'input-countries' 
              id="input-country"
              {...register('country', { required: true })}
            >
              <option className='option-out' value="">Selecciona un país</option>
              {countries.map((c) => (
                <option className='options-countries' key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.country && <span>Debes seleccionar un país</span>}
          </div>

          <button className='boton-save' type="submit">
            Guardar
          </button>
        </form>
      </div>
    </div>
  )
}
