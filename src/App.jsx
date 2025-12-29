import { motion } from 'framer-motion';
import { useState } from 'react';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
