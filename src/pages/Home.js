import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const services = [
  { title: "IT Consulting", description: "Strategic insights to optimize your tech investments.", icon: "path/to/icon1.png" },
  { title: "Managed IT Services", description: "24/7 support and management of your IT needs.", icon: "path/to/icon2.png" },
  // Add other services here
];

const testimonials = [
  { name: "John Doe", feedback: "IISL transformed our IT infrastructure and provided exceptional support." },
  { name: "Jane Smith", feedback: "The best IT consulting services we have ever used!" },
  // Add other testimonials here
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section id="services" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map(service => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
