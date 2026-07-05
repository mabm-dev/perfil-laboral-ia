import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiGet, apiUpload } from '../api'

function CvsPage() {
  const [cvs, setCvs] = useState([])
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadCvs() {
      try {
        setCvs(await apiGet('/cvs'))
      } catch (err) {
        setError(err.message)
      }
    }
    loadCvs()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!file) {
      setError('Selecciona un archivo PDF')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      const nuevo = await apiUpload('/cvs', formData)
      setCvs([nuevo, ...cvs])
      setFile(null)
      event.target.reset()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <main className="offers-page">
      <h1>Mis CVs</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          CV en PDF (máx. 5 MB)
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Subir CV</button>
      </form>

      <ul className="offers-list">
        {cvs.map((cv) => (
          <li key={cv.id}>{cv.original_name}</li>
        ))}
      </ul>

      <Link to="/dashboard">Volver al panel</Link>
    </main>
  )
}

export default CvsPage