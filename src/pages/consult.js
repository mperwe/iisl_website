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
      <h2 className="styles-title"> 
      <h2 className="page-title">Continuous IT Support & Services</h2>
      </h2>
      <div className="styles-grid">
        {/* Styles Cards */}
       
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>24/7 Technical Support;</b> Offering round-the-clock assistance to resolve IT issues, ensuring minimal downtime and continuous system functionality.
          </p>
        </a>
        
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Proactive System Monitoring;</b>Constantly monitoring IT systems for potential issues, addressing problems before they impact operations, and ensuring optimal performance.
          </p>
        </a>

        <a href="#" className="styles-card">
          <img src={card3Img} alt="Descriptive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Scalable IT Solutions;</b> Offering flexible and scalable technology solutions that grow with your business needs, ensuring your IT infrastructure can adapt to changing demands.
          </p>
        </a>
        
      </div>

      
    </div>
  );
};

export default Software;
