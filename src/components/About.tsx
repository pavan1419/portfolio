import { motion } from 'framer-motion';
import { Code, Wrench, Palette, Brain, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

const About = ({ theme }: { theme: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    {
      icon: <Palette size={24} />,
      title: 'Web Design',
      description:
        'Transforming ideas into visually stunning and intuitive interfaces is my passion. I blend creativity with user-centric design principles.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Development',
      description:
        'As a Full Stack Developer specializing in MERN, I craft robust and scalable web applications from concept to deployment.',
    },
    {
      icon: <Brain size={24} />,
      title: 'Problem Solving',
      description:
        "I thrive on tackling complex challenges, whether they're coding puzzles or real-world issues, always seeking innovative solutions.",
    },
  ];

  return (
    <motion.section
      id='about'
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
        className='text-5xl font-bold mb-12 text-blue-600 dark:text-blue-400'
        variants={variants}
      >
        SKILLS
      </motion.h2>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-8'
        variants={variants}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </motion.div>
      <motion.h3
        className='text-3xl font-bold mt-16 mb-8 text-gray-700 dark:text-gray-300'
        variants={variants}
      >
        TECH I'M FAMILIAR WITH
      </motion.h3>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={variants}
      >
        <TechCard
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
        <TechCard
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
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <motion.div
    className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className='flex items-center mb-4'>
      <div className='text-blue-500 mr-3'>{icon}</div>
      <h3 className='text-xl font-semibold text-blue-600 dark:text-blue-400'>
        {title}
      </h3>
    </div>
    <p className='text-gray-600 dark:text-gray-300'>{description}</p>
  </motion.div>
);

interface TechCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
}

const TechCard = ({ icon, title, skills }: TechCardProps) => (
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
