import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { VISION_MISSION_DATA } from '../../data/content';
import { Eye, Target, CheckCircle } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Strategic Direction"
          title="Our Vision & Mission"
          subtitle="Guiding the transition of homoeopathic pharma towards stronger science & regulatory preparedness"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Vision Card */}
          <div className="lg:col-span-5">
            <div className="h-full glass-card p-6 sm:p-8 border-cyan-200 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white to-cyan-50/40 shadow-lg">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white shadow-md shadow-cyan-600/20">
                  <Eye className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-700">Guiding Light</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">Our Vision</h3>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold">
                  {VISION_MISSION_DATA.vision}
                </p>
              </div>

              <div className="pt-8 border-t border-slate-200 mt-8">
                <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-800 font-medium">
                  Focused on long-term industry transformation, scientific rigor, and compliance confidence.
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border-emerald-200 space-y-6 bg-gradient-to-br from-white to-emerald-50/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">Core Objectives</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">Our Mission</h3>
                </div>
              </div>

              <p className="text-base text-slate-700 font-medium">
                {VISION_MISSION_DATA.missionIntro}
              </p>

              {/* 8 Mission Points */}
              <div className="pt-2">
                <p className="text-sm font-bold text-slate-900 mb-4">We aim to help companies:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {VISION_MISSION_DATA.missionPoints.map((point, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 hover:border-emerald-500/50 hover:shadow-md transition-all"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
