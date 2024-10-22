import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Loader from './components/Loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
function App() {
    const [theme, setTheme] = useState('light');
    const [loading, setLoading] = useState(true);
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
    useEffect(() => {
        // Check the user's system theme preference
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
            .matches
            ? 'dark'
            : 'light';
        const savedTheme = localStorage.getItem('theme');
        setTheme(savedTheme || systemTheme);
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const toggleNavExpansion = () => {
        setIsNavExpanded(!isNavExpanded);
    };
    if (loading) {
        return _jsx(Loader, {});
    }
    return (_jsx(Router, { children: _jsxs(motion.div, { className: 'flex', initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 }, children: [_jsx(Navbar, { theme: theme, toggleTheme: toggleTheme, isExpanded: isNavExpanded, toggleExpand: toggleNavExpansion }), _jsxs("main", { className: `flex-grow transition-all duration-300 ${isLargeScreen && isNavExpanded
                        ? 'ml-64 md:ml-72'
                        : isLargeScreen
                            ? 'ml-16'
                            : 'ml-0'}`, children: [_jsx(Main, { name: 'Pavan Awagan' }), _jsx(About, { theme: theme }), _jsx(Experience, { theme: theme }), _jsx(Project, { theme: theme }), _jsx(Contact, {}), _jsx(Footer, { name: 'Pavan Awagan' })] })] }) }));
}
export default App;
