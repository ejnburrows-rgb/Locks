import React, { useState } from 'react';
import { ScreenType, ServiceItem } from '../../types';
import { SERVICES_DATA, COMPANY_INFO } from '../../data/mockData';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Phone,
  Sparkles,
  Lock,
  Smartphone,
  Key,
  BadgeCheck,
  Building,
  Home as HomeIcon,
  Car
} from 'lucide-react';

interface ServicesScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectService: (service: ServiceItem) => void;
  onEmergencyCall: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onNavigate,
  onSelectService,
  onEmergencyCall,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'residential' | 'commercial' | 'automotive'>('all');

  const filteredServices = selectedFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedFilter);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Header Section */}
      <section className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 bg-[#d2e1f7] text-[#131b2e] text-xs font-semibold px-3 py-1 rounded-full mb-3">
          <BadgeCheck className="w-4 h-4 text-[#131b2e]" />
          Comprehensive Security Solutions
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191c1e] tracking-tight mb-3">
          Professional Locksmith Services
        </h1>
        <p className="text-base sm:text-lg text-[#45464d] max-w-3xl leading-relaxed">
          Residential, commercial, and automotive locksmith services. Call to confirm current availability, scope, and ETA.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-6">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#131b2e] text-white shadow-xs'
                : 'bg-white text-[#45464d] border border-[#e0e3e5] hover:bg-[#eceef0]'
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setSelectedFilter('residential')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'residential'
                ? 'bg-[#131b2e] text-white shadow-xs'
                : 'bg-white text-[#45464d] border border-[#e0e3e5] hover:bg-[#eceef0]'
            }`}
          >
            <HomeIcon className="w-3.5 h-3.5" />
            Residential
          </button>
          <button
            onClick={() => setSelectedFilter('commercial')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'commercial'
                ? 'bg-[#131b2e] text-white shadow-xs'
                : 'bg-white text-[#45464d] border border-[#e0e3e5] hover:bg-[#eceef0]'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            Commercial
          </button>
          <button
            onClick={() => setSelectedFilter('automotive')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'automotive'
                ? 'bg-[#131b2e] text-white shadow-xs'
                : 'bg-white text-[#45464d] border border-[#e0e3e5] hover:bg-[#eceef0]'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            Automotive
          </button>
        </div>
      </section>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="bg-white rounded-2xl border border-[#e0e3e5] shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group"
          >
            {/* Card Image Header */}
            <div className="h-52 w-full relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-black/40 backdrop-blur-xs text-white">
                  {service.category === 'residential' && <HomeIcon className="w-5 h-5" />}
                  {service.category === 'commercial' && <Building className="w-5 h-5" />}
                  {service.category === 'automotive' && <Car className="w-5 h-5" />}
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {service.title}
                </h2>
              </div>
              <div className="absolute top-3 right-3 bg-[#131b2e]/85 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full">
                Quote required
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <p className="text-sm text-[#45464d] mb-5 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Service Bullet Points with Check Circles */}
                <div className="mb-6 space-y-2.5">
                  <div className="text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-2">
                    Included Capabilities
                  </div>
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#45464d]">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Popular Hardware / Options */}
                {service.popularOptions && (
                  <div className="mb-6 pt-4 border-t border-[#e0e3e5]">
                    <div className="text-xs font-semibold text-[#556477] mb-2 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                      Supported Brands & Hardware:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.popularOptions.map((opt, i) => (
                        <span
                          key={i}
                          className="bg-[#f2f4f6] text-[#191c1e] text-[11px] font-medium px-2.5 py-1 rounded-md border border-[#e0e3e5]"
                        >
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-[#e0e3e5]">
                <button
                  id={`btn-learn-more-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 border border-[#CBD5E1] rounded-xl font-semibold text-sm text-[#191c1e] hover:border-[#191c1e] hover:bg-[#f7f9fb] transition-all cursor-pointer"
                >
                  <span>Learn More & Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('quote')}
                  className="w-full bg-[#131b2e] hover:bg-[#000000] text-white py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Request Quote for {service.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Hardware & Smart Locks Highlight */}
      <section className="mt-14 bg-[#131b2e] text-white rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden relative">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Hardware Upgrades
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Keyless Access & Smart Lock Installations
          </h2>
          <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed">
            Ask about compatible smart locks, keypad entry, access-control hardware, and high-security lock options. Confirm installation scope and applicable manufacturer warranty terms before purchase.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <Smartphone className="w-5 h-5 text-[#F97316] mb-1.5" />
              <div className="font-bold text-sm">Smart WiFi Locks</div>
              <div className="text-xs text-[#bec6e0]">Remote unlock, guest access codes & logs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <Shield className="w-5 h-5 text-[#F97316] mb-1.5" />
              <div className="font-bold text-sm">High-Security Deadbolts</div>
              <div className="text-xs text-[#bec6e0]">Ask about high-security options</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
              <Key className="w-5 h-5 text-[#F97316] mb-1.5" />
              <div className="font-bold text-sm">Master Keying</div>
              <div className="text-xs text-[#bec6e0]">One key for all exterior/interior doors</div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
            >
              Request Hardware Consultation
            </button>
            <button
              onClick={onEmergencyCall}
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
            >
              Call {COMPANY_INFO.phone}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
