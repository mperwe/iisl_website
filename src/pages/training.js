import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles.css"; // Link CSS

// Import images for the service cards
import card1Img from "../components/images/training1.jpeg";
import card2Img from "../components/images/training2.jpg";
import card3Img from "../components/images/training3.jpeg";
import card4Img from "../components/images/training4.jpeg";
import card5Img from "../components/images/training5.png";
import card6Img from "../components/images/training6.jpeg";

const Training = () => {
  return (
    <div className="styles-container">
      {/* Services Section */}
      <h2 className="styles-title">      <h2 className="page-title">IT Training and Talent Solutions</h2>
      </h2>
      <div className="styles-grid">
        {/* Styles Cards */}
       
        <a href="#" className="styles-card">
          <img src={card1Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Professional IT Skills Development;</b> IISL provides Providing tailored training programs to upskill individuals in areas like programming, cybersecurity, networking, and cloud computing.
          </p>
        </a>
        
        <a href="#" className="styles-card">
          <img src={card2Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Talent Placement and Staffing;</b>Offering businesses access to skilled IT professionals through outsourcing, contract staffing, or permanent hiring solutions
          </p>
        </a>

        <a href="#" className="styles-card">
          <img src={card3Img} alt="Descriptive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Customized Corporate Training;</b> We build the software by writing code using appropriate programming languages, frameworks, and tools. Our team develops the product in stages or modules to ensure accuracy and functionality.
          </p>
        </a>
            
        <a href="#" className="styles-card">
          <img src={card4Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>24/7 Technical Support;</b> Offering round-the-clock assistance to resolve IT issues, ensuring minimal downtime and continuous system functionality.
          </p>
        </a>
        
        <a href="#" className="styles-card">
          <img src={card5Img} alt="Data Cleaning & Preparation" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
          <b>Proactive System Monitoring;</b>Constantly monitoring IT systems for potential issues, addressing problems before they impact operations, and ensuring optimal performance.
          </p>
        </a>

        <a href="#" className="styles-card">
          <img src={card6Img} alt="Descriptive Analytics" className="styles-image" />
          <h3 className="card-title"></h3>
          <p className="card-description">
            <b>Scalable IT Solutions;</b> Offering flexible and scalable technology solutions that grow with your business needs, ensuring your IT infrastructure can adapt to changing demands.
          </p>
        </a>
        
        
      </div>

           
    </div>
  );
};

export default Training;
