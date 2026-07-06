import React, { useState } from 'react';
import CaseStudy from './CaseStudy';
import vanguardImg from '../assets/project-vanguard.png';
import halcyonImg from '../assets/project-halcyon.png';
import aetherImg from '../assets/project-aether.png';
import chronosImg from '../assets/project-chronos.png';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projectsData = [
    {
      id: 'vanguard',
      title: 'Vanguard Cognition',
      category: 'Brand Identity & Strategy',
      description: 'Rebranding an AI Research Lab using dynamic vector structures.',
      image: vanguardImg,
      themeColor: '#0066FF',
      challenge: 'Vanguard AI Research needed a branding suite that felt cutting-edge without falling into predictable sci-fi clichés. The goal was to visualised the synergy between human neural intelligence and deep machine learning.',
      research: 'Our team audited academic papers on cybernetic nodes and grid geometry, mapping a visual metaphor of "adaptive intersections" representing intelligence nodes.',
      concept: {
        title: 'COGNITIVE NODES',
        description: 'A dynamic monogram monogram composed of converging paths that merge into a structural letter V.'
      },
      meta: {
        client: 'Vanguard AI Lab',
        role: 'Lead Brand Architect',
        duration: '3 Months',
        services: ['Brand Strategy', 'Logo System', 'Design Guidelines', 'UI Guidelines']
      },
      designSystem: {
        colors: [
          { name: 'Vanguard Blue', hex: '#0066FF' },
          { name: 'Deep Space', hex: '#0A0A14' },
          { name: 'Strobe White', hex: '#FFFFFF' }
        ],
        typography: {
          fontFamily: 'Space Grotesk',
          usage: 'Applied for all system labeling, technical data structures, and bold editorial headers.'
        }
      },
      process: 'Drafted overlapping grid wireframes, tested logo contrast ratios on dark screens, and mapped out comprehensive CSS styling parameters.',
      deliverables: ['Custom Vector Logotype Suite', 'Brand Guidelines (80 Pages)', 'Interactive UX System Design', 'Digital Presentation Deck'],
      mockups: {
        before: vanguardImg, // Will apply CSS filters in code to look like a blueprint
        after: vanguardImg
      },
      lessons: 'When detailing tech systems, visual constraint yields trust. Clear geometric marks provide a sense of institutional security.',
      metrics: [
        { value: '+45%', label: 'Brand Recognition' },
        { value: '80pg', label: 'Design documentation' }
      ]
    },
    {
      id: 'halcyon',
      title: 'Halcyon Organic',
      category: 'Packaging & Print Design',
      description: 'Luxury biodegradable supplement packaging for top-shelf apothecary.',
      image: halcyonImg,
      themeColor: '#10B981',
      challenge: 'Halcyon required custom cosmetic bottles and boxes that were completely organic and compostable, yet felt premium enough to compete with luxury skincare products.',
      research: 'Audited botanical paper weights, tested textured hemp stocks, and experimented with vegetable dyes to achieve optimal letterpress printing results.',
      concept: {
        title: 'BOTANICAL STRUCT',
        description: 'Blending organic, hand-drawn plant illustrations with bold, geometric editorial packaging frames.'
      },
      meta: {
        client: 'Halcyon Supplements',
        role: 'Lead Packaging Specialist',
        duration: '4 Months',
        services: ['Packaging Flatplans', 'Material Sourcing', 'Letterpress Layouts', 'Brand Auditing']
      },
      designSystem: {
        colors: [
          { name: 'Apothecary Emerald', hex: '#0E3A2F' },
          { name: 'Leaf Mint', hex: '#10B981' },
          { name: 'Warm Alabaster', hex: '#F4F1EA' }
        ],
        typography: {
          fontFamily: 'Syne',
          usage: 'Used for product title markings and primary branding elements.'
        }
      },
      process: 'Created custom paper box die-cuts, ran saturation checks on organic dyes, and established typography lockups for packaging faces.',
      deliverables: ['Glass Jar Sleeve Designs', 'Hemp Cardboard Flatplans', 'Botanical Brand Catalog', 'Retail Display Guidelines'],
      mockups: {
        before: halcyonImg,
        after: halcyonImg
      },
      lessons: 'Packaging material limits can become branding features. Raw textured stock holds ink uniquely, creating organic, premium imperfections.',
      metrics: [
        { value: '0%', label: 'Plastics Used' },
        { value: '15+', label: 'SKU Packaging Templates' }
      ]
    },
    {
      id: 'aether',
      title: 'Aether OS',
      category: 'UI/UX & Motion Graphics',
      description: 'Re-engineering desktop workspace dynamics with spatial UI panels.',
      image: aetherImg,
      themeColor: '#8B5CF6',
      challenge: 'To redesign desktop interfaces, introducing glassmorphism window layering, gesture-based shortcuts, and fluid transition flows.',
      research: 'Audited user cognitive load during multi-tasking and tested translucent blurring thresholds to maintain spatial orientation.',
      concept: {
        title: 'SPATIAL FLUIDITY',
        description: 'Desktop windows behaving like hovering sheets of glass, with light outlines mapping focal hierarchy.'
      },
      meta: {
        client: 'Aether Tech Labs',
        role: 'Senior Product Designer',
        duration: '5 Months',
        services: ['Interface Architecture', 'Motion System', 'Glassmorphism Styles', 'Figma UI Library']
      },
      designSystem: {
        colors: [
          { name: 'Aether Violet', hex: '#8B5CF6' },
          { name: 'Obsidian Matte', hex: '#08080C' },
          { name: 'Lucent Glow', hex: '#A78BFA' }
        ],
        typography: {
          fontFamily: 'Space Grotesk',
          usage: 'Selected for dashboard system widgets, code panels, and analytics tickers.'
        }
      },
      process: 'Mapped interactive user journeys, set animations, styled canvas blur layers, and customized magnetic interaction points.',
      deliverables: ['Core UI Kit (120+ Components)', 'Lottie Micro-interaction Library', 'Desktop UI Design Guidelines', 'Prototype Interactive Demo'],
      mockups: {
        before: aetherImg,
        after: aetherImg
      },
      lessons: 'High-end visual styles must guide, not distract. Translucence in OS panels serves a purpose by preserving context.',
      metrics: [
        { value: '-30%', label: 'Screen Switching Delay' },
        { value: '120+', label: 'Dynamic UI Assets' }
      ]
    },
    {
      id: 'chronos',
      title: 'Chronos Timepieces',
      category: 'Creative Direction & Editorial',
      description: 'Luxury watch brand print campaign highlighting mechanical geometry.',
      image: chronosImg,
      themeColor: '#FF9F43',
      challenge: 'Chronos wanted to launch a print campaign in the UK that stood out from classic luxury watch advertising by focusing on high-contrast industrial textures and vast empty space.',
      research: 'Analyzed Swiss advertising history and researched Swiss modernist layout grids, prioritizing negative space.',
      concept: {
        title: 'MECHANICAL SECONDS',
        description: 'Contrasting intricate mechanical watch movements with clean, expansive dark editorial backdrops.'
      },
      meta: {
        client: 'Chronos UK',
        role: 'Creative Director',
        duration: '2 Months',
        services: ['Editorial Layouts', 'Macro Photography Dir.', 'Print Spec Typography', 'Billboard Design']
      },
      designSystem: {
        colors: [
          { name: 'Chrono Gold', hex: '#FF9F43' },
          { name: 'Charcoal Black', hex: '#1C1C1E' },
          { name: 'Sterling White', hex: '#E5E5EA' }
        ],
        typography: {
          fontFamily: 'Syne',
          usage: 'Employed for oversized campaign print headings and luxury magazine page numbers.'
        }
      },
      process: 'Managed macro watch photography art direction, designed typography layouts, and configured crop lines for print publication.',
      deliverables: ['Premium Magazine Print Layouts', 'Outdoor Billboard Templates', 'Social Media Motion Teasers', 'Exhibition Collateral Kit'],
      mockups: {
        before: chronosImg,
        after: chronosImg
      },
      lessons: 'Negative space is a premium asset. Letting layouts breathe communicates immediate prestige without over-explaining.',
      metrics: [
        { value: '+60%', label: 'Pre-order Inquiries' },
        { value: '8M+', label: 'Campaign Impressions' }
      ]
    }
  ];

  // Custom Cursor Interaction
  const handleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.add('view-mode');
    }
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.remove('view-mode');
    }
  };

  return (
    <section id="portfolio" className="projects section">
      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <span className="section-label">02 / SELECTED WORK</span>
          <h2 className="section-title">PORTFOLIO</h2>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="projects-editorial-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card-wrapper card-size-${(index % 3) + 1}`}
              onClick={() => setActiveProject(project)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-editorial-card">
                <div className="project-img-container">
                  <img src={project.image} alt={project.title} className="project-grid-img" />
                  <div className="project-grid-overlay" style={{ background: `linear-gradient(to top, rgba(10, 10, 11, 0.9) 0%, rgba(10, 10, 11, 0.2) 60%, transparent 100%)` }}></div>
                </div>
                
                <div className="project-card-content">
                  <span className="project-card-category">{project.category}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-summary">{project.description}</p>
                  
                  <div className="project-card-action">
                    <span className="case-study-btn" style={{ '--accent-color': project.themeColor }}>
                      EXPLORE CASE STUDY →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Overlay Page */}
      {activeProject && (
        <CaseStudy 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
