import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Loader from './components/Loader';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <Loader />
        ) : (
          <motion.div
            className='flex'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className='flex-grow pr-64 md:pr-72'>
              <Main name='Pavan Awagan' />
              <About theme={theme} />
              <Experience theme={theme} />
              <Project theme={theme} />
              <Contact />
              <Footer name='Pavan Awagan' />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
