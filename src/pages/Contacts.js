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
      
      <div className="contact-info p-6 bg-white shadow-lg rounded-lg mb-8">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">
          Whether it's a question, a suggestion, or a business inquiry, don't hesitate to get in touch. We value all feedback and strive to respond promptly.
        </p>
        
        <div className="contact-actions mt-6">
          <h3 className="text-2xl font-semibold mb-4">Additional Options</h3>
          
          {/* Link to Google Calendar */}
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+Request&details=Please+book+an+appointment&location=&dates=20231120T120000Z/20231120T130000Z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-schedule bg-blue-500 text-white py-2 px-4 rounded mb-4 block w-full text-center"
          >
            Schedule an Appointment
          </a>

          {/* Link to Email */}
          <a
            href="mailto:frankmperwe@gmail.com?subject=Contact%20Request"
            className="btn-email bg-green-500 text-white py-2 px-4 rounded mb-4 block w-full text-center"
          >
            Send Us an Email
          </a>

          {/* Link to WhatsApp */}
          <a
            href="https://wa.me/256759555517"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp bg-green-400 text-white py-2 px-4 rounded block w-full text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
