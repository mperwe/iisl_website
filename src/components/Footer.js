import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Buganda yiyo Buganda yange (BYBY). All Rights Reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <Link to="/About" className="hover:text-white">About Us</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="https://www.linkedin.com/in/frank-mperwe-991ba6191/" className="hover:text-white">LinkedIn</a>
          <a href="https://x.com/mperwefrank" className="hover:text-white">Twitter</a>
          <a href="https://x.com/mperwefrank" className="hover:text-white">www.iisl.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
