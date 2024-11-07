
"use client";

import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Quotes from '../components/Quotes';
import Achievements from '../components/Achievements';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Three.js background animation code (as before)
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Quotes />
        <Achievements />
        <Projects />
        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
}
