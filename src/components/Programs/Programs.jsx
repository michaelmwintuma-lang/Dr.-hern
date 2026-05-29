import React, { useState } from 'react';
import Modal from '../ui/Modal';

const programData = [
  {
    id: '1',
    number: '01',
    title: 'One-on-One Mentorship',
    teaser: 'Pairing girls with experienced leaders and executives for personal growth coaching, deep progress tracking, and long-term professional pipeline development.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Pairing girls with experienced leaders and executives for personal growth coaching, deep progress tracking, and long-term professional pipeline development.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Monthly 1-on-1 coaching sessions.</li><li>Personalized goal setting and career mapping.</li><li>Access to exclusive networking events.</li></ul>'
  },
  {
    id: '2',
    number: '02',
    title: 'Leadership Skills',
    teaser: 'Structured, cohort-based training to help young women find their voice, lead community projects, and master public speaking.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Structured, cohort-based training to help young women find their voice, lead community projects, master public speaking, and develop the confidence to step into leadership roles.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Public speaking and debate workshops.</li><li>Team management and conflict resolution.</li><li>Hands-on community project leadership.</li></ul>'
  },
  {
    id: '3',
    number: '03',
    title: 'Entrepreneurship',
    teaser: 'Hands-on, practical training that takes girls from raw ideas to sustainable micro-enterprises — covering validation and operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Hands-on, practical training that takes girls from raw ideas to sustainable micro-enterprises — covering ideation, validation, basic operations, and market entry.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Business plan creation and validation.</li><li>Marketing, branding, and sales training.</li><li>Pitch competitions with seed funding opportunities.</li></ul>'
  },
  {
    id: '4',
    number: '04',
    title: 'Financial Literacy',
    teaser: 'Real-world training in bookkeeping, savings discipline, budgeting fundamentals, and mobile money (MoMo) asset management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Real-world training in bookkeeping, savings discipline, budgeting fundamentals, and mobile money (MoMo) asset management tailored to the Ghanaian economic context.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Personal budgeting and saving strategies.</li><li>Small business bookkeeping.</li><li>Digital finance and MoMo security.</li></ul>'
  },
  {
    id: '5',
    number: '05',
    title: 'Confidence Building & Outreach',
    teaser: 'Safe, structured community workshops designed to build high self-esteem, emotional resilience, and a strong sense of identity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Safe, structured community workshops designed to build high self-esteem, emotional resilience, and a strong sense of identity in every girl we reach.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Emotional intelligence workshops.</li><li>Peer-to-peer support groups.</li><li>Community outreach and advocacy.</li></ul>'
  },
  {
    id: '6',
    number: '06',
    title: 'Business Development',
    teaser: 'Empowering young women with the skills to scale businesses, build professional networks, and thrive in competitive markets.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Empowering young women with the skills to scale businesses, build professional networks, and thrive in competitive markets.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Advanced business scaling strategies.</li><li>Professional networking and mentorship.</li><li>Access to resources for market expansion.</li></ul>'
  },
  {
    id: '7',
    number: '07',
    title: 'Mental Well-Being',
    teaser: 'Providing essential psychological support, stress management techniques, and safe spaces for emotional healing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Providing essential psychological support, stress management techniques, and safe spaces for emotional healing.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Access to trained counselors and therapists.</li><li>Mindfulness and stress reduction workshops.</li><li>Peer support groups for mental health.</li></ul>'
  },
  {
    id: '8',
    number: '08',
    title: 'Self Esteem Building',
    teaser: 'Dedicated programs to help young women recognize their self-worth, overcome imposter syndrome, and set ambitious life goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Dedicated programs to help young women recognize their self-worth, overcome imposter syndrome, and set ambitious life goals.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Self-discovery and identity workshops.</li><li>Strategies for overcoming self-doubt.</li><li>Goal-setting and vision board creation.</li></ul>'
  },
  {
    id: '9',
    number: '09',
    title: 'Confidence building',
    teaser: 'Equipping girls with the assertiveness, communication skills, and inner belief to take charge of their own narratives.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    modalDesc: '<p style="margin-bottom:16px;">Equipping girls with the assertiveness, communication skills, and inner belief to take charge of their own narratives.</p><h4 style="margin-bottom:8px; color:var(--color-primary);">Program Details:</h4><ul style="list-style:disc; margin-left:20px; color:var(--color-text-mid); display:flex; flex-direction:column; gap:8px;"><li>Assertive communication training.</li><li>Body language and presentation skills.</li><li>Confidence through creative expression.</li></ul>'
  }
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section id="programs">
      <div className="container">
        <div className="section-header">
          <h2>Our Structural Programs</h2>
          <p>Core pillars designed to equip every girl with the tools, confidence, and networks to lead.</p>
        </div>

        <div className="programs-grid">
          {programData.map((prog) => (
            <button 
              key={prog.id}
              type="button" 
              className="program-card" 
              onClick={() => setSelectedProgram(prog)}
            >
              <div className="card-top-row">
                <div className="program-icon">{prog.icon}</div>
                <div className="card-number">{prog.number}</div>
              </div>
              <h3 className="program-title">{prog.title}</h3>
              <p className="program-teaser">{prog.teaser}</p>
              <span className="program-link">View Details →</span>
            </button>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedProgram} 
        onClose={() => setSelectedProgram(null)}
        title={selectedProgram?.title || ''}
        description={selectedProgram?.modalDesc || ''}
      />
    </section>
  );
};

export default Programs;
