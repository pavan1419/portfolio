import * as React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Main = () => {
  return (
    <motion.main
      id='home'
      className='flex-grow p-8 flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-900 dark:text-white'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className='text-5xl font-bold mb-4 text-center'
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        Welcome to my portfolio!
      </motion.h1>
      <motion.div
        className='text-3xl mb-6 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
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
        />
      </motion.div>
      <motion.p
        className='text-xl mb-6 text-center max-w-2xl'
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        I'm passionate about creating innovative web solutions that make a
        difference.
      </motion.p>
      <motion.div
        className='flex items-center justify-center space-x-4'
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        <Link
          to='contact'
          smooth={true}
          duration={500}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center cursor-pointer'
        >
          <Mail className='mr-2' />
          Contact Me
        </Link>
        <Link
          to='projects'
          smooth={true}
          duration={500}
          className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center cursor-pointer'
        >
          <Code className='mr-2' />
          View Projects
        </Link>
      </motion.div>
    </motion.main>
  );
};

export default Main;
