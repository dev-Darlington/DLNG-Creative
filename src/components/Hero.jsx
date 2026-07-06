import React, { useEffect, useRef } from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import portraitImg from '../assets/designer-portrait.png';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !blobRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update custom properties for CSS transition
      blobRef.current.style.setProperty('--mouse-x', `${x}px`);
      blobRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovered');
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Dynamic Cursor-Reactive Glow Blob */}
      <div className="hero-interactive-blob" ref={blobRef}></div>

      {/* Decorative Grid Overlay */}
      <div className="hero-grid-overlay"></div>

      <div className="container hero-container">
        <div className="hero-text-content">
          <span className="hero-tagline reveal-text-container">
            <span className="reveal-text">SENIOR DESIGNER // 4 YRS EXPERIENCE // UK</span>
          </span>
          
          <h1 className="hero-title reveal-text-container">
            <span className="reveal-text">GRAPHIC</span>
          </h1>
          <h1 className="hero-title title-outline reveal-text-container">
            <span className="reveal-text">DESIGNER</span>
          </h1>
          
          <h2 className="hero-tagline-main">
            Crafting Bold Visual Identities That Inspire, Engage & Convert
          </h2>
          
          <p className="hero-description">
            Award-winning creative specializing in brand strategy, bespoke packaging systems, print materials, UI assets, and fluid motion graphics.
          </p>

          <div className="hero-actions">
            <a 
              href="#portfolio" 
              className="btn btn-primary"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>View Portfolio</span>
              <ArrowDown size={16} />
            </a>
            <a 
              href="/cv.pdf" 
              className="btn btn-outline"
              download
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FileText size={16} />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div className="hero-visual-content">
          <div className="hero-portrait-frame">
            <div className="portrait-glow"></div>
            <div className="portrait-clip-mask">
              <img 
                src={portraitImg} 
                alt="DLNG Creative — Senior Graphic Designer" 
                className="hero-portrait-img"
              />
            </div>
            <div className="portrait-badge">
              <svg viewBox="0 0 100 100" className="badge-text-svg">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text fill="#FFFFFF" fontSize="9.5" fontWeight="600" letterSpacing="1px">
                  <textPath href="#circlePath">
                    • DLNG CREATIVE • STUDIO PORTFOLIO •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
