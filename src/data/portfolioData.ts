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
  linkUrl?: string;
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
  iconLight?: boolean;
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

export interface ExperienceBullet {
  label: string;
  content: string;
}

export interface ExperienceProjectBlock {
  projectTitle?: string;
  bullets: ExperienceBullet[];
}

export interface ExperienceArtifact {
  id: string;
  title: string;
  category: '实地留影' | '脱敏产物' | '评测看板' | '设计规范' | '业务报表';
  imageUrl: string;
  description: string;
  tag: string;
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
  projectBlocks?: ExperienceProjectBlock[];
  techStack: string[];
  metrics?: string;
  // Timeline and Artifact extension fields
  timelineIndex: string;
  shortSummary: string[];
  fieldNotePhoto: string;
  fieldNoteTag: string;
  fieldNoteType: 'landscape' | 'polaroid';
  artifacts: ExperienceArtifact[];
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
  name: "梁靖悠",
  nickname: "梁靖悠",
  fullName: "梁靖悠",
  englishTitle: "AI Product Manager | 2026 Batch | Shenzhen",
  targetRole: "AI产品经理",
  politicalStatus: "中共党员",
  graduationYear: "2026届本科应届生",
  location: "广东深圳",
  phone: "18933174576",
  practiceTime: "两年半",
  tags: [
    "AI产品经理",
    "26届应届生",
    "中共党员",
    "深圳技术大学",
    "GPA 4.32 (3/122)",
    "国家奖学金",
    "Agent & RAG",
    "工业设计"
  ],
  motto: "以严谨的设计与技术洞察，构建真正解决业务痛点的智能体与产品体验！",
  bioShort: "深圳技术大学工业设计专业（GPA 4.32，排名 3/122，国家奖学金，中共党员）。具备企业级 AI 产品规划与落地经验，能够独立完成业务调研、需求分析、流程梳理、PRD 及原型设计。深度理解 LLM、MCP、Agent、幻觉等技术原理，熟练掌握智能体工作流、RAG 混合检索、自动化 Eval 评测及 Bad Case 闭环迭代。",
  profileSummary: "具备企业级AI产品规划与落地经验，能够独立完成业务调研、需求分析、流程梳理、PRD及原型设计。理解LLM、MCP、Agent、幻觉等技术原理，具备智能体工作流、工具调用、异常处理、人机协同、异常兜底设计能力。拥有RAG、Prompt工程及低代码AI应用实践，能够协同技术团队推动产品评测、上线与Bad Case迭代。",
  birthDate: "2004.05",
  hometown: "广东深圳",
  currentRole: "AI产品经理 (26届应届生)",
  university: "深圳技术大学 (SZTU)",
  major: "工业设计专业 (GPA 4.32 排名 3/122)",
  idCardNo: "SZTU-202209-LJY",
  email: "1070218613@qq.com",
  bilibiliName: "梁靖悠",
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
    subtitle: "AI 编程",
    iconBg: "bg-[#10B981]",
    color: "bg-[#D1FAE5]"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-happy",
    title: "《快乐的》",
    category: "深度随笔",
    date: "2024-05-10",
    summary: "讲述一个人究竟怎样才能真正快乐，探索内心秩序与自我主体性。",
    tagColor: "bg-[#FF5C8D]",
    readTime: "6 min read",
    content: "这篇文章讲述了一个人怎么才能快乐。探讨如何摆脱外界情绪干扰与焦虑、构建属于自己的内心秩序、找回自我主体性，以及在琐碎生活中拥抱纯粹的快乐。\n\n点击下方按钮可直接跳转至微信公众号查看文章原文！",
    linkUrl: "https://mp.weixin.qq.com/s/8zi86FuWqfKvgBYvEOaHlA"
  },
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
    id: "q-ai-pm-2026",
    year: "2026",
    monthDate: "2026.06",
    tag: "主线",
    tagBg: "bg-[#2563EB]",
    type: "main",
    title: "企业合作实践·AI产品经理实习生",
    icon: "rocket",
    iconLight: true,
  },
  {
    id: "q-shanhaijing-2026",
    year: "2026",
    monthDate: "2026.03",
    tag: "支线",
    tagBg: "bg-[#FF5C8D]",
    type: "branch",
    title: "设计山海经文化智能记账App",
    icon: "sparkles",
    iconLight: false,
  },
  {
    id: "q-scholarship-2025",
    year: "2025",
    monthDate: "2025.10",
    tag: "支线",
    tagBg: "bg-[#F59E0B]",
    type: "branch",
    title: "获国家奖学金与校长奖学金",
    icon: "award",
    iconLight: false,
  },
  {
    id: "q-lanqiao-2025",
    year: "2025",
    monthDate: "2025.08",
    tag: "支线",
    tagBg: "bg-[#A855F7]",
    type: "branch",
    title: "蓝桥杯全国视觉艺术设计赛 一等奖",
    icon: "trophy",
    iconLight: true,
  },
  {
    id: "q-aigc-2025",
    year: "2025",
    monthDate: "2025.06",
    tag: "主线",
    tagBg: "bg-[#2563EB]",
    type: "main",
    title: "深圳禾零科技有限公司·AIGC 设计实习生",
    icon: "code",
    iconLight: true,
  },
  {
    id: "q-ecommerce-2024",
    year: "2024",
    monthDate: "2024.12",
    tag: "支线",
    tagBg: "bg-[#10B981]",
    type: "branch",
    title: "第十三届全国大学生电子商务“创新、创意及创业”挑战赛校赛二等奖",
    icon: "trophy",
    iconLight: false,
  }
];

export const EDUCATION_DATA: EducationInfo = {
  school: "深圳技术大学 (SZTU)",
  degree: "工业设计专业 | 本科 (GPA 4.32, 排名 3/122)",
  major: "工业设计 (Industrial Design · AI 产品与体验设计方向)",
  period: "2022.09 - 2026.07",
  location: "广东深圳",
  badges: [
    "GPA 4.32 (排名 3/122)",
    "国家奖学金 & 校长奖学金",
    "德国模式培养",
    "全国应用型本科排名第一",
    "深圳公办本科排名第三",
    "中共党员"
  ],
  description: "深圳技术大学工业设计专业，采用德国应用技术大学培养模式。在校期间专业成绩优异（GPA 4.32，排名 3/122），荣获国家奖学金与校长奖学金。系统掌握从用户体验设计、服务设计、调研方法到 UI 界面设计与产品工程全流程，深度融合大语言模型、智能体工作流与前沿 AI 场景开展落地实践。",
  courses: [
    "用户体验设计",
    "服务设计",
    "设计调研方法",
    "设计管理与营销",
    "UI 界面设计",
    "平面设计",
    "产品设计",
    "人机工程学"
  ],
  achievements: [
    "【国家级最高荣誉】国家奖学金、深圳技术大学校长奖学金（专业 GPA 4.32，综合排名前 3/122）",
    "【国家级专业竞赛】蓝桥杯全国软件和信息技术专业人才大赛 视觉艺术设计赛 全国一等奖",
    "【国家级学科竞赛】数字媒体科技作品及创意竞赛 全国二等奖",
    "【创新创业竞赛】第十三届全国大学生电子商务“创新、创意及创业”挑战赛 校赛二等奖",
    "【校园组织领导力】曾任校团委主席、音乐社社长及班长，统筹 10+ 场校级大型活动，覆盖超 1000 人次，带队获校级“优秀组织奖”等 7 项荣誉"
  ]
};

export const EXPERIENCES_DATA: ExperienceInfo[] = [
  {
    id: "exp-1",
    timelineIndex: "01",
    role: "AI产品经理实习生",
    company: "企业合作实践",
    period: "2026.06 – 2026.09",
    type: "实习",
    tagBg: "bg-[#2563EB]",
    fieldNotePhoto: "/ant_field_note.jpg",
    fieldNoteTag: "企业合作实践 / FIELD NOTES",
    fieldNoteType: "landscape",
    description: "深入开展【项目一：零食电商AI客服系统】与【项目二：AI营销工作台】的需求洞察、Agent工作流搭建、RAG数据清洗与评测、差异化Prompt设计及人机协同落地。",
    shortSummary: [
      "推进零食电商 AI 客服系统与 AI 营销工作台从需求洞察、方案设计到上线验证的完整闭环，将业务痛点转化为可落地 的AI 产品；独立完成 PRD、UE 原型及 Demo，运用自动化评测体系持续优化产品效果，在需求分析、AI 产品设计、数据评测、跨团队协作和商业结果交付方面具有综合优势。"
    ],
    projectBlocks: [
      {
        projectTitle: "项目一：零食电商AI客服系统",
        bullets: [
          {
            label: "需求洞察与MVP",
            content: "面向20人客服团队及日均约3000条咨询，访谈业务负责人、客服主管与一线客服，聚焦物流、退换货等高频场景，定义覆盖场景内自助解决率≥60%，并基于频次、风险、数据基础与开发成本划定首版范围及转人工红线。"
          },
          {
            label: "产品设计与AI方案商业迭代",
            content: "独立完成PRD、UE原型及可联调Demo，3周推动可用版本上线；基于Dify搭建Agent工作流，设计意图路由、订单与知识检索、人工转接及失败降级，并通过模块化Prompt、配置变量槽提升复用性。"
          },
          {
            label: "RAG数据清洗与评测",
            content: "采用数据清洗、Query增强、混合召回、重排及硬过滤优化检索推荐；搭建自动化测评Eval系统，规划650+条基础及复杂多轮样本，制定事实准确性、工具调用、转人工、安全门槛与兜底，参与交叉标注维护标准。"
          },
          {
            label: "项目结果",
            content: "上线两周处理约4.4万次咨询，覆盖场景内AI独立解决率63.5%、异常会话率约2%；推荐转化率约8%，推荐用户客单价较同期对照提升约24%。"
          }
        ]
      },
      {
        projectTitle: "项目二：AI营销工作台",
        bullets: [
          {
            label: "需求拆解与方案设计",
            content: "针对电商运营跨渠道追踪热点、人工筛选及商品匹配效率低、不同平台内容重复改写等问题，梳理打通“热点获取—筛选—商品匹配—多平台文案生成—人工审核”链路，主导运营后台与AI内容生产流程设计并搭建平台工作流。"
          },
          {
            label: "Prompt与质量控制",
            content: "针对抖音、小红书的平台语气和内容结构设计差异化Prompt，将热点、商品卖点与平台要求参数化，并保留人工审核与修改环节，降低热点误判、卖点错配和直接发布不合格内容的风险。"
          },
          {
            label: "业务结果",
            content: "期间抽样统计50次内容任务，平均单篇生产时间由39分钟缩短至11分钟，耗时下降72%；70%的初稿经轻度修改后可用，日均有效初稿由2篇提升至5篇，增长150%。"
          }
        ]
      }
    ],
    responsibilities: [
      "【项目一：零食电商AI客服系统 · 需求洞察与MVP】面向20人客服团队及日均约3000条咨询，访谈业务负责人、客服主管与一线客服，聚焦物流、退换货等高频场景，定义覆盖场景内自助解决率≥60%，并基于频次、风险、数据基础与开发成本划定首版范围及转人工红线。",
      "【项目一：零食电商AI客服系统 · 产品设计与AI方案商业迭代】独立完成PRD、UE原型及可联调Demo，3周推动可用版本上线；基于Dify搭建Agent工作流，设计意图路由、订单与知识检索、人工转接及失败降级，并通过模块化Prompt、配置变量槽提升复用性。",
      "【项目一：零食电商AI客服系统 · RAG数据清洗与评测】采用数据清洗、Query增强、混合召回、重排及硬过滤优化检索推荐；搭建自动化测评Eval系统，规划650+条基础及复杂多轮样本，制定事实准确性、工具调用、转人工、安全门槛与兜底，参与交叉标注维护标准。",
      "【项目一：零食电商AI客服系统 · 项目结果】上线两周处理约4.4万次咨询，覆盖场景内AI独立解决率63.5%、异常会话率约2%；推荐转化率约8%，推荐用户客单价较同期对照提升约24%。",
      "【项目二：AI营销工作台 · 需求拆解与方案设计】针对电商运营跨渠道追踪热点、人工筛选及商品匹配效率低、不同平台内容重复改写等问题，梳理打通“热点获取—筛选—商品匹配—多平台文案生成—人工审核”链路，主导运营后台与AI内容生产流程设计并搭建平台工作流。",
      "【项目二：AI营销工作台 · Prompt与质量控制】针对抖音、小红书的平台语气和内容结构设计差异化Prompt，将热点、商品卖点与平台要求参数化，并保留人工审核与修改环节，降低热点误判、卖点错配和直接发布不合格内容的风险。",
      "【项目二：AI营销工作台 · 业务结果】期间抽样统计50次内容任务，平均单篇生产时间由39分钟缩短至11分钟，耗时下降72%；70%的初稿经轻度修改后可用，日均有效初稿由2篇提升至5篇，增长150%。"
    ],
    techStack: ["Dify", "Agent工作流", "RAG检索增强", "Prompt工程", "自动化测评Eval", "意图路由", "PRD/UE原型", "人机协同", "流程设计"],
    metrics: "客服处理约4.4万次咨询，覆盖场景内AI独立解决率63.5%，异常会话率约2%，推荐转化率约8%，客单价提升约24%；营销文案生产耗时下降72%，日均有效初稿增长150%",
    artifacts: [
      {
        id: "ant-art-1",
        title: "企业合作业务研讨与现场实拍留影",
        category: "实地留影",
        imageUrl: "/ant_field_note.jpg",
        description: "参与企业合作业务调研现场与团队项目复盘，实地对接客服与运营主管业务需求。",
        tag: "职场实景 · 现场证据"
      },
      {
        id: "ant-art-2",
        title: "零食电商 AI 客服系统 PRD 与 Agent 拓扑架构 (脱敏图)",
        category: "脱敏产物",
        imageUrl: "/ant_field_note.jpg",
        description: "基于 Dify 搭建的意图路由、知识检索、订单系统调用及人机兜底降级全链路拓扑流程图。",
        tag: "PRD · 架构设计"
      },
      {
        id: "ant-art-3",
        title: "650+ 样本自动化测评 Eval 评测看板 (脱敏数据)",
        category: "评测看板",
        imageUrl: "/ant_field_note.jpg",
        description: "事实准确性、工具调用成功率、转人工阈值及安全门槛的自动化测评看板与多轮交互表现。",
        tag: "数据证据 · 测评闭环"
      },
      {
        id: "ant-art-4",
        title: "AI 营销工作台多平台文案生成全流程设计 (脱敏图)",
        category: "脱敏产物",
        imageUrl: "/ant_field_note.jpg",
        description: "打通热点获取至多平台差异化 Prompt 参数化生成的后台原型与人工复核流转看板。",
        tag: "交付成果 · 原型设计"
      }
    ]
  },
  {
    id: "exp-2",
    timelineIndex: "02",
    role: "AIGC设计实习生",
    company: "深圳禾零科技有限公司",
    period: "2025.06 – 2025.12",
    type: "实习",
    tagBg: "bg-[#0284C7]",
    fieldNotePhoto: "/bytedance_field_note.jpg",
    fieldNoteTag: "深圳禾零科技 / FIELD NOTES",
    fieldNoteType: "polaroid",
    description: "深入参与网页后台及 App 需求讨论与设计调研，使用 Lovart、即梦及 ChatGPT 完成高保真原型与通用组件库规范设计，并沉淀 30+ 组结构化提示词模版。",
    shortSummary: [
      "参与网页后台及App的需求讨论与设计调研，梳理功能范围，完成产品UI视觉、图标与部件设计；沉淀可复用提示词模板及通用设计组件。同时协同产品与研发持续迭代方案，完善页面流程、状态反馈和交互标注，具备AIGC工具应用、设计规范建设及跨团队交付能力。"
    ],
    projectBlocks: [
      {
        projectTitle: "核心实习职责与落地成果",
        bullets: [
          {
            label: "AIGC视觉设计",
            content: "参与网页后台及App的需求讨论与设计调研，结合业务目标、用户路径与研发约束梳理功能范围，使用Lovart、即梦、及ChatGPT完成产品UI视觉、图标与部件设计，累计生成200+候选方案，交付60+页原型及高保真方案，完善主流程、空状态、加载、异常及操作反馈；沉淀按钮、表单、弹窗等通用组件，六成页面实现复用。"
          },
          {
            label: "Prompt优化及协作交付",
            content: "针对产品特征、视觉风格及品牌主题设计结构化提示词，通过多轮生成、筛选与局部调整沉淀30+组可复用模板；结合产品及研发反馈迭代方案，跟进19项设计问题并按期闭环18项，闭环率95%；AIGC辅助使视觉初稿产出时间缩短约40%，通过状态说明与验收核对提升多端设计一致性与交付效率。"
          }
        ]
      }
    ],
    responsibilities: [
      "【AIGC视觉设计】参与网页后台及App的需求讨论与设计调研，结合业务目标、用户路径与研发约束梳理功能范围，使用Lovart、即梦、及ChatGPT完成产品UI视觉、图标与部件设计，累计生成200+候选方案，交付60+页原型及高保真方案，完善主流程、空状态、加载、异常及操作反馈；沉淀按钮、表单、弹窗等通用组件，六成页面实现复用。",
      "【Prompt优化及协作交付】针对产品特征、视觉风格及品牌主题设计结构化提示词，通过多轮生成、筛选与局部调整沉淀30+组可复用模板；结合产品及研发反馈迭代方案，跟进19项设计问题并按期闭环18项，闭环率95%；AIGC辅助使视觉初稿产出时间缩短约40%，通过状态说明与验收核对提升多端设计一致性与交付效率。"
    ],
    techStack: ["Lovart", "即梦 AIGC", "ChatGPT", "Figma", "UI/UX 高保真", "组件库规范", "结构化提示词", "需求梳理", "验收核对"],
    metrics: "累计生成200+候选方案，交付60+页原型及高保真方案，通用组件六成页面复用；跟进19项设计问题闭环率95%，视觉初稿产出耗时缩短约40%",
    artifacts: [
      {
        id: "bytedance-art-1",
        title: "深圳禾零科技工区与团队实践留影",
        category: "实地留影",
        imageUrl: "/bytedance_field_note.jpg",
        description: "在深圳禾零科技有限公司实习期间的工区工作日常与设计团队协同留影。",
        tag: "职场实景 · 现场证据"
      },
      {
        id: "bytedance-art-2",
        title: "AIGC 赋能通用组件库与设计规范 (脱敏图)",
        category: "设计规范",
        imageUrl: "/bytedance_field_note.jpg",
        description: "沉淀覆盖按钮、卡片、表单与异常状态的 60+ 页高保真组件规范，支持六成页面复用。",
        tag: "设计系统 · 规范产出"
      },
      {
        id: "bytedance-art-3",
        title: "30+ 组结构化 Prompt 模版与生成资产库",
        category: "脱敏产物",
        imageUrl: "/bytedance_field_note.jpg",
        description: "针对品牌质感与功能部件定制的分层 Prompt 模板，初稿生成效率提升 40%。",
        tag: "工程沉淀 · AIGC模版"
      },
      {
        id: "bytedance-art-4",
        title: "19 项跨职能体验优化闭环看板 (95%闭环率)",
        category: "业务报表",
        imageUrl: "/bytedance_field_note.jpg",
        description: "设计与研发协同落地推进看板，精准跟踪 18 项验收问题并按期上线。",
        tag: "协作效率 · 交付证据"
      }
    ]
  }
];

export const PROJECTS_DATA: ProjectInfo[] = [
  {
    id: "proj-ai-cs",
    title: "零食电商 AI 客服助手 (企业实战)",
    category: "AI",
    subtitle: "基于 Dify + RAG + 意图路由的企业级智能客服 Agent",
    description: "面向 20 人客服团队及日均 3000 条高频咨询，从 0 到 1 打造的企业级 AI 客服智能体。覆盖物流轨迹、智能退换货、订单检索与商品活动推荐，搭建自动化 Eval 评测与 Bad Case 迭代闭环。",
    tags: ["Agent 工作流", "Dify", "RAG 混合召回", "意图路由", "自动化 Eval", "Bad Case 闭环"],
    tagBg: "bg-[#FF5C8D]",
    highlights: [
      "独立完成完整 PRD、UE 原型及可联调 Demo，3周快速推动可用版本上线",
      "定义意图路由、身份验证、工具调用与异常兜底逻辑，模块化 Prompt 提升复用性",
      "基于 Dify 搭建 RAG 工作流，650+ 测试样本自动化 Eval 与 Bad Case 闭环",
      "上线两周处理 4.4 万次咨询，AI 独立解决率 63.5%，异常会话率仅 2%，客单价提升 24%"
    ],
    coverColor: "bg-[#FFE4E6]",
    iconName: "Bot"
  },
  {
    id: "proj-ai-marketing",
    title: "电商 AI 营销工作台",
    category: "AI",
    subtitle: "跨渠道热点追踪与多平台爆款文案生成系统",
    description: "打通‘热点获取—筛选—商品匹配—多平台文案生成—人工审核’全链路。针对抖音、小红书定制差异化 Prompt 模板与人机协同审核机制，防范事实幻觉与卖点错配。",
    tags: ["AI 内容工作流", "Prompt 工程", "人机协同", "抖音/小红书", "运营后台"],
    tagBg: "bg-[#3B82F6]",
    highlights: [
      "主导运营后台与 AI 工作流全流程设计，将热点卖点参数化",
      "设置事实核验、人工修改与确认发布机制，有效规避误判与错配风险",
      "单篇文案生产时间由 39 分钟缩短至 11 分钟，耗时下降 72%",
      "日均有效初稿由 2 篇提升至 5 篇，生产效率提升 150%"
    ],
    coverColor: "bg-[#E0F2FE]",
    iconName: "Workflow"
  },
  {
    id: "proj-shanhai-app",
    title: "山海经文化智能记账 App (校内重点)",
    category: "toB Product",
    subtitle: "自然语言结构化记账与山海经 IP 的深度融合",
    description: "针对传统记账流程繁琐、用户难以坚持的问题开展调研，提炼自然语言记账、账目确认、分类修正与情绪反馈需求；接入大模型识别金额、收支类型及消费类别，设计追问、确认与人工修正机制。",
    tags: ["产品负责人", "LLM 语义识别", "Figma 40+页高保真", "Demo 可用性测试", "自然语言记账"],
    tagBg: "bg-[#10B981]",
    highlights: [
      "针对记账繁琐开展用户调研，提炼自然语言记账与情绪反馈核心需求",
      "完成信息架构、核心流程及 40+ 页 Figma 高保真界面设计",
      "接入大模型精准识别金额、收支类型并结构化入账，设计异常追问与人工修正",
      "独立完成可运行 Demo 并通过可用性测试迭代交互方案"
    ],
    coverColor: "bg-[#D1FAE5]",
    iconName: "Sparkles"
  },
  {
    id: "proj-aigc-design",
    title: "AIGC 视觉与界面设计体系 (禾零科技)",
    category: "Frontend",
    subtitle: "网页后台与移动端 60+ 页高保真交付与通用组件库",
    description: "结合业务目标与研发约束，使用 Lovart、即梦与 ChatGPT 搭建 AIGC 视觉与 UI 设计体系，沉淀 30+ 组结构化提示词模板与通用组件库，交付 60+ 页原型方案。",
    tags: ["AIGC 设计", "Lovart/即梦", "组件库复用", "提示词沉淀", "设计闭环 95%"],
    tagBg: "bg-[#F59E0B]",
    highlights: [
      "累计生成 200+ 候选方案，交付 60+ 页原型及高保真方案，覆盖全状态反馈",
      "沉淀按钮、表单、弹窗等通用组件，六成页面实现规范复用",
      "结构化提示词模板使视觉初稿产出时间缩短约 40%",
      "跟进 19 项设计问题并按期闭环 18 项，闭环率 95%"
    ],
    coverColor: "bg-[#FEF3C7]",
    iconName: "Palette"
  },
  {
    id: "proj-happy-article",
    title: "深度文章随笔：《快乐的》",
    category: "Side Project",
    subtitle: "关于一个人究竟怎样才能获得真正快乐与内心平静的探索",
    description: "讲述一个人怎么才能快乐。文章深入探讨了如何摆脱焦虑干扰、构建内心秩序、找到自我主体性，以及在琐碎日常中拥抱纯粹快乐的思考。",
    tags: ["微信公众号", "深度文章", "快乐哲学", "情绪探索"],
    tagBg: "bg-[#A855F7]",
    demoUrl: "https://mp.weixin.qq.com/s/8zi86FuWqfKvgBYvEOaHlA",
    highlights: [
      "记录关于人生态度、情绪解耦与内心平静的深刻随笔",
      "探讨如何找回自我主体性与拥抱真实的快乐",
      "点击右下方箭头或详情按钮可直接跳转微信公众号阅读原文"
    ],
    coverColor: "bg-[#F3E8FF]",
    iconName: "BookOpen"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI能力 & 智能体工程 (AI & Agent Capabilities)",
    color: "bg-[#FFD6E8]",
    skills: [
      { name: "LLM 原理 & MCP / Agent", level: 95, desc: "理解大模型、上下文管理、工具调用与安全边界" },
      { name: "智能体工作流 (Dify / Coze)", level: 96, desc: "多分支节点编排、意图路由与人机协同方案" },
      { name: "RAG 检索增强设计", level: 93, desc: "数据清洗、Query增强、混合召回、重排与过滤调优" },
      { name: "Prompt 工程 & 变量槽", level: 96, desc: "结构化提示词模板、多平台差异化参数化配置" },
      { name: "自动化 Eval & Bad Case 闭环", level: 92, desc: "650+样本评测规划、交叉标注与知识库持续迭代" },
      { name: "幻觉抑制与异常兜底", level: 94, desc: "事实核验、人工修正机制与异常流程保障" }
    ]
  },
  {
    category: "产品经理核心能力 (Product Management & UX)",
    color: "bg-[#CBE4FF]",
    skills: [
      { name: "业务调研与需求拆解", level: 96, desc: "深度访谈利益相关方，将降本诉求转化为 MVP 指标" },
      { name: "完整 PRD 与规范文档", level: 95, desc: "独立输出业务流程图、工具调用逻辑与严谨验收标准" },
      { name: "Figma 高保真与交互原型", level: 94, desc: "40+页高保真界面、空状态/异常/加载全状态闭环" },
      { name: "工业设计与服务设计思维", level: 93, desc: "德国应用技术培养，系统性设计调研与用户旅程规划" }
    ]
  },
  {
    category: "工具与 AI 实践 (Tools & Practice)",
    color: "bg-[#D1FAE5]",
    skills: [
      { name: "AI 编程 & 可运行 Demo", level: 92, desc: "Codex、ChatGPT、Cursor、Trae 快速验证交互方案" },
      { name: "AIGC 视觉与多模态", level: 94, desc: "Lovart、即梦、Midjourney 驱动 UI 与图标高效产出" },
      { name: "协同与项目管理", level: 95, desc: "飞书、Dify、Figma、Git、敏捷看板全流程推进" }
    ]
  },
  {
    category: "荣誉竞赛与校园领导力 (Honors & Leadership)",
    color: "bg-[#FEF3C7]",
    skills: [
      { name: "国家奖学金 & 校长奖学金", level: 100, desc: "GPA 4.32 (专业排名 3/122)，学术与综合素质拔尖" },
      { name: "蓝桥杯全国一等奖等竞赛", level: 96, desc: "视觉艺术设计赛全国一等奖、数字媒体作品全国二等奖" },
      { name: "校团委主席 & 音乐社社长", level: 96, desc: "统筹 10+ 场校级大型活动，覆盖超 1000 人次，获 7 项校级荣誉" }
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
