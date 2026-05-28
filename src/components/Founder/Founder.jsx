import React from 'react';

const Founder = () => {
  return (
    <section id="founder" className="founder-section">
      <div className="container">
        <div className="founder-grid">
          <div className="founder-image-wrapper">
            <img 
              src="images/founder-placeholder.jpg" 
              alt="CEO and Founder" 
              className="founder-img" 
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23e6f0eb%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20fill%3D%22%23054a29%22%3EAdd Founder Image Here%3C%2Ftext%3E%3C%2Fsvg%3E';
              }} 
            />
            <div className="founder-image-decoration"></div>
          </div>
          <div className="founder-content">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <h2>Meet Our Founder</h2>
              <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.2rem' }}>Dr. Teresa Hernandez / CEO</p>
            </div>
            <div className="founder-bio">
              <p>
                Dr. Teresa Hernandez is an award-winning global motivational speaker, author, and youth empowerment coach. She is the CEO of Girls Of Color Take Over and the author of Unleashing Entrepreneurial Success. Through her work, she mentors and inspires girls and women of color to unlock their potential, know their worth, and walk in their power.
              </p>
              <p>
                She is a recipient of the Presidential Lifetime Achievement Award and has been recognized globally, including honors in Dubai and Ghana for her impact in youth empowerment and leadership.
              </p>
              <p>
                Dr. Teresa is on a bold mission to reach one million girls of color. She is passionate about breaking barriers, building inclusive communities, and empowering others to rise, lead, and win.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
