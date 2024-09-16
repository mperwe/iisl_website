import React from "react";
import "./Contact.css"; // Link CSS

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg">
        Reach out to us at <a href="mailto:info@iisl.com" className="text-blue-500">info@iisl.com</a> or call us at (123) 456-7890.
      </p>
    </div>
  );
};

export default Contact;
