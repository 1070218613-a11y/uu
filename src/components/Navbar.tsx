import React, { useState } from 'react';
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
      <div className="bg-white rounded-full border-2 sm:border-3 border-black p-1.5 sm:p-2 shadow-[4px_4px_0px_0px_#000] flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 pl-3 pr-2 py-1 font-black text-lg text-black hover:opacity-80 transition-opacity"
        >
          <span className="w-7 h-7 bg-[#FF5C8D] rounded-full border-2 border-black flex items-center justify-center text-xs font-bold shadow-[1px_1px_0px_0px_#000]">
            U
          </span>
          <span className="tracking-tight hidden xs:inline-block">小柚</span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`relative px-3 py-1.5 text-sm font-bold rounded-lg transition-all ${
                  isActive
                    ? 'bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_#FF5C8D]'
                    : 'text-gray-800 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                {isActive && (
                  <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 ${item.highlightColor} rounded-full border border-black`} />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions / Mail Icon */}
        <div className="flex items-center gap-2 pr-1">
          <button
            onClick={() => setActiveTab('contact')}
            title="联系我"
            className={`w-9 h-9 rounded-full border-2 border-black flex items-center justify-center transition-transform active:scale-95 ${
              activeTab === 'contact' 
                ? 'bg-[#FF5C8D] text-white shadow-[2px_2px_0px_0px_#000]' 
                : 'bg-yellow-300 text-black hover:bg-yellow-400 shadow-[2px_2px_0px_0px_#000]'
            }`}
          >
            <Mail className="w-4 h-4" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full border-2 border-black bg-gray-100 flex items-center justify-center shadow-[2px_2px_0px_0px_#000]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl border-3 border-black p-4 shadow-[6px_6px_0px_0px_#000] flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 font-bold rounded-xl border-2 transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_#000]'
                    : 'bg-gray-50 border-gray-200 text-black hover:border-black'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <Sparkles className="w-4 h-4 text-yellow-300" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
