import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
function Footer({ name }) {
    return (_jsx(motion.footer, { className: 'p-6 bg-gray-900 text-white', initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 }, children: _jsxs("div", { className: 'container mx-auto flex flex-col md:flex-row justify-between items-center', children: [_jsxs(motion.p, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.2 }, children: ["\u00A9 2023 ", name, ". All rights reserved."] }), _jsxs(motion.div, { className: 'flex space-x-4 mt-4 md:mt-0', initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.4 }, children: [_jsx(SocialLink, { href: '#', icon: _jsx(Github, {}) }), _jsx(SocialLink, { href: '#', icon: _jsx(Linkedin, {}) }), _jsx(SocialLink, { href: '#', icon: _jsx(Twitter, {}) })] })] }) }));
}
const SocialLink = ({ href, icon }) => (_jsx("a", { href: href, className: "hover:text-blue-400 transition-colors duration-300", target: "_blank", rel: "noopener noreferrer", children: icon }));
export default Footer;
