import React from "react";
import "./About.css";

// Import images
import data from "../components/assets/data1.jpg";
import data3 from "../components/assets/data3.jpg";
import cloud1 from "../components/images/IT2.jpg";

const trustees = [
  {
    img: data, // Imported image
    name: "Trustee 1",
    description: "A brief description of Trustee 1's role and contributions.",
  },
  {
    img: data3, // Imported image
    name: "Trustee 2",
    description: "A brief description of Trustee 2's role and contributions.",
  },
  {
    img: cloud1, // Imported image
    name: "Trustee 3",
    description: "A brief description of Trustee 3's role and contributions.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Banner Section */}
      <div className="banner-section">
        <h1 className="banner-title">Welcome to IISL</h1>
      </div>

      {/* About Us Section */}
      <section className="about-card">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-paragraph">
          Intercontinental Infotech Solutions (IISL) provides advanced IT solutions,
          strategic consulting, and professional training. We empower businesses and individuals
          in cloud computing, cybersecurity, software development, and data analytics.
        </p>
      </section>

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
      <section className="trustees-section">
        <h2 className="about-title">Board of Trustees</h2>
        <div className="trustees-grid">
          {trustees.map((trustee, index) => (
            <div key={index} className="trustee-card">
              <img
                src={trustee.img}
                alt={trustee.name}
                className="trustee-image"
              />
              <h3 className="trustee-name">{trustee.name}</h3>
              <p className="trustee-description">{trustee.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
