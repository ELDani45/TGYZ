import { useForm } from "react-hook-form"

export function RegisterUsers() {
  const {register, handleSubmit, formState:{
    errors
  }
  } = useForm();

  const onSubmit = handleSubmit( async data => {
    await console.log(data)
  })

  return (
    <div>
      <h1>Registrarse</h1>

        <form onSubmit={onSubmit}>


        </form>
    </div>
  )
}

