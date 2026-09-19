import React from 'react';
import { FRIEND_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { TabKey, NAV_ITEMS } from './Navbar';
import { Tv, Github, Mail, Sparkles, Heart } from 'lucide-react';

interface MarqueeFooterProps {
  onNavigate: (tab: TabKey) => void;
}

export const MarqueeFooter: React.FC<MarqueeFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 space-y-0 w-full overflow-hidden">
      
      {/* Top Infinite Scrolling Ticker Tape (Friend Links Sticker Bar) */}
      <div className="bg-white border-y-[1.5px] border-black py-3 relative overflow-hidden shadow-[0px_2px_0px_0px_#000]">
        <div className="animate-marquee flex items-center gap-4 whitespace-nowrap">
          {[...FRIEND_LINKS, ...FRIEND_LINKS, ...FRIEND_LINKS].map((link, idx) => (
            <div
              key={idx}
              className={`px-4 py-1.5 ${link.color} text-black font-extrabold text-xs rounded-full border border-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform`}
            >
              <span className="w-2 h-2 rounded-full bg-black" />
              <span>{link.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Dark Footer Container */}
      <div className="bg-black text-white border-t-[1.5px] border-black pt-12 pb-8 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-800 pb-10">
          
          {/* Left Brand Statement */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
              Let's build something <br />
              <span className="text-[#FF5C8D]">extraordinary together.</span>
            </h3>
            <p className="text-xs sm:text-sm font-bold text-gray-400">
              一定会成为一个很棒的大人！保持热爱，奔赴山海 ⚡
            </p>
          </div>

          {/* Middle Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase">
              Explore
            </h4>
            <ul className="space-y-1.5 text-xs font-bold text-gray-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => onNavigate(item.key)}
                    className="hover:text-pink-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Connect Icons */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center text-white hover:bg-[#FF5C8D] hover:text-black transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </button>
              <a
                href="https://space.bilibili.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center text-white hover:bg-pink-500 hover:text-white transition-colors"
                title="Bilibili"
              >
                <Tv className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold text-gray-500">
          <p>© 2026 {PERSONAL_INFO.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
