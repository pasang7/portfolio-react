import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/testimonials.css';
import linkedinLogo from '../assets/linkedin-logo.png'; // Add LinkedIn logo to your assets

const testimonials = [
  {
    name: 'Erik L.',
    role: '',
    quote: 'It was and is a delight to work with Pasang. She quickly grasped the complexities of the projects...',
    profile: 'https://www.linkedin.com/in/pasang-yangji-8b8600151/',
  },
  {
    name: 'Ketan M.',
    role: '',
    quote: 'Pasang is a former colleague of mine and an exceptional full stack developer...',
    profile: 'https://www.linkedin.com/in/pasang-yangji-8b8600151/',
  }
];

export default function Testimonials({ darkMode }) {
  return (
    <section id="testimonials" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Container className="pt-5 pb-5">
        <h2 className="section-title text-center mb-5">Testimonials</h2>
        <div className="testimonial-grid">
          {testimonials.map(({ name, role, quote, profile }, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-quote">“{quote}”</div>
              <div className="testimonial-author">
                <img src={linkedinLogo} alt="LinkedIn" className="linkedin-avatar" />
                <div>
                  <div className="testimonial-name">{name}</div>
                  <div className="testimonial-role">{role}</div>
                  <a href={profile} target="_blank" rel="noopener noreferrer" className="testimonial-link">
                    Read More
                  </a>
                  <div className="testimonial-note">Photo and excerpt publicly available on LinkedIn</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
