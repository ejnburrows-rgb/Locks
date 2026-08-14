import React, { useState, useEffect } from 'react';
import { ScreenType, EmergencyServiceItem, DispatchStatus } from '../../types';
import { EMERGENCY_SERVICES, COMPANY_INFO } from '../../data/mockData';
import {
  Phone,
  Clock,
  ShieldCheck,
  Home as HomeIcon,
  Car,
  Key,
  Wrench,
  AlertTriangle,
  MapPin,
  CheckCircle,
  Navigation,
  Sparkles,
  Zap,
  PhoneCall,
  UserCheck
} from 'lucide-react';

interface EmergencyScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onEmergencyCall: () => void;
}

export const EmergencyScreen: React.FC<EmergencyScreenProps> = ({
  onNavigate,
  onEmergencyCall,
}) => {
  const [selectedEmergencyService, setSelectedEmergencyService] = useState<string | null>(null);
  const [dispatchStatus, setDispatchStatus] = useState<DispatchStatus>({
    step: 'idle',
    technicianName: 'Marcus Vance',
    technicianPhone: COMPANY_INFO.phone,
    vehicle: 'Pro Van #4 (Mobile Key & CNC Station)',
    etaMinutes: 18,
    location: 'All of South Florida',
  });
  const [userAddress, setUserAddress] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [showDispatchTracker, setShowDispatchTracker] = useState(false);

  // Auto tick simulation when dispatched
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (dispatchStatus.step === 'received') {
      timer = setTimeout(() => {
        setDispatchStatus((prev) => ({ ...prev, step: 'dispatched', etaMinutes: 16 }));
      }, 3000);
    } else if (dispatchStatus.step === 'dispatched') {
      timer = setTimeout(() => {
        setDispatchStatus((prev) => ({ ...prev, step: 'en_route', etaMinutes: 12 }));
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [dispatchStatus.step]);

  const handleUseCurrentLocation = () => {
    setIsLocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserAddress(`Current GPS: ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)} (South Florida)`);
          setIsLocating(false);
        },
        () => {
          setUserAddress('Biscayne Blvd, Miami / South Florida');
          setIsLocating(false);
        },
        { timeout: 5000 }
      );
    } else {
      setUserAddress('Biscayne Blvd, Miami / South Florida');
      setIsLocating(false);
    }
  };

  const handleStartDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAddress) {
      setUserAddress('Current Customer Location');
    }
    setDispatchStatus({
      step: 'received',
      technicianName: 'Marcus Vance',
      technicianPhone: COMPANY_INFO.phone,
      vehicle: 'Pro Van #4 (Fully Stocked Mobile Lab)',
      etaMinutes: 18,
      location: userAddress || 'South Florida',
    });
    setShowDispatchTracker(true);
  };

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
      {/* Hero Header Section */}
      <section className="flex flex-col items-center text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 bg-[#ffdad6] text-[#ba1a1a] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping" />
          <Zap className="w-4 h-4 fill-[#ba1a1a]" />
          <span>24/7 EMERGENCY RESPONSE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#191c1e] tracking-tight">
          Locked Out? <br className="sm:hidden" />
          We're on the Way!
        </h1>

        <p className="text-base sm:text-lg text-[#45464d] max-w-xl mx-auto leading-relaxed">
          Fast, reliable emergency locksmith services. We dispatch immediately so you aren't left stranded.
        </p>

        {/* Estimated Arrival Banner */}
        <div className="bg-[#f2f4f6] rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs border border-[#e0e3e5] w-full max-w-md">
          <div className="p-3 bg-[#131b2e] rounded-xl text-white">
            <Clock className="w-7 h-7 text-[#F97316]" />
          </div>
          <div className="text-left flex-1">
            <div className="text-xs font-semibold text-[#556477] uppercase tracking-wider">
              Estimated Arrival Time
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#191c1e] tracking-tight">
              15 - 30 MIN
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              Units Active
            </span>
          </div>
        </div>

        {/* Big Urgent Call Button */}
        <div className="w-full max-w-md pt-2">
          <button
            id="emergency-btn-call-direct"
            onClick={onEmergencyCall}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-4 sm:py-5 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl active:scale-95 transition-all text-lg sm:text-xl font-bold cursor-pointer"
          >
            <Phone className="w-7 h-7 fill-white" />
            <span>CALL {COMPANY_INFO.phone}</span>
          </button>
          <div className="text-xs text-[#556477] mt-2 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Direct line to emergency dispatcher • No call center wait</span>
          </div>
        </div>
      </section>

      {/* Live Dispatcher Request Box */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e0e3e5] shadow-md mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-md">
              Instant Mobile Dispatch
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e] mt-1">
              Request Immediate Technician Dispatch
            </h2>
            <p className="text-xs sm:text-sm text-[#556477]">
              Share your location to lock in the nearest technician van on duty.
            </p>
          </div>
        </div>

        {!showDispatchTracker ? (
          <form onSubmit={handleStartDispatch} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider">
                Your Current Address or Landmark
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <MapPin className="w-5 h-5 text-[#556477] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={userAddress}
                    onChange={(e) => setUserAddress(e.target.value)}
                    placeholder="Enter street address, building or cross street..."
                    className="w-full pl-11 pr-4 py-3 bg-[#f7f9fb] border border-[#CBD5E1] rounded-xl text-sm focus:outline-hidden focus:border-[#131b2e] focus:bg-white transition-all"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleUseCurrentLocation}
                  disabled={isLocating}
                  className="bg-[#eceef0] hover:bg-[#e0e3e5] text-[#191c1e] px-4 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                >
                  <Navigation className={`w-4 h-4 text-[#F97316] ${isLocating ? 'animate-spin' : ''}`} />
                  <span>{isLocating ? 'Locating...' : 'Use My GPS'}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                className="w-full bg-[#131b2e] hover:bg-black text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer transition-all"
              >
                <Zap className="w-4 h-4 text-[#F97316]" />
                <span>Confirm & Dispatch Nearest Van</span>
              </button>
              <button
                type="button"
                onClick={onEmergencyCall}
                className="w-full bg-white border border-[#CBD5E1] hover:bg-[#f7f9fb] text-[#191c1e] font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer transition-all"
              >
                <Phone className="w-4 h-4 text-[#F97316]" />
                <span>Call Dispatcher First</span>
              </button>
            </div>
          </form>
        ) : (
          /* Active Dispatch Status Tracker Component */
          <div className="bg-[#f7f9fb] rounded-2xl p-6 border border-[#e0e3e5] space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-[#e0e3e5]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#191c1e]">
                    Assigned: {dispatchStatus.technicianName}
                  </div>
                  <div className="text-xs text-[#556477]">{dispatchStatus.vehicle}</div>
                </div>
              </div>
              <div className="bg-[#131b2e] text-white px-3 py-1.5 rounded-lg text-xs font-mono font-semibold">
                ETA: ~{dispatchStatus.etaMinutes} Mins
              </div>
            </div>

            {/* Timeline Progress */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-600 text-white mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-[#191c1e]">1. Emergency Request Received</div>
                  <div className="text-xs text-[#556477]">Location: {userAddress}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`p-1 rounded-full ${dispatchStatus.step !== 'received' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white animate-pulse'} mt-0.5`}>
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-[#191c1e]">2. Technician Dispatched</div>
                  <div className="text-xs text-[#556477]">Marcus Vance notified with mobile tooling unit</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`p-1 rounded-full ${dispatchStatus.step === 'en_route' ? 'bg-[#F97316] text-white animate-pulse' : 'bg-gray-300 text-gray-600'} mt-0.5`}>
                  <Navigation className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-[#191c1e]">3. Mobile Van En Route</div>
                  <div className="text-xs text-[#556477]">Live GPS tracking active. Please keep phone nearby.</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onEmergencyCall}
                className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Technician Direct ({dispatchStatus.technicianPhone})</span>
              </button>
              <button
                onClick={() => setShowDispatchTracker(false)}
                className="bg-white border border-[#e0e3e5] hover:bg-[#eceef0] text-[#45464d] text-xs font-semibold py-3 px-4 rounded-xl"
              >
                Update Details
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Emergency Services Cards Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#191c1e] mb-6">
          Emergency Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EMERGENCY_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedEmergencyService(item.id);
                onEmergencyCall();
              }}
              className="bg-white rounded-2xl p-6 border border-[#e0e3e5] shadow-xs hover:border-[#191c1e] hover:shadow-md transition-all flex items-start gap-4 cursor-pointer group"
            >
              <div className="bg-[#131b2e] group-hover:bg-[#000000] p-3.5 rounded-xl shrink-0 transition-colors shadow-xs">
                {getEmergencyIcon(item.iconName)}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-bold text-[#191c1e] group-hover:text-[#F97316] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-[#556477] bg-[#f2f4f6] px-2 py-0.5 rounded-md">
                    {item.estPrice}
                  </span>
                </div>
                <p className="text-sm text-[#45464d] mb-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Avg arrival: {item.avgTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="bg-[#d2e1f7] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-xs border border-[#bec6e0]">
        <div className="p-4 bg-[#131b2e] text-white rounded-2xl shrink-0 shadow-md">
          <ShieldCheck className="w-10 h-10 text-emerald-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#0d1c2d] mb-1">
            No Hidden Fees Guarantee
          </h3>
          <p className="text-sm text-[#39485a] leading-relaxed">
            Upfront pricing before any work begins. Fully licensed, bonded, and insured professionals. No surprise travel charges or lock-drill damage.
          </p>
        </div>
        <button
          onClick={() => onNavigate('quote')}
          className="bg-[#131b2e] hover:bg-black text-white px-5 py-3 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer"
        >
          View Price Table
        </button>
      </section>
    </div>
  );
};
