import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaBriefcase } from 'react-icons/fa';
import '../assets/css/experience.css';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Bettercaremarket',
    location: 'St Leonards, Sydney, NSW',
    period: 'October 2023 – December 2024',
    description: [
      'Developed and deployed automated web scraping pipelines using Python, Selenium and Beautiful Soup, enabling real-time product data extraction from supplier websites and reducing manual workload.',
      'Developed a modular frontend for inventory tracking using Vue.js, Vue Router and Axios, integrated with Laravel REST APIs to streamline CRUD operations and real-time updates.',
      'Worked with MySQL databases for storing product listings, customer transactions and order data, improving query performance and scalability.',
      'Integrated Stripe payment gateway into a Laravel-based eCommerce platform, enabling secure, real-time online transactions.',
      'Collaborated in an Agile team, using Git and GitHub for version control, pull requests and branch management to ensure clean, maintainable code in a fast-paced development cycle.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Pocket Studio',
    location: 'Kathmandu, Nepal',
    period: 'March 2021 - June 2022',
    description: [
      'Built backend modules in PHP (Laravel) for custom HR and payroll systems.',
      'Designed and documented scalable RESTful APIs for mobile app and third-party tool integration.',
      'Practiced Test-Driven Development (TDD) using PHPUnit, achieving high test coverage and reduced deployment bugs.',
      'Played a key role in database schema design and data flow analysis, improving system efficiency and scalability in applications built with MySQL.',
      'Delivered responsive, SEO-optimised web solutions for clients like Kheladi and Pure Adventure Nepal using Laravel Blade, Bootstrap and JavaScript.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'View Nepal Web Hosting',
    location: 'Kathmandu, Nepal',
    period: 'October 2018 – March 2020',
    description: [
      'Developed and maintained custom web applications for clients in the tourism and retail sectors using PHP, JavaScript, HTML, CSS and Bootstrap.',
      'Delivered user-friendly content management systems (CMS) for businesses like Equator Nepal Group, Birding Himalaya and Norgay Handicrafts, streamlining content publishing for non-technical staff.',
      'Developed and implemented an online booking and scheduling system using Laravel, MySQL, Blade and FullCalendar.js for RB Hair and Beauty Lounge, increasing bookings and customer retention.',
      'Managed deployment and version control using cPanel, Git and FTP, ensuring stable releases and minimal downtime for client websites.',
    ],
  },
];

// Helper to highlight tech keywords
const highlightKeywords = (text) => {
  const keywords = [
    'Python', 'Selenium', 'Beautiful Soup', 'Vue.js', 'Vue Router', 'Axios',
    'Laravel', 'REST API', 'REST APIs', 'MySQL', 'Stripe', 'Git', 'GitHub',
    'PHP', 'TDD', 'PHPUnit', 'Blade', 'Bootstrap', 'JavaScript', 'HTML', 'CSS',
    'FullCalendar.js', 'cPanel', 'FTP'
  ];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
};

export default function Experience({ darkMode }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className={`${darkMode ? 'dark-mode' : 'light-mode'} fade-in-up`}>
      <Container className="pt-5 pb-5">
        <h2 className="section-title text-center mb-5 fade-in-up" >Experience</h2>

        <div className="experience-tabs d-flex justify-content-center flex-nowrap mb-4">
          {experiences.map(({ company, period }, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  setActiveIndex((prev) => (prev + 1) % experiences.length);
                } else if (e.key === 'ArrowLeft') {
                  setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
                }
              }}
              className={`experience-tab ${activeIndex === idx ? 'active' : ''}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === idx}
              aria-label={`Experience at ${company} from ${period}`}
            >
              <div className="tab-content-wrapper">
                <span className="tab-icon">{activeIndex === idx && <FaBriefcase />}</span>
                <div>
                  <strong>{company}</strong>
                  <br />
                  <small className="time-period">{period}</small>
                </div>
              </div>
            </button>
          ))}
        </div>

        <article className="experience-detail fade-in">
          <h4 className="role-title d-flex align-items-center gap-2">
            {experiences[activeIndex].role}
          </h4>
          <p className="location mb-2">
            <em>{experiences[activeIndex].location}</em>
          </p>
          <ul className="description-list">
            {experiences[activeIndex].description.map((point, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: highlightKeywords(point) }} />
            ))}
          </ul>
        </article>
      </Container>
    </section>
  );
}
