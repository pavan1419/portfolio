import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Mail, FileText } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import ScrollIndicator from './ScrollIndicator';

interface MainProps {
  name: string;
  theme: 'light' | 'dark';
}

const Main: React.FC<MainProps> = ({ name, theme }) => {
  const [hoverButton, setHoverButton] = useState<string | null>(null);
  const resumeUrl = '/assets/resume.pdf'; // Define resumeUrl inside the component

  const getButtonClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'purple':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <motion.main
      id='home'
      className='relative flex-grow p-4 sm:p-8 flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-900 dark:text-white min-h-screen overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className='absolute inset-0 z-0'
        animate={{
          background: [
            'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)',
            'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />

      <motion.h1
        className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        Hi, I'm{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>
          {name}
        </span>
      </motion.h1>

      <motion.div
        className='text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <TypeAnimation
          sequence={[
            "I'm a Full Stack Developer",
            1000,
            "I'm a UI/UX Enthusiast",
            1000,
            "I'm a Problem Solver",
            1000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          className='font-semibold'
        />
      </motion.div>

      <motion.p
        className='text-lg sm:text-xl mb-8 sm:mb-10 text-center max-w-xs sm:max-w-sm md:max-w-2xl px-4'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.9 }}
      >
        Passionate about creating innovative web solutions that make a
        difference in the digital world.
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 1.1 }}
      >
        {[
          { name: 'contact', icon: Mail, color: 'blue' },
          { name: 'projects', icon: Code, color: 'purple' },
          {
            name: 'resume',
            icon: FileText,
            color: 'green',
            external: true,
            url: resumeUrl,
          },
        ].map((link) =>
          link.external ? (
            <a
              key={link.name}
              href={link.url}
              download='resume.pdf'
              onMouseEnter={() => setHoverButton(link.name)}
              onMouseLeave={() => setHoverButton(null)}
              className={`relative w-48 h-14 ${getButtonClass(
                link.color
              )} text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center cursor-pointer overflow-hidden`}
            >
              <AnimatePresence>
                {hoverButton === link.name && (
                  <motion.div
                    className='absolute inset-0 bg-white opacity-20'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <link.icon className='mr-2' />
              {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
            </a>
          ) : (
            <ScrollLink
              key={link.name}
              to={link.name}
              smooth={true}
              duration={500}
              onMouseEnter={() => setHoverButton(link.name)}
              onMouseLeave={() => setHoverButton(null)}
              className={`relative w-48 h-14 ${getButtonClass(
                link.color
              )} text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center cursor-pointer overflow-hidden`}
            >
              <AnimatePresence>
                {hoverButton === link.name && (
                  <motion.div
                    className='absolute inset-0 bg-white opacity-20'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <link.icon className='mr-2' />
              {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
            </ScrollLink>
          )
        )}
      </motion.div>

      {/* Scroll down indicator */}
      <ScrollLink
        to='about'
        smooth={true}
        duration={500}
        offset={-50}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer'
      >
        <ScrollIndicator theme={theme} direction='down' />
      </ScrollLink>
    </motion.main>
  );
};

export default Main;
