import React from "react";
import "./Home.css"; // Link CSS

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-6">
            Empower Your Business with Innovative IT Solutions
          </h1>
          <p className="text-xl mb-6">
            At Intercontinental Infotech Solutions, we deliver world-class IT solutions that drive efficiency, innovation, and growth.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
            Contact Us Today
          </button>
        </div>
        <img 
          src="pic1.png" 
          alt="IT Solutions" 
          className="max-w-md rounded-lg shadow-lg"
        />
      </section>

      {/* Services Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Software Development</h3>
            <p>We create custom software solutions that solve real-world problems for businesses across industries.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
            <p>Our cloud services ensure scalability, security, and reliability for your IT infrastructure.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Network Security</h3>
            <p>Protect your business with top-tier network security solutions tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="italic">"Intercontinental Infotech Solutions transformed our IT systems, boosting efficiency and reducing costs."</p>
            <p className="mt-4 text-right font-semibold">- John Doe, CEO of TechCorp</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="italic">"Their team is highly professional and provided excellent support throughout the project."</p>
            <p className="mt-4 text-right font-semibold">- Jane Smith, CTO of InnovateX</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center bg-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
        <p className="text-xl mb-6">Contact us today and discover how our IT solutions can help your business grow.</p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg shadow-lg">
          Get a Free Consultation
        </button>
      </section>
    </div>
  );
};

export default Home;

