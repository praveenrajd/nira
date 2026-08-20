import React from 'react';
import { ShieldCheck, FileText, Activity, Award, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyan-50/50 via-slate-50 to-slate-100/80">
      {/* Dynamic Light Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-cyan-900/5">
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            <span>Specialised Regulatory & Scientific Partner</span>
          </div>

          {/* Main SEO H1 Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            NIRA SCIENTIFIC <span className="text-gradient">SOLUTIONS</span>
          </h1>

          {/* Subtitle Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Your Regulatory & Scientific Partner in Homoeopathy
          </p>

          {/* Main Intro Lead */}
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Supporting homoeopathic pharmaceutical companies across the full product lifecycle—from concept, development, and scientific evaluation to research planning, evidence generation, dossier preparation, and CDSCO regulatory submissions.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asAnchor
              href="#core-areas"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto !bg-[#0b1f3a] hover:!bg-[#163b68] !text-white !border-[#0b1f3a]"
            >
              Explore Core Partnerships
            </Button>
            <Button
              asAnchor
              href="#contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto !bg-[#0b1f3a] hover:!bg-[#163b68] !text-white !border-[#0b1f3a]"
            >
              Request Regulatory Assessment
            </Button>
          </div>

          {/* Stats / Highlight Pills */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="glass-card-static p-4 sm:p-5 border-slate-200 bg-white shadow-md">
              <FileText className="w-6 h-6 text-cyan-600 mb-2" />
              <h3 className="text-sm font-bold text-slate-900">CDSCO Readiness</h3>
              <p className="text-xs text-slate-600 mt-1">Dossier preparation & regulatory submission support.</p>
            </div>

            <div className="glass-card-static p-4 sm:p-5 border-slate-200 bg-white shadow-md">
              <Activity className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="text-sm font-bold text-slate-900">Evidence Generation</h3>
              <p className="text-xs text-slate-600 mt-1">Scientific literature reviews & systematic research.</p>
            </div>

            <div className="glass-card-static p-4 sm:p-5 border-slate-200 bg-white shadow-md">
              <Award className="w-6 h-6 text-cyan-600 mb-2" />
              <h3 className="text-sm font-bold text-slate-900">Clinical Coordination</h3>
              <p className="text-xs text-slate-600 mt-1">Protocol design & ethics committee documentation.</p>
            </div>

            <div className="glass-card-static p-4 sm:p-5 border-slate-200 bg-white shadow-md">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="text-sm font-bold text-slate-900">Product Lifecycle</h3>
              <p className="text-xs text-slate-600 mt-1">Long-term strategic extension of client teams.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
