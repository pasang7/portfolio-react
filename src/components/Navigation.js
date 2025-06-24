import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/navigation.css';

function Navigation({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#" className="d-flex flex-column">
          <span className="title">Pasang Yangji Tamang</span>
          <small className="subtitle">Web Developer</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
            <Nav.Link onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? '🌙' : '☀️'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
