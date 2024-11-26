import React from "react";
import "./Services.css"; // Link CSS

// Import images for the extra cards
import extraCard1Img from "../components/images/boy2.jpg";
import extraCard2Img from "../components/images/boy2.jpg";

const Services = () => {
  return (
    <div className="services-container">
      {/* Services Section */}
       {/* Banner Section */}
       <div className="banner-section">
       
      </div>
      <div className="services-grid">
         {/* Software Development and Integration */}
         <a href="/business" className="service-card">
          <h3 className="service-title">Data & Business Intelligence</h3>
          <p className="service-description">
          We help businesses analyze data, uncover insights, and support informed decision-making. Our solutions utilize advanced tools to identify trends, optimize processes, and provide actionable strategies, driving improved performance, efficiency, and growth.
          </p>
        </a>

        {/* Managed IT Services */}
        <a href="/network" className="service-card">
          <h3 className="service-title">IT & Network Solutions</h3>
          <p className="service-description">
          we manage & imporve technology systems and networks for security and connectivity. It covers setup, maintenance, and troubleshooting of IT systems and infrastructure. The goal is to optimize performance and support organizational growth.
          </p>
        </a>
                 
        {/* Software Development and Integration */}
        <a href="/software" className="service-card">
          <h3 className="service-title">Software Development </h3>
          <p className="service-description">
          We create custom software solutions that integrate smoothly with existing systems to optimize business processes and functionality.
          </p>
        </a>

        {/* IT Training and Development */}
        <a href="/training" className="service-card">
          <h3 className="service-title">IT Training & Talent Solutions</h3>
          <p className="service-description">
          We help individuals develop essential tech skills and connect businesses with qualified IT professionals, offering tailored training and staffing solutions to meet organizational needs
          </p>
        </a>

        {/* IT Consulting Services */}
        <a href="/consult" className="service-card">
          <h3 className="service-title">Continuous IT Support & Services</h3>
          <p className="service-description">
          We provides ongoing assistance, proactive monitoring, and regular maintenance to ensure your IT infrastructure runs smoothly, securely, and without interruptions.
          </p>
        </a>
        
        
        
       
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial">
          <p>"IISL transformed our IT infrastructure, allowing us to scale our operations seamlessly." - John Doe, CEO of TechCorp</p>
        </div>
               
        <div className="testimonial">
          <p>"Their cybersecurity solutions are top-notch. We feel much more secure." - Jane Smith, CTO of Secure Solutions</p>
        </div>
      </div>
      

      {/* Business Partners Section */}
      <div className="partners-section">
        <h2 className="section-title"></h2>
        <div className="partners-logos">
          {/* Partner logos or links */}
        </div>
      </div>
    </div>
  );
};

export default Services;
