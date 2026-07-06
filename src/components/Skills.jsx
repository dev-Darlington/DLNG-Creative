import React from 'react';
import './Skills.css';

const Skills = () => {
  const tools = [
    { name: 'Adobe Photoshop', short: 'Ps', color: '#31A8FF', glow: 'rgba(49, 168, 255, 0.2)' },
    { name: 'Adobe Illustrator', short: 'Ai', color: '#FF9A00', glow: 'rgba(255, 154, 0, 0.2)' },
    { name: 'Adobe InDesign', short: 'Id', color: '#FF3366', glow: 'rgba(255, 51, 102, 0.2)' },
    { name: 'Adobe After Effects', short: 'Ae', color: '#9999FF', glow: 'rgba(153, 153, 255, 0.2)' },
    { name: 'Adobe XD', short: 'Xd', color: '#FF26F5', glow: 'rgba(255, 38, 245, 0.2)' },
    { name: 'Figma', short: 'Fg', color: '#F24E1E', glow: 'rgba(242, 78, 30, 0.2)' },
    { name: 'Canva Pro', short: 'Cv', color: '#00C4CC', glow: 'rgba(0, 196, 204, 0.2)' }
  ];

  const disciplines = [
    { 
      name: 'Typography', 
      desc: 'Mastery of kerning, hierarchy, type pairings, and grid structures for print and screens.',
      tags: ['Editorial', 'Modular Grids', 'Microtypography'] 
    },
    { 
      name: 'Brand Identity', 
      desc: 'Developing cohesive visual assets, style guides, and brand strategies that convert.',
      tags: ['Guidelines', 'Visual Auditing', 'Logotypes'] 
    },
    { 
      name: 'Motion Graphics', 
      desc: 'Kinetic typography, Lottie microinteractions, logo resolves, and video campaign assets.',
      tags: ['After Effects', 'Lottie', 'Staggered Keyframes'] 
    },
    { 
      name: 'UI Design', 
      desc: 'Designing gesture-driven mobile screens and interactive spatial web prototypes in Figma.',
      tags: ['Figma Components', 'Design Systems', 'UX Flow'] 
    },
    { 
      name: 'Creative Strategy', 
      desc: 'Bridging high-end brand assets with core business conversion goals and market research.',
      tags: ['Target Personas', 'Visual Storytelling', 'Asset Audits'] 
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
    <section id="skills" className="skills section">
      {/* Glow blobs */}
      <div className="skills-glow glow-1"></div>
      
      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <span className="section-label">04 / EXPERIENCE TOOLKIT</span>
          <h2 className="section-title">SKILLS & TOOLS</h2>
        </div>

        <div className="skills-layout">
          {/* Creative Suite App Badges */}
          <div className="skills-suite-section">
            <h3 className="skills-section-heading">CREATIVE SUITE</h3>
            <p className="skills-section-desc">
              My technical arsenal of industry-standard applications and design tools.
            </p>
            
            <div className="suite-badges-grid">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="suite-badge-card" 
                  style={{ 
                    '--tool-color': tool.color,
                    '--tool-glow': tool.glow
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="badge-app-icon">
                    <span className="app-icon-short">{tool.short}</span>
                  </div>
                  <span className="badge-app-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Disciplines Cards */}
          <div className="skills-disciplines-section">
            <h3 className="skills-section-heading">CORE DISCIPLINES</h3>
            <p className="skills-section-desc">
              Core creative design capabilities honed over four years of professional experience.
            </p>
            
            <div className="disciplines-stack">
              {disciplines.map((discipline, index) => (
                <div 
                  key={index} 
                  className="discipline-row-card"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="discipline-header">
                    <span className="discipline-index">0{index + 1}</span>
                    <h4 className="discipline-name">{discipline.name}</h4>
                  </div>
                  <div className="discipline-content">
                    <p className="discipline-desc">{discipline.desc}</p>
                    <div className="discipline-tags">
                      {discipline.tags.map((tag, i) => (
                        <span key={i} className="discipline-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
