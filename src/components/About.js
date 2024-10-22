import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { User, Code, Wrench } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const About = ({ theme }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (_jsxs(motion.section, { id: 'about', ref: ref, className: `flex-grow p-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors duration-300 min-h-screen`, initial: 'hidden', animate: inView ? 'visible' : 'hidden', variants: variants, transition: { duration: 0.5 }, children: [_jsxs(motion.h2, { className: 'text-3xl font-bold flex items-center mb-6 text-blue-600 dark:text-blue-400', variants: variants, children: [_jsx(User, { className: 'mr-3' }), "About Me"] }), _jsxs(motion.p, { className: 'text-lg mb-8 leading-relaxed', variants: variants, children: ["I'm ", _jsx("span", { className: 'font-bold text-blue-500', children: "Pavan Awagan" }), ", a passionate full-stack developer with a strong foundation in problem-solving and a keen interest in creating innovative web solutions. Currently pursuing my MCA at Lovely Professional University, I bring hands-on experience from my internship at Tata Advanced Systems, where I worked on various projects using Mendix, RESTful APIs, and data analysis tools."] }), _jsxs(motion.div, { className: 'grid grid-cols-1 md:grid-cols-2 gap-8', variants: variants, children: [_jsx(SkillCard, { icon: _jsx(Code, { size: 24 }), title: 'Tech Arsenal', skills: [
                            'JavaScript',
                            'Node.js',
                            'React.js',
                            'Express.js',
                            'RESTful APIs',
                            'WebSockets',
                            'SQL',
                            'MongoDB',
                            'Python',
                            'Shell Scripting',
                        ] }), _jsx(SkillCard, { icon: _jsx(Wrench, { size: 24 }), title: 'Toolbox', skills: [
                            'VS Code',
                            'Git',
                            'GitHub',
                            'Postman',
                            'Mendix',
                            'Alteryx',
                            'Tableau',
                            'RPA',
                            'Linux Tools',
                            'JWT',
                            'Chakra UI',
                            'Bootstrap',
                        ] })] })] }));
};
const SkillCard = ({ icon, title, skills }) => (_jsxs(motion.div, { className: 'bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg', whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [_jsxs("div", { className: 'flex items-center mb-4', children: [_jsx("div", { className: 'text-blue-500 mr-3', children: icon }), _jsx("h3", { className: 'text-xl font-semibold', children: title })] }), _jsx("ul", { className: 'grid grid-cols-2 gap-2', children: skills.map((skill, index) => (_jsxs("li", { className: 'flex items-center', children: [_jsx("span", { className: 'w-2 h-2 bg-blue-500 rounded-full mr-2' }), _jsx("span", { className: 'text-sm', children: skill })] }, index))) })] }));
export default About;
