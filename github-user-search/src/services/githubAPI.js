import axios from 'axios'

const BASE_URL = 'https://api.github.com/users'
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY // may be undefined

const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {}

export async function getUserData(username) {
  try {
    const res = await axios.get(`${BASE_URL}/${username}`, { headers })
    return res.data
  } catch (err) {
    // لو 404 يرجع null، لو أي خطأ ثاني ارمِه
    if (err.response && err.response.status === 404) return null
    console.error('GitHub API error:', err)
    return null
  }
}