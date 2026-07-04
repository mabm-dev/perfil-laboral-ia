import { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../components/TextField'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Intento de acceso', email, password)
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
                <button type="submit">Entrar</button>
            </form>
            <p>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></p>
        </main>
    )
}

export default LoginPage