import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const pathToSectionMap = {
      '/': 'home',
      '/home': 'home',
      '/about': 'about',
      '/portfolio': 'portfolio',
      '/services': 'services',
      '/skills': 'skills',
      '/experience': 'experience',
      '/testimonials': 'testimonials',
      '/contact': 'contact'
    };

    const id = pathToSectionMap[location.pathname];
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        window.isProgrammaticScroll = true;

        const timer = setTimeout(() => {
          const offset = id === 'home' ? 0 : 100;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          setTimeout(() => {
            window.isProgrammaticScroll = false;
          }, 800);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    // Stage 1: Finish progress bar load
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Stage 2: Let slide-up animation complete before removing preloader node
    const timer2 = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    // Custom Cursor tracking logic
    const cursor = document.querySelector('.custom-cursor');
    
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Attach listeners for global hover effects on links and buttons
    const attachHoverEvents = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], .project-card-wrapper');
      
      const hoverStart = () => cursor && cursor.classList.add('hovered');
      const hoverEnd = () => cursor && cursor.classList.remove('hovered');

      clickables.forEach(el => {
        el.addEventListener('mouseenter', hoverStart);
        el.addEventListener('mouseleave', hoverEnd);
      });

      return () => {
        clickables.forEach(el => {
          el.removeEventListener('mouseenter', hoverStart);
          el.removeEventListener('mouseleave', hoverEnd);
        });
      };
    };

    // Delay slighty to let items mount
    const cleanupHover = attachHoverEvents();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cleanupHover();
    };
  }, [loading, showPreloader]); // Re-attach listeners once preloader hides and layout renders

  return (
    <>
      {/* Intro Preloader Screen */}
      {showPreloader && (
        <div className={`preloader ${!loading ? 'hidden' : ''}`}>
          <div className="preloader-title">DLNG CREATIVE.</div>
          <div className="preloader-bar">
            <div className="preloader-progress"></div>
          </div>
        </div>
      )}

      {/* Global Interactive Cursor Follower */}
      <div className="custom-cursor"></div>

      {/* Main Layout */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/about" element={<HomeLayout />} />
          <Route path="/portfolio" element={<HomeLayout />} />
          <Route path="/services" element={<HomeLayout />} />
          <Route path="/skills" element={<HomeLayout />} />
          <Route path="/experience" element={<HomeLayout />} />
          <Route path="/testimonials" element={<HomeLayout />} />
          <Route path="/contact" element={<HomeLayout />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
