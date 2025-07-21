import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Badge, Alert } from 'react-bootstrap';
import '../assets/css/about.css';
import profileImg from '../assets/pasang.jpg';

function About({ darkMode }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleShow = () => {
    setShowModal(true);
    setSubmitSuccess(false);
    setFormErrors({});
  };
  const handleClose = () => setShowModal(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' }); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }
    setSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="about" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0 fade-in-up">
            <img
              src={profileImg}
              alt="Profile picture of Pasang Yangji Tamang"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
              loading="lazy"
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
              <Button variant="warning" className="me-2" onClick={handleShow} aria-label="Open contact form">
                Let’s Connect
              </Button>
              <Button
                variant="outline-secondary"
                href="/Pasang_Yangji_Tamang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
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
            {submitSuccess && <Alert variant="success">Thank you for reaching out! I will get back to you soon.</Alert>}
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!formErrors.name}
                  aria-required="true"
                  aria-invalid={!!formErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!formErrors.email}
                  aria-required="true"
                  aria-invalid={!!formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!formErrors.message}
                  aria-required="true"
                  aria-invalid={!!formErrors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" disabled={submitting} aria-live="polite">
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default About;
