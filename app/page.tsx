"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import AllProjects from '../pages/AllProjects';
import ProjectDetail from '../pages/ProjectDetail';
import Achievements from '../pages/Achievements';
import AchievementDetail from '../pages/AchievementDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';

type Page = 'home' | 'projects' | 'about' | 'contact' | 'project' | 'achievements' | 'achievement';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [selectedAchievementId, setSelectedAchievementId] = useState<string>('');

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page as Page);
    if (id) {
      if (page === 'project') {
        setSelectedProjectId(id);
      } else if (page === 'achievement') {
        setSelectedAchievementId(id);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'projects':
        return <AllProjects onNavigate={handleNavigate} />;
      case 'project':
        return <ProjectDetail projectId={selectedProjectId} onNavigate={handleNavigate} />;
      case 'achievements':
        return <Achievements onNavigate={handleNavigate} />;
      case 'achievement':
        return <AchievementDetail achievementId={selectedAchievementId} onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
