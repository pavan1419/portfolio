import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { X, Github, Linkedin, Mail } from 'lucide-react';
import userImage from '../assets/user.jpg'; // Import the image

interface UserCardProps {
  name: string;
  status: string;
  role: string;
  onClose: () => void;
  theme: 'light' | 'dark';
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  status,
  role,
  onClose,
  theme,
}) => {
  const isDark = theme === 'dark';
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
    >
      <div
        className='absolute inset-0 bg-black bg-opacity-50'
        onClick={onClose}
      />
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        whileTap={{ cursor: 'grabbing' }}
        className={`relative w-full max-w-md p-6 rounded-2xl shadow-2xl ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
        layoutId='user-card'
      >
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 ${
            isDark
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-black'
          } transition-colors duration-200`}
        >
          <X size={24} />
        </button>
        <div className='flex flex-col items-center'>
          <motion.div
            className='relative w-48 h-48 mb-4 overflow-hidden rounded-lg'
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <img
              src={userImage}
              alt={name}
              className='w-full h-full object-cover'
            />
          </motion.div>
          <motion.h2
            className='text-2xl font-bold text-center mb-1'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {name}
          </motion.h2>
          <motion.p
            className={`text-sm font-semibold text-center mb-2 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {status}
          </motion.p>
          <motion.p
            className={`text-center mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {role}
          </motion.p>
          <motion.div
            className='flex flex-wrap justify-center gap-4 mb-6'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <SocialIcon
              icon={<Github size={20} />}
              href='https://github.com/pavan1419'
              theme={theme}
            />
            <SocialIcon
              icon={<Linkedin size={20} />}
              href='https://www.linkedin.com/in/pavan-awagan/'
              theme={theme}
            />
            <SocialIcon
              icon={<Mail size={20} />}
              href='mailto:pavan01419@gmail.com'
              theme={theme}
            />
          </motion.div>
          <motion.p
            className={`text-sm text-center ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            "Bringing inspired creativity to software development."
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  theme: 'light' | 'dark';
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, theme }) => {
  const isDark = theme === 'dark';
  return (
    <motion.a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`p-3 rounded-full transition-all duration-300 ${
        isDark
          ? 'bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white'
          : 'bg-gray-200 hover:bg-blue-500 text-gray-700 hover:text-white'
      }`}
      whileHover={{ scale: 1.1, rotate: 5, z: 20 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
    </motion.a>
  );
};

export default UserCard;
