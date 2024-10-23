import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Github, Server, Code, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projectsData';

// Add this interface definition
interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  icon: string;
  iconColor?: string;
}

interface ProjectProps {
  theme: 'light' | 'dark';
}

const Project: FC<ProjectProps> = ({ theme }) => {
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
      id='projects'
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
        My Projects
      </motion.h2>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        variants={variants}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} theme={theme} />
        ))}
      </motion.div>
    </motion.section>
  );
};

const ProjectCard: FC<{ project: Project; theme: string }> = ({
  project,
  theme,
}) => {
  const isDark = theme === 'dark';

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return Server;
      case 'Code':
        return Code;
      case 'Shield':
        return Shield;
      default:
        return null;
    }
  };

  const IconComponent = getIconComponent(project.icon);

  return (
    <motion.div
      className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className='flex items-center mb-4'>
        {IconComponent && (
          <IconComponent
            className={`w-6 h-6 text-blue-500 mr-3 ${project.iconColor || ''}`}
          />
        )}
        <h3 className='text-xl font-semibold text-blue-600 dark:text-blue-400'>
          {project.title}
        </h3>
      </div>
      <p
        className={`mb-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {project.description}
      </p>
      <div className='mb-4 flex flex-wrap gap-2'>
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='flex justify-center items-center mt-6'>
        <a
          href={project.github}
          target='_blank'
          rel='noopener noreferrer'
          className={`inline-flex items-center px-4 py-2 rounded-full transition-colors duration-300 ${
            isDark
              ? 'bg-gray-600 text-white hover:bg-gray-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Github className='mr-2' size={18} />
          Source Code
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
