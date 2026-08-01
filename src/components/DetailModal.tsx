import React from 'react';
import { X, ExternalLink, Calendar, Eye, ThumbsUp, Tag, Sparkles } from 'lucide-react';
import { Article, VideoItem, ProjectInfo, ExperienceInfo } from '../data/portfolioData';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    type: 'article' | 'video' | 'project' | 'experience';
    item: Article | VideoItem | ProjectInfo | ExperienceInfo;
  } | null;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const { type, item } = data;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-3 sm:border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-black bg-[#FF5C8D] text-black font-bold flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article View */}
        {type === 'article' && (() => {
          const art = item as Article;
          return (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-sm font-bold border-2 border-black rounded-md ${art.tagColor} text-black shadow-[2px_2px_0px_0px_#000]`}>
                  {art.category}
                </span>
                <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {art.date}
                </span>
                <span className="text-sm font-semibold text-gray-500">· {art.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight">
                {art.title}
              </h2>

              <div className="p-4 bg-gray-100 border-2 border-black rounded-xl text-gray-700 italic font-medium">
                "{art.summary}"
              </div>

              <div className="prose max-w-none text-base leading-relaxed text-gray-800 space-y-4 pt-2">
                <p>{art.content}</p>
                <p>
                  生活在数字时代的缝隙中，我们都是彼此漫游宇宙时交集的微星。文字是我记录思考与记录日常的最真挚表达。
                </p>
              </div>

              <div className="pt-6 border-t-2 border-dashed border-gray-300 flex items-center justify-between">
                {art.linkUrl ? (
                  <a
                    href={art.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5C8D] text-white font-black border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_#000] hover:bg-pink-600 transition-colors"
                  >
                    <span>前往微信公众号阅读原文</span> <ExternalLink className="w-4 h-4" />
                  </a>
                ) : <div />}
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 font-black bg-yellow-300 border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400"
                >
                  关闭阅读
                </button>
              </div>
            </div>
          );
        })()}

        {/* Video View */}
        {type === 'video' && (() => {
          const vid = item as VideoItem;
          return (
            <div className="space-y-6">
              <div className={`w-full h-48 sm:h-56 ${vid.coverBg} border-3 border-black rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-[4px_4px_0px_0px_#000]`}>
                <span className={`self-start px-3 py-1 font-black text-xs border-2 border-black rounded-md ${vid.tagBg} text-white shadow-[1px_1px_0px_0px_#000]`}>
                  {vid.platform}
                </span>

                <div className="z-10 bg-white/90 backdrop-blur-xs border-2 border-black p-3 rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <h3 className="font-black text-lg text-black">{vid.title}</h3>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold text-black z-10">
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-black">
                    <Eye className="w-3.5 h-3.5" /> {vid.views} 播放
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-black">
                    <ThumbsUp className="w-3.5 h-3.5" /> {vid.likes} 点赞
                  </span>
                  <span className="bg-black text-white px-2 py-1 rounded">
                    {vid.duration}
                  </span>
                </div>
              </div>

              <div className="p-4 border-2 border-black rounded-2xl bg-yellow-50 space-y-3">
                <h4 className="font-bold text-black flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500" /> B站UP主日常灵感记录
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  这条视频记录了关于日常职场、生活思考以及元气能量的探索。欢迎到 B 站搜索「西门美月勾」关注更多精彩内容！
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-gray-300">
                <a
                  href="https://space.bilibili.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5C8D] text-white font-bold border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_#000] hover:bg-pink-600 transition-colors"
                >
                  前往 B站 观看原视频 <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 font-bold bg-gray-100 border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000]"
                >
                  关闭
                </button>
              </div>
            </div>
          );
        })()}

        {/* Project View */}
        {type === 'project' && (() => {
          const proj = item as ProjectInfo;
          return (
            <div className="space-y-6">
              <div className={`p-6 ${proj.coverColor} border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000]`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 font-bold text-xs border-2 border-black rounded-md ${proj.tagBg} text-white shadow-[1px_1px_0px_0px_#000]`}>
                    {proj.category}
                  </span>
                  <span className="text-xs font-bold text-black bg-white px-2.5 py-1 rounded-full border border-black">
                    PROJECT SHOWCASE
                  </span>
                </div>
                <h2 className="text-2xl font-black text-black">{proj.title}</h2>
                <p className="text-sm font-semibold text-gray-700 mt-1">{proj.subtitle}</p>
              </div>

              <div>
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4" /> 项目概述
                </h4>
                <p className="text-gray-800 leading-relaxed text-sm bg-gray-50 p-4 border-2 border-black rounded-xl">
                  {proj.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-black mb-2">核心亮点与设计要点</h4>
                <ul className="space-y-2">
                  {proj.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-yellow-300 border border-black flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black mb-2">使用技术 & 标签</h4>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white border-2 border-black rounded-lg text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-dashed border-gray-300 flex items-center justify-between">
                {proj.demoUrl ? (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5C8D] text-white font-black border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_#000] hover:bg-pink-600 transition-colors"
                  >
                    <span>前往微信公众号阅读原文</span> <ExternalLink className="w-4 h-4" />
                  </a>
                ) : <div />}
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-black text-white font-bold rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#FF5C8D]"
                >
                  了解完毕
                </button>
              </div>
            </div>
          );
        })()}

        {/* Experience View */}
        {type === 'experience' && (() => {
          const exp = item as ExperienceInfo;
          return (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className={`px-3 py-1 text-xs font-bold border-2 border-black rounded-md ${exp.tagBg} text-white shadow-[1px_1px_0px_0px_#000]`}>
                    {exp.type}
                  </span>
                  <h2 className="text-2xl font-black text-black mt-2">{exp.role}</h2>
                  <p className="text-base font-bold text-gray-700">{exp.company} · {exp.period}</p>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-800 bg-yellow-50 p-4 border-2 border-black rounded-xl">
                {exp.description}
              </p>

              <div>
                <h4 className="font-bold text-black mb-2">主要职责与落地成果：</h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-gray-800 flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-black">
                      <span className="font-bold text-pink-500">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.metrics && (
                <div className="bg-emerald-100 border-2 border-black p-3.5 rounded-xl font-bold text-emerald-900 text-sm flex items-center justify-between">
                  <span>重点数据转化指标:</span>
                  <span className="text-base text-black bg-white px-3 py-1 rounded-md border border-black shadow-[1px_1px_0px_0px_#000]">
                    {exp.metrics}
                  </span>
                </div>
              )}

              <div>
                <h4 className="font-bold text-black mb-2">能力栈 & 工具：</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white border border-black rounded-md text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-dashed border-gray-300 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-black text-white font-bold rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#60A5FA]"
                >
                  确认
                </button>
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
};
