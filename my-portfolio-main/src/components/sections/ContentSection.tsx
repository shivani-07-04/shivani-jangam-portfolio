// src/components/sections/ContentSection.tsx
import React from "react";

const ContentSection: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About My Work & Content
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          I am passionate about building impactful solutions using 
          <span className="font-semibold text-accent-600"> Python, AI, and Machine Learning</span>.  
          Beyond coding, I also love sharing knowledge through projects and open-source contributions.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-accent-600">15+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Projects Completed</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-accent-600">3+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">AI/ML Models Built</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-accent-600">1000+</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Hours of Coding</p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🚀 Resume Screening AI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built an AI-powered tool that classifies resumes into roles like Python Developer, 
              Data Scientist, and more using ML + Streamlit.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🍴 Restaurant Rating Prediction
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Developed an ML model with Flask & MLflow to predict restaurant ratings 
              based on customer reviews and features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
