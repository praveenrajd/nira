import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ABOUT_CONTENT } from '../../data/content';
import { CheckCircle2, Shield, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Company Overview"
          title={ABOUT_CONTENT.title}
          subtitle="Specialised regulatory and scientific partner for homoeopathic pharmaceutical companies"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Copy Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-card p-6 sm:p-8 space-y-4 border-slate-200 bg-white">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                {ABOUT_CONTENT.paragraphs[0]}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {ABOUT_CONTENT.paragraphs[1]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 space-y-3 border-cyan-200 bg-white">
                <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Full Lifecycle Support</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ABOUT_CONTENT.paragraphs[2]}
                </p>
              </div>

              <div className="glass-card p-6 space-y-3 border-emerald-200 bg-white">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Core Service Scope</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ABOUT_CONTENT.paragraphs[3]}
                </p>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 space-y-4 border-slate-200 bg-white">
              <p className="text-slate-600 leading-relaxed">
                {ABOUT_CONTENT.paragraphs[4]}
              </p>
            </div>
          </div>

          {/* Side Philosophy Callout Card */}
          <div className="lg:col-span-4">
            <div className="h-full glass-card p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-cyan-50/80 via-white to-emerald-50/50 border-cyan-200">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                  Our Philosophy
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  An Extension of Our Client's Team
                </h3>

                <blockquote className="text-slate-700 italic text-sm leading-relaxed border-l-3 border-cyan-600 pl-4 py-1">
                  "{ABOUT_CONTENT.paragraphs[5]}"
                </blockquote>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700">Deep understanding of products & challenges</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700">Long-term strategic partnership</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700">Scientific orientation & regulatory perspective</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 font-semibold">
                <span>Nira Scientific Solutions</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
