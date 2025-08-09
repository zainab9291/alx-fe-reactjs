import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!q.trim()) return
    onSearch(q.trim())
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Enter GitHub username, e.g. octocat"
        style={{ flex: 1, padding: 8, fontSize: 16 }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
    </form>
  )
}