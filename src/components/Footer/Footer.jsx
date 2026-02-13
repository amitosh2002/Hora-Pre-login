import React from 'react';
import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer__container">
        <div className="app-footer__brand">HORA</div>
        <p className="app-footer__copy">
          &copy; {year} Hora System Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
