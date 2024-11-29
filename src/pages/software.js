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
      <h2 className="styles-title">      <h2 className="page-title">Software Development</h2>
      </h2>
      <div className="styles-grid">
        {/* Styles Cards */}
       
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Requirement Analysis;</b> IISL works closely with stakeholders to gather detailed information about the software’s purpose, define business objectives, and outline user expectations. This ensures we fully understand the technical and functional requirements.
          </p>
        </a>
        
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>System Design;</b>We create a detailed blueprint for the software, including its architecture, user interface (UI/UX), database structure, and workflows. This design serves as a roadmap for the development process.
          </p>
        </a>

        <a href="#" className="styles-card">
          <img src={card3Img} alt="Descriptive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Development and Coding;</b> We build the software by writing code using appropriate programming languages, frameworks, and tools. Our team develops the product in stages or modules to ensure accuracy and functionality.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card4Img} alt="Predictive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Quality Assurance and Testing; </b> We rigorously test the software to identify and fix bugs, vulnerabilities, or inefficiencies. Our testing methods include functional, performance, integration, and user acceptance testing to deliver a reliable product.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card5Img} alt="Visualization & Reporting" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>System Deployment;</b>Once tested and approved, the software is deployed into a production environment. This involves setting up servers, configuring systems, and ensuring the software works smoothly in real-world conditions..
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card6Img} alt="Strategic Decision-Making" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Maintenance and Updates;</b>We provide ongoing support to address issues, implement updates, and add new features as needed. This ensures the software remains efficient, secure, and aligned with evolving requirements.
          </p>
        </a>
      </div>

     
    </div>
  );
};

export default Software;
