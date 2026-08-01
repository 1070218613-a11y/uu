import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const EducationTab: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      
      {/* Title Header */}
      <div className="inline-block bg-white border-3 border-black px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#4ADE80] -rotate-1">
        <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-[#4ADE80]" /> 教育背景
        </h1>
      </div>

      {/* Main School Showcase Card */}
      <div className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden space-y-8">
        
        {/* Top Header Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b-3 border-black pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-black text-black">
                {EDUCATION_DATA.school}
              </h2>
              <span className="bg-[#FEF08A] text-black text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                {EDUCATION_DATA.degree}
              </span>
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
            <span
              key={idx}
              className="px-3.5 py-1.5 bg-[#4ADE80] text-black font-black text-xs rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000]"
            >
              🎓 {badge}
            </span>
          ))}
        </div>

        {/* Description Narrative */}
        <div className="p-5 bg-emerald-50/80 border-2 border-black rounded-2xl text-gray-800 font-medium text-sm leading-relaxed space-y-2">
          <p className="font-bold text-black text-base flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" /> 求学感悟与训练
          </p>
          <p>{EDUCATION_DATA.description}</p>
        </div>

        {/* Core Coursework Grid */}
        <div className="space-y-3">
          <h3 className="font-black text-lg text-black flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" /> 核心专业课程
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {EDUCATION_DATA.courses.map((course, i) => (
              <div
                key={i}
                className="bg-white p-3 rounded-xl border-2 border-black font-bold text-xs text-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                <span>{course}</span>
              </div>
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
              <div
                key={i}
                className="bg-yellow-50 p-3.5 rounded-xl border-2 border-black font-bold text-xs text-gray-900 shadow-[3px_3px_0px_0px_#000] flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{ach}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
