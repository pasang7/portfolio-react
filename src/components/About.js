import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Badge } from 'react-bootstrap';
import '../assets/css/about.css';
import profileImg from '../assets/pasang.jpg';

function About({ darkMode }) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <section id="about" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0 fade-in-up">
            <img
              src={profileImg}
              alt="Pasang Yangji Tamang"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <div className="mt-3">
              <Badge bg="info">Open to Relocate</Badge>
            </div>
          </Col>

          <Col md={7} className="fade-in-up">
          <h2 className="section-title mb-5">Who Am I</h2>
            <p>
              I am a <strong>Master’s graduate in Information Technology</strong> with over <strong>three years of experience</strong> in full-stack development,
              specialising in <strong>PHP, Laravel, MySQL, JavaScript</strong>, and <strong>RESTful API design</strong>.
            </p>
            <ul className="about-list">
              <li>Built secure eCommerce systems with <strong>Stripe integration</strong></li>
              <li>Automated web scraping with <strong>Python (Selenium, Beautiful Soup)</strong></li>
              <li>Applied <strong>Test-Driven Development (TDD)</strong> using <strong>PHPUnit</strong></li>
              <li>Collaborated in Agile environments with a focus on clean, maintainable code</li>
              <li>Exploring <strong>React</strong>, <strong>Docker</strong>, and <strong>AWS</strong> for modern development workflows</li>
            </ul>

            <div className="mt-4">
              <Button variant="primary" className="me-2" onClick={handleShow}>
                Let’s Connect
              </Button>
              <Button
                variant="outline-secondary"
                href="/Pasang_Yangji_Tamang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Button>
            </div>
          </Col>
        </Row>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Let's Connect</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default About;
