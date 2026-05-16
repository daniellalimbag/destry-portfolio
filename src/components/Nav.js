import React, { useState } from 'react';
import { FiBriefcase, FiHome, FiMail, FiMenu, FiMoon, FiSun, FiUser, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Nav = ({ toggleTheme }) => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLogo = '';
  const navItems = [
    { href: '#home', label: 'Home', icon: <FiHome aria-hidden="true" /> },
    { href: '#about', label: 'About', icon: <FiUser aria-hidden="true" /> },
    { href: '#experience', label: 'Experience', icon: <FiBriefcase aria-hidden="true" /> },
    { href: '#contact', label: 'Contact', icon: <FiMail aria-hidden="true" /> },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="nav">
      <div className="container">
        <a className="nav-brand" href="#home" aria-label="Home">
          {navLogo ? (
            <img src={navLogo} alt="Destry Limbag logo" />
          ) : (
            <span className="nav-brand-placeholder">DL</span>
          )}
          <span className="nav-brand-text">Destry Limbag</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`} id="site-navigation">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {theme === 'light' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
