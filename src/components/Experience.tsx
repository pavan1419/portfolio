import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

// Define the ExperienceProps interface
interface ExperienceProps {
  theme: 'light' | 'dark';
}

// Move experience data inside the component file
const experienceData = [
  {
    title: 'Intern (Process of Digitalization/ IT Business Application)',
    company: 'Tata Advanced Systems',
    duration: 'Dec 2023 – Jun 2024',
    description: [
      'Developed multiple Mendix applications for various business needs',
      'Implemented REST APIs and integrated with external systems',
      'Designed user interfaces and improved user experience',
      'Worked with data analysis and visualization tools',
    ],
    projects: [
      {
        name: '5S Auditing Application',
        details: [
          'Implemented user roles (Admin, Auditor, Auditee)',
          'Created module-specific audits',
          'Generated visual reports with audit scores and photo evidence',
          'Enabled data export to Excel for further analysis',
        ],
      },
      {
        name: 'Admin Security Register',
        details: [
          'Developed modules for Drinking Water, Vehicle, and Lost & Found registers',
          'Integrated plant-based data management feature',
          'Resolved bugs and optimized application performance',
          'Designed the entire user interface for the project',
        ],
      },
      {
        name: 'FOD (Foreign Object Detection)',
        details: [
          'Implemented plant-based data view and storage',
          'Created robust date range filters and specific data search functionality',
          'Identified and resolved various bugs within the application',
        ],
      },
      {
        name: 'TADL MENDIX DASHBOARD',
        details: [
          'Designed a comprehensive Mendix dashboard with full UI design',
          'Ensured seamless integration and user-friendly design',
        ],
      },
    ],
    technologies: [
      'Mendix',
      'Postman',
      'Python',
      'Bash',
      'Alteryx',
      'SQL',
      'Tableau',
      'RPA',
    ],
    link: 'https://www.tataadvancedsystems.com/',
  },
];

const Experience: FC<ExperienceProps> = ({ theme }) => {
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
        className='text-5xl font-bold mb-12 text-blue-600 dark:text-blue-400'
        variants={variants}
      >
        Professional Experience
      </motion.h2>
      <motion.div className='space-y-8' variants={variants}>
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} theme={theme} />
        ))}
      </motion.div>
    </motion.section>
  );
};

const ExperienceCard: FC<{ experience: any; theme: string }> = ({
  experience,
  theme,
}) => {
  const isDark = theme === 'dark';

  return (
    <motion.div
      className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className='flex items-center mb-4'>
        <Briefcase className={`w-6 h-6 text-blue-500 mr-3`} />
        <h3 className='text-xl font-semibold text-blue-600 dark:text-blue-400'>
          {experience.title}
        </h3>
      </div>
      <p
        className={`mb-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
      >
        <a
          href={experience.link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          {experience.company}
        </a>{' '}
        | {experience.duration}
      </p>
      <ul
        className={`mb-4 text-sm ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        } list-disc list-inside`}
      >
        {experience.description.map((desc: string, i: number) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
      <div className='mb-4'>
        {experience.projects.map((project: any, i: number) => (
          <div key={i} className='mb-3'>
            <h4 className='font-semibold text-blue-600 dark:text-blue-400'>
              {project.name}
            </h4>
            <ul
              className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              } list-disc list-inside pl-4`}
            >
              {project.details.map((detail: string, j: number) => (
                <li key={j}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap gap-2'>
        {experience.technologies.map((tech: string, i: number) => (
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
    </motion.div>
  );
};

export default Experience;
