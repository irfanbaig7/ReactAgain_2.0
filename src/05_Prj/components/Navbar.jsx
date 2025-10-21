import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem',
      borderBottom: '1px solid gray',
      backgroundColor: theme === 'light' ? '#FEF8E3' : '#101828',
      color: theme === 'light' ? '#000' : '#fff',
      position: 'sticky', top: 0, zIndex: 1000,
    }}>
      <div>
        <Link to="/" style={{ marginRight: '1rem', color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>
          Home
        </Link>
        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>
          Products
        </Link>
      </div>
      <button onClick={toggleTheme} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
