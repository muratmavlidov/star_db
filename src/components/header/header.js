import React from 'react';
import './header.sass';

const Header = () => (
  <div className="header">
    <h1>StarDB</h1>
    <nav className="header-nav">
      <a href="/" className="nav-item">People</a>
      <a href="/" className="nav-item">Planets</a>
      <a href="/" className="nav-item">Starships</a>
    </nav>
  </div>
);

export default Header;