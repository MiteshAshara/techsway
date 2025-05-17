import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef();
  const toggleRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuOpen && 
        navRef.current && 
        !navRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  return (
    <header id="header" className={`header fixed-top bg-white shadow-sm py-2 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <NavLink to="/" className="logo text-primary fw-bold fs-4 text-decoration-none">
          Techsinfoway
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          ref={toggleRef}
          className="btn d-lg-none fs-3"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>

        {/* Nav Menu */}
        <nav ref={navRef} className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
