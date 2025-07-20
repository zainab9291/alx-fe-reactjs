import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#f0f0f0',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-around', // أو 'center' حسب المطلوب
        alignItems: 'center'
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;