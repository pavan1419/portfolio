import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { SiMedium } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const Contact: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactLinks = [
    { name: 'EMAIL', icon: <Mail />, url: 'mailto:Pavan01419@gmail.com' },
    {
      name: 'GITHUB',
      icon: <Github />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LINKEDIN',
      icon: <Linkedin />,
      url: 'https://www.linkedin.com/in/yourprofile',
    },
    {
      name: 'MEDIUM',
      icon: <SiMedium />,
      url: 'https://medium.com/@yourusername',
    },
    {
      name: 'TWITTER',
      icon: <Twitter />,
      url: 'https://twitter.com/yourusername',
    },
  ];

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='p-8 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col justify-center'
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className='text-5xl font-bold mb-12 text-blue-600 dark:text-blue-400'
        initial={{ y: -50 }}
        animate={inView ? { y: 0 } : { y: -50 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        CONTACT
      </motion.h2>
      <motion.div
        className='flex flex-col md:flex-row justify-between items-start md:items-center max-w-4xl mx-auto w-full'
        initial={{ y: 50 }}
        animate={inView ? { y: 0 } : { y: 50 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div className='mb-8 md:mb-0'>
          <h3 className='text-3xl mb-4 text-gray-700 dark:text-gray-300'>
            Let's Connect
          </h3>
          <p className='text-2xl font-light text-gray-600 dark:text-gray-400'>
            DIGITALLY
          </p>
        </div>
        <div className='flex flex-col space-y-4'>
          {contactLinks.map((link) => (
            <ContactItem
              key={link.name}
              icon={link.icon}
              text={link.name}
              link={link.url}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

const ContactItem = ({
  icon,
  text,
  link,
}: {
  icon: React.ReactNode;
  text: string;
  link: string;
}) => (
  <motion.a
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    className='flex items-center space-x-4 text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300'
    whileHover={{ x: 10 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className='text-blue-500 dark:text-blue-400'>{icon}</div>
    <span>{text}</span>
  </motion.a>
);

export default Contact;
