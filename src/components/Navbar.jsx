import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Scroll-state & Progress bar listener (lightweight, no layout checks)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progress = document.querySelector('.scroll-progress');
      if (progress) {
        progress.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 2. IntersectionObserver for active section highlight & URL path sync
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section crosses middle part of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      if (window.isProgrammaticScroll) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          
          const targetPath = id === 'home' ? '/' : `/${id}`;
          if (window.location.pathname !== targetPath) {
            window.history.replaceState(null, '', targetPath);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all page sections
    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Custom Cursor hover helpers
  const handleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovered');
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress"></div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            DLNG Creative
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`nav-link ${activeSection === id ? 'active' : ''}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-container">
            <ul className="mobile-nav-links">
              {navLinks.map((link, index) => {
                const id = link.href.substring(1);
                return (
                  <li
                    key={link.name}
                    style={{
                      transitionDelay: isMenuOpen ? `${0.1 + index * 0.05}s` : '0s',
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(50px)',
                      opacity: isMenuOpen ? 1 : 0
                    }}
                  >
                    <Link
                      to={link.href}
                      className={`mobile-nav-link ${activeSection === id ? 'active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mobile-link-index">0{index + 1}</span>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
