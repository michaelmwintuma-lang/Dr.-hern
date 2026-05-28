import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      const navbarOffset = document.getElementById('navbar')?.offsetHeight || 72;
      const targetY = target.getBoundingClientRect().top + window.scrollY - (navbarOffset + 24);
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    // 250ms buffer prevents the "hover trap" when moving diagonally 
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 250);
  };

  return (
    <nav id="navbar" role="navigation" aria-label="Main navigation" className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        
        {/* Logo */}
        <a href="#home" onClick={(e) => smoothScrollTo(e, '#home')} className="logo-container">
          <img src="images/logo.jpg" alt="Igniting Girls of Africa logo" width="120" height="32"
            onError={(e) => { e.target.outerHTML = "<div class='img-placeholder' style='width:120px; height:32px; border-radius:4px; font-size:12px;'>LOGO</div>"; }} />
          <span className="logo-text">IGNITING GIRLS OF AFRICA</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => smoothScrollTo(e, '#home')}>Home</a></li>
          
          {/* Mega Menu Trigger */}
          <li 
            className="mega-menu-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
          >
            <a href="#programs" aria-haspopup="true" aria-expanded={isMegaMenuOpen} onClick={(e) => smoothScrollTo(e, '#programs')}>
              Our Work
              <svg className={`chevron ${isMegaMenuOpen ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            
            {/* Mega Menu Drop Panel */}
            <div className={`mega-menu-panel ${isMegaMenuOpen ? 'active' : ''}`}>
              <div className="mega-menu-grid">
                
                {/* Column 1: Our Programs */}
                <div className="mega-col">
                  <h4 className="mega-title">Our Programs</h4>
                  <ul className="mega-link-list">
                    <li><a href="#programs" onClick={(e) => smoothScrollTo(e, '#programs')}>One-on-One Mentorship</a></li>
                    <li><a href="#programs" onClick={(e) => smoothScrollTo(e, '#programs')}>Leadership Skills</a></li>
                    <li><a href="#programs" onClick={(e) => smoothScrollTo(e, '#programs')}>Entrepreneurship</a></li>
                    <li><a href="#programs" onClick={(e) => smoothScrollTo(e, '#programs')}>Financial Literacy</a></li>
                    <li><a href="#programs" onClick={(e) => smoothScrollTo(e, '#programs')}>Confidence Building & Outreach</a></li>
                  </ul>
                </div>

                {/* Column 2: Get Involved */}
                <div className="mega-col">
                  <h4 className="mega-title">Get Involved</h4>
                  <ul className="mega-link-list">
                    <li><a href="#volunteer" onClick={(e) => smoothScrollTo(e, '#volunteer')}>Become a Mentor</a></li>
                    <li><a href="#volunteer" onClick={(e) => smoothScrollTo(e, '#volunteer')}>Corporate Partnerships</a></li>
                    <li><a href="#volunteer" onClick={(e) => smoothScrollTo(e, '#volunteer')}>Volunteer Opportunities</a></li>
                    <li><a href="#volunteer" onClick={(e) => smoothScrollTo(e, '#volunteer')}>Host a Fundraiser</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </li>
          
          <li><a href="#about" onClick={(e) => smoothScrollTo(e, '#about')}>About Us</a></li>
          <li><a href="#footer" onClick={(e) => smoothScrollTo(e, '#footer')}>Contact</a></li>
        </ul>

        {/* Global Donate CTA */}
        <a href="#donate" className="nav-donate" onClick={(e) => smoothScrollTo(e, '#donate')}>Donate</a>

        {/* Mobile Menu Trigger */}
        <button type="button" className="mobile-menu-btn" aria-label="Open mobile menu" onClick={() => setIsMobileMenuOpen(true)}>☰</button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <button type="button" className="mobile-close-btn" style={{ display: isMobileMenuOpen ? 'block' : 'none' }} aria-label="Close mobile menu" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        <div className="mobile-menu-content">
          <a href="#home" onClick={(e) => smoothScrollTo(e, '#home')}>Home</a>
          <a href="#programs" onClick={(e) => smoothScrollTo(e, '#programs')}>Our Work</a>
          <a href="#about" onClick={(e) => smoothScrollTo(e, '#about')}>About Us</a>
          <a href="#footer" onClick={(e) => smoothScrollTo(e, '#footer')}>Contact</a>
          <a href="#donate" style={{ color: 'var(--color-primary)', fontWeight: 600 }} onClick={(e) => smoothScrollTo(e, '#donate')}>Donate Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
