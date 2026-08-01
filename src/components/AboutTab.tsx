import React from 'react';
import { PERSONAL_INFO, RECENT_UPDATES, QUEST_TIMELINE } from '../data/portfolioData';
import { BookOpen, Tv, Code2, Sparkles, Gamepad2, ArrowLeft, ArrowRight } from 'lucide-react';

export const AboutTab: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 animate-in fade-in duration-300">
      
      {/* Top Banner & ID Card Section */}
      <section className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Big Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
                Welcome to
              </h1>
              <div className="inline-block bg-[#3B82F6] text-white px-5 py-2 rounded-2xl border-3 border-black shadow-[4px_4px_0px_0px_#000] -rotate-1">
                <span className="text-2xl sm:text-4xl font-black">{PERSONAL_INFO.name}的世界！</span>
              </div>
            </div>

            {/* Paragraph 1 */}
            <div className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium space-y-3">
              <p>
                我出生于 2000 年 5 月，在浙江的一个小村镇长大。家庭环境比较自由，家人都不会对我的选择做过多干涉。这导致我在肆意生长的过程中，拥有了很多复杂的成分。Anyway，欢迎来到西门的世界！
              </p>
              
              <p className="p-3 bg-pink-50 border-2 border-black rounded-xl font-bold text-gray-900">
                我是一只 <span className="bg-pink-300 px-1.5 py-0.5 rounded border border-black">高精力死宅</span>，对出去游山玩水无感，但精力异常旺盛，脑子里 Idea 疯狂溢出。现实中轻微社恐，但在网络上结交了一群素未谋面的电子好友！
              </p>

              <p>
                目前在一家 995 的 toB 软件公司做产品经理，同时也是一名 B 站小 up 主。还佛系经营了一家女生情趣用品小店（尽管我观念还是比较传统，咳咳）。
              </p>
            </div>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#FEF08A] border-2 border-black rounded-lg text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
                🌱 2000年白羊座
              </span>
              <span className="px-3 py-1 bg-[#6EE7B7] border-2 border-black rounded-lg text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
                🎓 SJTU 电气工程
              </span>
              <span className="px-3 py-1 bg-[#F472B6] border-2 border-black rounded-lg text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
                💻 toB 软件 PM
              </span>
              <span className="px-3 py-1 bg-[#A78BFA] border-2 border-black rounded-lg text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
                ⚡ Vibe Coder
              </span>
            </div>

          </div>

          {/* Right ID Card Visual Element (Matching Screenshot 2 & 3) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-[#52E595] border-3 sm:border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0px_0px_#000] space-y-4">
              
              {/* Sticker overlay top right */}
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-[#FF5C8D] border-2 border-black rounded-full flex flex-col items-center justify-center font-black text-[10px] text-black shadow-[3px_3px_0px_0px_#000] rotate-12 z-20">
                <span className="text-base">😊</span>
                <span>XMMXOVO</span>
              </div>

              {/* ID Card Header */}
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div>
                  <h3 className="font-black text-lg text-black">身份证</h3>
                  <p className="text-[10px] font-extrabold tracking-wider text-black">SHANGHAI JIAOTONG UNIVERSITY</p>
                </div>
                <Sparkles className="w-5 h-5 text-black" />
              </div>

              {/* Card Main Body */}
              <div className="grid grid-cols-12 gap-3 items-center">
                
                {/* Avatar Box */}
                <div className="col-span-5 bg-white border-2 border-black rounded-2xl p-2 shadow-[2px_2px_0px_0px_#000] flex flex-col items-center justify-center aspect-4/5">
                  <div className="w-20 h-20 bg-pink-100 rounded-full border-2 border-black overflow-hidden flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#FFE4E6" />
                      <ellipse cx="50" cy="58" rx="22" ry="24" fill="#FDE68A" stroke="#000" strokeWidth="2" />
                      <circle cx="41" cy="56" r="2.5" fill="#000" />
                      <circle cx="59" cy="56" r="2.5" fill="#000" />
                      <path d="M 46 66 Q 50 70 54 66" fill="none" stroke="#000" strokeWidth="2" />
                      <path d="M 25 45 C 25 15, 75 15, 75 45" fill="#18181B" stroke="#000" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="mt-2 text-[10px] font-black text-black bg-yellow-200 px-1.5 py-0.5 rounded border border-black">
                    交大老学姐
                  </span>
                </div>

                {/* Info Fields Column */}
                <div className="col-span-7 space-y-2">
                  
                  {/* Field 1: Name */}
                  <div className="bg-[#FEF08A] border-2 border-black rounded-xl p-2 shadow-[2px_2px_0px_0px_#000]">
                    <span className="text-[9px] font-black text-gray-700 block">名称</span>
                    <span className="text-base font-black text-black">{PERSONAL_INFO.name}</span>
                  </div>

                  {/* Field 2: Major */}
                  <div className="bg-[#CBE4FF] border-2 border-black rounded-xl p-2 shadow-[2px_2px_0px_0px_#000]">
                    <span className="text-[9px] font-black text-gray-700 block">专业 / 学系</span>
                    <span className="text-xs font-black text-black">{PERSONAL_INFO.major}</span>
                  </div>

                  {/* Field 3: Job */}
                  <div className="bg-[#E9D5FF] border-2 border-black rounded-xl p-2 shadow-[2px_2px_0px_0px_#000]">
                    <span className="text-[9px] font-black text-gray-700 block">工作</span>
                    <span className="text-xs font-black text-black">{PERSONAL_INFO.currentRole}</span>
                  </div>

                </div>

              </div>

              {/* Bottom Badges & Barcode */}
              <div className="pt-2 space-y-2 border-t-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="bg-[#3B82F6] text-white text-[10px] font-black px-2 py-0.5 rounded border border-black">
                    {PERSONAL_INFO.birthDate}
                  </span>
                  <span className="bg-[#FF5C8D] text-white text-[10px] font-black px-2 py-0.5 rounded border border-black">
                    {PERSONAL_INFO.hometown}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-gray-800 ml-auto">
                    ID: {PERSONAL_INFO.idCardNo}
                  </span>
                </div>

                {/* Simulated Barcode */}
                <div className="bg-white border-2 border-black rounded-xl p-2 shadow-[2px_2px_0px_0px_#000] flex flex-col items-center justify-center">
                  <div className="w-full h-7 flex justify-between items-center px-2">
                    {[3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6].map((w, idx) => (
                      <div
                        key={idx}
                        className="bg-black h-full"
                        style={{ width: `${(w % 3) + 1.5}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-gray-500 mt-1">
                    VERIFIED · SHANGHAI JIAOTONG UNIVERSITY
                  </span>
                </div>
              </div>

              {/* Bottom sticker overlay */}
              <div className="absolute -bottom-4 -right-2 bg-[#FF5C8D] text-black font-black text-[10px] px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000] rotate-[-6deg] z-20">
                官方氛围
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Middle Statement Box */}
      <section className="bg-white rounded-3xl border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] text-center space-y-4">
        <div className="inline-block bg-yellow-300 border-2 border-black px-6 py-2 rounded-xl shadow-[3px_3px_0px_0px_#000] -rotate-1">
          <p className="text-base sm:text-xl font-black text-black">
            每一个别人看起来非常矛盾的特质在我身上神奇地拼合
          </p>
        </div>

        <p className="text-sm sm:text-base font-bold text-gray-800 max-w-2xl mx-auto leading-relaxed">
          我正在朝着自己喜欢的方向前进！不知道 3年 5年 10年后的我会成为什么样的人，过上什么样的生活呢？
        </p>
      </section>

      {/* 近日生活 | RECENT UPDATES */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="inline-block bg-[#FF5C8D] text-white border-3 border-black px-5 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#000]">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              近日生活 | RECENT UPDATES
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button className="w-8 h-8 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:bg-gray-100">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECENT_UPDATES.map((up) => {
            let IconComponent = BookOpen;
            if (up.type === 'watching') IconComponent = Tv;
            if (up.type === 'interest') IconComponent = Code2;

            return (
              <div
                key={up.id}
                className={`bg-white border-3 border-black rounded-2xl p-5 shadow-[5px_5px_0px_0px_#000] flex items-center gap-4 hover:translate-y-[-2px] transition-transform`}
              >
                <div className={`w-12 h-12 rounded-2xl border-2 border-black ${up.iconBg} flex items-center justify-center text-white shrink-0 shadow-[2px_2px_0px_0px_#000]`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-gray-500 block">
                    {up.title}
                  </span>
                  <span className="text-base font-black text-black">
                    {up.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 地球Online 开放游戏进度 Timeline (Matching Screenshot 3) */}
      <section className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] space-y-8">
        
        {/* Timeline Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-3 text-2xl sm:text-4xl font-black text-black">
            <span>地球Online</span>
            <span className="bg-[#FF5C8D] text-black px-4 py-1 rounded-2xl border-3 border-black shadow-[4px_4px_0px_0px_#000] -rotate-1">
              开放游戏进度
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-gray-600">
            RECORD OF EARTH ONLINE QUEST PROGRESS
          </p>
        </div>

        {/* Quest Columns Header */}
        <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto text-center font-black">
          <div className="bg-[#FEF08A] border-2 border-black py-2 rounded-xl shadow-[3px_3px_0px_0px_#000]">
            主线任务
          </div>
          <div className="bg-[#6EE7B7] border-2 border-black py-2 rounded-xl shadow-[3px_3px_0px_0px_#000]">
            支线任务
          </div>
        </div>

        {/* Timeline Nodes Container */}
        <div className="relative max-w-3xl mx-auto pt-6 pb-4">
          
          {/* Central Vertical Dotted Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 border-r-3 border-dashed border-black -translate-x-1/2" />

          <div className="space-y-8 relative">
            {QUEST_TIMELINE.map((item) => {
              const isMain = item.type === 'main';

              return (
                <div key={item.id} className="relative grid grid-cols-12 items-center gap-4">
                  
                  {/* Left Column (Main Quest if isMain) */}
                  <div className="col-span-5 text-right">
                    {isMain && (
                      <div className="inline-block bg-white border-2 border-black p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_#000] max-w-xs text-left">
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
                    <div className="w-9 h-9 rounded-full bg-white border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000]">
                      <div className={`w-3.5 h-3.5 rounded-full ${isMain ? 'bg-[#3B82F6]' : 'bg-[#FF5C8D]'}`} />
                    </div>
                  </div>

                  {/* Right Column (Branch Quest if not isMain) */}
                  <div className="col-span-5 text-left">
                    {!isMain && (
                      <div className="inline-block bg-white border-2 border-black p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_#000] max-w-xs">
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
