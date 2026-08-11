import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { LOOKING_AHEAD_DATA } from '../../data/content';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

export const LookingAheadSection: React.FC = () => {
  return (
    <section id="looking-ahead" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Industry Evolution"
          title={LOOKING_AHEAD_DATA.title}
          subtitle="Empowering homoeopathic pharma through scientific evolution & regulatory foresight"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Narrative Card */}
          <div className="glass-card p-6 sm:p-10 border-cyan-200 bg-white space-y-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-700">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Industry Transformation</span>
                <h3 className="text-xl font-extrabold text-slate-900">Preparing for the Future</h3>
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              <p>{LOOKING_AHEAD_DATA.paragraphs[0]}</p>
              <p className="text-slate-600 font-normal">{LOOKING_AHEAD_DATA.paragraphs[1]}</p>
              <p className="text-slate-600 font-normal">{LOOKING_AHEAD_DATA.paragraphs[2]}</p>
            </div>
          </div>

          {/* Key Quote Box */}
          <div className="glass-card p-8 sm:p-10 text-center border-emerald-300 bg-gradient-to-r from-emerald-50/80 via-white to-cyan-50/80 shadow-lg relative overflow-hidden">
            <div className="absolute top-3 right-3 text-emerald-600/10">
              <Sparkles className="w-16 h-16" />
            </div>

            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 block mb-3">
              Core Belief & Strategic Foresight
            </span>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto">
              "{LOOKING_AHEAD_DATA.paragraphs[3]}"
            </blockquote>
          </div>

          {/* Final Brand Banner Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white via-cyan-50/40 to-emerald-50/40 border border-cyan-200 shadow-md text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-emerald-600 text-white font-bold mb-2 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {LOOKING_AHEAD_DATA.footerBranding.title}
            </h3>

            <p className="text-base font-bold text-cyan-800">
              {LOOKING_AHEAD_DATA.footerBranding.tagline}
            </p>

            <div className="inline-block px-6 py-2 rounded-full bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-extrabold text-emerald-800 uppercase tracking-wider">
              {LOOKING_AHEAD_DATA.footerBranding.slogan}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
