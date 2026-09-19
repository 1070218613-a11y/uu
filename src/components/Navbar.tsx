import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Menu, X, Sparkles } from 'lucide-react';

export type TabKey = 'home' | 'about' | 'education' | 'experience' | 'projects' | 'skills' | 'contact';

interface NavbarProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const NAV_ITEMS: { key: TabKey; label: string; highlightColor: string }[] = [
  { key: 'home', label: '首页', highlightColor: 'bg-[#FF5C8D]' },
  { key: 'about', label: '关于我', highlightColor: 'bg-[#FEF08A]' },
  { key: 'education', label: '教育背景', highlightColor: 'bg-[#4ADE80]' },
  { key: 'experience', label: '工作经历', highlightColor: 'bg-[#60A5FA]' },
  { key: 'projects', label: '作品项目', highlightColor: 'bg-[#A855F7]' },
  { key: 'skills', label: '技能与爱好', highlightColor: 'bg-[#F97316]' },
  { key: 'contact', label: '联系我', highlightColor: 'bg-[#EC4899]' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full max-w-5xl mx-auto px-4 mb-8">
      <div className="bg-white rounded-full border-[1.5px] border-black p-1.5 sm:p-2 shadow-[3px_3px_0px_0px_#000] flex items-center justify-between transition-shadow">
        
        {/* Brand / Logo with motion */}
        <motion.button 
          onClick={() => setActiveTab('home')}
          whileHover={{ scale: 1.04, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 pl-3 pr-2 py-1 font-black text-lg text-black cursor-pointer"
        >
          <motion.span 
            whileHover={{ rotate: 15 }}
            className="w-7 h-7 bg-[#FF5C8D] rounded-full border border-black flex items-center justify-center text-xs font-bold shadow-[1px_1px_0px_0px_#000]"
          >
            U
          </motion.span>
          <span className="tracking-tight hidden xs:inline-block">梁靖悠</span>
        </motion.button>

        {/* Desktop Nav Items with layoutId & motion */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 relative">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <motion.button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3.5 py-1.5 text-sm font-black rounded-xl transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-800 hover:text-black hover:bg-gray-100/80'
                }`}
              >
                {/* Smooth Animated Active Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-black border border-black rounded-xl shadow-[1.5px_1.5px_0px_0px_#FF5C8D] -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                  {isActive && (
                    <span className={`w-2 h-2 ${item.highlightColor} rounded-full border border-black inline-block animate-pulse`} />
                  )}
                </span>
              </motion.button>
            );
          })}
        </nav>

        {/* Actions / Mail Icon */}
        <div className="flex items-center gap-2 pr-1">
          <motion.button
            onClick={() => setActiveTab('contact')}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            title="联系我"
            className={`w-9 h-9 rounded-full border-[1.5px] border-black flex items-center justify-center cursor-pointer transition-colors ${
              activeTab === 'contact' 
                ? 'bg-[#FF5C8D] text-white shadow-[2px_2px_0px_0px_#000]' 
                : 'bg-yellow-300 text-black hover:bg-yellow-400 shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            <Mail className="w-4 h-4" />
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full border-[1.5px] border-black bg-gray-100 flex items-center justify-center shadow-[2px_2px_0px_0px_#000] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mt-2 bg-white rounded-2xl border-[1.5px] border-black p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.key;
              return (
                <motion.button
                  key={item.key}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActiveTab(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 font-bold rounded-xl border transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_#000]'
                      : 'bg-gray-50 border-gray-200 text-black hover:border-black'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-yellow-300" />}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
