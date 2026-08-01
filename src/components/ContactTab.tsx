import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Sparkles, Tv, Github, MessageSquare, Heart } from 'lucide-react';

export const ContactTab: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div className="inline-block bg-white border-3 border-black px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#EC4899] -rotate-1">
        <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight flex items-center gap-3">
          <Mail className="w-8 h-8 text-[#EC4899]" /> 联系我
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] space-y-6">
            <div>
              <h2 className="text-2xl font-black text-black">Let's connect!</h2>
              <p className="text-xs font-bold text-gray-600 mt-1">
                欢迎各种合作、交流、Vibe Coding 想法碰撞或交个电子朋友！
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="bg-[#FEF08A] border-2 border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_#000] space-y-2">
              <span className="text-xs font-black text-gray-700 block">电子邮箱</span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono font-black text-sm text-black truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="neo-btn bg-black text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '已复制' : '复制'}</span>
                </button>
              </div>
            </div>

            {/* Social Links List */}
            <div className="space-y-3">
              <a
                href="https://space.bilibili.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 bg-pink-50 border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000] font-bold text-sm text-black hover:bg-pink-100 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-pink-600" /> Bilibili: @{PERSONAL_INFO.bilibiliName}
                </span>
                <span>→</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 bg-gray-100 border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000] font-bold text-sm text-black hover:bg-gray-200 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-black" /> GitHub: @{PERSONAL_INFO.github}
                </span>
                <span>→</span>
              </a>

              <div className="p-3.5 bg-emerald-50 border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000] font-bold text-sm text-black flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" /> 微信: 西门的电子小站
                </span>
                <span className="text-xs bg-white px-2 py-0.5 rounded border border-black font-mono">
                  Online
                </span>
              </div>
            </div>

            <div className="p-4 bg-purple-50 border-2 border-black rounded-2xl text-xs font-extrabold text-purple-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
              <span>一定会成为一个很棒的大人！一定会做出超酷的产品！</span>
            </div>

          </div>

        </div>

        {/* Right Message Box Column */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border-3 sm:border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
            
            <div className="border-b-2 border-black pb-4">
              <h3 className="text-xl sm:text-2xl font-black text-black">
                给小柚留言 📝
              </h3>
              <p className="text-xs font-semibold text-gray-600 mt-1">
                留下你的名字和想法，消息将直接呈递给小柚。
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#D1FAE5] border-3 border-black rounded-2xl text-center space-y-4 shadow-[4px_4px_0px_0px_#000] animate-in zoom-in-95">
                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center mx-auto text-2xl shadow-[2px_2px_0px_0px_#000]">
                  🎉
                </div>
                <h4 className="text-2xl font-black text-black">收到你的留言啦！</h4>
                <p className="text-sm font-bold text-gray-800">
                  谢谢你的来信！小柚会在看到后第一时间回复你～
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-black text-white font-bold rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                >
                  再发一条
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-black block">你的名字 / 昵称 *</label>
                  <input
                    type="text"
                    required
                    placeholder="例如: 电子好友阿强"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-2.5 text-sm font-bold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-[2px_2px_0px_0px_#000]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-black block">你的联系邮箱</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-2.5 text-sm font-bold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-[2px_2px_0px_0px_#000]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-black block">想对西门说的话 *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="例如: 觉得你的个人主页好有趣！也在做 PM/AI 编程，交流一下..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-black rounded-xl p-4 text-sm font-bold text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-[2px_2px_0px_0px_#000]"
                  />
                </div>

                <button
                  type="submit"
                  className="neo-btn w-full bg-[#FF5C8D] text-white py-3 rounded-2xl font-black text-base flex items-center justify-center gap-2 hover:bg-pink-600"
                >
                  <Send className="w-5 h-5" />
                  <span>发送电子留言 🚀</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
