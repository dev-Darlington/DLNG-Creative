import React from 'react';
import { ShieldAlert, Award, Grid, Compass, Heart, Layers, Play, PenTool, Sparkles } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      icon: <Compass size={28} />,
      title: 'Brand Identity',
      desc: 'Developing comprehensive, high-fidelity visual guidelines that establish visual authority and brand recall.',
      color: 'var(--accent-blue)'
    },
    {
      icon: <Award size={28} />,
      title: 'Logo Design',
      desc: 'Crafting minimalist, timeless brand symbols and custom logotypes built on geometric structural grids.',
      color: 'var(--accent-purple)'
    },
    {
      icon: <Heart size={28} />,
      title: 'Social Media Design',
      desc: 'Designing premium social campaigns, curated grid templates, and dynamic visual content.',
      color: 'var(--accent-coral)'
    },
    {
      icon: <Layers size={28} />,
      title: 'Print Design',
      desc: 'Creating high-end editorial layouts, brochures, business stationary, and premium magazine assets.',
      color: 'var(--accent-emerald)'
    },
    {
      icon: <Grid size={28} />,
      title: 'Packaging Design',
      desc: 'Structuring organic, bespoke container flatplans, box designs, and eco-friendly packaging sleeves.',
      color: 'var(--accent-orange)'
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Presentation Design',
      desc: 'Formulating strategic keynote decks and pitch presentations with high-end editorial styling.',
      color: 'var(--accent-blue)'
    },
    {
      icon: <Play size={28} />,
      title: 'Motion Graphics',
      desc: 'Orchestrating fluid typographic animations, kinetic typography, Lottie micro-interactions, and logo resolves.',
      color: 'var(--accent-purple)'
    },
    {
      icon: <PenTool size={28} />,
      title: 'UI Design',
      desc: 'Structuring gesture-driven mobile screens and spatial desktop user interfaces in Figma.',
      color: 'var(--accent-coral)'
    },
    {
      icon: <ShieldAlert size={28} />,
      title: 'Marketing Campaigns',
      desc: 'Directing cohesive digital and print advertising campaigns with structured messaging.',
      color: 'var(--accent-emerald)'
    }
  ];

  const handleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovered');
  };

  return (
    <section id="services" className="services section">
      {/* Background glow blobs */}
      <div className="services-glow glow-1"></div>
      
      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <span className="section-label">03 / SPECIALTIES</span>
          <h2 className="section-title">SERVICES</h2>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ '--service-color': service.color }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              {/* Corner Accent Decorator */}
              <div className="service-card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
