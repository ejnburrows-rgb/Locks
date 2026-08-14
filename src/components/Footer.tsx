import React from 'react';
import { ScreenType } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { Shield, Phone, MapPin, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onEmergencyCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onEmergencyCall }) => {
  return (
    <footer
      id="main-footer"
      className="bg-[#131b2e] text-[#eceef0] w-full mt-12 py-10 px-4 md:px-8 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="flex flex-col items-center">
          <div className="font-bold text-2xl tracking-tight text-white mb-1">
            PRO LOCKSMITH
          </div>
          <p className="text-sm text-[#7c839b] max-w-md">
            Owned & Operated by <strong className="text-white">Daniel Tucker</strong> • Fast, Reliable & Licensed Locksmith Services across All of South Florida.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-[#bec6e0]">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-white transition-colors"
          >
            Home
          </button>
          <span className="opacity-30">|</span>
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-white transition-colors"
          >
            Services
          </button>
          <span className="opacity-30">|</span>
          <button
            onClick={() => onNavigate('quote')}
            className="hover:text-white transition-colors"
          >
            Request Quote
          </button>
          <span className="opacity-30">|</span>
          <button
            onClick={() => onNavigate('emergency')}
            className="text-[#F97316] font-semibold hover:underline"
          >
            Emergency 24/7
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-[#7c839b]">
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Terms of Service: Pro Locksmith provides licensed security services with upfront transparent estimates and manufacturer hardware warranties."); }} className="hover:text-white">
            Terms of Service
          </a>
          <span className="opacity-30">|</span>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Your personal phone and location data are only used for dispatching our mobile locksmith unit."); }} className="hover:text-white">
            Privacy Policy
          </a>
          <span className="opacity-30">|</span>
          <button onClick={() => onNavigate('quote')} className="hover:text-white">
            Contact Us
          </button>
        </div>

        <div className="text-xs text-[#7c839b] border-t border-[#3f465c]/40 pt-4 w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© 2026 Pro Locksmith Services. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Licensed, Bonded & Insured ({COMPANY_INFO.licenseNo})</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
