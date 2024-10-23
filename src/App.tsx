import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Main from './components/Main';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Loader from './components/Loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [loading, setLoading] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    // Check the user's system theme preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(savedTheme || systemTheme);

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleNavExpansion = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Analytics />
      <motion.div
        className='flex'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`${theme === 'dark' ? 'dark' : ''} flex w-full`}>
          {isMobile ? (
            <MobileNavbar theme={theme} toggleTheme={toggleTheme} />
          ) : (
            <Navbar
              theme={theme}
              toggleTheme={toggleTheme}
              isExpanded={isNavExpanded}
              toggleExpand={toggleNavExpansion}
            />
          )}
          <main
            className={`flex-grow transition-all duration-300 ${
              isLargeScreen && isNavExpanded
                ? 'ml-64'
                : isLargeScreen
                ? 'ml-16'
                : 'ml-0'
            }`}
          >
            <Main name='Pavan Awagan' />
            <About theme={theme} />
            <Experience theme={theme} />
            <Project theme={theme} />
            <Contact />
            {/* <Footer name='Pavan Awagan' /> */}
          </main>
        </div>
      </motion.div>
    </Router>
  );
}

export default App;
