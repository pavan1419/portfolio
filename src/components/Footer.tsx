import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <motion.footer 
      className="p-6 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &copy; 2023 My Portfolio. All rights reserved.
        </motion.p>
        <motion.div 
          className="flex space-x-4 mt-4 md:mt-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <SocialLink href="#" icon={<Github />} />
          <SocialLink href="#" icon={<Linkedin />} />
          <SocialLink href="#" icon={<Twitter />} />
        </motion.div>
      </div>
    </motion.footer>
  );
}

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="hover:text-blue-400 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;
