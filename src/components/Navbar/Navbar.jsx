import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.scss';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/overview', label: 'Platform' },
    { to: '/github-services', label: 'Integrations' },
    { to: '/about', label: 'Company' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src="https://res.cloudinary.com/dwo8ge51h/image/upload/v1785561812/Hora-logo-template_icl86k.png" 
            alt="Hora Logo" 
            className="navbar__logo" 
          />
          <span style={{ fontSize: '22px', fontWeight: '900', color: '#6366f1', letterSpacing: '-0.5px' }}>HORA</span>
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
              key={label}
              to={to}
              className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a href="https://app.hora.team" className="navbar__link navbar__link-external" onClick={() => setOpen(false)}>
            Get Started <ArrowUpRight size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}
