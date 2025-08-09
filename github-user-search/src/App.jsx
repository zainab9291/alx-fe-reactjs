import { useState } from 'react'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import { getUserData } from './services/githubAPI'

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (username) => {
    setLoading(true)
    setError(null)
    setUser(null)
    try {
      const data = await getUserData(username)
      if (!data) {
        setError('User not found or rate-limited')
      } else {
        setUser(data)
      }
    } catch (err) {
      setError('Error fetching data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  )
}