import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Import images
import bug1 from "../components/images/bug1.jpeg"
import bug3 from "../components/images/bug3.jpg"
import bug4 from "../components/images/bug4.jpg"

const Home = () => {
  const images = [ bug1, bug3, bug4 ]; // Array of images to slide
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
          <h1>Buganda YIYO Buganda YANGE</h1>
          <p>
            Ekitiibwa kya Buganda kyava dda.<br />
            Naffe tukikuumenga. <br />
        
          </p>
          <Link to="/">
            <button className="cta-button">Tusome</button> {/* "Learn, Explore" */}
          </Link>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="slider-section">
        <h2>BYBY Activities in Buganda</h2>
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
        <h2>Our Proud Partners</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "Twagala okukyusa enkolagana n’abaana
              b'Obuganda."
            </p>
            <p className="author">K. K, Chairperson of Buganda Youth</p>
          </div>
          <div className="testimonial-card">
            <p>
             Tukozesa obuvunaanyizibwa
              okuva ku banaku."
            </p>
            <p className="author">K- B, Cultural Leader</p>
          </div>
          <div className="testimonial-card">
            <p>
              "BYBY etukwatira ne Buganda Youth mu ngeri ezenjawulo, okufuula
              abaana b’Obuganda abajjukirwa mu byafaayo."
            </p>
            <p className="author">N A, Youth Advocate</p>
          </div>
          <div className="testimonial-card">
            <p>
              
              Okutandika amateeka ag’ekitiibwa."
            </p>
            <p className="author">M M, Activist</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Celebrate Buganda's Rich Culture?</h2>
        <p>
          Join us in promoting Buganda's traditions, unity, and youthful energy.
          Become part of a growing cultural movement today.
        </p>

        <Link to="/Contact">
          <button className="cta-action-button">Donation</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
