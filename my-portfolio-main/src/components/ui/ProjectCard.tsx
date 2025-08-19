import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Lock, User } from 'lucide-react';
import { Project } from '../../types';
import CodeSnippet from './CodeSnippet';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
      className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
    >
      {/* ✅ Your Details Always on Top */}
      <div className="absolute top-3 right-3 z-10 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-md shadow flex items-center gap-1">
        <User size={14} />
        <span>Shivani Jangam</span>
      </div>

      <div className="relative overflow-hidden group">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {project.videoUrl && (
            <button
              onClick={() => window.open(project.videoUrl, '_blank')}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Watch Demo
            </button>
          )}
        </div>
      </div>

      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.codeSnippet && (
          <div className="mb-4">
            <CodeSnippet snippet={project.codeSnippet} />
          </div>
        )}
      </div>

      <div className="px-5 pb-5 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
        <div className="flex gap-3">
          {/* ✅ GitHub */}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
              aria-label="View source code on GitHub"
            >
              <Github size={20} />
            </a>
          ) : (
            <span
              className="flex items-center text-gray-400 dark:text-gray-600 cursor-not-allowed"
              title="Private Repository"
            >
              <Github size={20} className="mr-1" />
              <Lock size={16} />
            </span>
          )}

          {/* ✅ Live Link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
              aria-label="Visit live site"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* ✅ Footer With Your Role */}
      <div className="bg-gray-100 dark:bg-gray-700 px-5 py-2 text-xs text-gray-600 dark:text-gray-300 text-center">
        🚀 Project by <strong>Shivani Jangam</strong> | Aspiring Python Developer | 
        <a 
          href="https://github.com/shivani-07-04" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-1 text-primary-600 dark:text-primary-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
