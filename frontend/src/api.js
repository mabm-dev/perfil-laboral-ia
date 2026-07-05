const API_URL = 'http://localhost:8000/api/v1'

async function request(path, options = {}) {
  const headers = { Accept: 'application/json', ...options.headers }

  const token = localStorage.getItem('token')
  if (token) {
    headers.Authorization = 'Bearer ' + token
  }

  let response
  try {
    response = await fetch(API_URL + path, { ...options, headers })
  } catch {
    throw new Error('No se puede conectar con el servidor')
  }

  if (response.status === 204) return null

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message ?? 'Error en la petición')
  }

  return data
}

export function apiGet(path) {
  return request(path)
}

export function apiPost(path, body) {
  return request(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

export function apiUpload(path, formData) {
  return request(path, {
    method: 'POST',
    body: formData,
  })
}