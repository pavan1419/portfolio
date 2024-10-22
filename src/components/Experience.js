import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const Experience = ({ theme }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    const experiences = [
        {
            title: 'Full Stack Developer Intern',
            company: 'Tata Advanced Systems',
            duration: 'June 2023 - Present',
            description: 'Worked on various projects using Mendix, RESTful APIs, and data analysis tools.',
        },
        {
            title: 'Software Engineer',
            company: 'Tech Solutions',
            duration: 'Jan 2022 - May 2023',
            description: 'Developed scalable web applications and improved system performance.',
        },
        // Add more experiences as needed
    ];
    return (_jsxs(motion.section, { id: 'experience', ref: ref, className: `flex-grow p-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors duration-300 min-h-screen`, initial: 'hidden', animate: inView ? 'visible' : 'hidden', variants: variants, transition: { duration: 0.5 }, children: [_jsxs(motion.h2, { className: 'text-3xl font-bold flex items-center mb-6 text-blue-600 dark:text-blue-400', variants: variants, children: [_jsx(Briefcase, { className: 'mr-3' }), "Work Experience"] }), _jsx(motion.div, { className: 'grid grid-cols-1 md:grid-cols-2 gap-8', variants: variants, children: experiences.map((exp, index) => (_jsx(ExperienceCard, { ...exp }, index))) })] }));
};
const ExperienceCard = ({ title, company, duration, description, }) => (_jsxs(motion.div, { className: 'bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg', whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [_jsx("h3", { className: 'text-xl font-semibold mb-2', children: title }), _jsx("p", { className: 'text-sm text-blue-500 mb-1', children: company }), _jsx("p", { className: 'text-sm text-gray-500 dark:text-gray-300 mb-4', children: duration }), _jsx("p", { className: 'text-sm', children: description })] }));
export default Experience;
