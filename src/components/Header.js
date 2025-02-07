import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../pages/bylogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">
            <img src={logo} alt="IISL Logo" className="logo-image" />
          </Link>
        </h1>
        <nav className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
  <Link to="/" className="menu-item" onClick={toggleMenu}>HOME</Link>
  <Link to="/" className="menu-item" onClick={toggleMenu}>ABOUT</Link>
  <div className="dropdown">
    <span
      className="dropdown-trigger"
      onClick={toggleDropdown}
      role="button"
      tabIndex={0}
    >
      SERVICES
    </span>
    {isDropdownOpen && (
      <ul className="dropdown-menu">
        <li><Link to="/" className="menu-item" onClick={toggleDropdown}>Buganda1</Link></li>
        <li><Link to="/" className="menu-item" onClick={toggleDropdown}>Buganda2</Link></li>
            </ul>
    )}
  </div>
  <Link to="/contact" className="menu-item" onClick={toggleMenu}>CONTACTS</Link>
</nav>
        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
