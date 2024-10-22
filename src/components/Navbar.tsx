import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const NavItem = ({
    icon,
    text,
    sectionId,
  }: {
    icon: React.ReactNode;
    text: string;
    sectionId: string;
  }) => (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='w-full md:w-auto'
    >
      <button
        onClick={() => scrollToSection(sectionId)}
        className='flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200 w-full md:w-auto px-4 py-2 rounded-md'
      >
        {icon}
        <span>{text}</span>
      </button>
    </motion.li>
  );

  return (
    <motion.nav
      className={`sticky top-0 bg-opacity-80 backdrop-blur-md shadow-lg z-50 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className='container mx-auto flex justify-between items-center p-4'>
        <motion.div
          className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          MyLogo
        </motion.div>
        {isMobile && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className='p-2'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        )}
        <AnimatePresence>
          {(!isMobile || isOpen) && (
            <motion.ul
              className={`flex ${
                isMobile
                  ? 'flex-col absolute top-full left-0 right-0 bg-inherit p-4'
                  : 'flex-row space-x-4'
              } items-center`}
              initial={isMobile ? { opacity: 0, y: -20 } : { opacity: 1 }}
              animate={isMobile ? { opacity: 1, y: 0 } : {}}
              exit={isMobile ? { opacity: 0, y: -20 } : {}}
              transition={{ duration: 0.3 }}
            >
              <NavItem icon={<User />} text='About' sectionId='about' />
              <NavItem
                icon={<Briefcase />}
                text='Projects'
                sectionId='projects'
              />
              <NavItem icon={<Mail />} text='Contact' sectionId='contact' />
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={toggleTheme}
                  className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
                >
                  {theme === 'light' ? <Moon /> : <Sun />}
                </button>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <Navbar theme={theme} toggleTheme={toggleTheme} />;
};

export default App;
