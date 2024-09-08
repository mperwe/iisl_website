import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <p className="text-xl mb-4">Feel free to reach out to us through the following channels:</p>
          <p>Email: <a href="mailto:contact@iisl.com" className="text-blue-600">contact@iisl.com</a></p>
          <p>Phone: <a href="tel:+123456789" className="text-blue-600">+123 456 789</a></p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
