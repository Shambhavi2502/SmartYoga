import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Blog from './pages/Blog';
import Disclaimer from './pages/Disclaimer';
import YogaPoses from './pages/YogaPoses';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/yogaposes" element={<YogaPoses />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
