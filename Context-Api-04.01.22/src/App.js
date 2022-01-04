import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';
import './style.css';
//components
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  
  return (
    <ThemeContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="*" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}
