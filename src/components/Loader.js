import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const Loader = () => {
    return (_jsx(motion.div, { className: 'fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsx("div", { className: 'w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' }) }));
};
export default Loader;
