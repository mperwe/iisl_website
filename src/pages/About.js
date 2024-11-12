import React from "react";
import "./About.css"; // Link CSS

const About = () => {
  return (
    <div className="about-container">
      {/* Banner Section */}
      <div className="banner-section">
        <img src="/" alt="About Us Banner" className="about-banner" />
        <h1 className="banner-title">About Intercontinental Infotech Solutions (IISL)</h1>
      </div>

      {/* About Us Section */}
      <div className="about-card">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-paragraph">
          Intercontinental Infotech Solutions (IISL) provides advanced IT solutions,
          strategic consulting, and professional training, helping businesses and individuals
          succeed in the digital space. Our certified experts specialize in cloud computing,
          cybersecurity, software development, and data analytics.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="about-card">
        <h3 className="about-subtitle">Our Vision</h3>
        <p className="about-paragraph">
          To be a global leader in IT solutions, empowering businesses and individuals
          through innovation, expertise, and a commitment to excellence.
        </p>
        <h3 className="about-subtitle">Our Mission</h3>
        <p className="about-paragraph">
          To provide innovative, reliable, and scalable IT services that help our clients
          achieve their goals, while fostering a culture of continuous learning and growth.
        </p>
      </div>

      {/* Why Choose IISL and Our Services Section */}
      <div className="about-card">
        <h3 className="about-subtitle">Why Choose IISL?</h3>
        <ul className="about-list">
          <li>Expertise across various IT domains</li>
          <li>Global reach with tailored solutions</li>
          <li>Commitment to innovation and excellence</li>
          <li>Customer-centric approach</li>
        </ul>

        <h3 className="about-subtitle">Our Services</h3>
        <ul className="about-list">
          <li>IT Consulting Services</li>
          <li>Managed IT Services</li>
          <li>Cloud Services</li>
          <li>Cybersecurity Solutions</li>
          <li>Software Development and Integration</li>
          <li>IT Training and Development</li>
          <li>Data Analytics and Business Intelligence</li>
        </ul>
      </div>

      {/* Board of Trustees Section */}
      <h2 className="about-title">Board of Trustees</h2>
      <div className="trustees-section">
        <div className="trustee-card">
          <img src="." alt="Trustee 1" className="trustee-image" />
          <h3 className="trustee-name">Trustee 1</h3>
          <p className="trustee-description">A brief description of Trustee 1's role and contributions.</p>
        </div>
        <div className="trustee-card">
          <img src="/trustee2.jpg" alt="Trustee 2" className="trustee-image" />
          <h3 className="trustee-name">Trustee 2</h3>
          <p className="trustee-description">A brief description of Trustee 2's role and contributions.</p>
        </div>
        <div className="trustee-card">
          <img src="/trustee3.jpg" alt="Trustee 3" className="trustee-image" />
          <h3 className="trustee-name">Trustee 3</h3>
          <p className="trustee-description">A brief description of Trustee 3's role and contributions.</p>
        </div>
      </div>
    </div>
  );
};

export default About;