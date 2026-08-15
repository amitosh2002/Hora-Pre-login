import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer__container">
        <div className="app-footer__brand">HORA</div>
        <nav className="app-footer__links">
          <Link to="/about" className="app-footer__link">About Us</Link>
          <Link to="/careers" className="app-footer__link">Careers</Link>
          <Link to="/terms-and-policy" className="app-footer__link">Terms of Service</Link>
          <Link to="/terms-and-policy#privacy" className="app-footer__link">Privacy Policy</Link>
        </nav>
        <p className="app-footer__copy">
          &copy; {year} Hora System Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
