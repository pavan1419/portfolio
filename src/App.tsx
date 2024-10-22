import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import './styles/CustomCursor.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setTimeout(() => setLoading(false), 2000); // Simulating load time
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AnimatePresence>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
        >
          <CustomCursor />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Main />
          <About />
          <Experience />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
