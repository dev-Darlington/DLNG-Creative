import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Eleanor Vance',
      role: 'Creative Director',
      company: 'Vanguard AI Research',
      content: 'Alex completely transformed our brand assets. Within months of our rebrand launch, Vanguard Cognition saw an immediate surge in industry recall and prestige. Their attention to structural typography is unparalleled.'
    },
    {
      name: 'Douglas Finch',
      role: 'Co-founder',
      company: 'Halcyon Wellness',
      content: 'The sustainable packaging Alex structured is a masterpiece. It instantly conveys luxury on top-shelf boutique apothecary counters. They turned material constraints into our primary branding asset.'
    },
    {
      name: 'Aria Thorne',
      role: 'Product Director',
      company: 'Aether OS',
      content: 'Designing spatial user interfaces requires a deep understanding of fluid motion and visual hierarchy. Alex delivered a Figma component architecture that our front-end engineering team integrated with zero friction.'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
    <section id="testimonials" className="testimonials section">
      {/* Background Glow Blobs */}
      <div className="testimonials-glow glow-1"></div>

      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <span className="section-label">06 / CLIENT REVIEWS</span>
          <h2 className="section-title">TESTIMONIALS</h2>
        </div>

        <div className="testimonials-carousel-wrapper">
          {/* Quote Mark Decoration */}
          <div className="carousel-quote-mark">
            <Quote size={80} />
          </div>

          <div className="testimonials-slider">
            {testimonials.map((test, index) => (
              <div 
                key={index} 
                className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
                style={{
                  display: index === activeIndex ? 'block' : 'none'
                }}
              >
                <blockquote className="testimonial-quote-text">
                  "{test.content}"
                </blockquote>
                
                <div className="testimonial-reviewer-info">
                  <div className="reviewer-avatar">
                    {test.name.charAt(0)}
                  </div>
                  <div className="reviewer-details">
                    <h4 className="reviewer-name">{test.name}</h4>
                    <p className="reviewer-title">{test.role} // {test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls">
            <button 
              onClick={handlePrev} 
              className="carousel-btn prev-btn"
              aria-label="Previous Review"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext} 
              className="carousel-btn next-btn"
              aria-label="Next Review"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
