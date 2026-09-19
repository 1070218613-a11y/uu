import React from 'react';
import { motion } from 'motion/react';
import { ProjectInfo } from '../data/portfolioData';
import { FolderGit2, Sparkles, Code2, Terminal, Rocket, Cpu } from 'lucide-react';

interface ProjectsTabProps {
  onOpenProject?: (proj: ProjectInfo) => void;
}

export const ProjectsTab: React.FC<ProjectsTabProps> = () => {
  return (
    <div className="space-y-10">
      
      {/* Title Header & SEO Introduction */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.div 
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="inline-block bg-white border-[1.5px] border-black px-6 py-2 rounded-2xl shadow-[3px_3px_0px_0px_#A855F7] -rotate-1 cursor-default"
          >
            <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight flex items-center gap-3">
              <FolderGit2 className="w-8 h-8 text-[#A855F7]" /> 作品项目
            </h1>
          </motion.div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-purple-100 text-purple-900 border border-black rounded-xl text-xs font-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
              AI & Vibe Coding Space
            </span>
          </div>
        </div>

        {/* SEO / AI & Vibe Coding Statement Box */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-[1.5px] border-black p-5 sm:p-7 rounded-3xl shadow-[4px_4px_0px_0px_#A855F7] space-y-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-[#A855F7] text-white text-xs font-black rounded-lg border border-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> AI 原生创新
            </span>
            <span className="px-3 py-1 bg-[#FEF08A] text-black text-xs font-black rounded-lg border border-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" /> Vibe Coding 深度实践
            </span>
            <span className="px-3 py-1 bg-[#DCFCE7] text-emerald-900 text-xs font-black rounded-lg border border-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> 创意敏捷工程化
            </span>
          </div>

          <p className="text-sm sm:text-base font-normal text-gray-800 leading-relaxed">
            作为一名狂热的 AI 探索者与 <strong>Vibe Coding（直觉流编程）</strong>践行者，我热衷于将产品感性直觉与大模型前沿智能深度融合。通过 LLM、AI Agent 智能体以及现代 AIGC 工具链，打破传统设计与工程研发之间的认知壁垒，在灵感涌现的瞬间完成从概念构想、交互原型到全栈可交互代码的极速落地。我享受“心流驱动、人机共创”的 Vibe Coding 过程，致力于持续探索 AI-Native 原生产品在真实商业与用户场景中的无限可能。
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-dashed border-gray-200 text-xs">
            <span className="font-black text-black">关键词 / SEO Tags：</span>
            {[
              '#AI产品经理',
              '#VibeCoding',
              '#AI直觉编程',
              '#AI-Native应用',
              '#Agent智能体协同',
              '#Prompt工程与大模型应用',
              '#全栈极速原型验证',
              '#人机协同创新'
            ].map((tag, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-900 border border-gray-300 hover:border-black rounded-lg transition-colors font-medium cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cleared Content / Coming Soon State */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl border-[1.5px] border-black p-8 sm:p-14 shadow-[5px_5px_0px_0px_#000] text-center space-y-5"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-purple-100 border-[2px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#A855F7]">
          <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-[#A855F7] animate-bounce" />
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <h3 className="text-xl sm:text-2xl font-black text-black">
            新一代 AI & Vibe Coding 作品打磨中
          </h3>
          <p className="text-xs sm:text-sm font-normal text-gray-600 leading-relaxed">
            作品项目内容目前已清空重构。更多基于大语言模型、智能体工作流与 Vibe Coding 模式从 0 到 1 打造的 AI-Native 实战产品即将陆续更新上线，敬请期待！
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-black rounded-2xl text-xs font-black shadow-[2px_2px_0px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>正在构建：多模态智能体助手 & 个性化生成式工作流</span>
        </div>
      </motion.div>

    </div>
  );
};
