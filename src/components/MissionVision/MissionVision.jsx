import React from 'react';

const MissionVision = () => {
  return (
    <section id="about" className="mission-vision-section">
      <div className="mv-background-decoration"></div>
      <div className="container">
        <div className="section-header mv-header">
          <h2>Purpose & Direction</h2>
          <p>The driving force behind everything we do at Igniting Girls of Africa.</p>
        </div>
        <div className="mission-vision-grid">
          <div className="mv-card mission">
            <div className="mv-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 2v2.5"></path>
                <path d="M12 19.5V22"></path>
                <path d="M2 12h2.5"></path>
                <path d="M19.5 12H22"></path>
                <path d="m15.5 8.5 2-2"></path>
              </svg>
            </div>
            <h3 className="mv-label">Our Mission</h3>
            <p className="mv-text">Our mission is to empower girls to rise as leaders by giving them the skills, mentorship,
              and support they need to succeed. We are shaping a generation of confident women who create impact, break
              barriers, and drive lasting change in their communities. We believe every girl deserves the opportunity to
              reach her full potential.</p>
          </div>
          <div className="mv-card vision">
            <div className="mv-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3H5a2 2 0 0 0-2 2v2"></path>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                <path d="M3 17v2a2 2 0 0 0 2 2h2"></path>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="mv-label">Our Vision</h3>
            <p className="mv-text">Our vision is a global network of young female entrepreneurs who are empowered,
              confident, and actively shaping a more equitable and sustainable world for generations to come.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
