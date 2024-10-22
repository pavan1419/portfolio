import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Mail, Sun, Moon, Home, Code, ChevronLeft, ChevronRight, Menu, } from 'lucide-react';
import { Link } from 'react-scroll';
const Navbar = ({ theme, toggleTheme, isExpanded, toggleExpand, }) => {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { icon: _jsx(Home, { size: 18 }), text: 'Home', sectionId: 'home' },
        { icon: _jsx(User, { size: 18 }), text: 'About', sectionId: 'about' },
        {
            icon: _jsx(Briefcase, { size: 18 }),
            text: 'Experience',
            sectionId: 'experience',
        },
        { icon: _jsx(Code, { size: 18 }), text: 'Projects', sectionId: 'projects' },
        { icon: _jsx(Mail, { size: 18 }), text: 'Contact', sectionId: 'contact' },
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
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: toggleMobileMenu, className: 'fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-200 dark:bg-gray-700 lg:hidden', children: _jsx(Menu, { size: 24 }) }), _jsx("nav", { className: `fixed top-0 left-0 h-full ${isExpanded ? 'w-64 md:w-72' : 'w-16'} bg-opacity-90 backdrop-blur-md shadow-lg z-40 navbar transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} ${isMobileMenuOpen
                    ? 'translate-x-0'
                    : '-translate-x-full lg:translate-x-0'}`, children: _jsxs("div", { className: 'flex flex-col h-full p-4', children: [_jsx("div", { className: 'flex-grow space-y-6 mt-16', children: navItems.map((item, index) => (_jsx(NavItem, { ...item, isActive: activeSection === item.sectionId, isExpanded: isExpanded, onClick: () => setIsMobileMenuOpen(false) }, index))) }), _jsxs("div", { className: 'flex flex-col items-center space-y-4 mb-4', children: [_jsx(ThemeToggle, { theme: theme, toggleTheme: toggleTheme }), _jsx(ExpandToggle, { isExpanded: isExpanded, toggleExpand: toggleExpand })] })] }) })] }));
};
const NavItem = ({ icon, text, sectionId, isActive, isExpanded, onClick, }) => (_jsx(Link, { to: sectionId, smooth: true, duration: 500, className: `flex items-center space-x-2 cursor-pointer p-2 rounded-md transition-colors duration-200 ${isActive
        ? 'bg-blue-500 text-white'
        : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`, onClick: onClick, children: _jsxs(motion.div, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, className: 'flex items-center space-x-2', children: [icon, isExpanded && _jsx("span", { children: text })] }) }));
const ThemeToggle = ({ theme, toggleTheme }) => (_jsx(motion.button, { onClick: toggleTheme, className: `p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-700 text-white'}`, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: theme === 'light' ? _jsx(Moon, { size: 18 }) : _jsx(Sun, { size: 18 }) }));
const ExpandToggle = ({ isExpanded, toggleExpand, }) => (_jsx(motion.button, { onClick: toggleExpand, className: 'p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700', whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: isExpanded ? _jsx(ChevronLeft, { size: 18 }) : _jsx(ChevronRight, { size: 18 }) }));
export default Navbar;
