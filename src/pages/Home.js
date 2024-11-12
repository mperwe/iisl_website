import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Import images
import boy1 from "../components/images/boy1.jpg";
import boy2 from "../components/images/boy2.jpg";
import boy3 from "../components/images/boy3.jpg";

const Home = () => {
  const images = [boy1, boy2, boy3]; // Array of images to slide
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000); // Change image every 6 seconds for a slower effect

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Empowering Digital Futures</h1>
          <p>World-class IT solutions for efficiency, innovation, and growth.</p>
          <Link to="/services">
            <button className="cta-button">Let’s Connect</button>
          </Link>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="slider-section">
        <h2>Explore Our Projects</h2>
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentImage ? "active" : ""}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Our Trusted Partners</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "IISL transformed our IT systems, boosting efficiency and reducing
              costs."
            </p>
            <p className="author">Robert M, CEO of Techie World</p>
          </div>
          <div className="testimonial-card">
            <p>
              "Their team is highly professional and provided excellent support
              throughout the project."
            </p>
            <p className="author">Afaazi, CTO of Afaazi Events</p>
          </div>
          <div className="testimonial-card">
            <p>
              "The solutions they provided significantly improved our workflow
              and productivity."
            </p>
            <p className="author">Frank, CTO of Media Apps</p>
          </div>
          <div className="testimonial-card">
            <p>
              "The solutions they provided significantly improved our workflow
              and productivity."
            </p>
            <p className="author">Frank, CTO of Media Apps</p>
          </div>
          <div className="testimonial-card">
            <p>
              "The solutions they provided significantly improved our workflow
              and productivity."
            </p>
            <p className="author">Frank, CTO of Media Apps</p>
          </div>
          <div className="testimonial-card">
            <p>
              "The solutions they provided significantly improved our workflow
              and productivity."
            </p>
            <p className="author">Frank, CTO of Media Apps</p>
          </div>
          <div className="testimonial-card">
            <p>
              "The solutions they provided significantly improved our workflow
              and productivity."
            </p>
            <p className="author">Frank, CTO of Media Apps</p>
          </div>
          <div className="testimonial-card">
            <p>
              "The solutions they provided significantly improved our workflow
              and productivity."
            </p>
            <p className="author">Frank, CTO of Media Apps</p>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Take Your Business to the Next Level?</h2>
        <p>Contact us today to discover how our IT solutions can help your business grow.</p>
        <button className="cta-action-button">Get a Free Consultation</button>
      </section>
    </div>
  );
};

export default Home;
