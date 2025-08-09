export default function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8, display: 'flex', gap: 16 }}>
      <img src={user.avatar_url} alt="avatar" width={120} height={120} style={{ borderRadius: 8 }} />
      <div>
        <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
        <p style={{ margin: '4px 0' }}><strong>@{user.login}</strong></p>
        {user.bio && <p>{user.bio}</p>}
        <p style={{ margin: 0 }}>
          {user.location && <span>📍 {user.location} </span>}
          <span> • Repos: {user.public_repos}</span>
          <span> • Followers: {user.followers}</span>
        </p>
        <p style={{ marginTop: 8 }}>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </p>
      </div>
    </div>
  )
}