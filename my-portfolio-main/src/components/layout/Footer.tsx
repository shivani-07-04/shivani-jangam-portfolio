import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Shivani Jangam
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Aspiring Python Developer | AI/ML Enthusiast | Skilled in Web Development (HTML, CSS, JavaScript, React.js, MySQL)
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/shivani-07-04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shivani-jangam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:shivani@example.com"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/your-resume-link/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Interested in collaborating? Have a project idea? Let’s connect!
            </p>
            <a
              href="mailto:shivani@example.com"
              className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} Shivani Jangam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
