import React, { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_INFO } from '../../data/navigation';
import { Button } from './Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const isLeadershipPage = window.location.hash === '#leadership';
  const getNavigationHref = (href: string) => (
    isLeadershipPage && href !== '#leadership' && href.startsWith('#') ? `/${href}` : href
  );

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-slate-200 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <img
              src="/logo.png"
              alt="Nira Scientific Solutions"
              className="w-28 h-16 object-contain"
            />
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 space-y-1.5">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = link.href === '#leadership'
                ? isLeadershipPage
                : activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={getNavigationHref(link.href)}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan-50 text-cyan-700 font-bold border-l-4 border-cyan-600'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0 opacity-100 text-cyan-600' : 'opacity-0 -translate-x-2'}`} />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-8 border-t border-slate-200 space-y-4">
          <Button
            asAnchor
            href="/#contact"
            variant="primary"
            size="lg"
            className="w-full text-white"
            onClick={onClose}
          >
            Schedule Consultation
          </Button>

          <div className="text-center text-xs text-slate-500 space-y-1 pt-2">
            <p className="font-semibold text-slate-800">{COMPANY_INFO.name}</p>
            <p>{COMPANY_INFO.slogan}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
