import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Button } from 'react-bootstrap';
import '../assets/css/project.css';
import bookingImg from '../assets/img1.png';


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
    image:'https://private-user-images.githubusercontent.com/139978460/340240332-fa4b4bf3-e593-4913-bafa-5565139e003e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA4NDk2MDksIm5iZiI6MTc1MDg0OTMwOSwicGF0aCI6Ii8xMzk5Nzg0NjAvMzQwMjQwMzMyLWZhNGI0YmYzLWU1OTMtNDkxMy1iYWZhLTU1NjUxMzllMDAzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNVQxMTAxNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMDBjOGE5Y2Q0YjY5MDgwZjgyMjA4NjRmMGYyNmJmZmYxMTM1M2RhNTA3NWQzMWQ2OWQxZTk4Y2ZjYmUxNDRiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XEfMwrYzQf1mqnvnI1xZ4PONrS59YIsozRWHw-lWHZI',
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
    image: 'https://private-user-images.githubusercontent.com/139978460/340244213-f76b268e-0972-448d-952f-4ce275ffa4b1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA4NDk2NzQsIm5iZiI6MTc1MDg0OTM3NCwicGF0aCI6Ii8xMzk5Nzg0NjAvMzQwMjQ0MjEzLWY3NmIyNjhlLTA5NzItNDQ4ZC05NTJmLTRjZTI3NWZmYTRiMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNVQxMTAyNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yODllMmYwMDc5MThkMzc4Yjg5MjA2YjUwOTYzMzA2MDJkMmQ4N2ZlMDY0NDk0ZDkzZTg0MmYwYjMzYTE1OWUwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.F_izGrmP0_fqwswDKd23bDBYRk5b_vLp8WkEGLD67FM' ,
    techStack: ['Laravel 8', 'MySQL', 'Bootstrap', 'Javascript'],
    link: 'https://github.com/pasang7/eLaundry',
  },
  {
    title: 'Portfolio Website',
    description:
      'Responsive personal portfolio built with React and Bootstrap to showcase skills, projects, and work experience. Features dark mode, animations, and reusable components.',
    image: 'https://images.pexels.com/photos/4549411/pexels-photo-4549411.jpeg',
    techStack: ['React', 'Bootstrap', 'CSS'],
    link: 'https://github.com/pasang7/react-portfolio',
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
                    View Code
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
