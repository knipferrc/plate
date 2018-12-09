import axios from 'axios'

export const API = axios.create({
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://plate-api.azurewebsites.net'
      : 'http://localhost:5000',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
