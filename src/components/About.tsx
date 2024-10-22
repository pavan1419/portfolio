import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Wrench } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id='about'
      ref={ref}
      className='flex-grow p-8 bg-white dark:bg-gray-800 transition-colors duration-300'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className='text-3xl font-bold flex items-center mb-6 text-blue-600 dark:text-blue-400'
        variants={variants}
      >
        <User className='mr-3' />
        About Me
      </motion.h2>
      <motion.p className='text-lg mb-8 leading-relaxed' variants={variants}>
        I'm Pavan Awagan, a passionate full-stack developer with a strong
        foundation in problem-solving and a keen interest in creating innovative
        web solutions. Currently pursuing my MCA at Lovely Professional
        University, I bring hands-on experience from my internship at Tata
        Advanced Systems, where I worked on various projects using Mendix,
        RESTful APIs, and data analysis tools.
      </motion.p>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={variants}
      >
        <SkillCard
          icon={<Code size={24} />}
          title='Tech Arsenal'
          skills={[
            'JavaScript',
            'Node.js',
            'React.js',
            'Express.js',
            'RESTful APIs',
            'WebSockets',
            'SQL',
            'MongoDB',
            'Python',
            'Shell Scripting',
          ]}
        />
        <SkillCard
          icon={<Wrench size={24} />}
          title='Toolbox'
          skills={[
            'VS Code',
            'Git',
            'GitHub',
            'Postman',
            'Mendix',
            'Alteryx',
            'Tableau',
            'RPA',
            'Linux Tools',
            'JWT',
            'Chakra UI',
            'Bootstrap',
          ]}
        />
      </motion.div>
    </motion.section>
  );
};

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => (
  <motion.div
    className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className='flex items-center mb-4'>
      <div className='text-blue-500 mr-3'>{icon}</div>
      <h3 className='text-xl font-semibold'>{title}</h3>
    </div>
    <ul className='grid grid-cols-2 gap-2'>
      {skills.map((skill, index) => (
        <li key={index} className='flex items-center'>
          <span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
          <span className='text-sm'>{skill}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default About;
