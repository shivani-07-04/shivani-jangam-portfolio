import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider } from './context/PortfolioContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 font-inter">
            {/* 🌟 Portfolio Header */}
            <Header />

            {/* 🌟 Main Portfolio Pages */}
            <main className="pt-16">
              <Routes>
                {/* Home: Hero + Sections (Python, AI/ML, Web Dev, Content) */}
                <Route path="/" element={<HomePage />} />

                {/* About Me Page */}
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>

            {/* 🌟 Footer with Contact Info */}
            <Footer />
          </div>
        </Router>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
