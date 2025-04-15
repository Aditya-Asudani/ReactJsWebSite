import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🏍️ Motorbike Explorer</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/top-bikes">Top Bikes</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
