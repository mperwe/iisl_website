import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">Our Services</h1>
          <p className="text-xl">Detailed information about our IT consulting, managed IT services, cloud services, and more.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
