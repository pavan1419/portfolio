import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMail,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isExpanded: boolean;
  toggleExpand: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  sectionId: string;
  isActive: boolean;
  isExpanded: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  isExpanded,
  toggleExpand,
}) => {
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { name: 'Home', icon: <FiHome size={20} /> },
    { name: 'About', icon: <FiUser size={20} /> },
    { name: 'Experience', icon: <FiBriefcase size={20} /> },
    { name: 'Projects', icon: <FiCode size={20} /> },
    { name: 'Contact', icon: <FiMail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.name.toLowerCase());
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
    <nav
      className={`fixed top-0 left-0 h-screen ${
        isExpanded ? 'w-64' : 'w-16'
      } bg-opacity-90 shadow-lg z-40 transition-all duration-300 ease-in-out ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <motion.div
        className='absolute top-0 right-0 w-1 h-full bg-blue-500 origin-top'
        style={{ scaleY }}
      />
      <div className='flex flex-col h-full'>
        <div className='flex justify-center items-center h-16'>
          <span className='text-2xl font-bold'>PA</span>
        </div>
        <div className='flex-grow flex flex-col justify-between'>
          <div>
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                icon={item.icon}
                text={item.name}
                sectionId={item.name.toLowerCase()}
                isActive={activeSection === item.name.toLowerCase()}
                isExpanded={isExpanded}
              />
            ))}
          </div>
          <div>
            <ThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
              isExpanded={isExpanded}
            />
            <ExpandToggle isExpanded={isExpanded} toggleExpand={toggleExpand} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({
  icon,
  text,
  sectionId,
  isActive,
  isExpanded,
}) => {
  return (
    <Link
      to={sectionId}
      smooth={true}
      duration={500}
      className={`flex items-center p-4 cursor-pointer transition-colors duration-200 ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <div className='w-8 flex justify-center'>{icon}</div>
      {isExpanded && <span className='ml-4'>{text}</span>}
    </Link>
  );
};

const ThemeToggle: React.FC<{
  theme: string;
  toggleTheme: () => void;
  isExpanded: boolean;
}> = ({ theme, toggleTheme, isExpanded }) => {
  return (
    <button
      onClick={toggleTheme}
      className='flex items-center w-full p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
    >
      <div className='w-8 flex justify-center'>
        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
      </div>
      {isExpanded && (
        <span className='ml-4'>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};

const ExpandToggle: React.FC<{
  isExpanded: boolean;
  toggleExpand: () => void;
}> = ({ isExpanded, toggleExpand }) => {
  return (
    <button
      onClick={toggleExpand}
      className='flex items-center justify-center w-full p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
    >
      {isExpanded ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
    </button>
  );
};

export default Navbar;
