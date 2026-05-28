import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    'images/image1.webp',
    'images/image2.webp',
    'images/image3.webp',
    'images/imgae4.webp',
    'images/imgae5.webp',
    'images/image6.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`} 
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content text-center">
          <div className="hero-badge">Ghana Non-Profit Organization</div>
          <h1 className="hero-h1">Igniting Girls of Africa</h1>
          <p className="hero-sub">Empowering girls to rise as leaders — through mentorship, entrepreneurship, and the skills
            to create lasting change in their communities.</p>
          <div className="hero-buttons justify-center">
            <a href="#volunteer" className="btn btn-primary">Get Involved Today</a>
          </div>
          <div className="hero-trust justify-center">
            <span className="hero-trust-item"> Based in Ghana</span>
            <span className="hero-trust-item"> 5 Core Programs</span>
            <span className="hero-trust-item"> Girl-Led Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
