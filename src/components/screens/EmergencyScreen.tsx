import React from 'react';
import { ScreenType, EmergencyServiceItem } from '../../types';
import { COMPANY_INFO, EMERGENCY_SERVICES } from '../../data/mockData';
import {
  Phone,
  Home as HomeIcon,
  Car,
  Key,
  Wrench,
  Clock,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface EmergencyScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onEmergencyCall: () => void;
}

export const EmergencyScreen: React.FC<EmergencyScreenProps> = ({
  onNavigate,
  onEmergencyCall,
}) => {
  const getEmergencyIcon = (iconName: EmergencyServiceItem['iconName']) => {
    switch (iconName) {
      case 'home':
        return <HomeIcon className="w-6 h-6 text-white" />;
      case 'directions_car':
        return <Car className="w-6 h-6 text-white" />;
      case 'key':
        return <Key className="w-6 h-6 text-white" />;
      case 'build':
        return <Wrench className="w-6 h-6 text-white" />;
      default:
        return <Key className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <section className="flex flex-col items-center text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 bg-[#fff7ed] text-[#9a3412] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide border border-[#fed7aa]">
          <Phone className="w-4 h-4" />
          <span>URGENT LOCKOUT HELP</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191c1e] tracking-tight">
          Need Locksmith Help Now?
        </h1>

        <p className="text-base sm:text-lg text-[#45464d] max-w-2xl mx-auto leading-relaxed">
          Call Pro Locksmith directly to confirm current availability, service coverage, and the ETA for your location.
        </p>

        <div className="w-full max-w-md grid gap-3 pt-2">
          <button
            id="emergency-btn-call-direct"
            onClick={onEmergencyCall}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all text-lg font-bold cursor-pointer"
          >
            <Phone className="w-6 h-6 fill-white" />
            <span>Call {COMPANY_INFO.phone}</span>
          </button>

          <a
            href={`sms:${COMPANY_INFO.phoneRaw}?body=I%20need%20locksmith%20service.%20Please%20contact%20me%20about%20availability%20and%20ETA.`}
            className="w-full bg-white border border-[#CBD5E1] hover:bg-[#f7f9fb] text-[#191c1e] py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold transition-colors"
          >
            <MessageSquare className="w-5 h-5 text-[#F97316]" />
            <span>Text Service Request</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#556477]">
          <Clock className="w-4 h-4 text-[#F97316]" />
          <span>ETA varies by location, traffic, service type, and technician availability.</span>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#191c1e] mb-2">Emergency Service Options</h2>
        <p className="text-sm text-[#556477] mb-6">
          Select a category for reference, then call to confirm whether the requested service is currently available.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EMERGENCY_SERVICES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#e0e3e5] shadow-xs flex items-start gap-4"
            >
              <div className="bg-[#131b2e] p-3.5 rounded-xl shrink-0 shadow-xs">
                {getEmergencyIcon(item.iconName)}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start gap-3 mb-1">
                  <h3 className="text-lg font-bold text-[#191c1e]">{item.title}</h3>
                  <span className="text-xs font-bold text-[#556477] bg-[#f2f4f6] px-2 py-1 rounded-md whitespace-nowrap">
                    {item.estPrice}
                  </span>
                </div>
                <p className="text-sm text-[#45464d] mb-3 leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-[#556477] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{item.avgTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#d2e1f7] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left border border-[#bec6e0]">
        <div className="p-4 bg-[#131b2e] text-white rounded-2xl shrink-0">
          <ShieldCheck className="w-10 h-10 text-[#F97316]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#0d1c2d] mb-1">Confirm Before Authorizing Work</h3>
          <p className="text-sm text-[#39485a] leading-relaxed">
            Confirm the service scope, estimate, current ETA, credentials, and applicable warranty terms directly before work begins.
          </p>
        </div>
        <button
          onClick={() => onNavigate('quote')}
          className="bg-[#131b2e] hover:bg-black text-white px-5 py-3 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer"
        >
          Prepare Quote Request
        </button>
      </section>
    </div>
  );
};
