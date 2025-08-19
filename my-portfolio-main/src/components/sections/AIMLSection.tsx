// src/components/AIMLSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const aiMLProjects: Project[] = [
  {
    title: "Heart Disease Prediction",
    description: "A machine learning model that predicts heart disease using patient data.",
    techStack: ["Python", "Scikit-Learn", "Flask"],
    githubUrl: "https://github.com/shivani-07-04/heart-disease-prediction",
  },
  {
    title: "Restaurant Rating Prediction",
    description: "Predicts restaurant ratings based on reviews and features using ML models.",
    techStack: ["Python", "Pandas", "MLflow", "Flask"],
    githubUrl: "https://github.com/shivani-07-04/restaurant-rating-prediction",
  },
  {
    title: "AI Resume Screening Prediction",
    description: "A Streamlit app that predicts candidate suitability based on resumes using AI/ML models.",
    techStack: ["Python", "Scikit-Learn", "Streamlit", "Pandas"],
    liveUrl: "https://shivani-07-04-resume-predict.streamlit.app/",
    githubUrl: "https://github.com/shivani-07-04/ai-resume-screening",
  },
];

const AIMLSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="aiml">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI & Machine Learning Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {aiMLProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIMLSection;
