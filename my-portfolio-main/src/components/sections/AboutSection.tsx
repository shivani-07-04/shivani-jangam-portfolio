import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { School, Briefcase, Award, BookOpen, Star, Heart } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  achievements: string[];
  learnings: string[];
  image?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon, achievements, learnings, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 mb-12"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{year}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        {image && (
          <div className="my-4">
            <img src={image} alt={title + ' memory'} className="rounded-lg shadow w-full max-w-md" />
          </div>
        )}

        {achievements.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Star size={16} className="text-yellow-500" /> Achievements
            </h4>
            <ul className="mt-2 space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {learnings.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Heart size={16} className="text-red-500" /> Key Learnings
            </h4>
            <ul className="mt-2 space-y-2">
              {learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      year: '2008-2015',
      title: 'Primary & Secondary School',
      description: 'My school journey where my curiosity for computers and problem-solving began. I loved exploring MS Paint, MS Word, and small coding tasks.',
      icon: <School size={24} className="text-primary-600 dark:text-primary-400" />,
      achievements: [
        'Created drawings and documents in MS Paint & Word',
        'Started exploring logical problem-solving early'
      ],
      learnings: [
        'Curiosity drives learning',
        'Early foundation in computers helped me dream big'
      ],
    },
    {
      year: '2016-2020',
      title: 'Higher Secondary Education',
      description: 'Strengthened my basics in programming (C++), Excel, and Operating Systems. Started thinking about a career in technology.',
      icon: <BookOpen size={24} className="text-primary-600 dark:text-primary-400" />,
      achievements: [
        'Created Excel sheets to automate calculations',
        'Built small programs in C++'
      ],
      learnings: [
        'Understanding fundamentals like OS & databases',
        'Balancing academics with coding passion'
      ],
    },
    {
      year: '2021-2024',
      title: 'Bachelor of Computer Applications (IGNOU)',
      description: 'Pursued BCA from Indira Gandhi National Open University, where I explored Python, AI/ML, and Web Development.',
      icon: <Award size={24} className="text-primary-600 dark:text-primary-400" />,
      achievements: [
        'Built AI projects: Heart Disease Prediction, Resume Screening App',
        'Created Restaurant Rating Prediction using Flask & MLflow',
        'Designed a website for Elbert Technology',
        'Graduated successfully with a strong technical base'
      ],
      learnings: [
        'Practical skills in Python, ML, and Web Dev',
        'Importance of scalable and maintainable code',
        'Collaboration through projects and internships'
      ],
    },
    {
      year: '2024-Present',
      title: 'Professional Journey',
      description: 'Started my journey as a developer & intern, working on AI, ML, and Web applications to gain real-world experience.',
      icon: <Briefcase size={24} className="text-primary-600 dark:text-primary-400" />,
      achievements: [
        'Worked on multiple AI/ML projects',
        'Developed portfolio & full-stack apps',
        'Contributing to startup-level projects'
      ],
      learnings: [
        'Debugging and solving real-world challenges',
        'Working in a structured development environment',
        'Continuous learning mindset'
      ],
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
            I’m <span className="font-semibold">Shivani Jangam</span>, an aspiring Python Developer passionate about AI/ML and Web Development. 
            From school days exploring MS Paint to building AI projects and working on real-world applications, 
            here’s my story of growth and learning.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
