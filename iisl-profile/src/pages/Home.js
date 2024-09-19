import React from "react";
import "./Home.css"; // Link CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Empowering Digital Futures</h1>
          <p>
          World-class IT solutions for efficiency, innovation, and growth.
          </p>
          <button className="cta-button">Contact Us Today</button>
        </div>
     
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Software Development</h3>
            <p>
              We create custom software solutions that solve real-world problems
              for businesses across industries.
            </p>
          </div>
          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>
              Our cloud services ensure scalability, security, and reliability
              for your IT infrastructure.
            </p>
          </div>
          <div className="service-card">
          <h3>Cybersecurity Audits & Compliance</h3>
            <p>
            Auditing systems for compliance and enhancing security to safeguard data.
            </p>
          </div>

          <div className="service-card">
          <h3>IT Consultancy and Strategy Planning</h3>
            <p>
            Designing and implementing IT strategies 
            to align technology with business goals and optimize infrastructure.
            </p>
          </div>
          
          <div className="service-card">
          <h3>IT Infrastructure Management</h3>
            <p>
            IT strategy design, infrastructure optimization, 
            and management of hardware and software installations.
            </p>
          </div>

          <div className="service-card">
            <h3>Data Analytics & Insights</h3>
            <p>
            
Data analysis and business intelligence for informed decision-making and performance improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>IISL transformed our IT systems,
              boosting efficiency and reducing costs."
            </p>
            <p className="author">Rober M, CEO of Techie World</p>
          </div>
          <div className="testimonial-card">
            <p>
              "Their team is highly professional and provided excellent support
              throughout the project."
            </p>
            <p className="author">Luciana, CTO of Afaazi Events</p>
          </div>
          <div className="testimonial-card">
            <p>
              "Their team is highly professional and provided excellent support
              throughout the project."
            </p>
            <p className="author">Frank, CTO of Media Apps</p>
          </div>
          
         
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Take Your Business to the Next Level?</h2>
        <p>
          Contact us today and discover how our IT solutions can help your
          business grow.
        </p>
        <button className="cta-action-button">Get a Free Consultation</button>
      </section>
    </div>
  );
};

export default Home;
