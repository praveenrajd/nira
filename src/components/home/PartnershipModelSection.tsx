import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PARTNERSHIP_MODEL_DATA } from '../../data/content';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const PartnershipModelSection: React.FC = () => {
  return (
    <section id="partnership-model" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Roadmap"
          title={PARTNERSHIP_MODEL_DATA.title}
          subtitle={PARTNERSHIP_MODEL_DATA.subtitle}
        />

        <p className="text-center text-xs font-bold text-cyan-800 uppercase tracking-widest mb-12">
          {PARTNERSHIP_MODEL_DATA.intro}
        </p>

        {/* Desktop & Mobile Responsive Step Timeline */}
        <div className="max-w-4xl mx-auto space-y-4">
          {PARTNERSHIP_MODEL_DATA.steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="glass-card p-5 sm:p-6 border-slate-200 bg-white hover:border-cyan-500/60 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center font-black text-cyan-700 text-sm shrink-0">
                    {step.stepNumber}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      {step.stage}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end sm:self-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Phase {step.stepNumber}</span>
                  </span>
                </div>
              </div>

              {idx < PARTNERSHIP_MODEL_DATA.steps.length - 1 && (
                <div className="flex justify-center my-1">
                  <ArrowDown className="w-5 h-5 text-cyan-600 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
