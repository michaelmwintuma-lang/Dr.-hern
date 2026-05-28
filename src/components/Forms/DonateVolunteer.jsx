import React, { useState } from 'react';

const accessKey = 'aa40df83-facc-4f10-9d03-75556eb011a0';

const DonateVolunteer = () => {
  const [sponsorStatus, setSponsorStatus] = useState({ state: 'idle', message: '' });
  const [volunteerStatus, setVolunteerStatus] = useState({ state: 'idle', message: '' });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleFormSubmit = async (e, formType) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const setStatus = formType === 'sponsor' ? setSponsorStatus : setVolunteerStatus;

    let valid = true;
    const reqFields = form.querySelectorAll('[required]');
    
    reqFields.forEach(field => {
      let fieldValid = true;
      if (!field.value.trim()) {
        fieldValid = false;
      } else if (field.type === 'email') {
        if (!validateEmail(field.value.trim())) fieldValid = false;
      }
      
      if (!fieldValid) {
        valid = false;
        field.classList.add('form-error');
        if (field.nextElementSibling) field.nextElementSibling.style.display = 'block';
      } else {
        field.classList.remove('form-error');
        if (field.nextElementSibling) field.nextElementSibling.style.display = 'none';
      }
    });

    if (!valid) return;

    setStatus({ state: 'loading', message: 'Sending your application securely...' });

    // Dynamic fields
    const formLabel = formType === 'sponsor' ? 'Sponsorship' : 'Volunteer';
    formData.append('_subject', `[${formLabel} Form] New ${formLabel} Submission - ${formData.get('name')}`);
    formData.append('_replyto', formData.get('email'));

    try {
      const response = await fetch('https://formsubmit.co/ajax/gocto2020@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ state: 'success', message: 'Thank you! Your application has been successfully submitted. We will contact you soon.' });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again later.' });
    }
  };

  const handleInputChange = (e) => {
    e.target.classList.remove('form-error');
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.display = 'none';
    }
  };

  return (
    <section id="donate" className="bg-cream">
      <div className="container">
        <div className="donate-forms-grid">
          
          {/* Sponsor Form */}
          <div className="form-wrapper">
            <h2>Become a Sponsor</h2>
            <p>Support our mission by sponsoring a girl's education and development journey.</p>
            <form id="sponsor-form" onSubmit={(e) => handleFormSubmit(e, 'sponsor')} noValidate>
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="from_name" value="Igniting Girls of Africa Website Forms" />
              <input type="hidden" name="Form Type" value="Sponsorship" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <div className="input-group">
                <label htmlFor="sponsor-name">Full Name *</label>
                <input type="text" id="sponsor-name" name="name" className="input-field" required placeholder="Jane Doe" onChange={handleInputChange} />
                <span className="error-msg" role="alert">Please enter your full name.</span>
              </div>
              <div className="input-group">
                <label htmlFor="sponsor-email">Email Address *</label>
                <input type="email" id="sponsor-email" name="email" className="input-field" required placeholder="jane@example.com" onChange={handleInputChange} />
                <span className="error-msg" role="alert">Please enter a valid email address.</span>
              </div>
              <div className="input-group">
                <label htmlFor="sponsor-phone">Phone Number</label>
                <input type="tel" id="sponsor-phone" name="phone" className="input-field" placeholder="+233 XX XXX XXXX" />
              </div>
              <div className="input-group">
                <label htmlFor="sponsor-type">Type of Sponsorship *</label>
                <select id="sponsor-type" name="sponsorship_type" className="input-field" required onChange={handleInputChange}>
                  <option value="">Select sponsorship type</option>
                  <option value="Financial Support">Financial Support</option>
                  <option value="Educational Materials">Educational Materials</option>
                  <option value="Mentorship Program">Mentorship Program</option>
                  <option value="Training & Workshops">Training & Workshops</option>
                  <option value="Internship Opportunity">Internship Opportunity</option>
                  <option value="Equipment & Technology">Equipment & Technology</option>
                  <option value="Other">Other</option>
                </select>
                <span className="error-msg" role="alert">Please select a sponsorship type.</span>
              </div>
              <div className="input-group">
                <label htmlFor="sponsor-msg">Message / Tell us about your sponsorship</label>
                <textarea id="sponsor-msg" name="message" className="input-field" rows="4" placeholder="I would like to sponsor by..."></textarea>
              </div>
              
              {sponsorStatus.state !== 'idle' && (
                <div style={{
                  padding: '16px', borderRadius: '8px', marginBottom: '16px', fontWeight: 500,
                  backgroundColor: sponsorStatus.state === 'success' ? '#e6f0eb' : sponsorStatus.state === 'error' ? '#fff8eb' : 'var(--color-primary-light)',
                  border: `1.5px solid ${sponsorStatus.state === 'error' ? '#fbd38d' : 'var(--color-primary)'}`,
                  color: sponsorStatus.state === 'error' ? '#c05621' : 'var(--color-primary)'
                }}>
                  {sponsorStatus.message}
                </div>
              )}
              
              <button type="submit" id="sponsor-submit-btn" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }} disabled={sponsorStatus.state === 'loading'}>
                {sponsorStatus.state === 'loading' ? 'Submitting...' : 'Submit Sponsorship →'}
              </button>
            </form>
          </div>

          {/* Volunteer Form */}
          <div className="form-wrapper">
            <h2 id="volunteer">Become a Volunteer</h2>
            <p>Join our network of mentors, trainers, and community leaders.</p>
            <form id="volunteer-form" onSubmit={(e) => handleFormSubmit(e, 'volunteer')} noValidate>
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="from_name" value="Igniting Girls of Africa Website Forms" />
              <input type="hidden" name="Form Type" value="Volunteer" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <div className="input-group">
                <label htmlFor="vol-name">Full Name *</label>
                <input type="text" id="vol-name" name="name" className="input-field" required placeholder="Jane Doe" onChange={handleInputChange} />
                <span className="error-msg" role="alert">Please enter your full name.</span>
              </div>
              <div className="input-group">
                <label htmlFor="vol-email">Email Address *</label>
                <input type="email" id="vol-email" name="email" className="input-field" required placeholder="jane@example.com" onChange={handleInputChange} />
                <span className="error-msg" role="alert">Please enter a valid email address.</span>
              </div>
              <div className="input-group">
                <label htmlFor="vol-phone">Phone Number</label>
                <input type="tel" id="vol-phone" name="phone" className="input-field" placeholder="+233 XX XXX XXXX" />
              </div>
              <div className="input-group">
                <label htmlFor="vol-role">How would you like to help?</label>
                <select id="vol-role" name="role" className="input-field">
                  <option value="Mentorship">Mentorship</option>
                  <option value="Leadership Training">Leadership Training</option>
                  <option value="Fundraising">Fundraising</option>
                  <option value="Event Support">Event Support</option>
                  <option value="STEM & Digital Literacy">STEM & Digital Literacy</option>
                  <option value="Health & Menstrual Hygiene Advocacy">Health & Menstrual Hygiene Advocacy</option>
                  <option value="Creative Arts & Storytelling">Creative Arts & Storytelling</option>
                  <option value="Vocational & Financial Skills">Vocational & Financial Skills</option>
                  <option value="Media & Communications Support">Media & Communications Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="vol-msg">Message / Tell us about yourself</label>
                <textarea id="vol-msg" name="message" className="input-field" rows="4" placeholder="I would love to help by..."></textarea>
              </div>
              
              {volunteerStatus.state !== 'idle' && (
                <div style={{
                  padding: '16px', borderRadius: '8px', marginBottom: '16px', fontWeight: 500,
                  backgroundColor: volunteerStatus.state === 'success' ? '#e6f0eb' : volunteerStatus.state === 'error' ? '#fff8eb' : 'var(--color-primary-light)',
                  border: `1.5px solid ${volunteerStatus.state === 'error' ? '#fbd38d' : 'var(--color-primary)'}`,
                  color: volunteerStatus.state === 'error' ? '#c05621' : 'var(--color-primary)'
                }}>
                  {volunteerStatus.message}
                </div>
              )}
              
              <button type="submit" id="submit-btn" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }} disabled={volunteerStatus.state === 'loading'}>
                {volunteerStatus.state === 'loading' ? 'Submitting...' : 'Submit Application →'}
              </button>
            </form>
          </div>
        </div>

        {/* Address and Map */}
        <div className="contact-map-grid">
          <div className="contact-info">
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <strong>Address</strong>
                  Accra, Greater Accra Region, Ghana
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <strong>Email</strong>
                  <a href="mailto:gocto2020@gmail.com">gocto2020@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <strong>Phone</strong>
                  <a href="tel:+19176902344">+1 (917) 690-2344</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <strong>Hours</strong>
                  Monday – Friday, 8:00 AM – 5:00 PM GMT
                </div>
              </div>
            </div>
          </div>
          <div className="map-placeholder">
            <iframe src="https://maps.google.com/maps?q=Accra,Ghana&output=embed" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" title="Map of Accra, Ghana"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateVolunteer;
