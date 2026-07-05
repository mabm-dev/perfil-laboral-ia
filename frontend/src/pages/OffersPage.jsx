import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../components/TextField'
import { apiGet, apiPost } from '../api'

function OffersPage() {
  const [offers, setOffers] = useState([])
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadOffers() {
      try {
        const data = await apiGet('/offers')
        setOffers(data)
      } catch (err) {
        setError(err.message)
      }
    }
    loadOffers()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    try {
      const nueva = await apiPost('/offers', { title, company, description })
      setOffers([nueva, ...offers])
      setTitle('')
      setCompany('')
      setDescription('')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <main className="offers-page">
      <h1>Mis ofertas</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <TextField label="Puesto" type="text" value={title} onChange={setTitle} />
        <TextField
          label="Empresa (opcional)"
          type="text"
          value={company}
          onChange={setCompany}
          required={false}
        />
        <label>
          Texto de la oferta
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Guardar oferta</button>
      </form>

      <ul className="offers-list">
        {offers.map((offer) => (
          <li key={offer.id}>
            <strong>{offer.title}</strong>
            {offer.company && <span> — {offer.company}</span>}
          </li>
        ))}
      </ul>

      <Link to="/dashboard">Volver al panel</Link>
    </main>
  )
}

export default OffersPage