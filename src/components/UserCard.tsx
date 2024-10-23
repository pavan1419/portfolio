import React from 'react';
import { motion } from 'framer-motion';
import { X, Github, Linkedin, Mail } from 'lucide-react';
import { FaPinterest, FaDeviantart } from 'react-icons/fa';
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
          <h2 className='text-2xl font-bold text-center mb-1'>{name}</h2>
          <p
            className={`text-sm font-semibold text-center mb-2 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            {status}
          </p>
          <p
            className={`text-center mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {role}
          </p>
          <div className='flex flex-wrap justify-center gap-4 mb-6'>
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
              icon={<FaPinterest size={20} />}
              href='https://in.pinterest.com/pinperfect1419/'
              theme={theme}
            />
            <SocialIcon
              icon={<FaDeviantart size={20} />}
              href='https://www.deviantart.com/ptechhat'
              theme={theme}
            />
            <SocialIcon
              icon={<Mail size={20} />}
              href='mailto:pavan01419@gmail.com'
              theme={theme}
            />
          </div>
          <p
            className={`text-sm text-center ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            "Bringing anime-inspired creativity to software development."
          </p>
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
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`p-2 rounded-full transition-colors duration-200 ${
        isDark
          ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-black'
      }`}
    >
      {icon}
    </a>
  );
};

export default UserCard;
