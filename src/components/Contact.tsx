import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaPinterest, FaDeviantart } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si'; // Import the Peerlist icon

interface ContactProps {
  theme: 'light' | 'dark';
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/pavan1419', label: 'GitHub' },
    {
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/pavan-awagan/',
      label: 'LinkedIn',
    },
    {
      icon: FaPinterest,
      url: 'https://in.pinterest.com/pinperfect1419/',
      label: 'Pinterest',
    },
    {
      icon: FaDeviantart,
      url: 'https://www.deviantart.com/ptechhat',
      label: 'DeviantArt',
    },
    { icon: FiMail, url: 'mailto:pavan01419@gmail.com', label: 'Email' },
    {
      icon: SiPeerlist,
      url: 'https://peerlist.io/pavan419',
      label: 'Peerlist',
    },
  ];

  return (
    <motion.section
      id='contact'
      ref={ref}
      className={`flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-colors duration-300`}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 text-blue-600 dark:text-blue-400 text-center'
        variants={variants}
      >
        Let's Connect!
      </motion.h2>
      <motion.p
        className='text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl'
        variants={variants}
      >
        I'm always excited to collaborate on new projects and explore innovative
        ideas. Reach out through any of these platforms, and let's create
        something amazing together!
      </motion.p>
      <motion.div
        className='flex flex-wrap justify-center gap-6 sm:gap-8'
        variants={variants}
      >
        {socialLinks.map((link, index) => (
          <SocialCard key={index} {...link} theme={theme} />
        ))}
      </motion.div>
    </motion.section>
  );
};

interface SocialCardProps {
  icon: React.ElementType;
  url: string;
  label: string;
  theme: 'light' | 'dark';
}

const SocialCard: React.FC<SocialCardProps> = ({
  icon: Icon,
  url,
  label,
  theme,
}) => (
  <motion.a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    className={`relative flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
    }`}
    whileHover={{ scale: 1.05, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className='absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 transition-opacity duration-300'
      whileHover={{ opacity: 0.8 }}
    />
    <motion.div
      className='relative z-10 flex flex-col items-center'
      whileHover={{ y: -5 }}
    >
      <Icon
        className={`text-4xl sm:text-5xl mb-2 sm:mb-3 transition-colors duration-300 ${
          theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
        } group-hover:text-white`}
      />
      <span
        className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
          theme === 'dark' ? 'text-blue-200' : 'text-blue-700'
        } group-hover:text-white`}
      >
        {label}
      </span>
    </motion.div>
    <motion.div
      className='absolute bottom-0 left-0 right-0 h-1 bg-blue-500'
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

export default Contact;
