import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1 px-4 pb-12 pt-20 lg:pl-[300px]">
        <ParticlesBackground />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </motion.div>
      </main>
    </div>
  );
}

export default App;