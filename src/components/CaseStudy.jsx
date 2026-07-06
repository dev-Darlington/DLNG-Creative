import React, { useState, useEffect } from 'react';
import { X, ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';
import './CaseStudy.css';

const CaseStudy = ({ project, onClose }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Prevent background scroll when case study is open
    document.body.style.overflow = 'hidden';
    
    // Custom cursor close mode
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.add('close-mode');
    }

    return () => {
      document.body.style.overflow = '';
      if (cursor) {
        cursor.classList.remove('close-mode');
      }
    };
  }, []);

  const handleSliderMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (!clientX) return;
    
    const x = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleSliderMove(e);
  };

  return (
    <div className="case-study-overlay">
      {/* Dynamic Glow Blobs */}
      <div className="case-study-glow glow-1"></div>
      <div className="case-study-glow glow-2"></div>

      {/* Header Controls */}
      <header className="case-study-header">
        <button 
          onClick={onClose} 
          className="case-study-close-btn"
          onMouseEnter={() => {
            const c = document.querySelector('.custom-cursor');
            if (c) c.classList.remove('close-mode');
          }}
          onMouseLeave={() => {
            const c = document.querySelector('.custom-cursor');
            if (c) c.classList.add('close-mode');
          }}
          aria-label="Close Case Study"
        >
          <X size={24} />
          <span>CLOSE</span>
        </button>
      </header>

      <div className="case-study-scroll-container">
        {/* Hero Banner Section */}
        <section className="case-study-hero">
          <div className="case-study-hero-img-wrapper">
            <img src={project.image} alt={project.title} className="case-study-hero-img" />
            <div className="case-study-hero-overlay"></div>
          </div>
          <div className="case-study-hero-content container">
            <span className="case-study-category">{project.category}</span>
            <h1 className="case-study-title">{project.title}</h1>
            <p className="case-study-summary">{project.description}</p>
          </div>
        </section>

        {/* Project Meta Info */}
        <section className="case-study-meta container">
          <div className="meta-grid">
            <div className="meta-item">
              <h4>CLIENT</h4>
              <p>{project.meta.client}</p>
            </div>
            <div className="meta-item">
              <h4>ROLE</h4>
              <p>{project.meta.role}</p>
            </div>
            <div className="meta-item">
              <h4>DURATION</h4>
              <p>{project.meta.duration}</p>
            </div>
            <div className="meta-item">
              <h4>SERVICES</h4>
              <p>{project.meta.services.join(', ')}</p>
            </div>
          </div>
        </section>

        {/* Narrative & Concept Section */}
        <section className="case-study-section container">
          <div className="editorial-layout">
            <div className="editorial-left">
              <h2 className="case-study-section-title">THE CHALLENGE</h2>
              <p className="case-study-body-text">{project.challenge}</p>
            </div>
            <div className="editorial-right">
              <h2 className="case-study-section-title">THE RESEARCH & STRATEGY</h2>
              <p className="case-study-body-text">{project.research}</p>
            </div>
          </div>
        </section>

        {/* Concept & Brand Strategy */}
        <section className="case-study-section dark-bg-section">
          <div className="container">
            <div className="editorial-layout">
              <div className="editorial-left">
                <span className="section-label">01 / CONCEPT</span>
                <h3 className="section-heading">{project.concept.title}</h3>
                <p className="case-study-body-text">{project.concept.description}</p>
              </div>
              <div className="editorial-right flex-center">
                <div className="concept-visual-wrapper">
                  <div className="concept-shape-glow" style={{ background: project.themeColor }}></div>
                  <div className="concept-wire-shape">
                    <svg viewBox="0 0 100 100" className="animated-svg-shape">
                      <circle cx="50" cy="50" r="30" fill="none" stroke={project.themeColor} strokeWidth="1" />
                      <line x1="20" y1="50" x2="80" y2="50" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.4" />
                      <line x1="50" y1="20" x2="50" y2="80" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.4" />
                      <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke={project.themeColor} strokeWidth="0.5" opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design System: Colors & Typography */}
        <section className="case-study-section container">
          <div className="design-system-grid">
            <div className="design-system-item col-colors">
              <h3 className="section-heading">COLOR SYSTEM</h3>
              <div className="colors-swatch-list">
                {project.designSystem.colors.map((color, index) => (
                  <div key={index} className="color-swatch-card">
                    <div 
                      className="color-swatch-display" 
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className="swatch-index">0{index + 1}</span>
                    </div>
                    <div className="color-swatch-info">
                      <span className="color-name">{color.name}</span>
                      <span className="color-hex">{color.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="design-system-item col-typography">
              <h3 className="section-heading">TYPOGRAPHY</h3>
              <div className="typo-card">
                <div className="typo-letters" style={{ fontFamily: project.designSystem.typography.fontFamily }}>
                  Aa
                </div>
                <div className="typo-info">
                  <span className="typo-font-family">{project.designSystem.typography.fontFamily}</span>
                  <span className="typo-usage">{project.designSystem.typography.usage}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process & Wireframes */}
        <section className="case-study-section dark-bg-section">
          <div className="container">
            <div className="editorial-layout">
              <div className="editorial-left">
                <span className="section-label">02 / WIREFRAMES</span>
                <h3 className="section-heading">DESIGN PROCESS & STRUCTURE</h3>
                <p className="case-study-body-text">{project.process}</p>
              </div>
              <div className="editorial-right">
                <div className="wireframe-visual">
                  <div className="wireframe-grid-line"></div>
                  <div className="wireframe-layout-blocks">
                    <div className="w-block w-nav"></div>
                    <div className="w-block w-hero">
                      <div className="w-sub w-circle" style={{ borderColor: project.themeColor }}></div>
                      <div className="w-sub w-lines"></div>
                    </div>
                    <div className="w-block w-grid">
                      <div className="w-col"></div>
                      <div className="w-col"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Interactive Slider */}
        <section className="case-study-section container text-center">
          <h3 className="section-heading margin-bottom-lg">BEFORE & AFTER</h3>
          <div 
            className="slider-container"
            onMouseMove={handleSliderMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* Before (Bottom Layer) */}
            <div className="slider-image-before">
              <img src={project.mockups.before} alt="Before Redesign" />
              <span className="slider-label slider-label-before">BEFORE</span>
            </div>

            {/* After (Top Layer - Clipped) */}
            <div 
              className="slider-image-after" 
              style={{ width: `${sliderPosition}%` }}
            >
              <img src={project.mockups.after} alt="After Redesign" />
              <span className="slider-label slider-label-after">AFTER REDESIGN</span>
            </div>

            {/* Drag Handle */}
            <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
              <div className="slider-handle-line"></div>
              <div className="slider-handle-button">
                <RefreshCw size={14} className="slider-handle-icon" />
              </div>
            </div>
          </div>
        </section>

        {/* Final Deliverables / Mockups */}
        <section className="case-study-section dark-bg-section text-center">
          <div className="container">
            <h3 className="section-heading margin-bottom-lg">FINAL DELIVERABLES</h3>
            <div className="deliverables-grid">
              {project.deliverables.map((item, index) => (
                <div key={index} className="deliverable-card">
                  <CheckCircle2 size={24} className="deliverable-icon" style={{ color: project.themeColor }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="case-study-section container">
          <div className="lessons-box">
            <div className="lessons-header" style={{ borderColor: project.themeColor }}>
              <h3 className="section-heading">LESSONS LEARNED & METRICS</h3>
            </div>
            <div className="lessons-content">
              <p className="case-study-body-text">{project.lessons}</p>
              <div className="lessons-stats">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="lesson-stat-card">
                    <span className="stat-number" style={{ color: project.themeColor }}>{metric.value}</span>
                    <span className="stat-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Close */}
        <section className="case-study-footer text-center">
          <button onClick={onClose} className="btn btn-primary" style={{ backgroundColor: project.themeColor, color: '#FFFFFF' }}>
            <span>BACK TO PORTFOLIO</span>
            <ArrowRight size={18} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
