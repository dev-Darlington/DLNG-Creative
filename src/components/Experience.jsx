import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Brand & Packaging Designer',
      company: 'Studio Nova',
      location: 'London, UK (Hybrid)',
      period: '2023 — Present',
      summary: 'Leading visual identity systems, bespoke eco-packaging flatplans, and high-fidelity interactive digital experiences for startups and premium heritage clients.',
      achievements: [
        'Directed visual identity transformations for 40+ premium clients, boosting brand equity metrics by an average of 25%.',
        'Spearheaded transition of cosmetic packaging systems to 100% compostable and plastic-free materials without compromising luxury aesthetics.',
        'Established structural design system tokens in Figma, cutting engineering handoff and front-end development cycle time by 30%.'
      ]
    },
    {
      title: 'Graphic & Motion Designer',
      company: 'Vivid Digital Agency',
      location: 'Bristol, UK',
      period: '2021 — 2023',
      summary: 'Crafted detailed graphic templates, print catalog layouts, packaging flats, and fluid kinetic typography reels for high-impact social campaigns.',
      achievements: [
        'Formulated over 120+ branding packaging mockups, logo marks, and print deliverables for independent apothecary and wellness sectors.',
        'Created interactive Lottie-based motion assets and typography reveals, increasing website click-through-rates by 18%.',
        'Managed prepress checks, ink saturation curves, and custom paper selections for national luxury lifestyle magazines.'
      ]
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
    <section id="experience" className="experience section">
      {/* Background blobs */}
      <div className="experience-glow glow-1"></div>

      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <span className="section-label">05 / CAREER MILESTONES</span>
          <h2 className="section-title">EXPERIENCE</h2>
        </div>

        <div className="experience-timeline">
          <div className="timeline-spine"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Spine Node */}
              <div className="timeline-node">
                <div className="node-inner" style={{ 
                  backgroundColor: index === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)' 
                }}></div>
              </div>

              {/* Timeline Card Content */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-job-title">{exp.title}</h3>
                    <div className="timeline-job-meta">
                      <span className="job-company">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="job-location">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="timeline-job-summary">{exp.summary}</p>

                <div className="timeline-job-achievements">
                  <h4 className="achievements-heading">KEY IMPACTS & METRICS</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>
                        <span className="achievement-bullet" style={{ 
                          backgroundColor: index === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)' 
                        }}></span>
                        <p>{ach}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
