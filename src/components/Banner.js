import React from 'react';
import Tilt from 'react-parallax-tilt';
import { ReactTyped } from 'react-typed';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaPhp, FaDocker, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiLaravel } from 'react-icons/si';
import profileImg from '../assets/pasang.jpg';
import '../assets/css/banner.css';

function Banner({ darkMode }) {
  return (
    <section
      id="hero-banner"
      className={`advanced-hero ${darkMode ? 'dark-mode' : 'light-mode'}`}
      style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}
    >
      {/* Background shapes */}
      <div className="background-shapes">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape square"></div>
      </div>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="align-items-center hero-row" style={{ minHeight: '90vh' }}>
          <Col md={6} className="hero-text">
            <motion.h1
              className="hero-title animated-gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Pasang Yangji Tamang
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <ReactTyped
                className="typed-text"
                strings={["Full Stack Developer", "Software Developer"]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </motion.div>

            <div className="social-icons mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub" className="git pulse-hover">
                <FaGithub className="icon-sm" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="linkedin pulse-hover">
                <FaLinkedin className="icon-sm" />
              </a>
            </div>

            <div className="hero-buttons mt-5">
              <Button
                className="cv-button btn-hover-glow btn-warning"
                href="/Pasang_Yangji_Tamang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload style={{ marginRight: '8px' }} />
                Download CV
              </Button>

              <Button
                variant="outline-warning"
                href="#contact"
                className="contact-button btn-hover-glow ms-3"
              >
                Contact Me
              </Button>
            </div>
          </Col>

          <Col md={6} className="hero-image-wrapper text-center mt-5 mt-md-0">
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#f39c12"
              glarePosition="all"
              glareBorderRadius="50%"
              transitionSpeed={400}
            >
              <div className="photo-card neon-glow-shadow">
                <img
                  src={profileImg}
                  alt="Pasang Yangji Tamang Full Stack Developer"
                  className="hero-image"
                  loading="lazy"
                />
                <div className="floating-icons">
                  <FaReact className="icon icon-react" title="React" />
                  <FaPhp className="icon icon-php" title="PHP" />
                  <SiLaravel className="icon icon-laravel" title="Laravel" />
                  <FaDocker className="icon icon-docker" title="Docker" />
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
