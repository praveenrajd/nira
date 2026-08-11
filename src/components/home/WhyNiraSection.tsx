import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { WHY_NIRA_DATA } from '../../data/content';
import { Building2, FlaskConical, FileCheck2, Handshake, ChevronRight } from 'lucide-react';

export const WhyNiraSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-cyan-600" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-emerald-600" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-cyan-600" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-emerald-600" />;
      default:
        return <Building2 className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="why-nira" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Distinct Differentiator"
          title={WHY_NIRA_DATA.title}
          subtitle={WHY_NIRA_DATA.subtitle}
        />

        {/* Lead Narrative Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-6 sm:p-10 text-center border-cyan-200 space-y-6 bg-gradient-to-b from-white to-cyan-50/30 shadow-lg">
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                "{WHY_NIRA_DATA.introLead}"
              </p>
              <p className="text-lg sm:text-xl font-extrabold text-cyan-800">
                "{WHY_NIRA_DATA.introSub}"
              </p>
            </div>

            {/* Interactive Process Flow Pipeline */}
            <div className="pt-6 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                Our Partnership Framework Pipeline:
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {WHY_NIRA_DATA.processFlow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="group relative">
                      <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-extrabold text-slate-900 hover:border-cyan-600 hover:text-cyan-700 hover:shadow-md transition-all duration-300 cursor-default">
                        {step.label}
                      </div>
                    </div>
                    {idx < WHY_NIRA_DATA.processFlow.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="pt-4 text-sm text-slate-700 leading-relaxed font-medium max-w-2xl mx-auto">
              {WHY_NIRA_DATA.integratedApproachText}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_NIRA_DATA.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-6 border-slate-200 bg-white hover:border-emerald-500/60 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {getPillarIcon(pillar.iconName)}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                  Nira Core Competency
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
