import React, { useEffect, useState } from 'react';
import { useSEO } from './hooks/useSEO';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { StructuredData } from './components/common/StructuredData';
import { HeroSection } from './components/home/HeroSection';
import { AboutSection } from './components/home/AboutSection';
import { VisionMissionSection } from './components/home/VisionMissionSection';
import { CoreAreasSection } from './components/home/CoreAreasSection';
import { WhyNiraSection } from './components/home/WhyNiraSection';
import { PartnershipModelSection } from './components/home/PartnershipModelSection';
import { LookingAheadSection } from './components/home/LookingAheadSection';
import { ContactSection } from './components/home/ContactSection';
import { LeadershipPage } from './components/leadership/LeadershipPage';

export const App: React.FC = () => {
  // Initialize SEO Meta Tags
  useSEO();

  const [isLeadershipPage, setIsLeadershipPage] = useState(
    () => window.location.hash === '#leadership'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setIsLeadershipPage(window.location.hash === '#leadership');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isLeadershipPage) {
    return <LeadershipPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-cyan-600 selection:text-white">
      {/* Schema.org Structured Data */}
      <StructuredData />

      {/* Semantic Navigation Header */}
      <Header />

      {/* Main Content Sections in Exact Logical Sequence */}
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <CoreAreasSection />
        <WhyNiraSection />
        <PartnershipModelSection />
        <LookingAheadSection />
        <ContactSection />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
};

export default App;
