import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectInfo } from '../data/portfolioData';
import { FolderGit2, Search, ExternalLink, Sparkles, Filter } from 'lucide-react';

interface ProjectsTabProps {
  onOpenProject: (proj: ProjectInfo) => void;
}

export const ProjectsTab: React.FC<ProjectsTabProps> = ({ onOpenProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI', 'toB Product', 'Frontend', 'Side Project'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      
      {/* Title Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-block bg-white border-3 border-black px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#A855F7] -rotate-1">
          <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight flex items-center gap-3">
            <FolderGit2 className="w-8 h-8 text-[#A855F7]" /> 作品项目
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="搜索项目或关键词..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-2 border-black rounded-2xl pl-10 pr-4 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-3 border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000]">
        <span className="text-xs font-black text-gray-600 flex items-center gap-1 mr-2 pl-1">
          <Filter className="w-3.5 h-3.5" /> 分类:
        </span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border-2 ${
                isActive
                  ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_#A855F7]'
                  : 'bg-gray-50 border-gray-300 text-gray-800 hover:border-black'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => onOpenProject(proj)}
            className="group cursor-pointer bg-white rounded-3xl border-3 sm:border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000] transition-all flex flex-col justify-between space-y-6"
          >
            {/* Top Banner Box */}
            <div className={`p-5 ${proj.coverColor} border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000] flex flex-col justify-between space-y-3`}>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 text-xs font-black text-white border-2 border-black rounded-md ${proj.tagBg} shadow-[1px_1px_0px_0px_#000]`}>
                  {proj.category}
                </span>
                <Sparkles className="w-4 h-4 text-black" />
              </div>

              <div>
                <h3 className="text-xl font-black text-black group-hover:text-purple-700 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-bold text-gray-700 mt-1">
                  {proj.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed line-clamp-3">
              {proj.description}
            </p>

            {/* Tags & Action Button */}
            <div className="space-y-4 pt-2 border-t-2 border-dashed border-gray-200">
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-0.5 bg-yellow-50 border border-black rounded-md text-[11px] font-bold">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-black">
                <span className="flex items-center gap-1 text-purple-700 font-black">
                  <ExternalLink className="w-3.5 h-3.5" /> 查看产品详情
                </span>
                <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-black group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
