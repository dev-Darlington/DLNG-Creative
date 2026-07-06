import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import './Footer.css';

const Linkedin = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size || 20} 
    height={props.size || 20} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovered');
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              DLNG CREATIVE<span>.</span>
            </a>
            <p className="footer-tagline">
              Crafting Bold Visual Identities That Inspire, Engage & Convert.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">PORTFOLIO INDEX</h4>
            <div className="footer-links-grid">
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Work</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
              <ul className="footer-links-list">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright-col">
            <p className="footer-copy-text">
              &copy; {currentYear} DLNG Creative. Structured with craftsmanship.
            </p>
            <p className="footer-loc-text">
              London, United Kingdom • Available Worldwide
            </p>
          </div>

          <div className="footer-social-col">
            <div className="footer-social-links">
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label="Behance"
              >
                <Globe size={18} />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label="Dribbble"
              >
                <Globe size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Back to top arrow */}
            <button 
              onClick={handleBackToTop} 
              className="back-to-top-btn"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
