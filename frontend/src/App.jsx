import { useState } from "react";
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    console.log('Intento de acceso', email, password)
  }

  return (
    <main className="login-page">
      <h1>PerfilLaboralIA</h1>
      <p>Mejora tu perfil laboral con Inteligencia artificial</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}

export default App;
