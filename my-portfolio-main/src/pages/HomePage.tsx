import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Hero from '../components/sections/Hero';
import AIMLSection from '../components/sections/AIMLSection';
import WebDevSection from '../components/sections/WebDevSection';
import PythonSection from '../components/sections/PythonSection';
import ContentSection from '../components/sections/ContentSection';

const HomePage: React.FC = () => {
  const { activeRole } = usePortfolio();

  return (
    <>
      {/* Hero with your intro */}
      <Hero
        name="Shivani Jangam"
        tagline="Python Developer | AI & ML Enthusiast | Full Stack Web Developer | Content Creator"
      />

      {/* Show sections based on selected role */}
      {activeRole === 'python' && <PythonSection />}
      {activeRole === 'aiml' && <AIMLSection />}
      {activeRole === 'webdev' && <WebDevSection />}
      {activeRole === 'content' && <ContentSection />}
    </>
  );
};

export default HomePage;
