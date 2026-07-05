const API_URL = 'http://localhost:8000/api/v1'

export async function apiPost(path, body) {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const token = localStorage.getItem('token')
  if (token) {
    headers.Authorization = 'Bearer ' + token
  }

  let response
  try {
    response = await fetch(API_URL + path, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })
  } catch {
    throw new Error('No se puede conectar con el servidor')
  }

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message ?? 'Error en la petición')
  }

  return data
}

export async function apiGet(path) {
    const headers = {
        Accept: 'application/json',
    }

    const token = localStorage.getItem('token')
    if (token) {
        headers.Authorization = 'Bearer ' + token
    }

    let response
    try {
        response = await fetch(API_URL + path, { headers })  
    } catch {
        throw new Error('No se puede conectar con el servidor')
    }

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message ?? 'Error en la petición')
    }

    return data
}