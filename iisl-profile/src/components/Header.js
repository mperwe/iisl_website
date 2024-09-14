import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Link CSS

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link to="/">IISL</Link>
        </h1>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button className="menu-icon" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
