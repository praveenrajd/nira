import React, { useState } from 'react';
import { Menu, Shield } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../data/navigation';
import { useHeaderScroll, useScrollSpy } from '../../hooks/useScrollSpy';
import { Button } from './Button';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderScroll(40);
  const sectionIds = NAVIGATION_LINKS.map(link => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 120);
  const isLeadershipPage = window.location.hash === '#leadership';
  const getNavigationHref = (href: string) => (
    isLeadershipPage && href !== '#leadership' && href.startsWith('#') ? `/${href}` : href
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 rounded-lg p-1"
              aria-label="NIRA Scientific Solutions Home"
            >
              <div className="relative w-10 h-10 rounded-xl bg-[#0b1f3a] p-[1px] shadow-md shadow-[#0b1f3a]/20 group-hover:shadow-[#0b1f3a]/40 transition-all duration-300">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#0b1f3a] group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-cyan-700 transition-colors">
                  NIRA SCIENTIFIC
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-cyan-700 uppercase">
                  SOLUTIONS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = link.href === '#leadership'
                  ? isLeadershipPage
                  : activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={getNavigationHref(link.href)}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                      isActive
                        ? 'text-cyan-700 font-bold bg-cyan-50 border border-cyan-200/60'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button
                  asAnchor
                  href="/#contact"
                  variant="secondary"
                  size="sm"
                  className="!bg-[#0b1f3a] hover:!bg-[#163b68] !text-white !border-[#0b1f3a]"
                >
                  Schedule Consultation
                </Button>
              </div>

              {/* Hamburger Mobile Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 border border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
