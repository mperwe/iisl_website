import React from "react";
import "./Services.css"; // Link CSS

// Import service logos
import itConsultingLogo from "../components/images/boy1.jpg";
import managedItServicesLogo from "../components/images/boy2.jpg";
import cloudServicesLogo from "../components/images/boy3.jpg";
import cybersecurityLogo from "../components/images/boy1.jpg";
import softwareDevelopmentLogo from "../components/images/boy2.jpg";
import itTrainingLogo from "../components/images/boy3.jpg";
import partner1 from "../components/images/boy2.jpg";
import partner2 from "../components/images/boy2.jpg";
import partner3 from "../components/images/boy2.jpg";

const Services = () => {
  return (
    <div className="services-container">
      {/* Services Section */}
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {/* IT Consulting Services */}
        <div className="service-card">
          <img src={itConsultingLogo} alt="IT Consulting Logo" className="service-logo" />
          <h3 className="service-title">IT Consulting Services</h3>
          <p className="service-description">
            Providing expert IT consulting to help businesses streamline operations, boost efficiency, and stay ahead of the competition.
          </p>
        </div>

        {/* Managed IT Services */}
        <div className="service-card">
          <img src={managedItServicesLogo} alt="Managed IT Services Logo" className="service-logo" />
          <h3 className="service-title">Managed IT Services</h3>
          <p className="service-description">
            Comprehensive management of your IT infrastructure to ensure continuous operations and reduce downtime.
          </p>
        </div>

        {/* Cloud Services */}
        <div className="service-card">
          <img src={cloudServicesLogo} alt="Cloud Services Logo" className="service-logo" />
          <h3 className="service-title">Cloud Services</h3>
          <p className="service-description">
            Scalable and secure cloud solutions to enhance collaboration and data accessibility.
          </p>
        </div>

        {/* Cybersecurity Solutions */}
        <div className="service-card">
          <img src={cybersecurityLogo} alt="Cybersecurity Solutions Logo" className="service-logo" />
          <h3 className="service-title">Cybersecurity Solutions</h3>
          <p className="service-description">
            Robust cybersecurity measures to safeguard your digital assets from potential threats and breaches.
          </p>
        </div>

        {/* Software Development and Integration */}
        <div className="service-card">
          <img src={softwareDevelopmentLogo} alt="Software Development Logo" className="service-logo" />
          <h3 className="service-title">Software Development and Integration</h3>
          <p className="service-description">
            Custom software solutions tailored to meet the specific needs of your business and seamless integration with existing systems.
          </p>
        </div>

        {/* IT Training and Development */}
        <div className="service-card">
          <img src={itTrainingLogo} alt="IT Training Logo" className="service-logo" />
          <h3 className="service-title">IT Training and Development</h3>
          <p className="service-description">
            Professional training programs designed to enhance the IT skills of your workforce and foster growth.
          </p>
        </div>
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
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
        </div>
      </div>
    </div>
  );
};

export default Services;
