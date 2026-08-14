import React from 'react';
import { ScreenType } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import {
  Home,
  Wrench,
  FileText,
  PhoneCall,
  X,
  ShieldCheck,
  Award,
  Sparkles,
  Phone
} from 'lucide-react';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onEmergencyCall: () => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  currentScreen,
  onNavigate,
  onEmergencyCall,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-xs transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-80 bg-white z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-[#e0e3e5] flex items-center justify-between">
          <div>
            <div className="font-bold text-xl text-[#191c1e] tracking-tight">
              PRO LOCKSMITH
            </div>
            <div className="text-xs text-[#F97316] font-semibold">24/7 Security Solutions</div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#eceef0] text-[#45464d]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-2 flex-grow">
          <button
            onClick={() => {
              onNavigate('home');
              onClose();
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all ${
              currentScreen === 'home'
                ? 'bg-[#eceef0] text-[#191c1e] font-bold'
                : 'text-[#45464d] hover:bg-[#f2f4f6]'
            }`}
          >
            <Home className="w-5 h-5 text-[#191c1e]" />
            Home
          </button>

          <button
            onClick={() => {
              onNavigate('services');
              onClose();
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all ${
              currentScreen === 'services'
                ? 'bg-[#eceef0] text-[#191c1e] font-bold'
                : 'text-[#45464d] hover:bg-[#f2f4f6]'
            }`}
          >
            <Wrench className="w-5 h-5 text-[#191c1e]" />
            Services
          </button>

          <button
            onClick={() => {
              onNavigate('quote');
              onClose();
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all ${
              currentScreen === 'quote'
                ? 'bg-[#eceef0] text-[#191c1e] font-bold'
                : 'text-[#45464d] hover:bg-[#f2f4f6]'
            }`}
          >
            <FileText className="w-5 h-5 text-[#191c1e]" />
            Quote & Contact
          </button>

          <button
            onClick={() => {
              onNavigate('emergency');
              onClose();
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all ${
              currentScreen === 'emergency'
                ? 'bg-[#ffdad6] text-[#ba1a1a] font-bold'
                : 'text-[#ba1a1a] hover:bg-[#ffdad6]/40'
            }`}
          >
            <PhoneCall className="w-5 h-5 text-[#ba1a1a]" />
            Emergency (24/7)
          </button>

          <div className="mt-4 p-4 rounded-xl bg-[#f2f4f6] border border-[#e0e3e5] text-xs text-[#45464d] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[#191c1e]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Licensed, Bonded & Insured
            </div>
            <p>Direct mobile dispatch with average 15-30 minute arrival across all of South Florida.</p>
          </div>
        </nav>

        <div className="p-4 border-t border-[#e0e3e5]">
          <button
            onClick={() => {
              onEmergencyCall();
              onClose();
            }}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5 fill-white" />
            CALL {COMPANY_INFO.phone}
          </button>
        </div>
      </div>
    </>
  );
};

// Desktop persistent drawer for the Services split-screen layout shown in Mockup 2
export const DesktopNavigationDrawer: React.FC<{
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onEmergencyCall: () => void;
}> = ({ currentScreen, onNavigate, onEmergencyCall }) => {
  return (
    <aside className="hidden md:flex flex-col gap-2 py-6 px-4 bg-[#f2f4f6] text-[#191c1e] h-screen w-80 fixed left-0 top-16 border-r border-[#e0e3e5] z-30">
      <div className="px-3 mb-4">
        <div className="text-xl font-bold text-[#191c1e]">PRO LOCKSMITH</div>
        <div className="text-sm font-semibold text-[#556477]">Security Services Portal</div>
      </div>

      <nav className="flex flex-col gap-1.5 flex-grow">
        <button
          onClick={() => onNavigate('home')}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all ${
            currentScreen === 'home'
              ? 'bg-[#131b2e] text-white font-bold shadow-xs'
              : 'text-[#45464d] hover:bg-[#e6e8ea]'
          }`}
        >
          <Home className="w-5 h-5" />
          Home
        </button>

        <button
          onClick={() => onNavigate('services')}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all ${
            currentScreen === 'services'
              ? 'bg-[#d2e1f7] text-[#131b2e] font-bold shadow-xs'
              : 'text-[#45464d] hover:bg-[#e6e8ea]'
          }`}
        >
          <Wrench className="w-5 h-5" />
          Services
        </button>

        <button
          onClick={() => onNavigate('quote')}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all ${
            currentScreen === 'quote'
              ? 'bg-[#d2e1f7] text-[#131b2e] font-bold shadow-xs'
              : 'text-[#45464d] hover:bg-[#e6e8ea]'
          }`}
        >
          <FileText className="w-5 h-5" />
          Quote & Contact
        </button>

        <button
          onClick={() => onNavigate('emergency')}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all ${
            currentScreen === 'emergency'
              ? 'bg-[#ffdad6] text-[#ba1a1a] font-bold shadow-xs'
              : 'text-[#ba1a1a] hover:bg-[#ffdad6]/40'
          }`}
        >
          <PhoneCall className="w-5 h-5 text-[#F97316]" />
          <span className="text-[#F97316] font-bold">Emergency 24/7</span>
        </button>
      </nav>

      <div className="pt-4 border-t border-[#e0e3e5]">
        <div className="bg-white p-3 rounded-xl border border-[#e0e3e5] mb-3 text-xs text-[#556477]">
          <div className="flex items-center gap-1.5 font-bold text-[#191c1e] mb-1">
            <Award className="w-4 h-4 text-[#F97316]" />
            15 - 30 Min Response
          </div>
          Mobile technicians ready on standby across all of South Florida.
        </div>
        <button
          onClick={onEmergencyCall}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-3 rounded-xl font-bold flex justify-center items-center gap-2 shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 fill-white" />
          CALL NOW
        </button>
      </div>
    </aside>
  );
};
