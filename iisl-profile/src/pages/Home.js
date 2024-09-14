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
        <div className="hero-image">
          <img src="logo192.png" alt="IT Solutions" />
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
            <h3>Network Security</h3>
            <p>
              Protect your business with top-tier network security solutions
              tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "Intercontinental Infotech Solutions transformed our IT systems,
              boosting efficiency and reducing costs."
            </p>
            <p className="author">- John Doe, CEO of TechCorp</p>
          </div>
          <div className="testimonial-card">
            <p>
              "Their team is highly professional and provided excellent support
              throughout the project."
            </p>
            <p className="author">- Jane Smith, CTO of InnovateX</p>
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
