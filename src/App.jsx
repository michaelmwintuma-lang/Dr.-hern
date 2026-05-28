import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import MissionVision from './components/MissionVision/MissionVision';
import Founder from './components/Founder/Founder';
import Programs from './components/Programs/Programs';
import CoreValues from './components/CoreValues/CoreValues';
import DonateVolunteer from './components/Forms/DonateVolunteer';
import Footer from './components/Footer/Footer';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <MissionVision />
        <Founder />
        <Programs />
        <CoreValues />
        <DonateVolunteer />
      </main>
      <Footer />

      {/* WhatsApp Button */}
      <a href="https://wa.me/19176902344?text=Hello%20Igniting%20Girls%20of%20Africa%2C%20I%20am%20interested%20in%20volunteering%20or%20supporting%20your%20work!"
        target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="whatsapp-btn">
        <svg viewBox="0 0 24 24">
          <path d="M12.031 0C5.397 0 .015 5.385.015 12.02c0 2.122.553 4.195 1.605 6.01L0 24l6.113-1.603c1.764.957 3.754 1.464 5.918 1.464 6.634 0 12.016-5.385 12.016-12.02S18.665 0 12.031 0zm-.016 21.84c-1.8 0-3.56-.484-5.1-1.398l-.365-.216-3.79 1.01 1.01-3.69-.238-.378a10.003 10.003 0 01-1.536-5.348c0-5.526 4.498-10.027 10.024-10.027 5.524 0 10.024 4.5 10.024 10.026 0 5.526-4.5 10.025-10.025 10.025zm5.503-7.518c-.302-.15-1.785-.88-2.062-.982-.276-.1-.477-.15-.678.15-.201.302-.78 1.002-.955 1.202-.176.202-.352.227-.654.076-.301-.15-1.272-.468-2.423-1.498-.896-.8-1.5-1.788-1.677-2.09-.176-.301-.019-.464.133-.614.136-.135.302-.35.452-.525.15-.175.201-.301.302-.501.1-.202.05-.378-.026-.528-.076-.15-.678-1.631-.929-2.233-.243-.586-.49-.505-.678-.515-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.302-1.054 1.03-1.054 2.51 0 1.48 1.079 2.91 1.229 3.11.151.202 2.119 3.235 5.136 4.536 2.008.868 2.822.935 3.843.785 1.137-.168 3.49-1.425 3.98-2.8.488-1.376.488-2.556.338-2.8-.15-.25-.552-.401-.854-.551z" />
        </svg>
      </a>

      {/* Back to Top */}
      <button 
        type="button" 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
}

export default App;
