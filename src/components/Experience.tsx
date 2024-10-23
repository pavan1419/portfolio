import type { FC } from 'react';
import { motion } from 'framer-motion';

// Define the ExperienceProps interface
interface ExperienceProps {
  theme: 'light' | 'dark';
}

// Move experience data inside the component file
const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'Freelancer',
    duration: '2023 - Present',
    description: [
      'Developed and maintained multiple client websites using React and Node.js',
      'Implemented responsive designs and improved application performance',
      'Worked directly with clients to gather requirements and deliver solutions',
    ],
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Express',
      'Tailwind CSS',
    ],
    link: 'https://yourportfolio.com',
  },
  {
    title: 'Web Developer Intern',
    company: 'Tech Solutions Inc.',
    duration: '2022 - 2023',
    description: [
      'Assisted in developing web applications using modern technologies',
      'Collaborated with senior developers on various projects',
      'Learned and implemented best practices in web development',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Git'],
    link: 'https://techsolutions.com',
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

              <div className='space-y-2'>
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

              <div className='mt-4 flex flex-wrap gap-2'>
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-sm rounded-full ${
                      theme === 'dark'
                        ? 'bg-gray-600 text-gray-200'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
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
