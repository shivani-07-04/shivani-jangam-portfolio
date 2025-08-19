import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WebDevProject } from '../../types';
import CodeSnippet from './CodeSnippet';

interface WebDevCardProps {
  project: WebDevProject;
  index: number;
}

const WebDevCard: React.FC<WebDevCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          {project.techStack && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-2 py-1 bg-blue-600/80 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-5">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        {/* Links */}
        <div className="flex gap-4 mb-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
            >
              GitHub Repo
            </a>
          )}
        </div>

        {/* Code Snippet */}
        {project.codeSnippet && <CodeSnippet snippet={project.codeSnippet} />}
      </div>
    </motion.div>
  );
};

export default WebDevCard;
