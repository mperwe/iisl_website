import React from "react";
import "./Contact.css";
import contactus1 from "../pages/iisllogo.png";


/* Reusable Button Component */
const ContactButton = ({ href, label, bgColor, textColor, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`py-2 px-4 rounded text-center block w-full mb-4 font-semibold transition-transform transform hover:scale-105 ${bgColor} ${textColor}`}
    aria-label={label}
  >
    {children}
  </a>
);

/* Main Contact Component */
const Contact = () => {
  return (
    <section className="contact-container mx-auto px-4 py-12 max-w-4xl">
      {/* Contact Card */}
      <article className="contact-card shadow-lg rounded-lg overflow-hidden flex flex-wrap lg:flex-nowrap bg-white">
        
        <div className="card-content p-6 flex-grow">
          <h2 className="card-title text-3xl font-bold text-gray-800 mb-4">BYBY</h2>
          <p className="card-description text-lg text-gray-600 mb-4">
            We're always ready to assist. Feel free to reach out with any questions or feedback.
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Website:{" "}
            <a
              href="mailto:info@byby.com"
              className="text-blue-500 hover:underline"
            >
              www.iisl.com
            </a>
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Email:{" "}
            <a
              href="mailto:info@byby.com"
              className="text-blue-500 hover:underline"
            >
              info@iisl.com
            </a>
          </p>
          <p className="text-lg text-gray-600">
            Phone:{" "}
            <span className="font-bold text-gray-800">(123) 456-7890</span>
          </p>
          <p className="text-lg text-gray-600">
            Phone:{" "}
            <span className="font-bold text-gray-800">(123) 456-7891</span>
          </p>
          <p className="text-lg text-gray-600">
            Phone:{" "}
            <span className="font-bold text-gray-800">(123) 456-7892</span>
          </p>
        </div>
      </article>

      {/* Contact Options */}
      <article className="contact-info mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          Whether it's a question, a suggestion, or a business inquiry, don't hesitate to get in touch. We value all feedback and strive to respond promptly.
        </p>

        <div className="contact-actions">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Options</h3>
          <ContactButton
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+Request&details=Please+book+an+appointment&location=&dates=20231120T120000Z/20231120T130000Z"
            label="Schedule an Appointment"
            bgColor="bg-blue-500"
            textColor="text-white"
          >
            Schedule an Appointment
          </ContactButton>
          <ContactButton
            href="mailto:frankmperwe@gmail.com?subject=Contact%20Request"
            label="Send Us an Email"
            bgColor="bg-green-500"
            textColor="text-white"
          >
            Send Us an Email
          </ContactButton>
          <ContactButton
            href="https://wa.me/256759555517"
            label="Chat on WhatsApp"
            bgColor="bg-green-400"
            textColor="text-white"
          >
            Chat on WhatsApp
          </ContactButton>
        </div>
      </article>

      {/* Footer Image Section */}
      <article className="footer-image mt-12">
        <img
          src={contactus1}
          alt="Footer"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </article>
    </section>
  );
};

export default Contact;
