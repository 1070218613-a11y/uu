import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, RECENT_UPDATES, QUEST_TIMELINE } from '../data/portfolioData';
import { BookOpen, Tv, Code2, Sparkles, ArrowLeft, ArrowRight, Wrench, ArrowDownRight } from 'lucide-react';

export const AboutTab: React.FC = () => {
  // Interactive 3D tilt calculation for ID card
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Tilt angle within ±8 degrees
    setCardRotate({
      x: -(y / (rect.height / 2)) * 7,
      y: (x / (rect.width / 2)) * 7,
    });
  };

  const handleCardMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
  };

  // Typewriter effect for statement box
  const FULL_STATEMENT = "我不是一开始就找到了方向，但每一步都没有白走";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < FULL_STATEMENT.length) {
        timeout = setTimeout(() => {
          setDisplayedText(FULL_STATEMENT.slice(0, displayedText.length + 1));
        }, 110);
      } else {
        // Pause when sentence is fully typed out
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2600);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(FULL_STATEMENT.slice(0, displayedText.length - 1));
        }, 45);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
    <div className="space-y-16 sm:space-y-20 overflow-visible">
      
      {/* Top Banner & ID Card Section with generous breathing room */}
      <section className="relative pt-6 sm:pt-10 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start overflow-visible">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Big Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-none">
                Hi，我是
              </h1>
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="inline-block bg-[#3B82F6] text-white px-6 py-2.5 rounded-2xl border-[1.5px] border-black shadow-[4px_4px_0px_0px_#000] -rotate-1 cursor-default"
              >
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-wide">{PERSONAL_INFO.name}</span>
              </motion.div>
            </div>

            {/* Paragraphs with comfortable line-height and font size matching reference */}
            <div className="text-base sm:text-[17px] text-gray-900 leading-[1.85] font-medium space-y-5">
              <p>
                2026 届本科应届生，本科工业设计专业，中共党员。在校期间专业成绩优异（排名 3/122），荣获国家奖学金与校长奖学金.在系统化设计方法与前沿 AI 技术的结合点上，坚定深耕 AI 产品经理方向。
              </p>
              
              <motion.p 
                whileHover={{ scale: 1.01 }}
                className="p-4 bg-pink-50 border-[1.5px] border-black rounded-2xl font-bold text-gray-900 leading-relaxed shadow-[2.5px_2.5px_0px_0px_#000] transition-shadow"
              >
                具备 <span className="bg-pink-300 px-1.5 py-0.5 rounded border border-black">企业级 AI 产品规划与落地经验</span>，能够独立完成业务调研、需求分析、流程梳理、PRD 及原型设计。理解 LLM、MCP、Agent、幻觉等技术原理，具备智能体工作流、工具调用、人机协同与异常兜底能力。
              </motion.p>
            </div>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                { text: '🎓 深圳技术大学 (SZTU)', bg: 'bg-[#FEF08A]' },
                { text: '⭐ GPA 4.32 (排名 3/122)', bg: 'bg-[#6EE7B7]' },
                { text: '🏆 国家奖学金', bg: 'bg-[#F472B6]' },
                { text: '🤖 AI 产品经理 (26届)', bg: 'bg-[#A78BFA]' },
                { text: '🚩 中共党员', bg: 'bg-[#FDE047]' },
              ].map((pill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3.5 py-1.5 ${pill.bg} border border-black rounded-xl text-xs sm:text-sm font-bold shadow-[1.5px_1.5px_0px_0px_#000] cursor-pointer select-none`}
                >
                  {pill.text}
                </motion.span>
              ))}
            </div>

          </div>

          {/* Right ID Card Visual Element with ample clearance for sticker */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-6 sm:pt-8 pr-4 sm:pr-6 overflow-visible">
            <motion.div 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              animate={{
                rotateX: cardRotate.x,
                rotateY: cardRotate.y,
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[360px] bg-white border-[1.5px] border-black rounded-[26px] shadow-[6px_6px_0px_0px_#000] cursor-grab select-none overflow-visible"
            >
              
              {/* Overlapping Top-Right Circular Sticker (Pink with Smiley & Handle) - 100% visible */}
              <motion.div 
                animate={{ rotate: [6, 12, 6], scale: [1, 1.04, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-9 -right-6 sm:-top-10 sm:-right-7 w-21 h-21 sm:w-23 sm:h-23 bg-[#FF5C8D] border-[1.5px] border-black rounded-full flex flex-col items-center justify-center text-black shadow-[3px_3px_0px_0px_#000] z-30 select-none"
              >
                {/* Cute Smiley Face */}
                <div className="w-8 h-8 rounded-full border-[1.5px] border-black flex items-center justify-center relative">
                  <span className="w-1.5 h-1.5 rounded-full bg-black absolute left-2 top-2" />
                  <span className="w-1.5 h-1.5 rounded-full bg-black absolute right-2 top-2" />
                  <svg viewBox="0 0 20 20" className="w-4 h-4 mt-1">
                    <path d="M 4 8 Q 10 14 16 8" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-[11px] font-black tracking-wider mt-0.5">XMMXOVO</span>
              </motion.div>

              {/* ID Card Top Header (Mint Green) */}
              <div className="bg-[#3EE07F] border-b-[1.5px] border-black p-5 rounded-t-[24px]">
                <h3 className="font-black text-2xl sm:text-3xl text-black tracking-tight leading-none">
                  ID CARD
                </h3>
                <p className="text-[11px] font-black tracking-wider text-black mt-2">
                  SHENZHEN TECHNOLOGY UNIVERSITY
                </p>
              </div>

              {/* ID Card Main Content Body */}
              <div className="p-5 sm:p-6 space-y-5">

                {/* Top Section: Photo Avatar + 3 Information Cards */}
                <div className="grid grid-cols-12 gap-3.5 items-stretch">
                  
                  {/* Left Column: Avatar & Sub-pills */}
                  <div className="col-span-5 flex flex-col justify-between space-y-2.5">
                    {/* Illustration Avatar Card */}
                    <div className="w-full bg-[#FFF9DE] border-[1.5px] border-black rounded-[18px] p-2 shadow-[2.5px_2.5px_0px_0px_#000] aspect-4/5 flex items-center justify-center overflow-hidden">
                      <svg viewBox="0 0 200 240" className="w-full h-full">
                        {/* Hair back */}
                        <path d="M 40 100 C 40 40, 160 40, 160 100 C 160 140, 150 160, 140 160 C 120 160, 80 160, 60 160 C 50 160, 40 140, 40 100 Z" fill="#18181B" stroke="#000" strokeWidth="1.5" />
                        
                        {/* Neck */}
                        <rect x="85" y="130" width="30" height="30" fill="#FDDFCE" stroke="#000" strokeWidth="1.2" />

                        {/* Ears */}
                        <circle cx="55" cy="115" r="10" fill="#FDDFCE" stroke="#000" strokeWidth="1.2" />
                        <circle cx="145" cy="115" r="10" fill="#FDDFCE" stroke="#000" strokeWidth="1.2" />

                        {/* Face */}
                        <ellipse cx="100" cy="115" rx="38" ry="42" fill="#FDDFCE" stroke="#000" strokeWidth="1.5" />

                        {/* Bangs / Hair front */}
                        <path d="M 60 95 C 60 65, 140 65, 140 95 C 130 90, 115 92, 100 95 C 85 92, 70 90, 60 95 Z" fill="#18181B" stroke="#000" strokeWidth="1.5" />
                        <path d="M 62 95 C 55 120, 52 145, 52 150 C 60 152, 65 140, 66 120 Z" fill="#18181B" />
                        <path d="M 138 95 C 145 120, 148 145, 148 150 C 140 152, 135 140, 134 120 Z" fill="#18181B" />

                        {/* Eyes */}
                        <circle cx="85" cy="115" r="3.5" fill="#000" />
                        <circle cx="115" cy="115" r="3.5" fill="#000" />

                        {/* Eyebrows */}
                        <path d="M 77 106 Q 85 103 93 106" fill="none" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
                        <path d="M 107 106 Q 115 103 123 106" fill="none" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />

                        {/* Round Glasses */}
                        <circle cx="85" cy="115" r="14" fill="none" stroke="#000" strokeWidth="1.5" />
                        <circle cx="115" cy="115" r="14" fill="none" stroke="#000" strokeWidth="1.5" />
                        <path d="M 99 115 L 101 115" stroke="#000" strokeWidth="1.5" />
                        <path d="M 71 113 L 57 110" stroke="#000" strokeWidth="1.2" />
                        <path d="M 129 113 L 143 110" stroke="#000" strokeWidth="1.2" />

                        {/* Cheeks / Blush */}
                        <ellipse cx="76" cy="126" rx="5" ry="3" fill="#FCA5A5" opacity="0.6" />
                        <ellipse cx="124" cy="126" rx="5" ry="3" fill="#FCA5A5" opacity="0.6" />

                        {/* Mouth (Smile) */}
                        <path d="M 92 131 Q 100 142 108 131 Z" fill="#EF4444" stroke="#000" strokeWidth="1.2" />

                        {/* Clothes / Windbreaker */}
                        <path d="M 40 240 L 40 185 C 40 165, 70 155, 100 155 C 130 155, 160 165, 160 185 L 160 240 Z" fill="#F472B6" stroke="#000" strokeWidth="1.5" />
                        <path d="M 82 160 L 82 240 L 118 240 L 118 160 Z" fill="#3B82F6" stroke="#000" strokeWidth="1.5" />
                        <path d="M 40 210 L 40 240 L 72 240 L 72 210 Z" fill="#3B82F6" stroke="#000" strokeWidth="1.5" />
                        <path d="M 160 210 L 160 240 L 128 240 L 128 210 Z" fill="#3B82F6" stroke="#000" strokeWidth="1.5" />

                        {/* Collar flaps */}
                        <path d="M 68 152 L 85 178 L 98 160 Z" fill="#F472B6" stroke="#000" strokeWidth="1.5" />
                        <path d="M 132 152 L 115 178 L 102 160 Z" fill="#F472B6" stroke="#000" strokeWidth="1.5" />

                        {/* Collar button */}
                        <circle cx="100" cy="172" r="3.5" fill="#FFF" stroke="#000" strokeWidth="1.2" />
                        <circle cx="100" cy="172" r="1" fill="#000" />
                      </svg>
                    </div>

                    {/* Sub-pills under photo */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 bg-[#3B82F6] text-white border border-black rounded-xl py-1 text-center font-black text-[11px] shadow-[1.5px_1.5px_0px_0px_#000]">
                        2026届
                      </div>
                      <div className="px-2.5 bg-[#F472B6] text-black border border-black rounded-xl py-1 text-center font-black text-[11px] shadow-[1.5px_1.5px_0px_0px_#000]">
                        深圳
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 3 Stacked Field Cards */}
                  <div className="col-span-7 flex flex-col justify-between space-y-2.5">
                    
                    {/* Field 1: NAME (Yellow) */}
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-[#FEF08A] border-[1.5px] border-black rounded-[16px] p-3 shadow-[2.5px_2.5px_0px_0px_#000]">
                      <span className="text-[10px] font-black text-black tracking-wider block leading-none">NAME</span>
                      <span className="text-xl font-black text-black block mt-1.5">{PERSONAL_INFO.fullName}</span>
                    </motion.div>

                    {/* Field 2: MAJOR (Soft Blue) */}
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-[#D8E8FC] border-[1.5px] border-black rounded-[16px] p-3 shadow-[2.5px_2.5px_0px_0px_#000]">
                      <span className="text-[10px] font-black text-black tracking-wider block leading-none">MAJOR</span>
                      <span className="text-sm font-black text-black block mt-1.5">工业设计</span>
                    </motion.div>

                    {/* Field 3: JOB (Lavender Purple) */}
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-[#E9D5FF] border-[1.5px] border-black rounded-[16px] p-3 shadow-[2.5px_2.5px_0px_0px_#000]">
                      <span className="text-[10px] font-black text-black tracking-wider block leading-none">JOB</span>
                      <span className="text-sm font-black text-black block mt-1.5">AI 产品经理</span>
                    </motion.div>

                  </div>

                </div>

                {/* ID NO. Display */}
                <div>
                  <span className="text-[11px] font-black text-black tracking-wider block leading-none">
                    ID NO.
                  </span>
                  <span className="text-base font-black font-mono text-black block mt-1">
                    SZTU-2026-AIPM
                  </span>
                </div>

                {/* Bottom Row: Barcode Box + Official Vibe Stamp */}
                <div className="flex items-center gap-4 pt-1">
                  
                  {/* Barcode Box */}
                  <div className="flex-1 bg-white border-[1.5px] border-black rounded-[16px] p-2.5 sm:p-3 shadow-[2.5px_2.5px_0px_0px_#000] flex items-center justify-center">
                    <div className="w-full h-8 flex justify-between items-center px-1">
                      {[4, 1.5, 3, 1, 5, 2, 1, 4, 2, 6, 1.5, 3, 1, 5, 2, 4, 1.5, 3, 2, 5, 1, 4].map((width, idx) => (
                        <div
                          key={idx}
                          className="bg-black h-full"
                          style={{ width: `${width}px` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Dual Concentric Official Vibe Stamp */}
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.08 }}
                    className="w-18 h-18 bg-[#FF5C8D] border-[1.5px] border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_#000] shrink-0"
                  >
                    <div className="w-13 h-13 bg-[#3EE07F] border border-black rounded-full flex flex-col items-center justify-center text-black leading-tight font-black select-none">
                      <span className="text-[8.5px] tracking-tight">OFFICIAL</span>
                      <span className="text-[9.5px]">AI PM</span>
                    </div>
                  </motion.div>

                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* Middle Statement Box */}
      <section className="text-center space-y-6 sm:space-y-8 py-6 sm:py-10 w-full max-w-5xl mx-auto px-2 sm:px-4 flex flex-col items-center">
        <div className="relative inline-flex items-center justify-center bg-[#FFDE38] border-2 border-black px-6 sm:px-12 py-5 sm:py-7 rounded-none shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] min-w-[150px] sm:min-w-[180px] max-w-full transition-all duration-150 ease-out">
          {/* Top-Left STATEMENT Tag */}
          <div className="absolute -top-4 -left-1 sm:-left-3 bg-white border-2 border-black px-2.5 sm:px-3 py-0.5 text-[11px] sm:text-xs font-mono font-black tracking-widest uppercase rounded-none select-none shadow-[1px_1px_0px_0px_#000]">
            STATEMENT
          </div>

          <p className="font-serif text-sm sm:text-xl md:text-2xl lg:text-3xl font-black text-black tracking-wide leading-none whitespace-nowrap flex items-center justify-center min-h-[1.8rem] sm:min-h-[2.5rem]">
            <span className="font-black" style={{ fontWeight: 900 }}>{displayedText}</span>
            <span className="inline-block ml-1 font-mono font-bold text-black animate-pulse">|</span>
          </p>
        </div>

        <p className="text-base sm:text-xl md:text-2xl font-black text-black max-w-4xl mx-auto leading-relaxed sm:leading-loose tracking-normal px-2 sm:px-4">
          工业设计赋予我对用户、场景与体验的敏锐洞察，也训练了我系统解决复杂问题的能力，让我能够胜任连接用户需求、商业目标与技术实现的 AI 产品经理。
        </p>
      </section>

      {/* 近日生活 | RECENT UPDATES (Matching Screenshot 1 exactly) */}
      <section className="relative py-4 sm:py-6 overflow-visible select-none">
        
        {/* Top Header Row with Title Sticker and Accents */}
        <div className="flex items-end justify-between mb-8 sm:mb-12 relative px-2">
          
          {/* Left: Arrow and Circles */}
          <div className="flex flex-col items-start gap-1">
            <ArrowLeft className="w-6 sm:w-7 h-6 sm:h-7 text-black stroke-[3.5] mb-2" />
            <div className="flex items-center gap-1.5 ml-6 sm:ml-10">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-white inline-block" />
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#FF5C8D] inline-block" />
            </div>
          </div>

          {/* Center-Left: Pink Title Sticker */}
          <div className="relative inline-block -rotate-2">
            {/* Chunky double layered offset border */}
            <div className="absolute inset-0 translate-x-1.5 translate-y-2 bg-black border-2 border-black" />
            <div className="relative bg-[#FF5C8D] border-2 border-black px-5 sm:px-8 py-2.5 sm:py-3.5 shadow-[4px_4px_0px_0px_#000]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight whitespace-nowrap">
                近日生活 | RECENT UPDATES
              </h2>
            </div>
            {/* Black star sticker on top-right edge */}
            <span className="absolute -top-3.5 right-6 text-black text-base select-none">★</span>
          </div>

          {/* Right Accents: Lightning Bolt & Circles */}
          <div className="flex flex-col items-end gap-2">
            <svg className="w-4 h-4 fill-[#FF5C8D] mr-8" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#FF5C8D] inline-block" />
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#C084FC] inline-block" />
            </div>
          </div>
        </div>

        {/* Floating elements on far left of cards */}
        <div className="hidden lg:flex flex-col items-center gap-4 absolute left-0 top-[45%] -translate-y-1/2 -translate-x-8">
          <ArrowRight className="w-5 h-5 text-black stroke-[3.5]" />
          <span className="text-black text-sm">◆</span>
        </div>

        {/* Three Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 relative items-center">
          
          {/* CARD 1: 最近在读 */}
          <div className="relative">
            {/* Top-left floating star & dot */}
            <span className="absolute -top-5 left-1 text-black text-xl select-none">★</span>
            <span className="absolute -top-2 left-9 text-black text-xs select-none">●</span>
            {/* Top edge arrow */}
            <span className="absolute -top-3 right-12 text-black text-sm font-black select-none">→</span>
            {/* Bottom-left diamond */}
            <span className="absolute -bottom-4 -left-3 text-black text-sm select-none">◆</span>
            {/* Right edge neon green lightning bolt */}
            <svg className="w-4 h-4 fill-[#22C55E] absolute top-10 -right-2 z-10" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>

            {/* Bottom Solid Blue 3D Offset Card */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#2563EB] rounded-2xl border-2 border-black" />

            {/* Main White Card */}
            <div className="relative bg-white rounded-2xl border-2 border-black p-5 sm:p-6 min-h-[165px] flex flex-col justify-between">
              {/* Top Row: Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#2563EB] rounded-xl border-2 border-black flex items-center justify-center text-white shadow-[1px_1px_0px_0px_#000]">
                  <BookOpen className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="font-black text-sm sm:text-base text-black tracking-tight">
                  最近在读
                </span>
              </div>

              {/* Bottom Row: Content with Underline */}
              <div className="text-center sm:text-right pr-1 pt-4">
                <span className="text-base sm:text-lg font-black text-black tracking-tight">
                  《纳瓦尔宝典》
                </span>
                <div className="h-[2px] bg-[#60A5FA] mt-1.5 mx-auto sm:ml-auto sm:mr-0 w-32" />
              </div>
            </div>
          </div>

          {/* Connecting Arrows between Card 1 and Card 2 (visible on md+) */}
          <div className="hidden md:flex flex-col items-center justify-center absolute left-[30.5%] top-1/2 -translate-y-1/2 z-20 pointer-events-none w-16">
            {/* Upper curved solid arrow */}
            <svg className="w-14 h-8 text-black" viewBox="0 0 60 30" fill="none">
              <path d="M 5 20 Q 30 -5 55 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 48 8 L 56 16 L 45 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-black text-sm my-0.5 select-none">★</span>
            {/* Lower curved dashed arrow */}
            <svg className="w-14 h-8 text-black" viewBox="0 0 60 30" fill="none">
              <path d="M 5 10 Q 30 30 55 12" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
              <path d="M 48 10 L 56 12 L 52 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* CARD 2: 最近狂刷 (Slightly tilted) */}
          <div className="relative rotate-[1deg]">
            {/* Top-right pink lightning bolt */}
            <svg className="w-4 h-4 fill-[#FF5C8D] absolute -top-4 -right-1 z-10" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            {/* Bottom-left blue lightning bolt */}
            <svg className="w-4 h-4 fill-[#2563EB] absolute -bottom-3 -left-2 z-10" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>

            {/* Bottom Solid Pink 3D Offset Card */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#FF5C8D] rounded-2xl border-2 border-black" />

            {/* Main White Card */}
            <div className="relative bg-white rounded-2xl border-2 border-black p-5 sm:p-6 min-h-[165px] flex flex-col justify-between">
              {/* Top Row: Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#FF5C8D] rounded-xl border-2 border-black flex items-center justify-center text-white shadow-[1px_1px_0px_0px_#000]">
                  <Tv className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="font-black text-sm sm:text-base text-black tracking-tight">
                  最近狂刷
                </span>
              </div>

              {/* Bottom Row: Content with Underline and down-right arrow */}
              <div className="text-center sm:text-right pr-1 pt-4">
                <div className="flex items-center justify-center sm:justify-end gap-1">
                  <span className="text-base sm:text-lg font-black text-black tracking-tight">
                    鳌太线失事视频
                  </span>
                  <ArrowDownRight className="w-4 h-4 stroke-[3] text-black inline" />
                </div>
                <div className="h-[2px] bg-[#FF5C8D] mt-1.5 mx-auto sm:ml-auto sm:mr-0 w-36" />
              </div>
            </div>
          </div>

          {/* Connecting Arrows between Card 2 and Card 3 (visible on md+) */}
          <div className="hidden md:flex flex-col items-center justify-center absolute left-[64.5%] top-1/2 -translate-y-1/2 z-20 pointer-events-none w-16">
            {/* Upper curved dashed arrow */}
            <svg className="w-14 h-8 text-black" viewBox="0 0 60 30" fill="none">
              <path d="M 5 20 Q 30 -5 55 15" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
              <path d="M 48 8 L 56 16 L 45 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Lower curved solid arrow */}
            <svg className="w-14 h-8 text-black mt-2" viewBox="0 0 60 30" fill="none">
              <path d="M 5 10 Q 30 30 55 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 48 10 L 56 12 L 52 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* CARD 3: 最近感兴趣 */}
          <div className="relative">
            {/* Top-right pink lightning bolt & diamond */}
            <svg className="w-4 h-4 fill-[#FF5C8D] absolute -top-4 right-5 z-10" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="absolute -top-3 right-0 text-black text-xs select-none">◆</span>
            {/* Bottom-right star */}
            <span className="absolute -bottom-4 -right-2 text-black text-xl select-none">★</span>

            {/* Bottom Solid Green 3D Offset Card */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#22C55E] rounded-2xl border-2 border-black" />

            {/* Main White Card */}
            <div className="relative bg-white rounded-2xl border-2 border-black p-5 sm:p-6 min-h-[165px] flex flex-col justify-between">
              {/* Top Row: Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#22C55E] rounded-xl border-2 border-black flex items-center justify-center text-white shadow-[1px_1px_0px_0px_#000]">
                  <Wrench className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="font-black text-sm sm:text-base text-black tracking-tight">
                  最近感兴趣
                </span>
              </div>

              {/* Bottom Row: Content with Underline and Star */}
              <div className="text-center sm:text-right pr-1 pt-4">
                <span className="text-base sm:text-lg font-black text-black tracking-tight">
                  AI 编程
                </span>
                <div className="h-[2px] bg-[#22C55E] mt-1.5 mx-auto sm:ml-auto sm:mr-0 w-24" />
                <div className="flex justify-center sm:justify-end mt-1 pr-6">
                  <span className="text-black text-xs select-none">★</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 地球Online 开放游戏进度 Timeline (Matching Screenshot 3) */}
      <section className="bg-white rounded-3xl border-[1.5px] border-black p-6 sm:p-10 shadow-[5px_5px_0px_0px_#000] space-y-8">
        
        {/* Timeline Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-3 text-2xl sm:text-4xl font-black text-black">
            <span>地球Online</span>
            <span className="bg-[#FF5C8D] text-black px-4 py-1 rounded-2xl border-[1.5px] border-black shadow-[3px_3px_0px_0px_#000] -rotate-1">
              开放游戏进度
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-gray-600">
            RECORD OF EARTH ONLINE QUEST PROGRESS
          </p>
        </div>

        {/* Quest Columns Header */}
        <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto text-center font-black">
          <div className="bg-[#FEF08A] border border-black py-2 rounded-xl shadow-[2px_2px_0px_0px_#000]">
            主线任务
          </div>
          <div className="bg-[#6EE7B7] border border-black py-2 rounded-xl shadow-[2px_2px_0px_0px_#000]">
            支线任务
          </div>
        </div>

        {/* Timeline Nodes Container */}
        <div className="relative max-w-3xl mx-auto pt-6 pb-4">
          
          {/* Central Vertical Dotted Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 border-r-[1.5px] border-dashed border-black -translate-x-1/2" />

          <div className="space-y-8 relative">
            {QUEST_TIMELINE.map((item) => {
              const isMain = item.type === 'main';

              return (
                <div key={item.id} className="relative grid grid-cols-12 items-center gap-4">
                  
                  {/* Left Column (Main Quest if isMain) */}
                  <div className="col-span-5 text-right">
                    {isMain && (
                      <div className="inline-block bg-white border border-black p-3.5 rounded-2xl shadow-[2.5px_2.5px_0px_0px_#000] max-w-xs text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-[10px] font-black text-white rounded border border-black ${item.tagBg}`}>
                            {item.tag}
                          </span>
                          <span className="text-xs font-mono font-bold text-gray-600">{item.monthDate}</span>
                        </div>
                        <h4 className="font-black text-xs sm:text-sm text-black">{item.title}</h4>
                        {item.description && (
                          <p className="text-[11px] text-gray-600 font-medium mt-1">{item.description}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Center Node Button */}
                  <div className="col-span-2 flex justify-center z-10">
                    <div className="w-9 h-9 rounded-full bg-white border-[1.5px] border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
                      <div className={`w-3.5 h-3.5 rounded-full ${isMain ? 'bg-[#3B82F6]' : 'bg-[#FF5C8D]'}`} />
                    </div>
                  </div>

                  {/* Right Column (Branch Quest if not isMain) */}
                  <div className="col-span-5 text-left">
                    {!isMain && (
                      <div className="inline-block bg-white border border-black p-3.5 rounded-2xl shadow-[2.5px_2.5px_0px_0px_#000] max-w-xs">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-[10px] font-black text-white rounded border border-black ${item.tagBg}`}>
                            {item.tag}
                          </span>
                          <span className="text-xs font-mono font-bold text-gray-600">{item.monthDate}</span>
                        </div>
                        <h4 className="font-black text-xs sm:text-sm text-black">{item.title}</h4>
                        {item.description && (
                          <p className="text-[11px] text-gray-600 font-medium mt-1">{item.description}</p>
                        )}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </section>

    </div>
  );
};
