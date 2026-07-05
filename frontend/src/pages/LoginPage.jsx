import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '../components/TextField'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        setError('')

        try{
            const response = await
            fetch('http://localhost:8000/api/v1/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json', },
              body: JSON.stringify({ email, password}),
            })
            
            const data = await response.json()

            if (!response.ok) {
                setError(data.message ?? 'Error al iniciar sesión')
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
            <h1>PerfilLaboralIA</h1>
            <p>Mejora tu perfil laboral con Inteligencia artificial</p>

            <form className="login-form" onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                />
                <TextField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    />
                {error && <p className="error">{error}</p>}    
                <button type="submit">Entrar</button>
            </form>
            <p>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></p>
        </main>
    )
}

export default LoginPage