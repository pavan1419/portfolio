import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMail,
} from 'react-icons/fi';

interface MobileNavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', to: 'home', icon: <FiHome /> },
    { name: 'About', to: 'about', icon: <FiUser /> },
    { name: 'Experience', to: 'experience', icon: <FiBriefcase /> },
    { name: 'Projects', to: 'projects', icon: <FiCode /> },
    { name: 'Contact', to: 'contact', icon: <FiMail /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className='flex justify-between items-center p-4'>
        <div className='text-2xl font-bold'>PA</div>
        <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed top-0 right-0 w-64 h-full ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <div className='flex flex-col h-full'>
              <div className='flex justify-end p-4'>
                <button
                  onClick={toggleMenu}
                  className='text-2xl focus:outline-none'
                >
                  <FaTimes />
                </button>
              </div>
              <div className='flex-grow'>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className='flex items-center py-3 px-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
                    onClick={toggleMenu}
                  >
                    <span className='mr-4'>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className='flex items-center w-full py-3 px-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
              >
                {theme === 'dark' ? (
                  <FiSun className='mr-4' />
                ) : (
                  <FiMoon className='mr-4' />
                )}
                Toggle Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;
