import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, TabKey } from './components/Navbar';
import { HomeTab } from './components/HomeTab';
import { AboutTab } from './components/AboutTab';
import { EducationTab } from './components/EducationTab';
import { ExperienceTab } from './components/ExperienceTab';
import { ProjectsTab } from './components/ProjectsTab';
import { SkillsTab } from './components/SkillsTab';
import { ContactTab } from './components/ContactTab';
import { MarqueeFooter } from './components/MarqueeFooter';
import { DetailModal } from './components/DetailModal';
import { Article, VideoItem, ProjectInfo, ExperienceInfo } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [modalData, setModalData] = useState<{
    type: 'article' | 'video' | 'project' | 'experience';
    item: Article | VideoItem | ProjectInfo | ExperienceInfo;
  } | null>(null);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenItem = (
    type: 'article' | 'video' | 'project' | 'experience',
    item: Article | VideoItem | ProjectInfo | ExperienceInfo
  ) => {
    setModalData({ type, item });
  };

  return (
    <div className="min-h-screen bg-[#F0F0EC] text-black font-sans selection:bg-pink-300 selection:text-black flex flex-col justify-between">
      
      {/* Top Banner Accent Line */}
      <div className="h-2 w-full bg-linear-to-r from-[#FF5C8D] via-[#3B82F6] to-[#4ADE80]" />

      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto px-4 py-6 flex-1">
        
        {/* Navigation Bar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content Rendering with AnimatePresence */}
        <main className="mt-6 mb-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.995 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTab === 'home' && (
                <HomeTab
                  onNavigate={(tab) => setActiveTab(tab)}
                  onOpenItem={(type, item) => handleOpenItem(type, item)}
                />
              )}

              {activeTab === 'about' && <AboutTab />}

              {activeTab === 'education' && <EducationTab />}

              {activeTab === 'experience' && (
                <ExperienceTab
                  onOpenExperience={(exp) => handleOpenItem('experience', exp)}
                />
              )}

              {activeTab === 'projects' && (
                <ProjectsTab
                  onOpenProject={(proj) => handleOpenItem('project', proj)}
                />
              )}

              {activeTab === 'skills' && <SkillsTab />}

              {activeTab === 'contact' && <ContactTab />}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>

      {/* Ticker Tape & Footer */}
      <MarqueeFooter onNavigate={(tab) => setActiveTab(tab)} />

      {/* Detail Popup Modal */}
      <DetailModal
        isOpen={!!modalData}
        onClose={() => setModalData(null)}
        data={modalData}
      />

    </div>
  );
}
