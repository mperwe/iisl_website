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

const networks = () => {
  return (
    <div className="styles-container">
      {/* Services Section */}
      <h2 className="styles-title"> <h2 className="page-title">IT & Network Solutions</h2>
      </h2>
      <div className="styles-grid">
        {/* Styles Cards */}
       
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Network Design & Implementation;</b>
          Planning and building efficient networks, including wired (LAN/WAN), wireless, and secure remote connections (VPNs) to meet organizational needs
          </p>
        </a>
        
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>IT Infrastructure Management;</b>
          Managing and optimizing servers, storage, and other hardware/software to ensure smooth and reliable IT operations.
          </p>
        </a>

        <a href="#" className="styles-card">
          <img src={card3Img} alt="Descriptive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Cybersecurity Services;</b>
          Implementing tools and practices to protect networks, systems, and data from cyber threats like hacking, malware, and unauthorized access.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card4Img} alt="Predictive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Cloud Computing and Virtualization;</b>
          Enabling scalable, cost-effective IT operations by hosting resources in the cloud and using virtual machines to maximize resource utilization
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card5Img} alt="Visualization & Reporting" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Proactive Monitoring and Maintenance;</b>
          Continuously monitoring IT systems to identify and resolve potential issues before they impact performance or security.
          </p>
        </a>
        <a href="#" className="styles-card">
          <img src={card6Img} alt="Strategic Decision-Making" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Technical Support and Helpdesk Services;</b>
          Providing assistance to users through troubleshooting, resolving IT problems, and offering guidance on technology use.
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

export default networks;
