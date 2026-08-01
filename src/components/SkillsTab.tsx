import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Wrench, HeartHandshake, Zap, Flame, Youtube, BookOpen, Laptop } from 'lucide-react';

export const SkillsTab: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="inline-block bg-white border-3 border-black px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#F97316] -rotate-1">
        <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight flex items-center gap-3">
          <Wrench className="w-8 h-8 text-[#F97316]" /> 技能与爱好
        </h1>
      </div>

      {/* Skills Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_GROUPS.map((group, gIdx) => (
          <div
            key={gIdx}
            className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] space-y-6"
          >
            {/* Group Title */}
            <div className={`p-3.5 ${group.color} border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000]`}>
              <h3 className="font-black text-base sm:text-lg text-black">
                {group.category}
              </h3>
            </div>

            {/* Skill Meters List */}
            <div className="space-y-4">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-black">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      {skill.name}
                    </span>
                    <span className="bg-black text-white text-[11px] font-mono px-2 py-0.5 rounded border border-black">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Meter Progress Bar */}
                  <div className="w-full h-3.5 bg-gray-100 border-2 border-black rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bg-[#FF5C8D] border border-black rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-gray-600 font-medium pl-1">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Hobbies Showcase Section */}
      <section className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
        <div className="flex items-center gap-2 border-b-2 border-black pb-4">
          <HeartHandshake className="w-6 h-6 text-pink-600" />
          <h2 className="text-xl sm:text-2xl font-black text-black">
            生活方式 & 兴趣爆点
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="p-5 bg-pink-50 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-pink-500 text-white border-2 border-black flex items-center justify-center font-bold">
              <Youtube className="w-5 h-5" />
            </div>
            <h4 className="font-black text-base text-black">B站 UP 主自媒体</h4>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              分享科技、产品经理与高精力生活 Vlog，享受在网络世界里真诚表达与连接朋友。
            </p>
          </div>

          <div className="p-5 bg-blue-50 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500 text-white border-2 border-black flex items-center justify-center font-bold">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="font-black text-base text-black">Vibe Coding 狂热粉</h4>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              脑子里充满各种未遂 Idea，全天候尝试用自然语言与 AI 结对编程，手撕全栈工具。
            </p>
          </div>

          <div className="p-5 bg-yellow-50 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white border-2 border-black flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-black text-base text-black">深度阅读 & 独立思考</h4>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              喜欢《纳瓦尔宝典》等思维著作，相信杠杆率、知识积累与真诚生活带来的终极自由。
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
