import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    'images/cover.jpeg',
    'images/image01.avif',
    'images/image02.webp',
    'images/image03.jpg',
    'images/image04.webp',
    'images/image05.jpg',
    'images/image06.jpg',
    'images/image07.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length, currentSlide]);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`} 
            style={{ 
              backgroundImage: `url('${slide}')`,
              backgroundSize: index === 0 ? 'contain' : 'cover',
              backgroundPosition: index === 0 ? 'center top' : 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content text-center">
          <h1 className="hero-h1">Igniting Girls of Africa</h1>
          <p className="hero-sub">Empowering girls to rise as leaders — through mentorship, entrepreneurship, and the skills
            to create lasting change in their communities.</p>
          <div className="hero-buttons justify-center">
            <a href="#volunteer" className="btn btn-primary">Get Involved Today</a>
          </div>
          <div className="hero-trust justify-center">
            <span className="hero-trust-item"> Based in Ghana</span>
            <span className="hero-trust-item"> 9 Core Programs</span>
            <span className="hero-trust-item"> Girl-Led Impact</span>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
