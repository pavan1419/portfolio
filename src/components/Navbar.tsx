import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Briefcase,
  Mail,
  Sun,
  Moon,
  Home,
  Code,
  ChevronLeft,
  ChevronRight,
  Menu,
} from 'lucide-react';
import { Link } from 'react-scroll';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  isExpanded,
  toggleExpand,
}) => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <Home size={18} />, text: 'Home', sectionId: 'home' },
    { icon: <User size={18} />, text: 'About', sectionId: 'about' },
    {
      icon: <Briefcase size={18} />,
      text: 'Experience',
      sectionId: 'experience',
    },
    { icon: <Code size={18} />, text: 'Projects', sectionId: 'projects' },
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className='fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-200 dark:bg-gray-700 lg:hidden'
      >
        <Menu size={24} />
      </button>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 h-full ${
          isExpanded ? 'w-64 md:w-72' : 'w-16'
        } bg-opacity-90 backdrop-blur-md shadow-lg z-40 navbar transition-all duration-300 ease-in-out ${
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        } ${
          isMobileMenuOpen
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className='flex flex-col h-full p-4'>
          <div className='flex-grow space-y-6 mt-16'>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                {...item}
                isActive={activeSection === item.sectionId}
                isExpanded={isExpanded}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </div>
          <div className='flex flex-col items-center space-y-4 mb-4'>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <ExpandToggle isExpanded={isExpanded} toggleExpand={toggleExpand} />
          </div>
        </div>
      </nav>
    </>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  sectionId: string;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  text,
  sectionId,
  isActive,
  isExpanded,
  onClick,
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
    onClick={onClick}
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='flex items-center space-x-2'
    >
      {icon}
      {isExpanded && <span>{text}</span>}
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

interface ExpandToggleProps {
  isExpanded: boolean;
  toggleExpand: () => void;
}

const ExpandToggle: React.FC<ExpandToggleProps> = ({
  isExpanded,
  toggleExpand,
}) => (
  <motion.button
    onClick={toggleExpand}
    className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
  </motion.button>
);

export default Navbar;
