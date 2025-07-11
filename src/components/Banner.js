import React from 'react';
import Tilt from 'react-parallax-tilt';
import {ReactTyped} from 'react-typed'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import profileImg from '../assets/pasang.jpg';
import '../assets/css/banner.css';
import { FaReact, FaPhp, FaDocker } from 'react-icons/fa';
import { SiLaravel } from 'react-icons/si';

function Banner({ darkMode }) {
  const particlesInit = (engine) => {
    // customize particles if needed
  };

  return (
    <section
      id="hero-banner"
      className={`advanced-hero ${darkMode ? 'dark-mode' : 'light-mode'}`}
      style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}
    >
      <Particles
        init={particlesInit}
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#0d6efd" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            move: { enable: true, speed: 1, direction: "none", outModes: "bounce" },
            links: { enable: true, distance: 120, color: "#0d6efd", opacity: 0.1, width: 1 }
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } },
            modes: { grab: { distance: 140, links: { opacity: 0.4 } }, push: { quantity: 4 } }
          },
          detectRetina: true,
          fpsLimit: 60
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="align-items-center hero-row" style={{ minHeight: '80vh' }}>
          <Col md={6} className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Pasang Yangji Tamang</span>
            </h1>
            <ReactTyped
              className="typed-text"
              strings={[
                "Full Stack Developer",
                "Software Developer",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
            <p className="tagline" style={{ fontSize: '1.1rem', fontWeight: '400', color: '#666', marginTop: '10px' }}>
              {/* Add tagline text if needed */}
            </p>
            <div className="hero-buttons mt-4">
              <Button
                className="cv-button me-3"
                href="/Pasang_Yangji_Tamang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: '600',
                  transition: 'all 0.1s ease',
                  borderColor: darkMode ? '#66b2ff' : '#0d6efd',
                  color: darkMode ? '#66b2ff' : '#0d6efd',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? '#66b2ff' : '#0d6efd';
                  e.currentTarget.style.color = darkMode ? '#121212' : '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = darkMode ? '#66b2ff' : '#0d6efd';
                }}
              >
                Download CV
              </Button>

              <Button
                variant="outline-secondary"
                href="#contact"
                className="contact-button"
                style={{
                  borderColor: darkMode ? '#66b2ff' : '#0d6efd',
                  color: darkMode ? '#66b2ff' : '#0d6efd',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? '#66b2ff' : '#0d6efd';
                  e.currentTarget.style.color = darkMode ? '#121212' : '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = darkMode ? '#66b2ff' : '#0d6efd';
                }}
              >
                Contact Me
              </Button>
            </div>
          </Col>

          <Col md={6} className="hero-image-wrapper text-center mt-5 mt-md-0">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#0d6efd"
              glarePosition="all"
              glareBorderRadius="50%"
              className="tilt-wrapper"
            >
              <div className="photo-card neon-glow" style={{ position: 'relative', display: 'inline-block' }}>
                <img src={profileImg} alt="Pasang Yangji Tamang" className="hero-image" />
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
