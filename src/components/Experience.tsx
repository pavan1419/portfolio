import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
}

interface ExperienceProps {
  experiences?: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences = [] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id='experience'
      ref={ref}
      className='p-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-300'
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className='text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400'
        initial={{ y: -50 }}
        animate={inView ? { y: 0 } : { y: -50 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <Briefcase className='inline-block mr-2' />
        Work Experience
      </motion.h2>
      <div className='max-w-3xl mx-auto'>
        {experiences.map((experience: ExperienceItem, index: number) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

interface ExperienceItemProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  return (
    <motion.div
      className='mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <h3 className='text-xl font-bold mb-2'>{experience.title}</h3>
      <p className='text-gray-600 dark:text-gray-300 mb-2'>
        {experience.company} | {experience.date}
      </p>
      <ul className='list-disc list-inside text-gray-700 dark:text-gray-200'>
        {experience.description.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Experience;
