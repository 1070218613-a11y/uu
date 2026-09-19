import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const EducationTab: React.FC = () => {
  return (
    <div className="space-y-10">
      
      {/* Title Header */}
      <motion.div 
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="inline-block bg-white border-[1.5px] border-black px-6 py-2 rounded-2xl shadow-[3px_3px_0px_0px_#4ADE80] -rotate-1 cursor-default"
      >
        <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-[#4ADE80]" /> 教育背景
        </h1>
      </motion.div>

      {/* Main School Showcase Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border-[1.5px] border-black p-6 sm:p-10 shadow-[5px_5px_0px_0px_#000] relative overflow-hidden space-y-8"
      >
        
        {/* Top Header Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-black pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-black text-black">
                {EDUCATION_DATA.school}
              </h2>
              <motion.span 
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="bg-[#FEF08A] text-black text-xs font-black px-3 py-1 rounded-full border border-black shadow-[1px_1px_0px_0px_#000] cursor-default inline-block"
              >
                {EDUCATION_DATA.degree}
              </motion.span>
            </div>

            <p className="text-base sm:text-lg font-bold text-gray-800">
              专业：<span className="bg-sky-100 px-2 py-0.5 rounded border border-black">{EDUCATION_DATA.major}</span>
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 text-xs font-bold text-gray-700">
            <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg border border-black">
              <Calendar className="w-3.5 h-3.5 text-blue-600" /> {EDUCATION_DATA.period}
            </span>
            <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg border border-black">
              <MapPin className="w-3.5 h-3.5 text-red-500" /> {EDUCATION_DATA.location}
            </span>
          </div>
        </div>

        {/* Badges Bar */}
        <div className="flex flex-wrap gap-2">
          {EDUCATION_DATA.badges.map((badge, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-1.5 bg-[#4ADE80] text-black font-black text-xs rounded-xl border border-black shadow-[1.5px_1.5px_0px_0px_#000] cursor-pointer select-none"
            >
              🎓 {badge}
            </motion.span>
          ))}
        </div>

        {/* Description Narrative */}
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="p-5 bg-emerald-50/80 border border-black rounded-2xl text-gray-800 font-medium text-sm leading-relaxed space-y-2"
        >
          <p className="font-bold text-black text-base flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" /> 求学感悟与训练
          </p>
          <p>{EDUCATION_DATA.description}</p>
        </motion.div>

        {/* Core Coursework Grid */}
        <div className="space-y-3">
          <h3 className="font-black text-lg text-black flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" /> 核心专业课程
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {EDUCATION_DATA.courses.map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.03 }}
                className="bg-white p-3 rounded-xl border border-black font-bold text-xs text-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-2 cursor-default transition-shadow"
              >
                <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                <span>{course}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Honors & Campus Achievements */}
        <div className="space-y-3 pt-2">
          <h3 className="font-black text-lg text-black flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" /> 荣誉与校园实践
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EDUCATION_DATA.achievements.map((ach, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, x: 2 }}
                className="bg-yellow-50 p-3.5 rounded-xl border border-black font-bold text-xs text-gray-900 shadow-[2px_2px_0px_0px_#000] flex items-start gap-2.5 cursor-default transition-shadow"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{ach}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>

    </div>
  );
};
