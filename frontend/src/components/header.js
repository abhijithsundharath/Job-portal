import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Job Board</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#post">Post Job</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;