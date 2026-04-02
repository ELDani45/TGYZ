import styles from '../components/SignInusers/SignIn.module.css'
import { useForm } from 'react-hook-form'
import { signin } from '../api/usersSignIn.api'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const navigation = useNavigate()

  const submit = handleSubmit(async (data) => {
    await signin(data)
    navigation('/')

  } )
  return (
    <div className={styles['main-container']}>
            <form onSubmit={submit} className={styles['form-signIn']} >
              <h2 className={styles['singin-text']}>Iniciar sesión</h2>

              <section>
                  {/* {input de nombre de usuario} */}
                  <label className={styles['labels']} htmlFor="input-username">Nombre de usuario</label> 
                  <input 
                  className={styles['inputs']}
                  id='input-username' 
                  type="text"
                  {...register("username", {required:true})}
                  />
              </section>

              <section>
                  {/* {input de correo electronico de usuario} */}
                  <label className={styles['labels']} htmlFor="input-email">Correo electroníco</label> 
                  <input
                  className={styles['inputs']}
                  id='input-email' 
                  type="email"
                  {...register("email", {required:true})}
                  />
              </section>

              <section>
                  {/* {input contraseña del username} */}
                  <label className={styles['labels']} htmlFor="input-password">Contraseña</label>
                  <input 
                  className={styles['inputs']}
                  id='input-password'
                  type="password"
                  {...register("password", {required:true})} 
                  />
              </section>

              <button type='submit' className={styles['boton-signin']}>
                Iniciar sesion
              </button>
            </form>
    </div>
  )
}

