import React from 'react';
import { ArrowRight, UserCheck, Eye, Heart, Sparkles, Video, FileText } from 'lucide-react';
import { PERSONAL_INFO, ARTICLES, VIDEOS, Article, VideoItem } from '../data/portfolioData';
import { TabKey } from './Navbar';

interface HomeTabProps {
  onNavigate: (tab: TabKey) => void;
  onOpenItem: (type: 'article' | 'video', item: Article | VideoItem) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigate, onOpenItem }) => {
  return (
    <div className="space-y-12 sm:space-y-16 animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
        
        {/* Subtle decorative sticker tag in corner */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 bg-yellow-300 border-2 border-black rounded-full px-3 py-1 font-black text-xs rotate-3 shadow-[2px_2px_0px_0px_#000] hidden sm:block">
          ⚡ 2026 ONLINE
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl font-black text-black tracking-tight">
                我是
              </p>
              <div className="flex flex-wrap items-center gap-2 text-2xl sm:text-4xl font-black text-black leading-tight">
                <span className="bg-[#FF5C8D] text-black px-4 py-1.5 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block -rotate-1">
                  {PERSONAL_INFO.fullName}
                </span>
                <span>,</span>
              </div>
              <div className="text-2xl sm:text-4xl font-black text-black leading-tight pt-1">
                A Product Manager,
              </div>
              <div className="flex flex-wrap items-center gap-2 text-2xl sm:text-4xl font-black text-black leading-tight pt-1">
                <span>练习时长</span>
                <span className="bg-[#3B82F6] text-white px-4 py-1 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block rotate-1">
                  {PERSONAL_INFO.practiceTime}
                </span>
              </div>
            </div>

            {/* Sub-description */}
            <div className="space-y-2 text-sm sm:text-base font-bold text-gray-800 leading-relaxed bg-yellow-50/80 p-4 border-2 border-black rounded-2xl shadow-[2px_2px_0px_0px_#000]">
              <p className="text-gray-900 font-extrabold">
                AI Product Manager | Agent & RAG Workflows | Industrial Design
              </p>
              <p className="text-gray-700 font-mono text-xs sm:text-sm">
                SZTU (GPA 4.32 · 排名 3/122) · 国家奖学金 · 中共党员
              </p>
              <p className="text-pink-600 font-black tracking-wide text-xs">
                {PERSONAL_INFO.motto}
              </p>
            </div>

            {/* Hero CTA Button */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="neo-btn bg-black text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 text-sm sm:text-base hover:bg-gray-900"
              >
                <UserCheck className="w-5 h-5 text-yellow-300" />
                <span>More about me</span>
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="neo-btn bg-[#FF5C8D] text-black px-6 py-3 rounded-2xl font-bold flex items-center gap-2 text-sm sm:text-base hover:bg-pink-400"
              >
                <Sparkles className="w-5 h-5" />
                <span>看作品项目</span>
              </button>
            </div>
          </div>

          {/* Right Avatar Visual Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-square bg-[#FFE4E6] border-3 sm:border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_#000] p-4 flex flex-col items-center justify-center overflow-hidden group">
              
              {/* Cute Animated Avatar Visual */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-purple-200 border-3 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_#000] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                
                {/* Character SVG Drawing */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Background Hair */}
                  <path d="M 40 100 C 40 30, 160 30, 160 100 C 160 160, 150 170, 140 170 C 130 150, 70 150, 60 170 C 50 170, 40 160, 40 100 Z" fill="#18181B" />
                  
                  {/* Face */}
                  <ellipse cx="100" cy="110" rx="42" ry="46" fill="#FDE68A" stroke="#000" strokeWidth="3" />
                  
                  {/* Hair Bangs */}
                  <path d="M 58 85 Q 80 100 100 85 Q 120 100 142 85 Q 120 60 100 60 Q 80 60 58 85 Z" fill="#18181B" stroke="#000" strokeWidth="2" />
                  
                  {/* Glasses */}
                  <circle cx="82" cy="108" r="14" fill="none" stroke="#000" strokeWidth="3" />
                  <circle cx="118" cy="108" r="14" fill="none" stroke="#000" strokeWidth="3" />
                  <line x1="96" y1="108" x2="104" y2="108" stroke="#000" strokeWidth="3" />
                  
                  {/* Eyes */}
                  <circle cx="82" cy="108" r="4" fill="#000" />
                  <circle cx="118" cy="108" r="4" fill="#000" />
                  
                  {/* Blush */}
                  <ellipse cx="72" cy="120" rx="6" ry="3" fill="#FF5C8D" />
                  <ellipse cx="128" cy="120" rx="6" ry="3" fill="#FF5C8D" />
                  
                  {/* Smile */}
                  <path d="M 92 126 Q 100 134 108 126" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Pink & Blue Jacket */}
                  <path d="M 50 170 L 65 140 L 135 140 L 150 170 Z" fill="#FF5C8D" stroke="#000" strokeWidth="3" />
                  <path d="M 85 140 L 85 190 L 115 190 L 115 140 Z" fill="#3B82F6" stroke="#000" strokeWidth="3" />
                  <circle cx="100" cy="152" r="3" fill="#FFF" stroke="#000" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Float sticker badges */}
              <div className="absolute bottom-3 left-3 bg-white border-2 border-black rounded-lg px-2.5 py-1 font-black text-xs shadow-[2px_2px_0px_0px_#000]">
                SZTU ⚡ 26届应届生
              </div>
              <div className="absolute top-3 left-3 bg-[#4ADE80] border-2 border-black rounded-full px-2.5 py-0.5 font-bold text-xs shadow-[2px_2px_0px_0px_#000]">
                AI PM
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Articles Section */}
      <section className="space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-block bg-white border-3 border-black px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#FF5C8D] -rotate-1">
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#FF5C8D]" /> Articles
            </h2>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="group flex items-center gap-2 text-sm font-black text-black hover:text-pink-600 transition-colors"
          >
            <span>Browse all articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((art) => (
            <div
              key={art.id}
              onClick={() => onOpenItem('article', art)}
              className="group cursor-pointer bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_#000] transition-all flex flex-col justify-between"
            >
              {/* Card Top Banner / Placeholder Image */}
              <div className="h-40 bg-linear-to-tr from-sky-100 via-pink-100 to-yellow-100 border-b-3 border-black p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className={`px-2.5 py-1 text-xs font-bold border-2 border-black rounded-md ${art.tagColor} text-black shadow-[1px_1px_0px_0px_#000]`}>
                    {art.category}
                  </span>
                  <span className="text-[11px] font-bold text-gray-700 bg-white/90 px-2 py-0.5 rounded border border-black">
                    📅 {art.date}
                  </span>
                </div>

                <div className="z-10 font-mono text-xs font-bold text-gray-500 bg-white/80 px-2 py-1 rounded w-fit border border-black">
                  {art.readTime}
                </div>
                
                {/* Decorative Pattern overlay */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-200/50 rounded-full border-2 border-black/20 group-hover:scale-125 transition-transform" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-lg text-black group-hover:text-pink-600 transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium line-clamp-2 mt-2 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-dashed border-gray-200 flex items-center justify-between text-xs font-bold text-black">
                  <span>查看完整文章</span>
                  <span className="w-6 h-6 rounded-full bg-yellow-300 border border-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-block bg-white border-3 border-black px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#3B82F6] rotate-1">
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight flex items-center gap-2">
              <Video className="w-6 h-6 text-[#3B82F6]" /> Videos
            </h2>
          </div>

          <button
            onClick={() => onNavigate('skills')}
            className="group flex items-center gap-2 text-sm font-black text-black hover:text-blue-600 transition-colors"
          >
            <span>Watch all videos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEOS.slice(0, 3).map((vid) => (
            <div
              key={vid.id}
              onClick={() => onOpenItem('video', vid)}
              className="group cursor-pointer bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_#000] transition-all"
            >
              {/* Video Cover Box */}
              <div className={`h-48 ${vid.coverBg} border-b-3 border-black p-4 flex flex-col justify-between relative overflow-hidden`}>
                
                <div className="flex items-center justify-between z-10">
                  <span className={`px-2.5 py-0.5 text-xs font-black border-2 border-black rounded ${vid.tagBg} text-white shadow-[1px_1px_0px_0px_#000]`}>
                    {vid.platform}
                  </span>
                  <span className="bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                    {vid.duration}
                  </span>
                </div>

                {/* Big Bold Headline inside video cover */}
                <div className="z-10 bg-white/95 border-2 border-black p-2.5 rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <h4 className="font-black text-sm text-black group-hover:text-pink-600 transition-colors line-clamp-2">
                    {vid.title}
                  </h4>
                </div>

                {/* Bottom stats pill */}
                <div className="flex items-center gap-3 z-10 text-[11px] font-bold text-black">
                  <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_0px_#000]">
                    <Eye className="w-3 h-3 text-blue-500" /> {vid.views}
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_0px_#000]">
                    <Heart className="w-3 h-3 text-pink-500" /> {vid.likes}
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 flex items-center justify-between bg-gray-50 text-xs font-bold text-gray-800">
                <span>B站 独立 Vlog 专栏</span>
                <span className="text-pink-600 font-extrabold group-hover:underline">播放 ▶</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
