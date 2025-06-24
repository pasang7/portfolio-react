import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import profilePic from '../assets/pasang.jpg'; // Adjust path as needed

const projects = [
  {
    title: "Personal Blog",
    description: "A blog built with React and Markdown support.",
    url: "https://example.com/blog",
  },
  {
    title: "E-commerce Store",
    description: "A full-featured React e-commerce website.",
    url: "https://example.com/store",
  },
  {
    title: "Portfolio Website",
    description: "My portfolio site showcasing projects and skills.",
    url: "https://example.com/portfolio",
  },
];

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "CSS & HTML", level: 95 },
  { name: "UI/UX Design", level: 75 },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    details: "Building responsive web apps with React, optimizing UI performance.",
  },
  {
    role: "Web Developer Intern",
    company: "Creative Studio",
    period: "2022 - 2023",
    details: "Collaborated on website redesign and improved user engagement.",
  },
];

const testimonials = [
  {
    quote: "Pasang is a very dedicated developer with great attention to detail.",
    author: "Jane Doe, Project Manager",
  },
  {
    quote: "Impressed by his creativity and problem-solving skills.",
    author: "John Smith, Team Lead",
  },
];


export default function Portfolio() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!loading) {
    const sections = document.querySelectorAll('section');

    function onScroll() {
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    }

    onScroll(); // Add visible class immediately after loading ends
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }
}, [loading]);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return (
    <div className="loader-container" role="alert" aria-busy="true" aria-label="Loading content">
      <div className="loader"></div>
    </div>
  );
}

  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero" aria-label="Introduction">
        <img src={profilePic} alt="Pasang Yangji Tamang" className="profile-pic" />
        <div className="hero-text">
          <h1>Pasang Yangji Tamang</h1>
          <p>Software Developer</p>
        </div>
      </section>

      <section id="about" className="about">
  <h2>About Me</h2>
  <p>
    🎓 <strong>Master’s in Information Technology</strong> with <strong>3+ years of full-stack development</strong> experience.
  </p>
  <p>
    💡 Specialized in <strong>PHP, Laravel, MySQL, JavaScript</strong>, and <strong>RESTful APIs</strong>. Built secure <strong>eCommerce systems</strong> with Stripe, automated <strong>web scraping</strong> with Python (Selenium & Beautiful Soup), and developed <strong>scalable backend architectures</strong>.
  </p>
  <p>
    🔁 Agile team player with expertise in <strong>Test-Driven Development (TDD)</strong> using PHPUnit.
  </p>
  <p>
    🚀 Currently exploring <strong>React.js</strong>, <strong>Docker</strong>, and <strong>AWS</strong> to broaden frontend and DevOps capabilities.
  </p>
  <p>
    🌍 <strong>Open to relocation</strong> and ready to join a dynamic team where I can grow and contribute.
  </p>
</section>

      <section id="experience" className="experience" aria-label="Experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map(({ role, company, period, details, icon }, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-icon">{icon}</div>
            <div className="timeline-content">
              <h3>{role}</h3>
              <span className="timeline-company">{company}</span>
              <span className="timeline-period">{period}</span>
              <p>{details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      <section id="skills" className="skills" aria-label="Skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map(({ name, level }, i) => (
            <div key={i} className="skill">
              <span>{name}</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects" aria-label="Projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(({ title, description, url }, i) => (
            <div key={i} className="project-card">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={url} target="_blank" rel="noreferrer" className="btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="testimonials" aria-label="Testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.map(({ quote, author }, i) => (
            <blockquote key={i} className="testimonial">
              <p>“{quote}”</p>
              <footer>- {author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="contact" aria-label="Contact Me">
        <h2>Contact Me</h2>
        <div className="contact-wrapper">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for reaching out!');
              e.target.reset();
            }}
          >
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message" rows="5" required></textarea>

            <button type="submit" className="btn">Send</button>
          </form>

          <aside className="social-links" aria-label="Social Media Links">
            <a href="https://github.com/pasangyangji" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              🐱
            </a>
            <a href="https://linkedin.com/in/pasangyangji" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              💼
            </a>
            <a href="mailto:pasang@example.com" className="social-link" aria-label="Email">
              📧
            </a>
          </aside>
        </div>
      </section>

      <footer className="footer">
        &copy; 2025 Pasang Yangji. All rights reserved.
      </footer>
    </>
  );
}
