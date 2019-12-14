import React from 'react';
import { Link } from 'react-router-dom';
import './header.sass';

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1>StarDB</h1>
    </Link>
    <nav className="header-nav">
      <Link to="/people/" className="nav-item">People</Link>
      <Link to="/planets/" className="nav-item">Planets</Link>
      <Link to="/starships/" className="nav-item">Starships</Link>
      <Link to="/login" className="nav-item">Login</Link>
      <Link to="/secret" className="nav-item">Secret</Link>
    </nav>
  </div>
);

export default Header;