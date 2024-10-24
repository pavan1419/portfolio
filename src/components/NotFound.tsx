import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  theme: 'light' | 'dark';
}

const NotFound = ({ theme }: NotFoundProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <h1 className={`text-8xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        404
      </h1>
      <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        Oops! Page not found
      </p>
      <Link
        to="/"
        className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-white text-black hover:bg-gray-200'
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        Back to Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
