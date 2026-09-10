import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Job Board Platform. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;