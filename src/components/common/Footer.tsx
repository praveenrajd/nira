import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_INFO } from '../../data/navigation';
import { LOOKING_AHEAD_DATA } from '../../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 text-sm relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1px]">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight">NIRA SCIENTIFIC</span>
                <span className="text-[10px] font-bold text-cyan-400 uppercase">SOLUTIONS</span>
              </div>
            </div>

            <p className="text-slate-300 font-medium text-xs sm:text-sm leading-relaxed">
              {LOOKING_AHEAD_DATA.footerBranding.tagline}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <p className="text-cyan-300 text-xs font-semibold">
                {LOOKING_AHEAD_DATA.footerBranding.slogan}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2.5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-cyan-300 transition-colors inline-block text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-400 pl-2.5">
              Core Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#core-areas" className="hover:text-cyan-300 transition-colors">
                  Regulatory Partnership & CDSCO Support
                </a>
              </li>
              <li>
                <a href="#core-areas" className="hover:text-cyan-300 transition-colors">
                  Scientific Partnership & Dossiers
                </a>
              </li>
              <li>
                <a href="#core-areas" className="hover:text-cyan-300 transition-colors">
                  Research & Clinical Coordination
                </a>
              </li>
              <li>
                <a href="#core-areas" className="hover:text-cyan-300 transition-colors">
                  New Product Development & Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Regulatory Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2.5">
              Regulatory Center
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>Specialised scientific partner for homoeopathic pharmaceutical companies.</p>
              <p className="text-xs text-slate-300">
                <strong className="text-white block">Address:</strong>
                {COMPANY_INFO.address}
              </p>
              <p className="text-xs text-slate-300">
                <strong className="text-white block">Email:</strong>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan-300 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
