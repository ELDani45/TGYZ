import styles from '../components/Register.module.css'
import { useForm } from "react-hook-form"
import { useState, useEffect } from 'react'
import { createUser, getCountries } from '../api/usersRegister.api';

export function RegisterUsers() {
  const [countries, setCountries] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const response = await getCountries(); 
        setCountries(response.data);
      } catch (error) {
        console.error("Error cargando países", error);
      }
    };
    loadCountries();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createUser(data);
    } catch (error) {
      if(error.response && error.response.data){
        const errors = error.response.data;
        console.log(errors);
      };
    }
  });

  return (
    <div>
      {/* Se usa styles['clase'] para que el CSS sea privado de este componente */}
      <div className={styles['box-main-register']}>
        <form className={styles['form-register']} onSubmit={onSubmit}>
          <h2 className={styles['title-form']}>Crear una cuenta</h2>

          <div className={styles['box-input']}>
            <label htmlFor="input-username" className={styles['label-register']}>Nombre de usuario</label>
            <input 
              className={styles['input-register']}
              placeholder='nombre de usuario'
              id="input-username"
              type="text" 
              {...register('username', { required: true })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <div className={styles['box-input']}>
            <label htmlFor="input-email" className={styles['label-register']}>Correo electrónico</label>
            <input
              className={styles['input-register']}
              placeholder='example@gmail.com'
              id="input-email" 
              type="email"
              {...register('email', { required: true })} 
            />
            {errors.email && <span>El correo es requerido</span>}
          </div>

          <div className={styles['box-input']}>
            <label htmlFor="input-password" className={styles['label-register']}>Contraseña</label>
            <input
              className={styles['input-register']}
              id="input-password" 
              placeholder='*******'
              type="password" 
              {...register('password', { required: true })}
            />
            {errors.password && <span>La contraseña es requerida</span>}
          </div>

          <div className={styles['box-input']}>
            <label htmlFor="input-country" className={styles['label-register']} >País de usuario</label>
            <select
              className={styles['input-countries']} 
              id="input-country"
              {...register('country', { required: true })}
            >
              <option className={styles['option-out']} value="">Selecciona un país</option>
              {countries.map((c) => (
                <option className={styles['options-countries']} key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.country && <span>Debes seleccionar un país</span>}
          </div>

          <button className={styles['boton-save']} type="submit">
            Guardar
          </button>
        </form>
      </div>
    </div>
  )
}
