import { useState } from 'react';
import Search from './components/Search';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
      <Search onUserFetched={setUser} />

      {user && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img src={user.avatar_url} alt={user.login} width={120} style={{ borderRadius: '50%' }} />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}