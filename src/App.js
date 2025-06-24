import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Skill from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} />
      <Skill darkMode={darkMode} />
    </>
  );
}

export default App;
