import React from 'react';
import { ScreenType } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { Menu, Phone, ShieldCheck, KeyRound } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenMobileDrawer: () => void;
  onEmergencyCall: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenMobileDrawer,
  onEmergencyCall,
}) => {
  return (
    <header
      id="top-app-header"
      className="fixed top-0 left-0 w-full z-40 bg-white border-b border-[#e0e3e5] shadow-xs h-16 flex items-center justify-between px-4 md:px-8 transition-all"
    >
      {/* Brand & Mobile Hamburger */}
      <div className="flex items-center gap-3">
        <button
          id="btn-mobile-menu"
          onClick={onOpenMobileDrawer}
          className="p-2 rounded-lg text-[#45464d] hover:bg-[#eceef0] active:scale-95 transition-all md:hidden"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-[#191c1e]" />
        </button>

        <button
          id="brand-logo-button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-left group"
        >
          <div className="w-9 h-9 rounded-lg bg-[#131b2e] flex items-center justify-center text-white shadow-xs group-hover:bg-[#000000] transition-colors">
            <KeyRound className="w-5 h-5 text-[#F97316]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl tracking-tight text-[#191c1e] leading-tight flex items-center gap-1.5">
              PRO LOCKSMITH
            </span>
            <span className="text-[10px] font-semibold text-[#556477] tracking-wide hidden sm:flex items-center gap-1">
              <span className="text-[#F97316] font-bold">Daniel Tucker</span> • Owner & Master Locksmith
            </span>
          </div>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav id="desktop-nav-links" className="hidden md:flex items-center gap-1 lg:gap-2">
        <button
          id="nav-home"
          onClick={() => onNavigate('home')}
          className={`px-3.5 py-2 rounded-md font-medium text-sm transition-all ${
            currentScreen === 'home'
              ? 'text-[#191c1e] font-bold bg-[#eceef0]'
              : 'text-[#45464d] hover:text-[#191c1e] hover:bg-[#f2f4f6]'
          }`}
        >
          Home
        </button>
        <button
          id="nav-services"
          onClick={() => onNavigate('services')}
          className={`px-3.5 py-2 rounded-md font-medium text-sm transition-all ${
            currentScreen === 'services'
              ? 'text-[#191c1e] font-bold bg-[#eceef0]'
              : 'text-[#45464d] hover:text-[#191c1e] hover:bg-[#f2f4f6]'
          }`}
        >
          Services
        </button>
        <button
          id="nav-quote"
          onClick={() => onNavigate('quote')}
          className={`px-3.5 py-2 rounded-md font-medium text-sm transition-all ${
            currentScreen === 'quote'
              ? 'text-[#191c1e] font-bold bg-[#eceef0]'
              : 'text-[#45464d] hover:text-[#191c1e] hover:bg-[#f2f4f6]'
          }`}
        >
          Quote & Contact
        </button>
        <button
          id="nav-emergency"
          onClick={() => onNavigate('emergency')}
          className={`px-3.5 py-2 rounded-md font-medium text-sm transition-all ${
            currentScreen === 'emergency'
              ? 'text-[#ba1a1a] font-bold bg-[#ffdad6]/50'
              : 'text-[#ba1a1a] hover:bg-[#ffdad6]/30'
          }`}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#ba1a1a] mr-1.5 animate-pulse"></span>
          Emergency
        </button>
      </nav>

      {/* Emergency Call Action */}
      <div className="flex items-center gap-2">
        <button
          id="btn-header-call-now"
          onClick={onEmergencyCall}
          className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm md:text-base px-4 py-2 rounded-full shadow-md active:scale-95 transition-all flex items-center gap-2"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">CALL NOW</span>
          <span className="hidden lg:inline text-xs font-mono bg-black/20 px-2 py-0.5 rounded-full ml-0.5">
            {COMPANY_INFO.phone}
          </span>
        </button>
      </div>
    </header>
  );
};
