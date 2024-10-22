import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ExperienceProps {
  theme: string;
}

const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Tata Advanced Systems',
      duration: 'June 2023 - Present',
      description:
        'Worked on various projects using Mendix, RESTful APIs, and data analysis tools.',
    },
    {
      title: 'Software Engineer',
      company: 'Tech Solutions',
      duration: 'Jan 2022 - May 2023',
      description:
        'Developed scalable web applications and improved system performance.',
    },
    // Add more experiences as needed
  ];

  return (
    <motion.section
      id='experience'
      ref={ref}
      className={`flex-grow p-8 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-colors duration-300 min-h-screen`}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className='text-3xl font-bold flex items-center mb-6 text-blue-600 dark:text-blue-400'
        variants={variants}
      >
        <Briefcase className='mr-3' />
        Work Experience
      </motion.h2>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={variants}
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </motion.div>
    </motion.section>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  description,
}) => (
  <motion.div
    className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <h3 className='text-xl font-semibold mb-2'>{title}</h3>
    <p className='text-sm text-blue-500 mb-1'>{company}</p>
    <p className='text-sm text-gray-500 dark:text-gray-300 mb-4'>{duration}</p>
    <p className='text-sm'>{description}</p>
  </motion.div>
);

export default Experience;
