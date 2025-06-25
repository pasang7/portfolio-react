import React from 'react';
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaFileAlt,
  } from 'react-icons/fa';
import '../assets/css/contact.css';

export default function Contact({ darkMode }) {
  return (
    <section
    id="contact"
    className={`contact-section ${darkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <h2 className="section-title text-center">Get in Touch</h2>
      <p className="contact-subtitle text-center">
        Connect with me or download my resume
      </p>

      <div className="links-container">
        <a
          href="mailto:pasangyangji8@gmail.com"
          className="contact-link"
          title="Send me an email"
        >
           <FaEnvelope /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/pasang-yangji-8b8600151"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="LinkedIn Profile"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/pasang7"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="GitHub Profile"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="Pasang_Yangji_Tamang_Resume.pdf"
          download
          className="contact-link"
          title="Download Resume"
        >
           <FaFileAlt /> Resume
        </a>
      </div>
    </section>
  );
}
