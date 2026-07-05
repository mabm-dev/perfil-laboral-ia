import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '../components/TextField'

function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event) {
        event.preventDefault()
        setError('')

        try{
            const response = await
            fetch('http://localhost:8000/api/v1/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json', },
              body: JSON.stringify({ name, email, password}),
            })
            
            const data = await response.json()

            if (!response.ok) {
                setError(data.message ?? 'Error al registrarte')
                return
            }
            
            localStorage.setItem('token', data.token)
            navigate('/dashboard')
            } catch {
                setError('No se puede conectar con el servidor')
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