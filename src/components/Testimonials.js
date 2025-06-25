import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/testimonials.css';

const testimonials = [
  {
    name: 'Anjali Shrestha',
    role: 'Project Manager, TechAxis',
    quote: 'Pasang consistently delivers high-quality work ahead of deadlines. A true asset to any tech team! His clean code and clear communication made our collaboration seamless and efficient.His clean code and clear communication made our collaboration seamless and efficient.His clean code and clear communication made our collaboration seamless and efficient.His clean code and clear communication made our collaboration seamless and efficient.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Niraj Joshi',
    role: 'CTO, Code Himalaya',
    quote: 'His clean code and clear communication made our collaboration seamless and efficient.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  }
];

export default function Testimonials({ darkMode }) {
  return (
    <section id="testimonials" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Container className="pt-5 pb-5">
        <h2 className="section-title text-center mb-5">Testimonials</h2>
        <div className="testimonial-grid">
          {testimonials.map(({ name, role, quote, avatar }, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-quote">“{quote}”</div>
              <div className="testimonial-author">
                <img src={avatar} alt={`${name}'s avatar`} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{name}</div>
                  <div className="testimonial-role">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
