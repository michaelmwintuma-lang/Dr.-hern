import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = null;
        
        const updateCounter = (time) => {
          if (!start) start = time;
          const progress = Math.min((time - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
          
          setCount(Math.floor(ease * target));
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            setCount(target);
          }
        };
        
        requestAnimationFrame(updateCounter);
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <div className="stat-number" ref={elementRef}>{count}{suffix}</div>;
};

const Stats = () => {
  return (
    <section className="stats-section bg-primary">
      <img src="assets/img1.jpg" alt="Girls in Ghana" className="stats-bg" width="1200" height="400" loading="lazy"
        onError={(e) => { e.target.style.display = 'none'; }} />
      <div className="container stats-grid">
        <div className="stat-item">
          <CountUp target={500} suffix="+" />
          <div className="stat-label">Girls Reached</div>
        </div>
        <div className="stat-item">
          <CountUp target={9} />
          <div className="stat-label">Core Programs</div>
        </div>
        <div className="stat-item">
          <CountUp target={3} />
          <div className="stat-label">Partner Organizations</div>
        </div>
        <div className="stat-item">
          <CountUp target={2020} />
          <div className="stat-label">Founded</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
