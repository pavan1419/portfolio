import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Brain, Globe, User, Code, Wrench, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = ({ theme }: { theme: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const expertiseAreas = [
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

  const techStack = [
    {
      category: 'Strongest Areas',
      icon: <Star size={24} />,
      skills: [
        { name: 'Problem Solving', icon: 'fa-solid fa-puzzle-piece' },
        { name: 'RESTful APIs', icon: 'fa-solid fa-cloud' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'SQL', icon: 'fa-solid fa-database' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      ],
    },
    {
      category: 'Languages and Tech',
      icon: <Code size={24} />,
      skills: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'RESTful APIs', icon: 'fa-solid fa-cloud' },
        { name: 'WebSockets', icon: 'fa-solid fa-plug' },
        { name: 'Express', icon: 'devicon-express-original' },
        { name: 'JWT', icon: 'fa-solid fa-key' },
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'Chakra UI', icon: 'fa-solid fa-palette' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'SQL', icon: 'fa-solid fa-database' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'Shell Scripting', icon: 'fa-solid fa-terminal' },
      ],
    },
    {
      category: 'Tools',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
        { name: 'Postman', icon: 'devicon-postman-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Mendix', icon: 'fa-solid fa-cube' },
        { name: 'Alteryx', icon: 'fa-solid fa-cogs' },
        { name: 'Tableau', icon: 'fa-solid fa-chart-bar' },
        { name: 'RPA', icon: 'fa-solid fa-robot' },
        { name: 'Linux Tools', icon: 'fa-brands fa-linux' },
      ],
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
        ABOUT ME
      </motion.h2>

      <motion.div className='mb-16' variants={variants}>
        <AboutCard
          icon={<User size={24} />}
          title='Who I Am'
          description="I'm a passionate Full Stack Developer with a strong background in problem-solving and web development. Currently pursuing my MCA from Lovely Professional University, I specialize in creating robust web applications using the MERN stack and automating processes. My expertise spans from RESTful APIs and database management to frontend development and data analysis, with hands-on experience in tools like Mendix, Alteryx, and Tableau."
        />
      </motion.div>

      <motion.h3
        className='text-3xl font-bold mb-8 text-gray-700 dark:text-gray-300'
        variants={variants}
      >
        AREAS OF EXPERTISE
      </motion.h3>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
        variants={variants}
      >
        {expertiseAreas.map((area, index) => (
          <ExpertiseCard key={index} {...area} />
        ))}
      </motion.div>

      <motion.h3
        className='text-3xl font-bold mb-8 text-gray-700 dark:text-gray-300'
        variants={variants}
      >
        TECH I'M FAMILIAR WITH
      </motion.h3>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={variants}
      >
        {techStack.map((category, index) => (
          <TechCard key={index} {...category} />
        ))}
      </motion.div>
    </motion.section>
  );
};

const AboutCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className='flex items-center mb-4'>
      <div className='text-blue-500 mr-3'>{icon}</div>
      <h3 className='text-2xl font-semibold text-blue-600 dark:text-blue-400'>
        {title}
      </h3>
    </div>
    <p className='text-gray-600 dark:text-gray-300 text-lg'>{description}</p>
  </motion.div>
);

const ExpertiseCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    className={`bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className='flex items-center mb-4'>
      <div className='text-blue-500 dark:text-blue-400 mr-3'>{icon}</div>
      <h3 className='text-2xl font-semibold text-blue-600 dark:text-blue-400'>
        {title}
      </h3>
    </div>
    <p className='text-gray-600 dark:text-gray-300 text-lg'>{description}</p>
  </motion.div>
);

const TechCard = ({
  category,
  icon,
  skills,
}: {
  category: string;
  icon: React.ReactNode;
  skills: { name: string; icon: string }[];
}) => (
  <motion.div
    className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className='flex items-center mb-4'>
      <div className='text-blue-500 dark:text-blue-400 mr-3'>{icon}</div>
      <h3 className='text-xl font-semibold text-blue-600 dark:text-blue-400'>
        {category}
      </h3>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className='flex items-center space-x-2'
          whileHover={{ scale: 1.05 }}
        >
          <i className={`${skill.icon} text-lg`}></i>
          <span className='text-sm text-gray-600 dark:text-gray-300'>
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default About;
