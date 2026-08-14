import React from 'react';
import { ScreenType } from '../types';
import { Home, Wrench, FileText, PhoneCall } from 'lucide-react';

interface BottomNavBarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onEmergencyCall: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentScreen,
  onNavigate,
  onEmergencyCall,
}) => {
  return (
    <nav
      id="mobile-bottom-nav"
      className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-[#e0e3e5] shadow-lg flex justify-around items-center h-16 pb-safe px-2"
    >
      <button
        id="mobile-tab-home"
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center justify-center p-1.5 rounded-xl w-16 transition-all ${
          currentScreen === 'home'
            ? 'text-[#131b2e] font-bold bg-[#eceef0]'
            : 'text-[#45464d] hover:bg-[#f2f4f6]'
        }`}
      >
        <Home className={`w-5 h-5 ${currentScreen === 'home' ? 'stroke-[2.5]' : 'stroke-2'}`} />
        <span className="text-[11px] mt-0.5">Home</span>
      </button>

      <button
        id="mobile-tab-services"
        onClick={() => onNavigate('services')}
        className={`flex flex-col items-center justify-center p-1.5 rounded-xl w-16 transition-all ${
          currentScreen === 'services'
            ? 'text-[#131b2e] font-bold bg-[#eceef0]'
            : 'text-[#45464d] hover:bg-[#f2f4f6]'
        }`}
      >
        <Wrench className={`w-5 h-5 ${currentScreen === 'services' ? 'stroke-[2.5]' : 'stroke-2'}`} />
        <span className="text-[11px] mt-0.5">Services</span>
      </button>

      <button
        id="mobile-tab-quote"
        onClick={() => onNavigate('quote')}
        className={`flex flex-col items-center justify-center p-1.5 rounded-xl w-16 transition-all ${
          currentScreen === 'quote'
            ? 'text-[#131b2e] font-bold bg-[#eceef0]'
            : 'text-[#45464d] hover:bg-[#f2f4f6]'
        }`}
      >
        <FileText className={`w-5 h-5 ${currentScreen === 'quote' ? 'stroke-[2.5]' : 'stroke-2'}`} />
        <span className="text-[11px] mt-0.5">Quote</span>
      </button>

      <button
        id="mobile-tab-emergency"
        onClick={() => {
          onNavigate('emergency');
        }}
        className={`flex flex-col items-center justify-center p-1.5 rounded-xl w-16 transition-all relative ${
          currentScreen === 'emergency'
            ? 'text-[#ba1a1a] font-bold bg-[#ffdad6]'
            : 'text-[#ba1a1a] hover:bg-[#ffdad6]/40'
        }`}
      >
        <span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping" />
        <span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-[#ba1a1a]" />
        <PhoneCall className="w-5 h-5 stroke-[2.5]" />
        <span className="text-[11px] mt-0.5 font-bold text-[#ba1a1a]">Emergency</span>
      </button>
    </nav>
  );
};
