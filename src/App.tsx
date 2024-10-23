import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Main from './components/Main';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Loader from './components/Loader';
import UserCard from './components/UserCard';
import FloatingUserIcon from './components/FloatingUserIcon';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [loading, setLoading] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
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

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  const toggleNavExpansion = () => setIsNavExpanded(!isNavExpanded);
  const toggleUserCard = () => setShowUserCard(!showUserCard);

  if (loading) return <Loader />;

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
          {isLargeScreen ? (
            <Navbar
              theme={theme}
              toggleTheme={toggleTheme}
              isExpanded={isNavExpanded}
              toggleExpand={toggleNavExpansion}
            />
          ) : (
            <MobileNavbar theme={theme} toggleTheme={toggleTheme} />
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
            <FloatingUserIcon onClick={toggleUserCard} />
            <AnimatePresence>
              {showUserCard && (
                <UserCard
                  name='pavan'
                  status='CREATIVE CODER'
                  role='Frontend Enthusiast'
                  onClose={() => setShowUserCard(false)}
                  theme={theme}
                />
              )}
            </AnimatePresence>
            <Main name='Pavan Awagan' theme={theme} />
            <About theme={theme} />
            <Experience theme={theme} />
            <Project theme={theme} />
            <Contact theme={theme} />
          </main>
        </div>
      </motion.div>
    </Router>
  );
}

export default App;
