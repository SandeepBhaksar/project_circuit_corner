import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Pages/NavBar/Navbar';
import Home from './assets/Pages/Home/Home';
import Shop from './assets/Pages/Shop/Shop';
import Blogs from './assets/Pages/Blogs/Blogs';
import About from './assets/Pages/About/About';
import Contact from './assets/Pages/Contact/Contact';
import Cart from './assets/Pages/Cart/Cart';
import whatsapp_logo from './assets/images/Components/Accessories/whatsapp_logo.png';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* WhatsApp Logo */}
        <div className="whatsapp">
          <a href="https://wa.me/+917204774695" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_logo} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
