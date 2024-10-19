// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png'; // Adjust this path according to your folder structure


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setToggle(false);
    }, 300);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">PMALL
      <Link to="/">
          <img src={logo} alt="PMALL Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className={`navbar-links ${toggle ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
        <Link to="/projects" className="nav-link" onClick={handleLinkClick}>Projects</Link>
        <Link to="/testimonials" className="nav-link" onClick={handleLinkClick}>Testimonials</Link>
        <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
      </div>
      <div className={`navbar-toggle ${toggle ? 'active' : ''}`} onClick={handleToggle}>
        {toggle ? (
          <span className="close-icon">&#10005;</span>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
