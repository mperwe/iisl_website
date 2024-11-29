import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS
import logo from "../pages/iisllogo.png"; // Import the logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">
            <img src={logo} alt="IISL Logo" className="logo-image" />
          </Link>
        </h1>
        <nav className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <div className="dropdown">
            <span
              className="dropdown-trigger"
              onClick={toggleDropdown}
            >
              Services
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/business">Data & Business</Link>
                </li>
                <li>
                  <Link to="/network">Networking</Link>
                </li>
                <li>
                  <Link to="/Software">Software</Link>
                </li>
                <li>
                  <Link to="/training">Training</Link>
                </li>
                <li>
                  <Link to="/consult">Support</Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/contact">Contact</Link>
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
