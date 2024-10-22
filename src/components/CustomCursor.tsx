import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className='fixed w-6 h-6 rounded-full pointer-events-none'
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        border: '2px solid white',
        mixBlendMode: 'difference',
        zIndex: 9999, // Increase this value
      }}
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
