import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Button } from 'react-bootstrap';
import '../assets/css/project.css';
import bookingImg from '../assets/img1.png';
import hrImg from '../assets/img2.png';
import laundryImg from '../assets/img3.png';


const projects = [
  {
    title: 'Supplier Data Automation',
    description:
      'Automated web scraping pipeline using Python, Selenium, and Beautiful Soup to extract product listings from supplier websites. Enabled real-time data synchronisation and reduced manual updates significantly.',
    image: 'https://images.pexels.com/photos/16592498/pexels-photo-16592498.jpeg',
    techStack: ['Python', 'Selenium', 'Beautiful Soup'],
    link: '',
  },
  {
    title: 'HR Management System',
    description: 'Custom-built HR and payroll system for managing employee records, attendance, and salary calculations. Developed RESTful APIs, implemented TDD with PHPUnit, and optimised MySQL database design.',
    image: hrImg,
    techStack: ['PHP', 'Laravel', 'MySQL', 'PHPUnit'],
    link: 'https://github.com/pasang7/hrm',
  },
  {
    title: 'Tours & Travel Websites',
    description:
      'Developed multiple responsive travel and tourism websites for clients using Laravel, Bootstrap, MySQL, and JavaScript. Included CMS features, SEO optimisation, and dynamic tour package listings.',
    image: 'https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg',
    techStack: ['Laravel 8', 'MySQL', 'Bootstrap', 'Javascript'],
    link: '',
  },
  {
    title: 'Laundry Management System',
    description:
    'A web application designed to streamline laundry business operations. This system facilitates efficient management of customer orders, sales tracking, and inventory control. ',
    image: laundryImg ,
    techStack: ['Laravel 8', 'MySQL', 'Bootstrap', 'Javascript'],
    link: 'https://github.com/pasang7/eLaundry',
  },
  {
    title: 'Portfolio Website',
    description:
      'Responsive personal portfolio built with React and Bootstrap to showcase skills, projects, and work experience. Features dark mode, animations, and reusable components.',
    image: 'https://images.pexels.com/photos/4549411/pexels-photo-4549411.jpeg',
    techStack: ['React', 'Bootstrap', 'CSS'],
    link: 'https://pasangyangji.com.np/',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Developed a modular e-commerce platform using Laravel and Vue.js, including features like product catalog, cart, Stripe payments, and admin order management.',
    image: 'https://images.pexels.com/photos/6956898/pexels-photo-6956898.jpeg',
    techStack: ['Laravel 8', 'MySQL', 'Javascript', 'Stripe'],
    link: '',
  },
  {
    title: 'Booking & Scheduling System',
    description:
      'Created an online appointment and booking system using Laravel, FullCalendar.js, and MySQL. Enabled real-time slot availability and calendar-based scheduling for salon businesses.',
    image: bookingImg,
    techStack: ['Laravel', 'MySQL', 'FullCalendar.js'],
    link: '',
  },
];


const responsive = {
  superLargeDesktop: {
    // screens larger than 1920px
    breakpoint: { max: 4000, min: 1921 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Container className="pt-5 pb-5">
        <h2 className="section-title text-center mb-5">Projects</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          showDots={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          dotListClass="custom-dot-list"
          removeArrowOnDeviceType={['mobile']}
        >
          {projects.map(({ title, description, image, techStack, link }, idx) => (
            <div className="project-card" key={idx}>
              <img src={image} alt={`${title} screenshot`} className="project-image" />
              <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="tech-stack">
                  {techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </p>
                {link && (
                  <Button
                    variant={darkMode ? 'outline-light' : 'outline-primary'}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    View Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
