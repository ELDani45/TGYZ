import styles from '../components/SignInusers/SignIn.module.css'

export default function SignIn() {
  return (
    <div>
        <div>
            <form className={styles['form-signIn']} >
                <label htmlFor="">nombre</label>
                <input type="text" />
            </form>
        </div>
    </div>
  )
}

