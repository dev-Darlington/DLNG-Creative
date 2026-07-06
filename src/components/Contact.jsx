import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Globe } from 'lucide-react';
import './Contact.css';

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

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
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
    <section id="contact" className="contact section">
      {/* Background Glow Blobs */}
      <div className="contact-glow glow-1"></div>

      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <span className="section-label">07 / COLLABORATION</span>
          <h2 className="section-title">GET IN TOUCH</h2>
        </div>

        <div className="contact-layout">
          {/* Contact Information Side */}
          <div className="contact-info-panel">
            <h3 className="contact-tagline">LET'S BUILD SOMETHING VIBRANT TOGETHER</h3>
            <p className="contact-subtagline">
              Seeking project bookings, freelance collaborations, or full-time strategic design positions based in London or remote.
            </p>

            <div className="contact-meta-list">
              <div 
                className="contact-meta-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="contact-meta-icon"><Mail size={18} /></div>
                <div className="contact-meta-details">
                  <span className="meta-label">EMAIL ME</span>
                  <a href="mailto:hello@dlngcreative.com" className="meta-value">hello@dlngcreative.com</a>
                </div>
              </div>

              <div 
                className="contact-meta-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="contact-meta-icon"><MapPin size={18} /></div>
                <div className="contact-meta-details">
                  <span className="meta-label">LOCATION</span>
                  <span className="meta-value">London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Social Network Linkages */}
            <div className="contact-socials-wrapper">
              <h4 className="socials-title">CONNECTED CHANNELS</h4>
              <div className="socials-links-grid">
                <a 
                  href="https://behance.net" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Globe size={16} />
                  <span>BEHANCE</span>
                </a>
                <a 
                  href="https://dribbble.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Globe size={16} />
                  <span>DRIBBBLE</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Linkedin size={16} />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-panel">
            {isSubmitted ? (
              <div className="contact-success-card">
                <CheckCircle size={48} className="success-icon" />
                <h4 className="success-title">MESSAGE TRANSMITTED</h4>
                <p className="success-message">
                  Thank you for reaching out, Alex. I will review your submission and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form className="contact-editorial-form" onSubmit={handleSubmit}>
                <div className="form-input-row">
                  <div className="input-group">
                    <input 
                      type="text" 
                      name="name" 
                      id="form-name" 
                      value={formState.name}
                      onChange={handleInputChange}
                      className="form-underscore-input" 
                      placeholder=" "
                      required 
                    />
                    <label htmlFor="form-name" className="form-floating-label">YOUR NAME</label>
                    <span className="underscore-bar"></span>
                  </div>

                  <div className="input-group">
                    <input 
                      type="email" 
                      name="email" 
                      id="form-email" 
                      value={formState.email}
                      onChange={handleInputChange}
                      className="form-underscore-input" 
                      placeholder=" "
                      required 
                    />
                    <label htmlFor="form-email" className="form-floating-label">EMAIL ADDRESS</label>
                    <span className="underscore-bar"></span>
                  </div>
                </div>

                <div className="input-group">
                  <input 
                    type="text" 
                    name="subject" 
                    id="form-subject" 
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="form-underscore-input" 
                    placeholder=" "
                    required 
                  />
                  <label htmlFor="form-subject" className="form-floating-label">PROJECT BRIEF / SUBJECT</label>
                  <span className="underscore-bar"></span>
                </div>

                <div className="input-group">
                  <textarea 
                    name="message" 
                    id="form-message" 
                    rows="4" 
                    value={formState.message}
                    onChange={handleInputChange}
                    className="form-underscore-textarea" 
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor="form-message" className="form-floating-label">TELL ME ABOUT YOUR PROJECT</label>
                  <span className="underscore-bar"></span>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary contact-submit-btn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>Transmit Brief</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
