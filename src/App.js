import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "../src/pages/Contacts";
import Network from '../src/pages/network';
import Cyber from '../src/pages/cyber';
import Software from '../src/pages/software';
import Consult from '../src/pages/consult';
import Business from '../src/pages/business';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/network" element={<Network />} />
            <Route path="/cyber" element={<Cyber />} />
            <Route path="/software" element={<Software />} />
            <Route path="/consult" element={<Consult />} />
            <Route path="/business" element={<Business />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
