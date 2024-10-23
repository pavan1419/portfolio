import type { FC } from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section
      id='experience'
      className={`py-12 md:py-16 min-h-screen ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      }`}
    >
      <div className='container mx-auto px-4'>
        <h2
          className={`text-3xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
        >
          Professional Experience
        </h2>

        <div className='space-y-8'>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg ${
                theme === 'dark'
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-800'
              } shadow-lg`}
            >
              <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                <div>
                  <h3 className='text-xl font-semibold'>{exp.title}</h3>
                  <a
                    href={exp.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`text-blue-500 hover:text-blue-600 ${
                      theme === 'dark'
                        ? 'text-blue-400 hover:text-blue-300'
                        : ''
                    }`}
                  >
                    {exp.company}
                  </a>
                </div>
                <span
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                  } mt-2 md:mt-0`}
                >
                  {exp.duration}
                </span>
              </div>

              <div className='space-y-2 mb-4'>
                {exp.description.map((desc, i) => (
                  <p
                    key={i}
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <div className='space-y-4 mb-4'>
                {exp.projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <h4 className='text-lg font-semibold mb-2'>
                      {project.name}
                    </h4>
                    <ul className='list-disc list-inside space-y-1'>
                      {project.details.map((detail, j) => (
                        <li
                          key={j}
                          className={`text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className='mt-4 flex flex-wrap gap-2'>
                {exp.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className={`px-3 py-1 text-sm rounded-full ${
                      theme === 'dark'
                        ? 'bg-gray-600 text-gray-200'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
