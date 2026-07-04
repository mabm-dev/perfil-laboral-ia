import { useState } from "react";
import './App.css';
import TextField from './components/TextField';

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
        </label>  
        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}

export default App;
