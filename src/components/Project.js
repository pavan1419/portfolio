import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Server, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const projects = [
    {
        title: 'ServEase',
        description: 'A full-stack MERN web app with user authentication, admin panel for managing users, and contacts.',
        icon: _jsx(Server, { className: 'w-12 h-12 text-blue-500' }),
        technologies: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'JWT',
            'Chakra UI',
            'React Spring',
        ],
        link: 'https://example.com/servease',
        github: 'https://github.com/yourusername/servease',
    },
    {
        title: 'UrlShrink',
        description: 'A URL shortening service with analytics tracking for click counts and timestamps.',
        icon: _jsx(Code, { className: 'w-12 h-12 text-green-500' }),
        technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
        link: 'https://example.com/urlshrink',
        github: 'https://github.com/yourusername/urlshrink',
    },
    {
        title: 'Be_Anonim',
        description: 'Automated Proxy, Mac Changer, and wiper for enhanced online anonymity.',
        icon: _jsx(Shield, { className: 'w-12 h-12 text-purple-500' }),
        technologies: [
            'Shell Scripting',
            'Python',
            'tor',
            'I2P',
            'Polipo',
            'Privoxy',
        ],
        link: 'https://example.com/be-anonim',
        github: 'https://github.com/yourusername/be-anonim',
    },
    {
        title: '5S Auditing App',
        description: 'Mendix-based application for 5S auditing with user roles, audit creation, and visual reports.',
        icon: _jsx(Code, { className: 'w-12 h-12 text-red-500' }),
        technologies: ['Mendix', 'REST APIs', 'SSO'],
        link: 'https://example.com/5s-auditing',
        github: 'https://github.com/yourusername/5s-auditing',
    },
    {
        title: 'Admin Security Register',
        description: 'Modules for managing drinking water, vehicles, lost & found, and plant-based data.',
        icon: _jsx(Shield, { className: 'w-12 h-12 text-yellow-500' }),
        technologies: ['Mendix', 'Data Management'],
        link: 'https://example.com/admin-security',
        github: 'https://github.com/yourusername/admin-security',
    },
    {
        title: 'FOD Detection',
        description: 'Foreign Object Detection application with data filters and bug resolution.',
        icon: _jsx(Code, { className: 'w-12 h-12 text-indigo-500' }),
        technologies: ['Mendix', 'Data Filtering'],
        link: 'https://example.com/fod-detection',
        github: 'https://github.com/yourusername/fod-detection',
    },
];
const Project = ({ theme }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [filter, setFilter] = useState('all');
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter((project) => project.technologies.includes(filter));
    const uniqueTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies)));
    return (_jsxs(motion.section, { id: 'projects', ref: ref, className: `p-8 ${theme === 'dark'
            ? 'bg-gray-800 text-white'
            : 'bg-gray-100 text-gray-800'} transition-colors duration-300 min-h-screen`, initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 1 }, children: [_jsx(motion.h2, { className: 'text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400', initial: { y: -50 }, animate: inView ? { y: 0 } : { y: -50 }, transition: { type: 'spring', stiffness: 50 }, children: "My Projects" }), _jsxs("div", { className: 'mb-8 flex justify-center flex-wrap gap-2', children: [_jsx("button", { onClick: () => setFilter('all'), className: `px-4 py-2 rounded ${filter === 'all'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'}`, children: "All" }), uniqueTechnologies.map((tech) => (_jsx("button", { onClick: () => setFilter(tech), className: `px-4 py-2 rounded ${filter === tech
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'}`, children: tech }, tech)))] }), _jsx("div", { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', children: filteredProjects.map((project, index) => (_jsx(ProjectCard, { project: project, index: index }, index))) })] }));
};
const ProjectCard = ({ project, index, }) => {
    return (_jsx(motion.div, { className: 'bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2', initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs("div", { className: 'p-6', children: [_jsxs("div", { className: 'flex items-center mb-4', children: [project.icon, _jsx("h3", { className: 'text-2xl font-bold ml-4', children: project.title })] }), _jsx("p", { className: 'mb-4 text-gray-600 dark:text-gray-300', children: project.description }), _jsxs("div", { className: 'mb-4', children: [_jsx("h4", { className: 'font-semibold mb-2', children: "Technologies:" }), _jsx("div", { className: 'flex flex-wrap gap-2', children: project.technologies.map((tech, i) => (_jsx("span", { className: 'bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300', children: tech }, i))) })] }), _jsxs("div", { className: 'flex space-x-4', children: [_jsxs("a", { href: project.link, target: '_blank', rel: 'noopener noreferrer', className: 'inline-flex items-center text-blue-500 hover:underline', children: [_jsx(ExternalLink, { className: 'mr-1', size: 18 }), "View Project"] }), _jsxs("a", { href: project.github, target: '_blank', rel: 'noopener noreferrer', className: 'inline-flex items-center text-blue-500 hover:underline', children: [_jsx(Github, { className: 'mr-1', size: 18 }), "GitHub"] })] })] }) }));
};
export default Project;
