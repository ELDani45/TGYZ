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
    <div>
        <div>
            <form onSubmit={submit} className={styles['form-signIn']} >
              <section>
                  {/* {input de nombre de usuario} */}
                  <label htmlFor="input-username">Nombre de usuario</label> <br />
                  <input 
                  id='input-username' 
                  type="text"
                  {...register("username", {required:true})}
                  />
              </section>

              <section>
                  {/* {input de correo electronico de usuario} */}
                  <label htmlFor="input-email">Correo electroníco</label> <br />
                  <input
                  id='input-email' 
                  type="email"
                  {...register("email", {required:true})}
                  />
              </section>

              <section>
                  {/* {input contraseña del username} */}
                  <label htmlFor="input-password">Contraseña</label> <br />
                  <input 
                  id='input-password'
                  type="password"
                  {...register("password", {required:true})} 
                  />
              </section>

              <button type='submit'>
                Iniciar sesion
              </button>
            </form>
        </div>
    </div>
  )
}

