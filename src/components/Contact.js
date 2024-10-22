import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (_jsxs(motion.section, { id: 'contact', ref: ref, className: 'p-8 bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen', initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : { opacity: 0 }, transition: { duration: 1 }, children: [_jsx(motion.h2, { className: 'text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400', initial: { y: -50 }, animate: inView ? { y: 0 } : { y: -50 }, transition: { type: 'spring', stiffness: 50 }, children: "Contact Me" }), _jsxs(motion.div, { className: 'max-w-2xl mx-auto space-y-6', initial: { y: 50 }, animate: inView ? { y: 0 } : { y: 50 }, transition: { type: 'spring', stiffness: 50 }, children: [_jsx(ContactItem, { icon: _jsx(Mail, {}), text: 'Pavan01419@gmail.com', link: 'mailto:Pavan01419@gmail.com' }), _jsx(ContactItem, { icon: _jsx(Phone, {}), text: '8830165110', link: 'tel:+918830165110' }), _jsx(ContactItem, { icon: _jsx(MapPin, {}), text: 'Pune, Maharashtra, India' }), _jsx(ContactItem, { icon: _jsx(Linkedin, {}), text: 'LinkedIn', link: 'https://www.linkedin.com/in/yourprofile' }), _jsx(ContactItem, { icon: _jsx(Github, {}), text: 'GitHub', link: 'https://github.com/yourusername' })] })] }));
}
const ContactItem = ({ icon, text, link, }) => (_jsxs(motion.div, { className: 'flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-md', whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx("div", { className: 'text-blue-500', children: icon }), link ? (_jsx("a", { href: link, target: '_blank', rel: 'noopener noreferrer', className: 'hover:text-blue-500 transition-colors duration-300', children: text })) : (_jsx("span", { children: text }))] }));
export default Contact;
