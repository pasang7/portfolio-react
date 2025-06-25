import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import '../assets/css/footer.css';

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down more than 100px, hide otherwise
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className={`footer-section ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="footer-content">
          <p className="footer-text">
            &copy; {currentYear} Pasang Yangji Tamang. All rights reserved.
          </p>
          {/* <div className="footer-links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:your@email.com" title="Email">
                <FaEnvelope />
              </a>
            </div> */}
        </div>
      </footer>

      {showButton && (
        <button
          className="back-to-top-float"
          onClick={scrollToTop}
          title="Back to top"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
