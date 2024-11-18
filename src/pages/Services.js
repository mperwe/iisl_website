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
        <img src="/" alt="ervice Banner" className="about-banner" />
        <h1 className="banner-title">Our Service (IISL)</h1>
      </div>
      <div className="services-grid">
         {/* Software Development and Integration */}
         <a href="/software" className="service-card">
          <h3 className="service-title">Data & Business Intelligence</h3>
          <p className="service-description">
          Turning data into insights, using analysis and forecasts to guide strategic decisions and drive growth.
          </p>
        </a>

        {/* Managed IT Services */}
        <a href="/network" className="service-card">
          <h3 className="service-title">Managed IT Services</h3>
          <p className="service-description">
          This involves outsourcing IT management to experts, ensuring smooth operations and security while businesses focus on their core tasks.
          </p>
        </a>

        {/* Cloud Services */}
        <a href="/cyber" className="service-card">
          <h3 className="service-title">Cloud Services</h3>
          <p className="service-description">
          Offering remote access to computing resources like storage and software, Cloud Services provide businesses with scalability, flexibility, and cost savings.
          </p>
        </a>

        {/* Cybersecurity Solutions */}
        <a href="/cyber" className="service-card">
          <h3 className="service-title">Cybersecurity Solutions</h3>
          <p className="service-description">
          Protect businesses from digital threats through measures like firewalls, encryption, and threat monitoring.
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
        <a href="/consult" className="service-card">
          <h3 className="service-title">IT Training and Outsourcing</h3>
          <p className="service-description">
          We enhance productivity through training and optimize operations by outsourcing expert tasks, reducing costs.
          </p>
        </a>

        {/* IT Consulting Services */}
        <a href="/consult" className="service-card">
          <h3 className="service-title">IT Consulting Services</h3>
          <p className="service-description">
          We help businesses optimize their IT systems for better efficiency and growth by offering expert advice and implementing tailored technology solutions.
          </p>
        </a>
        
        
         {/* Network Infrastructure Design and Optimization */}
         <a href="/network" className="service-card">
          <h3 className="service-title">Network Infrastructure </h3>
          <p className="service-description">
          We design and plan secure, scalable networks to ensure efficient business communication, supporting seamless operations.
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
