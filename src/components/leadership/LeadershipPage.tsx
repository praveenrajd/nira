import React from 'react';
import { ArrowRight, BriefcaseBusiness, GraduationCap, Handshake, Shield } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { Button } from '../common/Button';
import { Footer } from '../common/Footer';
import { Header } from '../common/Header';

export const LeadershipPage: React.FC = () => {
  useSEO({
    title: 'Leadership',
    description: 'Meet the founders and strategic leaders behind Nira Scientific Solutions.'
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-cyan-600 selection:text-white">
      <Header />

      <main id="main-content" className="flex-1 pt-28">
        <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50/70 via-white to-slate-50 py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                Leadership
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                The people shaping Nira's next chapter.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Nira Scientific Solutions brings together industry experience, strategic business thinking and a commitment to stronger scientific and regulatory preparedness.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1f3a] text-white shadow-xl shadow-[#0b1f3a]/15">
                  <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                    <BriefcaseBusiness className="w-7 h-7 text-cyan-200" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-cyan-200">Founder & Strategic Advisor</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">Anuj Arora</h2>
                  <p className="mt-3 text-sm font-semibold text-slate-200">Founder, Nira Scientific Solutions</p>
                  <div className="mt-8 pt-6 border-t border-white/15 space-y-3 text-sm text-slate-300">
                    <p className="flex items-start gap-2.5"><GraduationCap className="w-4 h-4 text-cyan-200 shrink-0 mt-0.5" /> Shri Ram College of Commerce, University of Delhi</p>
                    <p className="flex items-start gap-2.5"><Handshake className="w-4 h-4 text-cyan-200 shrink-0 mt-0.5" /> About three decades in homoeopathy and pharmaceutical industry engagement</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 glass-card-static p-6 sm:p-10 space-y-5">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  An alumnus of <strong className="text-slate-900">Shri Ram College of Commerce, University of Delhi</strong>, Anuj Arora brings a strong foundation in business and commercial understanding together with about three decades of engagement with the homoeopathic profession and pharmaceutical industry.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  As the founder publisher of <em>Homoeopathy for All</em> and <em>Advancements in Homoeopathic Research</em>, he has worked closely with homoeopathic physicians, researchers, educators and pharmaceutical companies, developing a broad understanding of the evolving needs of the sector.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  His experience across professional publishing, industry engagement and business development led to the establishment of <strong className="text-slate-900">Nira Scientific Solutions</strong>, with the vision of supporting homoeopathic pharmaceutical companies as the industry moves toward greater scientific evidence, structured documentation and regulatory preparedness.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  As Founder, he provides the strategic direction and industry perspective that underpin Nira's approach to scientific and regulatory support.
                </p>
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-slate-200">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-cyan-200 shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-6">
                    <Handshake className="w-7 h-7 text-[#0b1f3a]" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">Co-Founder | Business Strategy & Growth</p>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">Siddharth Arora</h2>
                </div>
              </div>

              <div className="lg:col-span-8 glass-card-static p-6 sm:p-10 space-y-5">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  Siddharth Arora is the <strong className="text-slate-900">Co-Founder of Nira Scientific Solutions</strong>, where he focuses on <strong className="text-slate-900">business strategy, growth, market development and strategic partnerships</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  He holds a <strong className="text-slate-900">Bachelor of Business Administration (BBA) in Business Intelligence and Business Administration from Amity International Business School</strong>, with an academic foundation in business management, business intelligence, data analysis and strategic decision-making.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  At Nira, Siddharth brings a <strong className="text-slate-900">data-driven and technology-oriented approach to business development</strong>. His focus includes identifying market opportunities, developing growth strategies, building strategic relationships and translating business insights into practical initiatives that support Nira's long-term growth.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  He also has a strong interest and working capability in <strong className="text-slate-900">Artificial Intelligence and AI-enabled business tools</strong>, applying emerging technologies to market research, business analysis, strategic planning, content development, workflow optimisation and business decision-making.
                </p>
              </div>
            </article>

            <div className="pt-4 text-center">
              <Button
                asAnchor
                href="/#contact"
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="!bg-[#0b1f3a] hover:!bg-[#163b68] !text-white !border-[#0b1f3a]"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
