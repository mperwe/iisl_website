import React from "react";
import "./Contact.css";
import boyImage from "../components/images/boy2.jpg";

const Contact = () => {
  return (
    <div className="contact-container mx-auto px-4 py-8">
      <div className="contact-card shadow-lg rounded-lg overflow-hidden mb-8">
        <img src={boyImage} alt="Contact" className="card-image" />
        <div className="card-content p-6">
          <h2 className="card-title text-3xl font-bold mb-4">Connect with Us</h2>
          <p className="card-description text-lg mb-4">
            We're always ready to assist. Feel free to reach out with any questions or feedback.
          </p>
          <p className="card-description text-lg mb-2">
            Email: <a href="mailto:info@iisl.com" className="contact-link">info@iisl.com</a>
          </p>
          <p className="card-description text-lg">
            Phone: <span className="contact-phone">(123) 456-7890</span>
          </p>
        </div>
      </div>
      
      <div className="contact-info p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">
          Whether it's a question, a suggestion, or a business inquiry, don't hesitate to get in touch. We value all feedback and strive to respond promptly.
        </p>
      </div>
    </div>
  );
};

export default Contact;
