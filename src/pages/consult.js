import React from "react";
import "./Services.css"; // Link CSS

// Import images for the extra cards
import extraCard1Img from "../components/images/boy2.jpg";
import extraCard2Img from "../components/images/boy2.jpg";

const Services = () => {
  return (
    <div className="services-container">
      {/* Services Section */}
      <h2 className="services-title">IT Consultation & Training</h2>
      <div className="services-grid">
                        
        {/* IT Training and Development */}
        <a href="" className="service-card">
          <h3 className="service-title">IT Training and Development</h3>
          <p className="service-description">
            Professional training programs designed to enhance the IT skills of your workforce and foster growth.
          </p>
        </a>

        {/* IT Consulting Services */}
        <a href="" className="service-card">
          <h3 className="service-title">IT Consulting Services</h3>
          <p className="service-description">
            Providing expert IT consulting to help businesses streamline operations, boost efficiency, and stay ahead of the competition.
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
        <h2 className="section-title">Our Trusted Partners</h2>
        <div className="partners-logos">
          {/* Partner logos or links */}
        </div>
      </div>
    </div>
  );
};

export default Services;
