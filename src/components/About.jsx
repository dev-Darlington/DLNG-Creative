import React, { useState, useEffect, useRef } from 'react';
import './About.css';

// Animated CountUp Sub-component
const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const About = () => {
  const handleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovered');
  };

  const metrics = [
    { value: 80, suffix: '+', label: 'Brands Designed' },
    { value: 200, suffix: '+', label: 'Creative Projects' },
    { value: 4, suffix: ' Years', label: 'Professional Exp.' },
    { value: 95, suffix: '%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="about section">
      {/* Decorative Grid Details */}
      <div className="about-grid-bg"></div>

      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <span className="section-label">01 / BACKGROUND</span>
          <h2 className="section-title">ABOUT ME</h2>
        </div>

        <div className="about-layout">
          <div className="about-narrative">
            <h3 className="about-intro-text">
              I am a UK-based creative orchestrating high-fidelity brand identities, immersive digital experiences, and editorial systems.
            </h3>
            
            <p className="about-body-text">
              Over the past 4 years, I have collaborated with startups and luxury brands across the UK and internationally. I believe design is not merely decoration — it is strategic communication. My goal is to build visual systems that command attention and drive conversions.
            </p>
            
            <p className="about-body-text">
              Combining artistic research with production expertise in Figma, After Effects, and the Adobe Suite, I map design frameworks that bring stories to life. Whether it is an organic brand shape or a structured desktop UI layout, I approach every project with detail-obsessed craftsmanship.
            </p>

            <div className="about-recognition">
              <h4 className="recognition-title">RECOGNITIONS & AWARDS</h4>
              <ul className="recognition-list">
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <span className="rec-year">2025</span>
                  <span className="rec-award">UX Design Awards Nominee</span>
                  <span className="rec-project">Aether OS</span>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <span className="rec-year">2024</span>
                  <span className="rec-award">Behance Featured in Branding</span>
                  <span className="rec-project">Vanguard Cognition</span>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <span className="rec-year">2023</span>
                  <span className="rec-award">Creative Review Showcase</span>
                  <span className="rec-project">Halcyon Packaging</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-sidebar">
            {/* Philosophical Statement Card */}
            <div className="about-philosophy-card">
              <div className="philosophy-glow"></div>
              <h4 className="philosophy-title">MY PHILOSOPHY</h4>
              <blockquote className="philosophy-quote">
                "Simplicity is not the absence of clutter, but the presence of clarity. Every line must serve a purpose."
              </blockquote>
              <span className="philosophy-author">— DLNG Creative</span>
            </div>

            {/* Metrics Counters Grid */}
            <div className="about-metrics-grid">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-number-wrapper">
                    <CountUp end={metric.value} suffix={metric.suffix} />
                  </div>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
