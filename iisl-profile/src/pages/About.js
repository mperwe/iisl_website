import React from "react";
import "./About.css"; // Link CSS

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-paragraph">
          Intercontinental Infotech Solutions (IISL) is a global leader in delivering cutting-edge IT solutions, strategic consulting, and professional training. We empower businesses and individuals to navigate the complexities of the digital landscape, with a focus on innovation, reliability, and scalability.
        </p>
        <p className="about-paragraph">
          Our team of certified professionals offers deep expertise in cloud computing, cybersecurity, software development, and data analytics. Whether you’re a startup or a multinational corporation, IISL has the resources to support your digital transformation.
        </p>

        <h3 className="about-subtitle">Our Vision</h3>
        <p className="about-paragraph">
          To be a global leader in IT solutions, empowering businesses and individuals through innovation, expertise, and a commitment to excellence.
        </p>

        <h3 className="about-subtitle">Our Mission</h3>
        <p className="about-paragraph">
          To provide innovative, reliable, and scalable IT services that help our clients achieve their goals, while fostering a culture of continuous learning and growth.
        </p>

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
        </ul>
      </div>
    </div>
  );
};

export default About;
