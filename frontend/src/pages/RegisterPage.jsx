import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '../components/TextField'
import { apiPost } from '../api'

function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    try {
      const data = await apiPost('/register', { name, email, password })
      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Crear cuenta</button>
      </form>

      <p>
        ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
      </p>
    </main>
  )
}

export default RegisterPage