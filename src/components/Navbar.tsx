import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Briefcase,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  BookOpen,
  Coffee,
  Home,
  Code,
} from 'lucide-react';
// Remove the following line:
// import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <User size={18} />, text: 'About', sectionId: 'about' },
    { icon: <BookOpen size={18} />, text: 'Skills', sectionId: 'skills' },
    { icon: <Briefcase size={18} />, text: 'Projects', sectionId: 'projects' },
    { icon: <Coffee size={18} />, text: 'Experience', sectionId: 'experience' },
    { icon: <Mail size={18} />, text: 'Contact', sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.sectionId);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 right-0 h-full w-64 md:w-72 bg-opacity-90 backdrop-blur-md shadow-lg z-40 navbar transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out ${
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <div className='flex flex-col h-full p-4'>
          <div className='flex-grow space-y-6 mt-16'>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                {...item}
                isActive={activeSection === item.sectionId}
              />
            ))}
          </div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='fixed top-4 right-4 z-50 md:hidden bg-blue-500 text-white p-2 rounded-full'
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  sectionId: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  text,
  sectionId,
  isActive,
}) => (
  <Link
    to={sectionId}
    smooth={true}
    duration={500}
    className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md transition-colors duration-200 ${
      isActive
        ? 'bg-blue-500 text-white'
        : 'hover:bg-gray-200 dark:hover:bg-gray-700'
    }`}
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='flex items-center space-x-2'
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  </Link>
);

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => (
  <motion.button
    onClick={toggleTheme}
    className={`p-2 rounded-full ${
      theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-700 text-white'
    }`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
  </motion.button>
);

export default Navbar;
