import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { CORE_AREAS_DATA } from '../../data/services';
import { ServiceModal } from './ServiceModal';
import { CoreAreaItem } from '../../types';
import { ShieldCheck, BookOpenCheck, Microscope, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

export const CoreAreasSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<CoreAreaItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-600" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-emerald-600" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-cyan-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="core-areas" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Integrated Capabilities"
          title="Our Core Areas of Partnership"
          subtitle="Comprehensive regulatory, scientific, research, and dossier preparation support throughout the product lifecycle"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_AREAS_DATA.map((area) => (
            <div
              key={area.id}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between border-slate-200 bg-white hover:border-cyan-500/60 hover:shadow-xl group relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                      {getIcon(area.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-cyan-700 tracking-wider uppercase block">
                        Area {area.number}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        {area.badge}
                      </span>
                    </div>
                  </div>

                  <span className="text-3xl font-black text-slate-200 group-hover:text-slate-300 transition-colors">
                    {area.number}
                  </span>
                </div>

                {/* H3 Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {area.number}. {area.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {area.description}
                </p>

                {/* Support List Items */}
                <div className="pt-4 border-t border-slate-200 space-y-2.5">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Our support includes:
                  </p>
                  <ul className="grid grid-cols-1 gap-2">
                    {area.items.slice(0, 6).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {area.items.length > 6 && (
                    <p className="text-xs text-cyan-700 font-bold pt-1">
                      + {area.items.length - 6} additional specialised services
                    </p>
                  )}
                </div>

                {/* Special Note if Present */}
                {area.note && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 italic font-medium">
                    {area.note}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(area)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 rounded-md p-1"
                >
                  <span>Explore Full Scope & Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#contact"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Inquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Deep Inspection */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
