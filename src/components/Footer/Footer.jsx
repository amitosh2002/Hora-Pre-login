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
        <div className="app-footer__badge">
          <a
            href="https://www.producthunt.com/products/hora?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-hora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Hora - Agile PM for Devs | Product Hunt"
              width="250"
              height="54"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1323303&theme=neutral&t=1795111233107"
            />
          </a>
        </div>
        <p className="app-footer__copy">
          &copy; {year} Hora System Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
