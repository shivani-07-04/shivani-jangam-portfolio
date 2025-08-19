import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { usePortfolio } from '../../context/PortfolioContext';
import AnimatedCounter from '../ui/AnimatedCounter';
import gsap from 'gsap';
import { Code2, Award, MonitorSmartphone } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';

const WebDevSection: React.FC = () => {
  const { webProjects, stats } = usePortfolio();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    if (inView && sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.section-title', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });

        gsap.from('.section-description', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        });

        gsap.from('.web-stats', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.4,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <div
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
      id="webdev-section"
    >
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Web Developer
          </h2>
          <p className="section-description text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Building modern, responsive, and interactive web applications with
            React, Node.js, and cutting-edge technologies to deliver seamless user experiences.
          </p>

          {/* Stats */}
          <div className="web-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 size={24} className="text-secondary-600 dark:text-secondary-400" />
              </div>
              <AnimatedCounter end={15} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Web Projects</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <AnimatedCounter end={stats.certificates} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Certifications</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MonitorSmartphone size={24} className="text-accent-600 dark:text-accent-400" />
              </div>
              <AnimatedCounter end={20} suffix="+" />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Responsive Designs</p>
            </motion.div>
          </div>

          {/* Projects */}
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Web Development Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project as any} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevSection;
