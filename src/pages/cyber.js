import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles.css"; // Link CSS

// Import images for the service cards
import card1Img from "../components/images/boy1.jpg";
import card2Img from "../components/images/boy2.jpg";
import card3Img from "../components/images/boy3.jpg";
import card4Img from "../components/images/boy1.jpg";
import card5Img from "../components/images/boy2.jpg";
import card6Img from "../components/images/boy3.jpg";

const Software = () => {
  return (
    <div className="styles-container">
      {/* Services Section */}
      <h2 className="styles-title">Cybersecurity & Cloud Services</h2>
      <div className="styles-grid">
        {/* Styles Cards */}
        <a href="#" className="styles-card">
          <img src={card1Img} alt="Software Development" className="styles-image" />
          <h3 className="styles-title">Software Development and Integration</h3>
          <p className="styles-description">
            Custom software solutions tailored to meet the specific needs of your business and seamless integration with existing systems.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Analytics" className="styles-image" />
          <h3 className="styles-title">Data Analytics and Business Intelligence</h3>
          <p className="styles-description">
            Gain insights and make data-driven decisions with advanced analytics and BI tools.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card3Img} alt="Cloud Solutions" className="styles-image" />
          <h3 className="styles-title">Cloud Solutions and Management</h3>
          <p className="styles-description">
            Scalable and secure cloud solutions that grow with your business needs.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card4Img} alt="Cybersecurity" className="styles-image" />
          <h3 className="styles-title">Cybersecurity and Risk Management</h3>
          <p className="styles-description">
            Protect your data and infrastructure with state-of-the-art cybersecurity solutions.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card5Img} alt="IT Consulting" className="styles-image" />
          <h3 className="styles-title">IT Consulting and Strategy</h3>
          <p className="styles-description">
            Expert IT consultancy to guide your business through digital transformation.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card6Img} alt="AI & Automation" className="styles-image" />
          <h3 className="styles-title">AI & Automation Solutions</h3>
          <p className="styles-description">
            Leverage AI to streamline operations and drive business innovation.
          </p>
        </a>
      </div>

      {/* Back to Services Button */}
      <div className="back-button-container">
        <Link to="/services" className="back-button">
          Back to Services
        </Link>
      </div>

           {/* Business Partners Section */}
      <div className="partners-section">
        <h2 className="section-title">Our Trusted Partners</h2>
        <div className="partners-logos">
          {/* Partner logos or links */}
        </div>
      </div>
    </div>
  );
};

export default Software;
