import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { User } from 'lucide-react';

interface FloatingUserIconProps {
  onClick: () => void;
}

const FloatingUserIcon: React.FC<FloatingUserIconProps> = ({ onClick }) => {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.button
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.2 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onClick={() => !isDragging && onClick()}
      style={{ x: springX, y: springY }}
      className='fixed bottom-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg z-50 cursor-move'
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <User size={24} />
      </motion.div>
      <motion.div
        className='absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-30 -z-10'
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </motion.button>
  );
};

export default FloatingUserIcon;
