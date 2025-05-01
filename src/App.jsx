import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Products';
import Productdetails from './components/Productdetails';

function App() {
  return (
    <Router>
     
      <div className="container">
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Productdetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
