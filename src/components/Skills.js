import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import {
  FaCode,
  FaServer,
  FaCloud,
  FaTools,
  FaLaptopCode,
  FaUserFriends,
} from 'react-icons/fa';
import '../assets/css/skills.css';

const skills = [
  {
    title: 'Frontend Development',
    icon: <FaLaptopCode />,
    items: [
      'React', 'Vue', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'CSS', 'HTML',
    ],
  },
  
  {
    title: 'Backend Development',
    icon: <FaCode />,
    items: [
      'Laravel', 'PHP', 'Python', 'Selenium', 'JAVA', 'RESTful API', 'Node.js'
    ],
  },
  {
    title: 'Database',
    icon: <FaServer />,
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Cloud',
    icon: <FaCloud />,
    items: ['AWS', 'Firebase', 'Inmotion Hosting', 'NPM'],
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    items: ['Git', 'VS Code', 'Android Studio',  'Trello'],
  },
 
  {
    title: 'Soft Skills',
    icon: <FaUserFriends />,
    items: ['Communication', 'Customer Service', 'Time Management', 'Team Collaboration', 'Problem Solving'],
  },
];

function Skills({ darkMode }) {
  return (
    <section id="skills" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Container className="pt-5 pb-5">
      <h2 className="section-title mb-5 fade-in-up text-center"  style={{ animationDelay: '0.2s' }}>
          Skills
        </h2>
        <Row className="g-4">
          {skills.map(({ title, items, icon }, idx) => (
            <Col
              key={idx}
              md={4}
              sm={6}
              xs={12}
              className="fade-in-up"
              style={{ animationDelay: `${0.8 + idx * 0.25}s` }}
            >
              <Card
                className="shadow-sm h-100 skill-card"
                style={{
                  backgroundColor: darkMode ? '#2b2b2b' : '#ffffff',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <Card.Body>
                  <div className="card-header d-flex align-items-center gap-2 mb-3">
                    <span className="icon-inline">{icon}</span>
                    <Card.Title className="fw-semibold mb-0">{title}</Card.Title>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <Badge
                        key={i}
                        bg="secondary"
                        className="skill-badge"
                        tabIndex={0}
                        aria-label={skill}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
