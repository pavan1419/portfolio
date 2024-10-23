import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  theme: 'light' | 'dark';
  direction: 'down' | 'right';
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  theme,
  direction,
  className = '',
}) => {
  return (
    <div
      className={`p-2 rounded-full ${
        theme === 'light'
          ? 'bg-gray-200 bg-opacity-80'
          : 'bg-gray-700 bg-opacity-80'
      } ${className}`}
    >
      <motion.svg
        className={`w-6 h-6 ${
          theme === 'light' ? 'text-gray-800' : 'text-gray-200'
        }`}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        viewBox='0 0 24 24'
        stroke='currentColor'
        animate={{ [direction === 'down' ? 'y' : 'x']: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d={
            direction === 'down'
              ? 'M19 14l-7 7m0 0l-7-7m7 7V3'
              : 'M14 5l7 7m0 0l-7 7m7-7H3'
          }
        ></path>
      </motion.svg>
    </div>
  );
};

export default ScrollIndicator;
