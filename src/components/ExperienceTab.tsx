import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES_DATA, ExperienceInfo, ExperienceArtifact } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  Camera, 
  Image as ImageIcon, 
  Sparkles, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Upload, 
  ChevronRight,
  Eye
} from 'lucide-react';

interface ExperienceTabProps {
  onOpenExperience: (exp: ExperienceInfo) => void;
}

export const ExperienceTab: React.FC<ExperienceTabProps> = ({ onOpenExperience }) => {
  // State for opening visual artifacts gallery modal
  const [activeArtifactExp, setActiveArtifactExp] = useState<ExperienceInfo | null>(null);
  const [selectedArtifactIndex, setSelectedArtifactIndex] = useState<number>(0);
  const [artifactFilter, setArtifactFilter] = useState<string>('全部');

  // Custom uploaded photos state for persistent local preview
  const [customArtifactImages, setCustomArtifactImages] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem('user_experience_artifacts');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const handleUploadArtifact = (artifactId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          const updated = { ...customArtifactImages, [artifactId]: result };
          setCustomArtifactImages(updated);
          try {
            localStorage.setItem('user_experience_artifacts', JSON.stringify(updated));
          } catch {
            // ignore storage limit
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const openArtifactGallery = (exp: ExperienceInfo, index = 0) => {
    setActiveArtifactExp(exp);
    setSelectedArtifactIndex(index);
    setArtifactFilter('全部');
  };

  return (
    <div className="space-y-12 pb-10">
      
      {/* Page Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <motion.div 
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="inline-block bg-white border-[1.5px] border-black px-6 py-2 rounded-2xl shadow-[3px_3px_0px_0px_#2563EB] -rotate-1 cursor-default"
        >
          <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-[#2563EB]" /> 工作经历
          </h1>
        </motion.div>

        {/* Sub-pill badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3.5 py-1.5 bg-yellow-100 text-black border border-black rounded-xl text-xs font-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-black" /> 按时间先后顺序排版
          </span>
          <span className="px-3.5 py-1.5 bg-[#DCFCE7] text-emerald-900 border border-black rounded-xl text-xs font-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> 支持脱敏产物与证据查看
          </span>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        
        {/* Central Vertical Timeline Line (Desktop: centered; Mobile: along left) */}
        <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2.5px] -translate-x-1/2 bg-black/90 z-0" />
        <div className="lg:hidden absolute left-5 sm:left-7 top-6 bottom-6 w-[2.5px] bg-black/90 z-0" />

        {/* Timeline Items List */}
        <div className="space-y-14 lg:space-y-20 relative z-10">
          {EXPERIENCES_DATA.map((exp, idx) => {
            const isFirst = idx === 0; // 01 蚂蚁集团 (Left: Info, Right: Photo)
            const isSecond = idx === 1; // 02 字节跳动 (Left: Photo, Right: Info)
            const mainPhoto = customArtifactImages[exp.artifacts[0]?.id] || exp.fieldNotePhoto;

            return (
              <div key={exp.id} className="relative">
                
                {/* Node Badge 01 / 02 (Centered on desktop timeline stem) */}
                <div className="flex items-center justify-start lg:justify-center mb-4 lg:mb-0">
                  <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-8 z-20">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      className="w-10 h-10 rounded-full bg-[#7C3AED] text-white border-[2.5px] border-black flex items-center justify-center font-black text-sm shadow-[2.5px_2.5px_0px_0px_#000] select-none"
                    >
                      {exp.timelineIndex}
                    </motion.div>
                  </div>
                </div>

                {/* Alternating 2-Column Grid with Increased Timeline Clearance */}
                <div className="pl-14 sm:pl-20 lg:pl-0 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-24 xl:gap-x-28 items-stretch">
                  
                  {/* Item 1: Left is Info Card; Item 2: Left is Photo Card */}
                  {isFirst ? (
                    <>
                      {/* Left: Info Card */}
                      <div className="lg:col-span-6 flex flex-col justify-between">
                        <InfoCard 
                          exp={exp} 
                          onOpenDetails={() => onOpenExperience(exp)}
                        />
                      </div>

                      {/* Right: Photo Card */}
                      <div className="lg:col-span-6 flex flex-col justify-between">
                        <PhotoCard 
                          exp={exp}
                          mainPhoto={mainPhoto}
                          onOpenGallery={() => openArtifactGallery(exp, 0)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Photo Card (in order on desktop: left column) */}
                      <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
                        <PolaroidCollageCard 
                          exp={exp}
                          mainPhoto={mainPhoto}
                          onOpenGallery={() => openArtifactGallery(exp, 0)}
                        />
                      </div>

                      {/* Right: Info Card */}
                      <div className="lg:col-span-6 flex flex-col justify-between order-1 lg:order-2">
                        <InfoCard 
                          exp={exp} 
                          onOpenDetails={() => onOpenExperience(exp)}
                        />
                      </div>
                    </>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Artifacts & Evidence Gallery Modal */}
      <AnimatePresence>
        {activeArtifactExp && (
          <ArtifactGalleryModal 
            exp={activeArtifactExp}
            selectedIndex={selectedArtifactIndex}
            setSelectedIndex={setSelectedArtifactIndex}
            activeFilter={artifactFilter}
            setActiveFilter={setArtifactFilter}
            customImages={customArtifactImages}
            onUpload={handleUploadArtifact}
            onClose={() => setActiveArtifactExp(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
};

// ==========================================
// Subcomponent 1: Left/Right Information Card
// ==========================================
interface InfoCardProps {
  exp: ExperienceInfo;
  onOpenDetails: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ exp, onOpenDetails }) => {
  return (
    <motion.div 
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-[24px] border-[2px] border-black p-6 sm:p-7 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-shadow flex flex-col justify-between h-full space-y-5"
    >
      <div className="space-y-4">
        {/* Top Date & Role Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-sm font-black text-amber-900 bg-[#FEF3C7] border border-black px-3 py-1 rounded-xl shadow-[1.5px_1.5px_0px_0px_#000] tracking-wide">
            {exp.period}
          </span>
          <span className="text-xs font-black text-black bg-gray-100 border border-black px-2.5 py-0.5 rounded-lg shadow-[1px_1px_0px_0px_#000]">
            {exp.type}
          </span>
        </div>

        {/* Big Company Name */}
        <div>
          <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-none">
            {exp.company}
          </h2>
          
          {/* Stylized Gradient / Color Capsule for Role */}
          <div className="mt-2.5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm sm:text-base font-black text-white bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 border-[1.5px] border-black shadow-[2px_2px_0px_0px_#000]">
              <Sparkles className="w-4 h-4 shrink-0" />
              {exp.role}
            </span>
          </div>
        </div>

        {/* Short Summary Bullet Points */}
        <div className="space-y-2 pt-1">
          <p className="text-xs font-black text-gray-500 tracking-wider">
            工作内容概括：
          </p>
          <ul className="space-y-2">
            {exp.shortSummary.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-gray-700 font-normal flex items-start gap-2 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                <span className="font-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Business Indicators / Metrics */}
        {exp.metrics && (
          <div className="bg-[#D1FAE5] border-[1.5px] border-black p-3.5 sm:p-4 rounded-2xl shadow-[2px_2px_0px_0px_#000] space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900">
              <TrendingUp className="w-4 h-4 text-emerald-700" />
              <span>关键业务指标 & 落地增长：</span>
            </div>
            <p className="text-xs sm:text-sm font-normal text-emerald-950 leading-relaxed pt-0.5">
              {exp.metrics}
            </p>
          </div>
        )}

        {/* Tech Stack & Tools Section */}
        {exp.techStack && exp.techStack.length > 0 && (
          <div className="space-y-2 pt-1">
            <h4 className="text-xs sm:text-sm font-black text-black tracking-wide">
              能力栈 & 工具：
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 bg-white text-black border border-black rounded-md text-xs font-bold shadow-[1px_1px_0px_0px_#000]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Button to Open Detailed Responsibilities Modal */}
      <div className="pt-2 border-t border-dashed border-gray-300 flex items-center justify-between gap-2">
        <span className="text-[11px] font-bold text-gray-400">
          完整 PRD 与落地细节
        </span>

        <motion.button
          onClick={onOpenDetails}
          whileHover={{ scale: 1.04, x: 2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black shadow-[2.5px_2.5px_0px_0px_#FF5C8D] hover:bg-gray-800 transition-colors cursor-pointer shrink-0 group"
        >
          <span>查看详细负责内容</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
            className="inline-flex items-center"
          >
            <ArrowRight className="w-4 h-4 text-[#FF85A1] group-hover:text-white transition-colors" />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

// ==========================================
// Subcomponent 2: Landscape Photo Card (Ant Style)
// ==========================================
interface PhotoCardProps {
  exp: ExperienceInfo;
  mainPhoto: string;
  onOpenGallery: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ exp, mainPhoto, onOpenGallery }) => {
  return (
    <motion.div
      onClick={onOpenGallery}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-[24px] border-[2px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all cursor-pointer group flex flex-col justify-between h-full space-y-4"
    >
      {/* Big Photo Container */}
      <div className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-[18px] border-[1.5px] border-black overflow-hidden bg-gray-100 shadow-[1.5px_1.5px_0px_0px_#000]">
        <img 
          src={mainPhoto} 
          alt={exp.company}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
        />

        {/* "FIELD NOTE" Watermark Badge on Photo */}
        <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-white/80 backdrop-blur-xs border border-black/40 text-[10px] font-black tracking-widest text-black/80">
          FIELD NOTE
        </div>

        {/* Hover Overlay Hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[1px] p-4 text-center">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-[2px_2px_0px_0px_#000]">
            <Eye className="w-5 h-5" />
          </div>
          <span className="text-xs sm:text-sm font-black">点击查看实习产物与脱敏截图</span>
          <span className="text-[11px] font-bold text-gray-200 mt-1">包含 PRD 架构图、评测看板与现场留影 ({exp.artifacts.length}项)</span>
        </div>
      </div>

      {/* Bottom Information & Action Bar */}
      <div className="flex items-center justify-between pt-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#DCFCE7] text-emerald-900 border border-black rounded-full text-xs font-black shadow-[1px_1px_0px_0px_#000]">
          <Camera className="w-3.5 h-3.5 text-emerald-700" />
          {exp.fieldNoteTag}
        </span>

        <span className="text-xs font-black text-gray-600 group-hover:text-black flex items-center gap-1 transition-colors">
          <span>点击照片查看</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
};

// ==========================================
// Subcomponent 3: Polaroid Collage Card (ByteDance Style)
// ==========================================
const PolaroidCollageCard: React.FC<PhotoCardProps> = ({ exp, mainPhoto, onOpenGallery }) => {
  return (
    <motion.div
      onClick={onOpenGallery}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-[24px] border-[2px] border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all cursor-pointer group flex flex-col justify-between h-full space-y-4"
    >
      {/* Polaroid Collage Frame */}
      <div className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-[18px] border-[1.5px] border-black overflow-hidden bg-[#FFFDF5] p-3 sm:p-4 flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
        
        {/* Subtle background decorative pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

        {/* Stacked Polaroids */}
        <div className="relative w-full h-full max-w-[360px] flex items-center justify-center">
          
          {/* Polaroid 1 (Left Back) */}
          <div className="absolute left-2 sm:left-4 top-2 w-[52%] bg-white p-1.5 sm:p-2 rounded-lg border-[1.5px] border-black shadow-[3px_3px_0px_0px_#000] -rotate-6 group-hover:-rotate-8 transition-transform">
            <div className="w-full aspect-square rounded border border-black/40 overflow-hidden bg-gray-100">
              <img 
                src={mainPhoto} 
                alt="Logo Wall" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-1.5 pb-0.5 text-center text-[9px] font-black tracking-wider text-gray-700">
              OFFICE FIELD NOTE
            </div>
          </div>

          {/* Polaroid 2 (Front Right) */}
          <div className="absolute right-2 sm:right-6 top-3 w-[54%] bg-white p-1.5 sm:p-2 rounded-lg border-[1.5px] border-black shadow-[4px_4px_0px_0px_#000] rotate-4 group-hover:rotate-6 transition-transform z-10">
            <div className="w-full aspect-square rounded border border-black/40 overflow-hidden bg-gray-100">
              <img 
                src={mainPhoto} 
                alt="Intern Note" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-1.5 pb-0.5 text-center text-[9px] font-black tracking-wider text-purple-800">
              HEROLING NOTE ★
            </div>
          </div>

        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[1px] p-4 text-center z-20">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-[2px_2px_0px_0px_#000]">
            <Eye className="w-5 h-5" />
          </div>
          <span className="text-xs sm:text-sm font-black">点击查看实习产物与脱敏截图</span>
          <span className="text-[11px] font-bold text-gray-200 mt-1">包含 AIGC 组件库、Prompt 规范与打卡照片 ({exp.artifacts.length}项)</span>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between pt-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F3E8FF] text-purple-900 border border-black rounded-full text-xs font-black shadow-[1px_1px_0px_0px_#000]">
          <Camera className="w-3.5 h-3.5 text-purple-700" />
          {exp.fieldNoteTag}
        </span>

        <span className="text-xs font-black text-gray-600 group-hover:text-black flex items-center gap-1 transition-colors">
          <span>点击照片查看</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
};

// ==========================================
// Subcomponent 4: Artifacts & Evidence Modal
// ==========================================
interface ArtifactGalleryModalProps {
  exp: ExperienceInfo;
  selectedIndex: number;
  setSelectedIndex: (idx: number) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  customImages: Record<string, string>;
  onUpload: (artifactId: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
}

const ArtifactGalleryModal: React.FC<ArtifactGalleryModalProps> = ({
  exp,
  selectedIndex,
  setSelectedIndex,
  activeFilter,
  setActiveFilter,
  customImages,
  onUpload,
  onClose
}) => {
  const categories = ['全部', '实地留影', '脱敏产物', '评测看板', '设计规范', '业务报表'];
  
  const filteredArtifacts = exp.artifacts.filter(art => {
    if (activeFilter === '全部') return true;
    return art.category === activeFilter;
  });

  const currentArtifact = exp.artifacts[selectedIndex] || exp.artifacts[0];
  const currentImageUrl = customImages[currentArtifact.id] || currentArtifact.imageUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl bg-white border-[2.5px] border-black rounded-[28px] shadow-[8px_8px_0px_0px_#000] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b-[2px] border-black bg-yellow-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black shadow-[2px_2px_0px_0px_#FF5C8D]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-black">
                  {exp.company} · 实习产物与脱敏证据库
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-white border border-black rounded-md text-[10px] font-black">
                  已脱敏
                </span>
              </div>
              <p className="text-xs font-bold text-gray-700">
                查看实地工作照片、PRD 架构拓扑、自动化评测看板与交付物凭据
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border-[1.5px] border-black flex items-center justify-center hover:bg-gray-100 shadow-[1.5px_1.5px_0px_0px_#000] cursor-pointer transition-transform active:scale-90"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Filter Categories Bar */}
        <div className="px-4 sm:px-6 py-2.5 border-b border-black/15 bg-gray-50 flex items-center gap-2 overflow-x-auto">
          {categories.map((cat) => {
            const count = cat === '全部' 
              ? exp.artifacts.length 
              : exp.artifacts.filter(a => a.category === cat).length;
            if (count === 0 && cat !== '全部') return null;

            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-black border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-black text-white border-black shadow-[1.5px_1.5px_0px_0px_#FF5C8D]' 
                    : 'bg-white text-black border-black/50 hover:border-black'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modal Main Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Focused Artifact Preview */}
          <div className="space-y-4">
            <div className="relative w-full aspect-16/10 sm:aspect-16/9 bg-gray-900 rounded-2xl border-[2px] border-black overflow-hidden shadow-[3px_3px_0px_0px_#000] flex items-center justify-center group">
              <img 
                src={currentImageUrl} 
                alt={currentArtifact.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-black/95"
              />

              {/* Upload / Replace Button */}
              <label 
                title="点击上传替换为您的本地截图文件"
                className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-black text-xs font-black border border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer flex items-center gap-1.5 backdrop-blur-xs transition-transform active:scale-95"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>替换为本地截图</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => onUpload(currentArtifact.id, e)} 
                  className="hidden" 
                />
              </label>
            </div>

            {/* Artifact Description Details Card */}
            <div className="p-4 sm:p-5 rounded-2xl border-[1.5px] border-black bg-white shadow-[2px_2px_0px_0px_#000] space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#3B82F6] text-white text-xs font-black border border-black shadow-[1px_1px_0px_0px_#000]">
                  {currentArtifact.category}
                </span>
                <span className="text-xs font-bold text-gray-500">
                  证据标签：{currentArtifact.tag}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-black">
                {currentArtifact.title}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed">
                {currentArtifact.description}
              </p>
            </div>
          </div>

          {/* Thumbnail Gallery Carousel */}
          <div>
            <h5 className="text-xs font-black text-gray-500 mb-2.5 tracking-wider">
              全部凭据与截图 ({exp.artifacts.length} 项)：
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {exp.artifacts.map((art, i) => {
                const isSelected = exp.artifacts[selectedIndex]?.id === art.id;
                const thumbImg = customImages[art.id] || art.imageUrl;
                return (
                  <button
                    key={art.id}
                    onClick={() => setSelectedIndex(i)}
                    className={`p-2 rounded-xl border-[1.5px] text-left transition-all cursor-pointer flex flex-col space-y-2 ${
                      isSelected
                        ? 'border-black bg-yellow-50 ring-2 ring-black shadow-[2.5px_2.5px_0px_0px_#000]'
                        : 'border-black/40 bg-white hover:border-black shadow-[1.5px_1.5px_0px_0px_#000]'
                    }`}
                  >
                    <div className="w-full aspect-16/10 rounded-lg border border-black overflow-hidden bg-gray-100">
                      <img 
                        src={thumbImg} 
                        alt={art.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-black text-black line-clamp-1">
                      {art.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-black bg-gray-50 flex items-center justify-between">
          <div className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>支持随时本地上传替换真实私密产物，刷新浏览器自动持久保存</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black text-white font-black text-xs sm:text-sm rounded-xl border border-black shadow-[2px_2px_0px_0px_#FF5C8D] hover:bg-gray-800 transition-colors"
          >
            完成查看
          </button>
        </div>

      </motion.div>
    </div>
  );
};
