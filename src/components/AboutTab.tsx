import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, RECENT_UPDATES, QUEST_TIMELINE } from '../data/portfolioData';
import { BookOpen, Tv, Code2, Sparkles, ArrowLeft, ArrowRight, Wrench, ArrowDownRight, ChevronUp, Trophy, Bookmark, Send, Camera } from 'lucide-react';
import defaultAvatarPhoto from '../assets/images/user_portrait_photo_1789816447911.jpg';

// Cute chubby 5-pointed star matching reference sticker closeup
const ChubbyStar: React.FC<{ className?: string; color?: string }> = ({
  className = "w-7 h-7",
  color = "#000000",
}) => (
  <svg
    className={`${className} select-none pointer-events-none drop-shadow-[0.5px_0.5px_0px_#000]`}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path
      d="M12 2.2l2.6 5.8 6.3.6-4.7 4.2 1.4 6.2-5.6-3.3-5.6 3.3 1.4-6.2-4.7-4.2 6.3-.6L12 2.2z"
      stroke="#000000"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

// High-impact chunky lightning bolt sticker matching reference closeup
const BoltSticker: React.FC<{ className?: string; color?: string }> = ({
  className = "w-7 h-7",
  color = "#FF5C8D",
}) => (
  <svg
    className={`${className} select-none pointer-events-none drop-shadow-[1px_1px_0px_#000]`}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path
      d="M13 1.5L4.5 13h6.5l-1.5 9.5 10-12.5h-7l1.5-8.5z"
      stroke="#000000"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const getTimelineIcon = (iconName?: string, isLight = false) => {
  const strokeColor = isLight ? 'text-white' : 'text-black';
  switch (iconName) {
    case 'rocket':
      return <Send className={`w-5 h-5 stroke-[2.5] ${strokeColor} -rotate-45`} />;
    case 'code':
      return <Code2 className={`w-5 h-5 stroke-[2.5] ${strokeColor}`} />;
    case 'award':
      return <Bookmark className={`w-5 h-5 stroke-[2.5] ${strokeColor}`} />;
    case 'trophy':
      return <Trophy className={`w-5 h-5 stroke-[2.5] ${strokeColor}`} />;
    case 'sparkles':
    default:
      return <Sparkles className={`w-5 h-5 stroke-[2.5] ${strokeColor}`} />;
  }
};

export const AboutTab: React.FC = () => {
  // ID card tilt and hover-straighten interaction
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Avatar photo state (defaults to portrait photo, supports local custom upload)
  const [customPhoto, setCustomPhoto] = useState<string>(() => {
    return localStorage.getItem('user_avatar_photo') || defaultAvatarPhoto;
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          try {
            localStorage.setItem('user_avatar_photo', result);
          } catch {
            // ignore storage quota error
          }
        }
      };
      reader.readAsDataURL(file);
    }
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
          <div className="lg:col-span-7">
            
            {/* Big Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-black tracking-tight leading-none">
              Hi，我是
            </h1>

            {/* Blue Name Box with equal and comfortable spacing above and below */}
            <div className="my-6 sm:my-7">
              <motion.div 
                initial={{ rotate: -2 }}
                whileHover={{ rotate: -2, scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="inline-block bg-[#2563EB] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-none border-[3px] border-black cursor-pointer select-none origin-center"
              >
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider">{PERSONAL_INFO.name}</span>
              </motion.div>
            </div>

            {/* Paragraphs with comfortable line-height and font size matching reference */}
            <div className="text-base sm:text-[17px] text-gray-900 leading-[1.85] font-medium space-y-5">
              <p className="space-y-1 text-gray-900 leading-[1.8] font-medium">
                <span className="block">工业设计的学习经历，让我系统掌握产品设计、界面设计与产品思维方法</span>
                <span className="block">具有从用户需求出发，统筹体验、功能与落地可行性的能力。</span>
                <span className="block">专业成绩稳居前三，证明我的学习能力与专业基础，</span>
                <span className="block">也让我能够更快理解 AI 技术，并将其转化为兼具用户价值、良好体验与商业潜力的产品方案</span>
                <span className="block">——这正是我从事 AI 产品经理的独特优势。</span>
              </p>
              
              <motion.p 
                whileHover={{ scale: 1.01 }}
                className="p-4 bg-pink-50 border-[1.5px] border-black rounded-2xl font-bold text-gray-900 leading-relaxed shadow-[2.5px_2.5px_0px_0px_#000] transition-shadow"
              >
                具备 <span className="bg-pink-300 px-1.5 py-0.5 rounded border border-black">企业级 AI产品规划与落地经验</span>能够独立完成业务调研、需求分析、流程梳理、PRD及原型设计。理解LLM、MCP、Agent、幻觉等技术原理，具备智能体工作流、工具调用、人机协同与异常兜底能力。
              </motion.p>
            </div>



          </div>

          {/* Right ID Card Visual Element with ample clearance for sticker */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-6 sm:pt-8 pr-4 sm:pr-6 overflow-visible">
            <motion.div 
              initial={{ rotate: -2.8 }}
              animate={{
                rotate: isCardHovered ? 0 : -2.8,
                scale: isCardHovered ? 1.03 : 1,
                y: isCardHovered ? -4 : 0,
              }}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              className="relative w-full max-w-[360px] bg-white border-[1.5px] border-black rounded-[26px] shadow-[6px_6px_0px_0px_#000] cursor-pointer select-none overflow-visible origin-center"
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
                    {/* Photo Avatar Card with Instant Click-to-Upload Capability */}
                    <label 
                      title="点击可上传或更换您的本地原图"
                      className="relative block w-full bg-gray-100 border-[1.5px] border-black rounded-[18px] shadow-[2.5px_2.5px_0px_0px_#000] aspect-4/5 cursor-pointer overflow-hidden group"
                    >
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handlePhotoUpload} 
                        className="hidden" 
                      />
                      <img 
                        src={customPhoto} 
                        alt={PERSONAL_INFO.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {/* Interactive Hover Overlay to easily replace with original local image anytime */}
                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-1 text-center select-none backdrop-blur-[1px]">
                        <Camera className="w-5 h-5 mb-1 stroke-[2.5] text-white" />
                        <span className="text-[10px] font-black leading-tight text-white">点击更换原图</span>
                      </div>
                    </label>

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
                    
                    {/* Field 1: TARGET (Yellow) */}
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-[#FEF08A] border-[1.5px] border-black rounded-[16px] p-3 shadow-[2.5px_2.5px_0px_0px_#000]">
                      <span className="text-[10px] font-black text-black tracking-wider block leading-none">TARGET</span>
                      <span className="text-lg sm:text-xl font-black text-black block mt-1.5">AI 产品经理</span>
                    </motion.div>

                    {/* Field 2: MAJOR (Soft Blue) */}
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-[#D8E8FC] border-[1.5px] border-black rounded-[16px] p-3 shadow-[2.5px_2.5px_0px_0px_#000]">
                      <span className="text-[10px] font-black text-black tracking-wider block leading-none">MAJOR</span>
                      <span className="text-sm font-black text-black block mt-1.5">工业设计</span>
                    </motion.div>

                    {/* Field 3: IDENTITY (Lavender Purple) */}
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-[#E9D5FF] border-[1.5px] border-black rounded-[16px] p-3 shadow-[2.5px_2.5px_0px_0px_#000]">
                      <span className="text-[10px] font-black text-black tracking-wider block leading-none">IDENTITY</span>
                      <span className="text-sm font-black text-black block mt-1.5">中共党员</span>
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
      <section className="text-center space-y-6 sm:space-y-8 pt-6 sm:pt-8 pb-1 sm:pb-2 w-full max-w-5xl mx-auto px-2 sm:px-4 flex flex-col items-center">
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

      {/* 近日生活 | RECENT UPDATES (Matching Reference Image 4 exactly with enlarged border-overlapping stickers) */}
      <section className="relative !mt-6 sm:!mt-8 pt-2 sm:pt-4 pb-6 sm:pb-10 overflow-visible select-none max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-6">
        
        {/* Top Header Area: Left-aligned title + playful accents */}
        <div className="relative mb-10 sm:mb-14">
          
          {/* Top Row Accents */}
          <div className="flex items-center justify-between mb-3 px-1">
            {/* Top-Left Arrow and Two Circles */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-black">←</span>
              <div className="flex items-center gap-1.5 ml-1">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-white inline-block shadow-[0.5px_0.5px_0px_0px_#000]" />
                <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#FF5C8D] inline-block shadow-[0.5px_0.5px_0px_0px_#000]" />
              </div>
            </div>

            {/* Top-Right Lightning and Two Circles */}
            <div className="flex items-center gap-4 sm:gap-6">
              <BoltSticker className="w-7 h-7" color="#FF5C8D" />
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#FF5C8D] inline-block shadow-[0.5px_0.5px_0px_0px_#000]" />
                <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#C084FC] inline-block shadow-[0.5px_0.5px_0px_0px_#000]" />
              </div>
            </div>
          </div>

          {/* Left-Aligned Pink Title Sticker (Interactive: rotates 3 degrees right around center point on hover) */}
          <div className="flex justify-start">
            <motion.div
              className="relative inline-block origin-center cursor-pointer select-none"
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 3 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            >
              {/* Double-line stacked offset border */}
              <div className="absolute inset-0 translate-x-1 translate-y-1.5 bg-black border-2 border-black" />
              <div className="relative bg-[#FF5C8D] border-2 border-black px-6 sm:px-8 py-2.5 sm:py-3 shadow-[4px_4px_0px_0px_#000]">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight whitespace-nowrap">
                  近日生活 | RECENT UPDATES
                </h2>
              </div>
              {/* Black star sticker overlapping top-right corner of the title */}
              <div className="absolute -top-4 -right-3 z-30">
                <ChubbyStar className="w-7 h-7" />
              </div>
              {/* Pink lightning sticker overlapping top-left of the title */}
              <div className="absolute -top-4 -left-3 z-30">
                <BoltSticker className="w-6 h-6" color="#FF5C8D" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements on far left of cards */}
        <div className="hidden lg:flex flex-col items-center gap-4 absolute left-[-32px] top-[58%] -translate-y-1/2">
          <span className="text-2xl font-black text-black">➔</span>
          <span className="text-black text-base font-bold">◆</span>
          <ChubbyStar className="w-5 h-5" />
        </div>

        {/* Three Cards Layout with Long Connecting Arrows Touching Both Frames */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 relative">
          
          {/* CARD 1: 最近在读 (Interactive: scales up slightly on hover) */}
          <motion.div
            className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[310px] lg:max-w-[360px] xl:max-w-[400px] relative flex-1 shrink-0 cursor-pointer"
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            {/* STICKERS OVERLAPPING THE FRAME */}
            {/* Top-left rounded corner: ChubbyStar directly overlapping border (Matching Screenshot 2) */}
            <div className="absolute -top-4 left-4 z-30">
              <ChubbyStar className="w-8 h-8" />
            </div>
            {/* Top border: Solid black dot overlapping frame */}
            <div className="absolute -top-2 left-16 z-30 w-3.5 h-3.5 rounded-full bg-black border border-white" />
            {/* Top border right: Arrow pointing right overlapping frame */}
            <span className="absolute -top-3.5 right-10 text-black text-base font-black select-none z-30">→</span>
            {/* Right edge: Neon green lightning bolt overlapping both white frame & blue 3D backing layer (Matching Image 2) */}
            <div className="absolute top-2 -right-3.5 z-30">
              <BoltSticker className="w-8 h-8" color="#22C55E" />
            </div>
            {/* Bottom-left corner: Diamond overlapping frame */}
            <span className="absolute -bottom-3.5 -left-2.5 text-black text-lg font-black select-none z-30">◆</span>
            {/* Bottom border center: Small star overlapping frame */}
            <div className="absolute -bottom-3 left-1/3 z-30">
              <ChubbyStar className="w-5 h-5" />
            </div>

            {/* Bottom Solid Blue 3D Offset Card */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#2563EB] rounded-[22px] border-2 border-black" />

            {/* Main White Card (Compact + Large Text) */}
            <div className="relative bg-white rounded-[22px] border-2 border-black p-4 sm:p-5 h-[155px] flex flex-col justify-between shadow-sm">
              {/* Top Row: Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#2563EB] rounded-2xl border-2 border-black flex items-center justify-center text-white shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
                  <BookOpen className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="font-black text-base sm:text-lg text-black tracking-tight">
                  最近在读
                </span>
              </div>

              {/* Bottom Row: Large Content with Underline */}
              <div className="text-right pr-2 pb-1">
                <span className="text-lg sm:text-xl font-black text-black tracking-tight">
                  《纳瓦尔宝典》
                </span>
                <div className="h-[2.5px] bg-[#3B82F6] mt-1 ml-auto w-32" />
              </div>
            </div>
          </motion.div>

          {/* Connecting Arrows between Card 1 and Card 2 (Elongated to touch both frames, adapting to gap) */}
          <div className="hidden md:flex flex-col justify-between pointer-events-none relative flex-1 min-w-[45px] max-w-[90px] lg:max-w-[110px] xl:max-w-[130px] h-[135px] py-1 -mx-2 z-20">
            {/* Top Arching Solid Arrow (touches left card, curves up, points down-right to right card) */}
            <div className="w-full relative">
              <svg
                className="w-full h-11 text-black overflow-visible"
                viewBox="0 0 100 35"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 0 28 Q 50 -8 100 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
                <path
                  d="M 88 10 L 100 18 L 90 27"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Star placed near right card under top arrowhead (Matching Image 2) */}
              <div className="absolute right-0 top-7 rotate-[12deg] pointer-events-none">
                <ChubbyStar className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Arching Dashed Arrow (touches left card, curves across, touches right card) */}
            <div className="w-full relative mt-auto">
              <svg
                className="w-full h-10 text-black overflow-visible"
                viewBox="0 0 100 30"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 0 22 Q 52 2 100 16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
                <path
                  d="M 88 9 L 100 16 L 90 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* CARD 2: 最近狂刷 (Interactive: scales up slightly on hover) */}
          <motion.div
            className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[310px] lg:max-w-[360px] xl:max-w-[400px] relative flex-1 shrink-0 cursor-pointer"
            initial={{ rotate: 1.5 }}
            whileHover={{ scale: 1.04, y: -4, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            {/* STICKERS OVERLAPPING THE FRAME */}
            {/* Top-right corner: Pink lightning bolt directly overlapping frame (Matching Screenshot 1) */}
            <div className="absolute -top-5 -right-3 z-30">
              <BoltSticker className="w-8 h-8" color="#FF5C8D" />
            </div>
            {/* Top border left: ChubbyStar overlapping top border */}
            <div className="absolute -top-3.5 left-7 z-30">
              <ChubbyStar className="w-6 h-6" />
            </div>
            {/* Bottom-left corner: Blue lightning bolt overlapping frame */}
            <div className="absolute -bottom-4 -left-3.5 z-30">
              <BoltSticker className="w-7 h-7" color="#2563EB" />
            </div>
            {/* Right edge: ChubbyStar overlapping right border */}
            <div className="absolute top-10 -right-3.5 z-30">
              <ChubbyStar className="w-7 h-7" />
            </div>
            {/* Bottom border center: Small dot */}
            <div className="absolute -bottom-1.5 left-1/2 z-30 w-3 h-3 rounded-full bg-black border border-white" />

            {/* Bottom Solid Pink 3D Offset Card */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#FF5C8D] rounded-[22px] border-2 border-black" />

            {/* Main White Card */}
            <div className="relative bg-white rounded-[22px] border-2 border-black p-4 sm:p-5 h-[155px] flex flex-col justify-between shadow-sm">
              {/* Top Row: Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF5C8D] rounded-2xl border-2 border-black flex items-center justify-center text-white shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
                  <Tv className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="font-black text-base sm:text-lg text-black tracking-tight">
                  最近狂刷
                </span>
              </div>

              {/* Bottom Row: Large Content with Underline and down-right arrow */}
              <div className="text-right pr-2 pb-1">
                <div className="flex items-center justify-end gap-1">
                  <span className="text-lg sm:text-xl font-black text-black tracking-tight">
                    鳌太线失事视频
                  </span>
                  <span className="text-base font-black text-black">↘</span>
                </div>
                <div className="h-[2.5px] bg-[#FF5C8D] mt-1 ml-auto w-40" />
              </div>
            </div>
          </motion.div>

          {/* Connecting Arrows between Card 2 and Card 3 (Adapting to gap between cards) */}
          <div className="hidden md:flex flex-col justify-between pointer-events-none relative flex-1 min-w-[45px] max-w-[90px] lg:max-w-[110px] xl:max-w-[130px] h-[135px] py-1 -mx-2 z-20">
            {/* Upper Arching Dashed Arrow */}
            <div className="w-full relative">
              <svg
                className="w-full h-11 text-black overflow-visible"
                viewBox="0 0 100 35"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 0 28 Q 50 -8 100 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
                <path
                  d="M 88 10 L 100 18 L 90 27"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Star placed near left card edge under arrow */}
              <div className="absolute left-0 top-7 -rotate-[12deg] pointer-events-none">
                <ChubbyStar className="w-5 h-5" />
              </div>
            </div>

            {/* Lower Arching Solid Arrow */}
            <div className="w-full relative mt-auto">
              <svg
                className="w-full h-10 text-black overflow-visible"
                viewBox="0 0 100 30"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 0 22 Q 52 2 100 16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
                <path
                  d="M 88 9 L 100 16 L 90 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* CARD 3: 最近感兴趣 (Interactive: scales up slightly on hover) */}
          <motion.div
            className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[310px] lg:max-w-[360px] xl:max-w-[400px] relative flex-1 shrink-0 cursor-pointer"
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            {/* STICKERS OVERLAPPING THE FRAME */}
            {/* Top-right border: Pink lightning bolt overlapping frame */}
            <div className="absolute -top-5 right-6 z-30">
              <BoltSticker className="w-8 h-8" color="#FF5C8D" />
            </div>
            {/* Top-right edge: Diamond overlapping frame */}
            <span className="absolute -top-3.5 -right-2 text-black text-base font-black select-none z-30">◆</span>
            {/* Top-left border: Green lightning bolt overlapping frame */}
            <div className="absolute -top-4 left-6 z-30">
              <BoltSticker className="w-7 h-7" color="#22C55E" />
            </div>
            {/* Bottom-right corner: Large ChubbyStar overlapping bottom-right corner frame */}
            <div className="absolute -bottom-5 -right-4 z-30">
              <ChubbyStar className="w-9 h-9" />
            </div>
            {/* Bottom border center: Black dot */}
            <div className="absolute -bottom-2 left-1/2 z-30 w-3.5 h-3.5 rounded-full bg-black border border-white" />

            {/* Bottom Solid Green 3D Offset Card */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#22C55E] rounded-[22px] border-2 border-black" />

            {/* Main White Card */}
            <div className="relative bg-white rounded-[22px] border-2 border-black p-4 sm:p-5 h-[155px] flex flex-col justify-between shadow-sm">
              {/* Top Row: Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#22C55E] rounded-2xl border-2 border-black flex items-center justify-center text-white shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
                  <Wrench className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="font-black text-base sm:text-lg text-black tracking-tight">
                  最近感兴趣
                </span>
              </div>

              {/* Bottom Row: Large Content with Underline */}
              <div className="text-right pr-2 pb-1">
                <span className="text-lg sm:text-xl font-black text-black tracking-tight">
                  AI 编程
                </span>
                <div className="h-[2.5px] bg-[#22C55E] mt-1 ml-auto w-24" />
                <div className="flex justify-end mt-1 pr-4">
                  <ChubbyStar className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 地球Online 我的人生进度 Timeline (Matching Reference Image) */}
      <section className="space-y-6 pt-4">
        
        {/* Title Outside Box at Top-Center (放到框外中上方) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 select-none">
          <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
            地球Online
          </span>
          <motion.div
            className="relative inline-block origin-center cursor-pointer select-none"
            initial={{ rotate: -3 }}
            whileHover={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
          >
            {/* Double offset black border */}
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black border-2 border-black" />
            <div className="relative bg-[#FF5C8D] border-2 border-black px-4 sm:px-6 py-1 sm:py-1.5 shadow-[2px_2px_0px_0px_#000]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight whitespace-nowrap">
                我的人生进度
              </span>
            </div>
            {/* Attached chubby star sticker at top-right */}
            <div className="absolute -top-3.5 -right-3 z-30 pointer-events-none">
              <ChubbyStar className="w-6 h-6" color="#000000" />
            </div>
          </motion.div>
        </div>

        {/* Big Timeline Box with Faint Gray Grid Background */}
        <div className="relative bg-white rounded-[28px] sm:rounded-[36px] border-2 border-black p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] overflow-hidden">
          
          {/* Subtle Faint Gray Millimeter Grid Background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px'
            }}
          />

          {/* Quest Headers: 主线任务 (Left) / ^ Chevron (Center) / 支线任务 (Right) */}
          <div className="relative flex items-center justify-between max-w-5xl xl:max-w-6xl mx-auto mb-10 px-1 sm:px-4 z-10">
            
            {/* Left: 主线任务 (White sticker with pink 3D offset layer) */}
            <div className="relative inline-block">
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FF5C8D] border-2 border-black" />
              <div className="relative bg-white border-2 border-black px-5 sm:px-8 py-2 text-center shadow-sm">
                <span className="text-lg sm:text-2xl font-black italic tracking-wider text-black">
                  主线任务
                </span>
              </div>
            </div>

            {/* Center Axis Top Chevron Badge (^) */}
            <div className="w-8 h-8 rounded-lg border-2 border-black bg-white flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000] z-20">
              <ChevronUp className="w-5 h-5 stroke-[3] text-black" />
            </div>

            {/* Right: 支线任务 (White sticker with green 3D offset layer) */}
            <div className="relative inline-block">
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4ADE80] border-2 border-black" />
              <div className="relative bg-white border-2 border-black px-5 sm:px-8 py-2 text-center shadow-sm">
                <span className="text-lg sm:text-2xl font-black italic tracking-wider text-black">
                  支线任务
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Nodes Container */}
          <div className="relative max-w-5xl xl:max-w-6xl mx-auto">
            
            {/* Central Vertical Dashed Line connecting down from the chevron button */}
            <div className="absolute left-1/2 -top-6 bottom-4 w-0 border-r-2 border-dashed border-black -translate-x-1/2 z-0" />

            {/* Timeline Events List */}
            <div className="space-y-10 sm:space-y-12 relative z-10">
              {QUEST_TIMELINE.map((item) => {
                const isMain = item.type === 'main';
                const accentBg = item.tagBg || (isMain ? 'bg-[#2563EB]' : 'bg-[#FF5C8D]');
                const isIconLight = item.iconLight ?? isMain;

                return (
                  <div key={item.id} className="relative grid grid-cols-12 items-center gap-2 sm:gap-4">
                    
                    {/* LEFT COLUMN: Main Quest Card (left-aligned icon, tag, date) */}
                    <div className="col-span-5 flex justify-end">
                      {isMain && (
                        <motion.div 
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="relative w-full max-w-sm sm:max-w-md lg:max-w-[460px] xl:max-w-[500px]"
                        >
                          {/* 3D Offset Color Layer */}
                          <div className={`absolute inset-0 translate-x-2 translate-y-2 rounded-[20px] border-2 border-black ${accentBg}`} />
                          
                          {/* Main White Card */}
                          <div className="relative bg-white rounded-[20px] border-2 border-black p-3.5 sm:p-4 flex items-center gap-3 shadow-sm">
                            {/* Left Square Icon Badge */}
                            <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000] ${accentBg}`}>
                              {getTimelineIcon(item.icon, isIconLight)}
                            </div>
                            
                            {/* Card Content */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="bg-black text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded leading-none">
                                  【主线】
                                </span>
                                <span className="text-xs sm:text-sm font-black font-mono text-black">
                                  {item.monthDate}
                                </span>
                              </div>
                              <h4 className="font-black text-xs sm:text-sm md:text-base text-black tracking-tight leading-snug">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* CENTER COLUMN: Concentric Target Bullseye Node */}
                    <div className="col-span-2 flex justify-center z-10">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
                        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-black" />
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Branch Quest Card (right-aligned icon) */}
                    <div className="col-span-5 flex justify-start">
                      {!isMain && (
                        <motion.div 
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="relative w-full max-w-sm sm:max-w-md lg:max-w-[460px] xl:max-w-[500px]"
                        >
                          {/* 3D Offset Color Layer */}
                          <div className={`absolute inset-0 translate-x-2 translate-y-2 rounded-[20px] border-2 border-black ${accentBg}`} />
                          
                          {/* Main White Card */}
                          <div className="relative bg-white rounded-[20px] border-2 border-black p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-sm">
                            {/* Card Content */}
                            <div className="min-w-0 flex-1 text-left">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs sm:text-sm font-black font-mono text-black">
                                  {item.monthDate}
                                </span>
                                <span className="bg-black text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded leading-none">
                                  【支线】
                                </span>
                              </div>
                              <h4 className="font-black text-xs sm:text-sm md:text-base text-black tracking-tight leading-snug">
                                {item.title}
                              </h4>
                            </div>

                            {/* Right Square Icon Badge */}
                            <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#000] ${accentBg}`}>
                              {getTimelineIcon(item.icon, isIconLight)}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};
