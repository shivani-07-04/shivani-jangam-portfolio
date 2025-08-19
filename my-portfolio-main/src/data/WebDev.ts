// src/data/webdevProjects.ts
// 🌐 Web Development & Full Stack Projects - Shivani Jangam
// GitHub: https://github.com/shivani-07-04

import { Project } from '../types';

export const webdevProjects: Project[] = [
  {
    id: 'w1',
    title: 'Personal AI Portfolio Website',
    description:
      'A modern, responsive portfolio showcasing my skills, projects, and experience. Built with React, Tailwind CSS, Framer Motion, and integrated with a custom dark/light theme toggle.',
    imageUrl:
      'https://res.cloudinary.com/du6mfjbbd/image/upload/v1699450196/portfolio-demo.png',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    liveUrl: 'https://shivani-portfolio.vercel.app/',
    doneBy: 'Solo',
    date: '2025-01-10',
  },
  {
    id: 'w2',
    title: 'Smart Health Care System',
    description:
      'A web-based health care platform with patient management, doctor dashboards, and real-time appointment scheduling. Integrated Flask API with a modern React frontend.',
    imageUrl:
      'https://res.cloudinary.com/du6mfjbbd/image/upload/v1699450196/healthcare-demo.png',
    techStack: ['React', 'Flask', 'MongoDB', 'Node.js', 'Tailwind'],
    liveUrl: 'https://github.com/shivani-07-04/Smart-Health-Care',
    doneBy: 'Team',
    date: '2025-02-05',
  },
  {
    id: 'w3',
    title: 'Restaurant Rating Prediction',
    description:
      'A machine learning powered web app that predicts restaurant ratings using Flask, MLflow, and React. Users can enter restaurant details and instantly see predicted ratings.',
    imageUrl:
      'https://res.cloudinary.com/du6mfjbbd/image/upload/v1699450196/restaurant-demo.png',
    techStack: ['Python', 'Flask', 'MLflow', 'React', 'Tailwind'],
    liveUrl: 'https://github.com/shivani-07-04/Restaurant-Rating-Prediction',
    doneBy: 'Solo',
    date: '2025-06-25',
  },
  {
    id: 'w4',
    title: 'Ice Cream Parlour Website',
    description:
      'A fun, colorful and responsive website for an ice cream parlour. Includes menu showcase, flavors gallery, contact form, and smooth animations for a delightful user experience.',
    imageUrl:
      'https://res.cloudinary.com/du6mfjbbd/image/upload/v1699450196/icecream-demo.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'https://github.com/shivani-07-04/Ice-Cream-Parlour',
    doneBy: 'Solo',
    date: '2025-03-15',
  },
  {
    id: 'w5',
    title: 'Coffee Shop Website',
    description:
      'A full-stack website for a coffee shop with user authentication, product listings, cart functionality, and order management system. Built with MERN stack and styled with Tailwind.',
    imageUrl:
      'https://res.cloudinary.com/du6mfjbbd/image/upload/v1699450196/coffee-demo.png',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind'],
    liveUrl: 'https://github.com/shivani-07-04/Coffee-Shop-Website',
    doneBy: 'Solo',
    date: '2025-04-02',
  },
  {
    id: 'w6',
    title: 'AI Resume Screening & Prediction',
    description:
      'An AI-powered app that analyzes resumes, classifies them into job roles (Python Developer, Data Scientist, Front-End Developer, etc.), and predicts suitability. Built using TF-IDF, KNN, and Streamlit for an interactive UI.',
    imageUrl:
      'https://res.cloudinary.com/du6mfjbbd/image/upload/v1699450196/resume-demo.png',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NLP'],
    liveUrl: 'https://github.com/shivani-07-04/AI-Resume-Screening',
    doneBy: 'Solo',
    date: '2025-07-10',
  },
];
