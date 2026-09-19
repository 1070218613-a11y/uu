import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES_DATA, ExperienceInfo } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, TrendingUp, ChevronRight } from 'lucide-react';

interface ExperienceTabProps {
  onOpenExperience: (exp: ExperienceInfo) => void;
}

export const ExperienceTab: React.FC<ExperienceTabProps> = ({ onOpenExperience }) => {
  return (
    <div className="space-y-10">
      
      {/* Title Header */}
      <motion.div 
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="inline-block bg-white border-3 border-black px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#60A5FA] -rotate-1 cursor-default"
      >
        <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-[#60A5FA]" /> 工作经历
        </h1>
      </motion.div>

      {/* Experience List */}
      <div className="space-y-8">
        {EXPERIENCES_DATA.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.25 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] transition-shadow space-y-6"
          >
            {/* Top Info Bar */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-black pb-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-0.5 text-xs font-black text-white border-2 border-black rounded-md ${exp.tagBg} shadow-[1px_1px_0px_0px_#000]`}>
                    {exp.type}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-black">{exp.role}</h2>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-black bg-yellow-100 px-3 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base font-semibold text-gray-800 bg-gray-50 p-4 border-2 border-black rounded-2xl">
              {exp.description}
            </p>

            {/* Key Responsibilities */}
            <div className="space-y-2">
              <h4 className="font-extrabold text-sm text-black">核心职责 & 项目落地方案：</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-800 font-medium flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlight Metric */}
            {exp.metrics && (
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-[#D1FAE5] border-2 border-black p-3.5 rounded-xl font-bold text-black text-xs sm:text-sm flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-700" /> 关键业务指标增长：
                </span>
                <span className="bg-white px-2.5 py-0.5 rounded border border-black shadow-[1px_1px_0px_0px_#000] font-black">
                  {exp.metrics}
                </span>
              </motion.div>
            )}

            {/* Tech Stack & Modal Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t-2 border-dashed border-gray-200">
              <div className="flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ scale: 1.08, y: -1 }}
                    className="px-2.5 py-1 bg-white border border-black rounded-lg text-xs font-bold shadow-[1px_1px_0px_0px_#000] cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.button
                onClick={() => onOpenExperience(exp)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-gray-800 shadow-[2px_2px_0px_0px_#FF5C8D] cursor-pointer"
              >
                <span>展开详细经历</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};
