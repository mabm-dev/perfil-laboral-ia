import { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../components/TextField'

function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Registro:', name, email, password)
  }

  return (
    <main className="login-page">
      <h1>Crear cuenta</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <TextField label="Nombre" type="text" value={name} onChange={setName} />
        <TextField label="Email" type="email" value={email} onChange={setEmail} />
        <TextField
          label="Contraseña"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <button type="submit">Crear cuenta</button>
      </form>

      <p>
        ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
      </p>
    </main>
  )
}

export default RegisterPage