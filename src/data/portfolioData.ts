export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  tagColor: string;
  readTime: string;
  content?: string;
  image?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  platform: string;
  views: string;
  likes: string;
  duration: string;
  coverBg: string;
  avatarText?: string;
  tagBg: string;
  videoUrl?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  monthDate: string;
  tag: string;
  tagBg: string;
  type: 'main' | 'branch'; // main = 主线任务, branch = 支线任务
  title: string;
  description?: string;
  icon?: string;
}

export interface EducationInfo {
  school: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  badges: string[];
  description: string;
  courses: string[];
  achievements: string[];
}

export interface ExperienceInfo {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  tagBg: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  metrics?: string;
}

export interface ProjectInfo {
  id: string;
  title: string;
  category: 'AI' | 'toB Product' | 'Frontend' | 'Side Project';
  subtitle: string;
  description: string;
  tags: string[];
  tagBg: string;
  demoUrl?: string;
  highlights: string[];
  coverColor: string;
  iconName: string;
}

export interface SkillGroup {
  category: string;
  color: string;
  skills: { name: string; level: number; desc: string }[];
}

export interface RecentUpdate {
  id: string;
  type: 'reading' | 'watching' | 'interest' | 'thinking';
  title: string;
  subtitle: string;
  iconBg: string;
  color: string;
}

export const PERSONAL_INFO = {
  name: "西门",
  fullName: "西门美月勾",
  englishTitle: "A Product Manager & Vibe Coder",
  practiceTime: "两年半",
  tags: ["Bilibili Creator", "Digital Writer", "Hyperactive Otaku", "toB PM by day", "Vibe Coder by night"],
  motto: "A PASSIONATE FOOOOOL !!!",
  bioShort: "出生于 2000 年 5 月，上海交通大学电气工程毕业。一只高精力死宅，脑子里 Idea 疯狂溢出！",
  birthDate: "2000.05.08",
  hometown: "浙江",
  currentRole: "toB 软件产品经理",
  university: "上海交通大学",
  major: "电气工程及其自动化",
  idCardNo: "XM-20000508-OVO",
  email: "1070218613@qq.com",
  bilibiliName: "西门美月勾",
  github: "XMMXOVO"
};

export const RECENT_UPDATES: RecentUpdate[] = [
  {
    id: "1",
    type: "reading",
    title: "最近在读",
    subtitle: "《纳瓦尔宝典》",
    iconBg: "bg-[#3B82F6]",
    color: "bg-[#CBE4FF]"
  },
  {
    id: "2",
    type: "watching",
    title: "最近狂刷",
    subtitle: "熬太线失事视频",
    iconBg: "bg-[#EC4899]",
    color: "bg-[#FCE7F3]"
  },
  {
    id: "3",
    type: "interest",
    title: "最近感兴趣",
    subtitle: "AI 编程 & Vibe Coding",
    iconBg: "bg-[#10B981]",
    color: "bg-[#D1FAE5]"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "我可有可无的网友",
    category: "随笔",
    date: "2021-08-19",
    summary: "关于那些在生命中出现又消失的数字连接。",
    tagColor: "bg-[#FF5C8D]",
    readTime: "5 min read",
    content: "数字时代的相遇充满了偶然性与流动性。有人在评论区留下共鸣，有人在深夜对谈后销声匿迹。那些看似可有可无的线上的节点，却实地构成过我们灵魂的一角。"
  },
  {
    id: "art-2",
    title: "#SJTU游离日记#0004",
    category: "日记",
    date: "2021-05-03",
    summary: "在交大的日子里，那些琐碎而真实的瞬间。",
    tagColor: "bg-[#3B82F6]",
    readTime: "4 min read",
    content: "闵行校区的大草坪、包玉刚图书馆的角落、深夜敲击键盘的实验室，电气工程的算式与脑海中不切实际的幻想并行。这是属于一个交大学生的真实片段。"
  },
  {
    id: "art-3",
    title: "关于枸杞岛和我的恋爱",
    category: "情感",
    date: "2021-02-28",
    summary: "海风、岛屿，还有那段关于夏天的记忆。",
    tagColor: "bg-[#EC4899]",
    readTime: "6 min read",
    content: "蔚蓝的海水与海岛上的风吹散了都市的嘈杂。那是一个夏天最纯粹的记忆，在微醺的海风里听浪涛声，记录下属于年轻时代的坦率与温柔。"
  },
  {
    id: "art-4",
    title: "想你的时候我不想你",
    category: "随笔",
    date: "2020-05-17",
    summary: "手香的锦桃，在深夜反复咀嚼。",
    tagColor: "bg-[#10B981]",
    readTime: "3 min read",
    content: "情绪如同夜晚的涟漪，越想平息越会荡漾开来。文字是捕捉这些隐秘思绪最好的网。"
  },
  {
    id: "art-5",
    title: "读工科的女孩",
    category: "思考",
    date: "2020-04-02",
    summary: "在代码与图纸之间，寻找属于自己的色彩。",
    tagColor: "bg-[#8B5CF6]",
    readTime: "7 min read",
    content: "作为电气工程系的少数女生，常常需要打破既定的偏见。硬核的逻辑思考与细腻感性的审美并不冲突，甚至能碰撞出极具张力的创意火花。"
  },
  {
    id: "art-6",
    title: "AI Vibe Coding 时代的极客观察",
    category: "技术",
    date: "2026-01-15",
    summary: "用自然语言手撕全栈软件，产品经理的代码革命。",
    tagColor: "bg-[#F59E0B]",
    readTime: "8 min read",
    content: "当自然语言成为新的编程语言，Idea 到 Product 的路径缩短到了极致。Vibe Coding 不仅仅是写代码，更是一种人与 AI 协同创造的直觉美学。"
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "vid-1",
    title: "有一个捧杀式领导是什么样的体验？",
    platform: "BILIBILI",
    views: "5669",
    likes: "328",
    duration: "02:27",
    coverBg: "bg-[#FFD6E8]",
    tagBg: "bg-[#FF5C8D]"
  },
  {
    id: "vid-2",
    title: "vlog. 吸取大学生的元气才能继续生存下去",
    platform: "BILIBILI",
    views: "6281",
    likes: "259",
    duration: "02:28",
    coverBg: "bg-[#E0F2FE]",
    tagBg: "bg-[#3B82F6]"
  },
  {
    id: "vid-3",
    title: "25岁纯牛马全年消费支出大盘点",
    platform: "BILIBILI",
    views: "2.2万",
    likes: "605",
    duration: "02:48",
    coverBg: "bg-[#FEF3C7]",
    tagBg: "bg-[#F59E0B]"
  },
  {
    id: "vid-4",
    title: "从小花虾到三体人：天啊这个世界真的越来越有趣了！",
    platform: "BILIBILI",
    views: "1.5万",
    likes: "477",
    duration: "03:25",
    coverBg: "bg-[#DCFCE7]",
    tagBg: "bg-[#10B981]"
  },
  {
    id: "vid-5",
    title: "粉丝眼睁睁看着我在过去一年涨了20斤",
    platform: "BILIBILI",
    views: "6.3万",
    likes: "1432",
    duration: "01:52",
    coverBg: "bg-[#F3E8FF]",
    tagBg: "bg-[#A855F7]"
  },
  {
    id: "vid-6",
    title: "过年比上班累，梦到哪句说哪句吧",
    platform: "BILIBILI",
    views: "1.1万",
    likes: "620",
    duration: "02:42",
    coverBg: "bg-[#FFE4E6]",
    tagBg: "bg-[#F43F5E]"
  }
];

export const QUEST_TIMELINE: TimelineEvent[] = [
  {
    id: "q-1",
    year: "2026",
    monthDate: "2026.01",
    tag: "突破",
    tagBg: "bg-[#FF5C8D]",
    type: "branch",
    title: "激动地开始 AI 编程，上线了自己的个人网站",
    description: "掌握 Vibe Coding，实现自然语言驱动的全栈网页打造！"
  },
  {
    id: "q-2",
    year: "2025",
    monthDate: "2025.09",
    tag: "工作",
    tagBg: "bg-[#3B82F6]",
    type: "main",
    title: "toB 软件产品经理，RPA + AI 方向",
    description: "负责企业级 AI 智能体与自动化流程融合方案。"
  },
  {
    id: "q-3",
    year: "2025",
    monthDate: "2025.04",
    tag: "突破",
    tagBg: "bg-[#10B981]",
    type: "branch",
    title: "开通股票账户，一根绿油油的小韭菜诞生！",
    description: "体会大盘起伏，深刻感悟理财与人生的自我修养。"
  },
  {
    id: "q-4",
    year: "2024",
    monthDate: "2024.11",
    tag: "突破",
    tagBg: "bg-[#EC4899]",
    type: "branch",
    title: "发布第一条抽象视频，成为 B 站 up 主",
    description: "开启创意表达与自媒体分享之路，收获了第一批忠实电子好友！"
  },
  {
    id: "q-5",
    year: "2024",
    monthDate: "2024.02",
    tag: "副业",
    tagBg: "bg-[#F59E0B]",
    type: "branch",
    title: "开了一家女生情趣玩具店",
    description: "佛系经营，关注女性身体表达与情绪探索。"
  },
  {
    id: "q-6",
    year: "2023",
    monthDate: "2023.07",
    tag: "工作",
    tagBg: "bg-[#3B82F6]",
    type: "main",
    title: "toB 软件产品经理，BI 方向",
    description: "主导商业智能数据可视化报表引擎产品的搭建与落地。"
  },
  {
    id: "q-7",
    year: "2023",
    monthDate: "2023.06",
    tag: "学业",
    tagBg: "bg-[#10B981]",
    type: "main",
    title: "本科毕业于上海交通大学，电气工程",
    description: "老学长同一学院，顺利拿到工学学士学位！"
  }
];

export const EDUCATION_DATA: EducationInfo = {
  school: "上海交通大学 (SJTU)",
  degree: "工学学士学位 (Bachelor of Engineering)",
  major: "电气工程及其自动化 (Electrical Engineering & Automation)",
  period: "2019.09 - 2023.06",
  location: "上海闵行区",
  badges: ["985 核心高校", "双一流学科", "工科强校", "优秀毕业生"],
  description: "在交大的 4 年里，接受了严谨的电工电子与计算机工程训练，奠定了深厚的系统化逻辑思维与问题拆解能力。同时积极参与校园自媒体与社团，碰撞科技与艺术的交火点。",
  courses: [
    "C/C++ 程序设计",
    "数据结构与算法",
    "电路理论",
    "模拟与数字电子技术",
    "信号与系统",
    "自动控制原理",
    "微机原理与接口技术",
    "电力电子技术"
  ],
  achievements: [
    "获得上海交通大学综合优秀奖学金",
    "全国大学生电工杯数学建模竞赛 二等奖",
    "上海交通大学机器人创客社团 核心骨干",
    "主导 SJTU 校园 Vlog 自媒体制作，总播放量超 10万+"
  ]
};

export const EXPERIENCES_DATA: ExperienceInfo[] = [
  {
    id: "exp-1",
    role: "toB 软件产品经理 (RPA + AI 方向)",
    company: "头部 SaaS 科技企业",
    period: "2025.09 - 至今",
    type: "全职",
    tagBg: "bg-[#FF5C8D]",
    description: "负责 LLM 大模型与企业级自动化 (RPA) 的结合，设计智能化 Flow 与 AI Agent 编排工具。",
    responsibilities: [
      "主导 AI Agent 流程编排画布的产品设计，降低 70% 复杂业务自动化构建门槛；",
      "结合 RAG 知识库与大模型 API，推出智能文档解析与自动填单引擎；",
      "与研发与算法团队紧密协作，推进产品 MVP 迅速迭代并完成 20+ 家客户试点。"
    ],
    techStack: ["RPA Automation", "LLM Integration", "Agent Architecture", "PRD Specification", "User Journey Mapping"],
    metrics: "客户流程构建效率提升 3.5 倍"
  },
  {
    id: "exp-2",
    role: "toB 软件产品经理 (BI 数据分析方向)",
    company: "知名企业级软件服务商",
    period: "2023.07 - 2025.08",
    type: "全职",
    tagBg: "bg-[#3B82F6]",
    description: "负责核心 BI 报表引擎、拖拽式大屏组件与数据血缘系统的全生命周期管理。",
    responsibilities: [
      "从 0 到 1 规划并上线新一代拖拽式可视化看板，涵盖 25+ 种互动图表；",
      "优化大数据量场景下的图表渲染性能与导出并发逻辑；",
      "梳理行业通用指标库模板，赋能销售团队快速完成客户 Demo 演示与闭环。"
    ],
    techStack: ["Data Visualization", "SQL/ETL", "Dashboard Design", "Metrics Engine", "Figma"],
    metrics: "累计服务 100+ 中大型企业客户"
  },
  {
    id: "exp-3",
    role: "独立创作者 & Vibe Coder & B站 Up 主",
    company: "个人品牌 / 独立工作室",
    period: "2024.02 - 至今",
    type: "自由创作者",
    tagBg: "bg-[#10B981]",
    description: "创作科技与生活 Vlog，探索基于 AI 工具的大量 Vibe Coding 实践与自媒体表达。",
    responsibilities: [
      "制作并发布数万播放量的 B 站视频，分享个人成长、职场感受与科技爆点；",
      "全栈设计并开发多款有趣兼实用的 Web 工具与个性化小店铺；",
      "积累了良好的读者社区生态，搭建了活跃的互动电子朋友群组。"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Video Editing", "Vibe Coding", "Gemini API"],
    metrics: "视频累计播放量 20万+"
  }
];

export const PROJECTS_DATA: ProjectInfo[] = [
  {
    id: "proj-1",
    title: "AI Vibe Coding 极速网页构建器",
    category: "AI",
    subtitle: "自然语言驱动的生成式 Web 应用制作助手",
    description: "融合 Gemini API 与现代前端 UI 库，帮助使用者通过纯自然语言无缝实现逻辑完善、审美优秀的 Web 应用。",
    tags: ["React 19", "Gemini API", "Tailwind CSS", "Vibe Coding"],
    tagBg: "bg-[#FF5C8D]",
    highlights: [
      "内置 Neo-Brutalist 潮流样式模板",
      "全流式 Response 渲染与代码实时预览",
      "一键导出打包与组件化架构"
    ],
    coverColor: "bg-[#FFD6E8]",
    iconName: "Sparkles"
  },
  {
    id: "proj-2",
    title: "地球Online 游戏化个人主页",
    category: "Frontend",
    subtitle: "包含 ID 卡牌、主支线 Quest 系统的 Neo-Pop 个人品牌站",
    description: "高度个性化的个人品牌网站，采用高对比度黑框 shadow-[4px_4px_0px_0px_#000] 美学，展现独特的个人名片。",
    tags: ["React", "Motion Animation", "Cyber-Pop", "Responsive Layout"],
    tagBg: "bg-[#3B82F6]",
    highlights: [
      "仿身份证/ID Card 动效展示交互",
      "双轨制主支线成长 Quest 时间线",
      "文章与视频视听一体化弹窗体验"
    ],
    coverColor: "bg-[#CBE4FF]",
    iconName: "User"
  },
  {
    id: "proj-3",
    title: "企业级 RPA + AI 可视化编排画布",
    category: "toB Product",
    subtitle: "面向跨部门协作的零代码工作流引擎",
    description: "让业务人员能够通过拖拽节点快速配置 API 调用、RAG 文档识别与表单自动填报。",
    tags: ["Agent Architect", "RPA Flow", "toB UX", "Workflows"],
    tagBg: "bg-[#10B981]",
    highlights: [
      "支持 50+ 种常用 SaaS 系统 Connector",
      "节点状态实时追踪与日志回放",
      "权限隔离与版本控制机制"
    ],
    coverColor: "bg-[#D1FAE5]",
    iconName: "Workflow"
  },
  {
    id: "proj-4",
    title: "BI 智能可视化报表大屏引擎",
    category: "toB Product",
    subtitle: "高拓展性商业智能与指标大盘制作工具",
    description: "帮助企业搭建敏捷敏捷的数据图表，支持实时数据推送与下钻分析。",
    tags: ["Data Analytics", "BI Chart", "Dashboard", "ECharts"],
    tagBg: "bg-[#F59E0B]",
    highlights: [
      "毫秒级多图表联动渲染",
      "自定义指标计算与公式引擎",
      "一键导出高清 PDF 与交互报表"
    ],
    coverColor: "bg-[#FEF3C7]",
    iconName: "BarChart3"
  },
  {
    id: "proj-5",
    title: "女生情趣用品与情绪探索体验店",
    category: "Side Project",
    subtitle: "以关怀与温暖为核心的个人品牌实验",
    description: "打破传统刻板印象，以友好且温馨的角度关注女性身体情绪表达的小店产品。",
    tags: ["E-Commerce", "Brand Strategy", "Community", "UI Design"],
    tagBg: "bg-[#EC4899]",
    highlights: [
      "温馨有爱的私密包装与手写信卡片",
      "关注真实女性用户反馈与分享",
      "获得了许多温暖的用户认可"
    ],
    coverColor: "bg-[#FCE7F3]",
    iconName: "Heart"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "产品经理 & 方案设计 (Product & UX)",
    color: "bg-[#FFD6E8]",
    skills: [
      { name: "PRD & 需求拆解", level: 95, desc: "将模糊需求精准转化清晰敏捷 PRD" },
      { name: "Flowchart & 原型设计 (Figma)", level: 90, desc: "熟练制作高保真原型与交互流程" },
      { name: "toB SaaS & 架构思考", level: 92, desc: "理解 API 契约、RPA 与数据接入" },
      { name: "用户旅程 & 体验走查", level: 88, desc: "注重细致入微的视觉与点击反馈" }
    ]
  },
  {
    category: "AI & 编程研发 (AI & Vibe Coding)",
    color: "bg-[#CBE4FF]",
    skills: [
      { name: "AI Prompt & Vibe Coding", level: 96, desc: "用自然语言高效手撕全栈 Web 应用" },
      { name: "React / TypeScript / Vite", level: 85, desc: "熟悉组件化架构与现代前端开发" },
      { name: "Tailwind CSS & Neo-Brutalist Design", level: 92, desc: "热爱独特的高对比度 pop 界面" },
      { name: "LLM Agent & RAG 应用", level: 88, desc: "了解提示词调优与智能体开发" }
    ]
  },
  {
    category: "数据分析 & 工具 (Data & Analytics)",
    color: "bg-[#D1FAE5]",
    skills: [
      { name: "SQL 数据查询", level: 90, desc: "多表关联、指标聚合与报表生成" },
      { name: "BI 可视化 & 仪表盘", level: 92, desc: "指标拆解与交互大屏规划" },
      { name: "Python 基础 & 自动化脚本", level: 80, desc: "数据清洗与爬虫小工具" }
    ]
  },
  {
    category: "自媒体 & 爱好 (Creator & Lifestyle)",
    color: "bg-[#FEF3C7]",
    skills: [
      { name: "B站视频剪辑与策划", level: 88, desc: "把握网络梗与真诚表达的结合点" },
      { name: "文案撰写 & 数字随笔", level: 90, desc: "记录生活与交大岁月片段" },
      { name: "键盘客制化 & 潮玩探索", level: 85, desc: "高精力死宅的极客快乐" }
    ]
  }
];

export const FRIEND_LINKS = [
  { name: "期盼的小屋", color: "bg-[#FFD6E8]" },
  { name: "山花酱", color: "bg-[#FEF3C7]" },
  { name: "电子好友", color: "bg-[#D1FAE5]" },
  { name: "Zhang Yu", color: "bg-[#CBE4FF]" },
  { name: "凌川的小站", color: "bg-[#F3E8FF]" },
  { name: "小喵的笛子", color: "bg-[#FFE4E6]" },
  { name: "北樟记", color: "bg-[#FEF9C3]" },
  { name: "西门的小屋", color: "bg-[#FFD6E8]" }
];
