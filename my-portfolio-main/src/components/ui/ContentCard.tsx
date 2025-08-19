import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContentItem } from '../../types';
import { Calendar, Eye, ThumbsUp, Github, Globe } from 'lucide-react';

interface ContentCardProps {
  content?: ContentItem; // made optional so we can fallback to your details
  index: number;
}

const ContentCard: React.FC<ContentCardProps> = ({ content, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // fallback: Shivani’s personal card
  const defaultContent: ContentItem = {
    title: "Hi, I’m Shivani Jangam 🚀",
    category: "Portfolio",
    date: new Date().toISOString(),
    thumbnailUrl: "https://avatars.githubusercontent.com/u/154234681?v=4", // your GitHub avatar
    videoUrl: "https://shivani-07-04.github.io", // portfolio link instead of video
    views: 1500,
    likes: 250,
  };

  const finalContent = content || defaultContent;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative overflow-hidden group">
        <img
          src={finalContent.thumbnailUrl}
          alt={finalContent.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            className="bg-accent-600 text-white px-4 py-2 rounded-lg hover:bg-accent-700 transition"
            onClick={() => window.open(finalContent.videoUrl, '_blank', 'noopener,noreferrer')}
          >
            {content ? "Watch Video" : "Visit My Portfolio"}
          </button>
        </div>
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
          {finalContent.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {finalContent.title}
        </h3>
        
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{new Date(finalContent.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex space-x-3">
            <div className="flex items-center">
              <Eye size={14} className="mr-1" />
              <span>{finalContent.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp size={14} className="mr-1" />
              <span>{finalContent.likes.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Personal footer links */}
        {!content && (
          <div className="flex space-x-4 mt-3">
            <button
              onClick={() => window.open("https://github.com/shivani-07-04", "_blank")}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <Github size={16} className="mr-1" /> GitHub
            </button>
            <button
              onClick={() => window.open("https://shivani-07-04.github.io", "_blank")}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <Globe size={16} className="mr-1" /> Portfolio
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ContentCard;
