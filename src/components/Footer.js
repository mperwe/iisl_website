import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Intercontinental Infotech Solutions (IISL). All Rights Reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <Link to="/about" className="hover:text-white">About Us</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
