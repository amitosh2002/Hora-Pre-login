import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HoraLogo from '../../assets/PlatIcons/HoraLogo';
import './Navbar.scss';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/overview', label: 'Overview' },
    { to: '/github-services', label: 'GitHub Services' },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <HoraLogo width={58} height={68} className="navbar__logo" />
          <span className="navbar__brand-text">HORA</span>
        </Link>
        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
