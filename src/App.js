import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import About from './components/About';
import Skill from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize from localStorage or default false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Banner darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skill darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Project darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
