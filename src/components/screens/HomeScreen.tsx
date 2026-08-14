import React from 'react';
import { ScreenType, ServiceItem } from '../../types';
import { IMAGES, SERVICES_DATA, COMPANY_INFO } from '../../data/mockData';
import { TestimonialCarousel } from '../TestimonialCarousel';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Home as HomeIcon,
  Building2,
  Car,
  CheckCircle2,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectService: (service: ServiceItem) => void;
  onEmergencyCall: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectService,
  onEmergencyCall,
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative w-full bg-[#131b2e] text-white pt-8 pb-14 md:py-16 px-4 md:px-8 border-b border-[#3f465c] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 text-left">
            {/* Owner & Emergency Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 bg-[#ba1a1a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                <Zap className="w-3.5 h-3.5 fill-white" />
                <span>24/7 Mobile Dispatch</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#1d273f] text-[#bec6e0] border border-[#3f465c] text-xs font-semibold px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Owner: <strong className="text-white ml-1">Daniel Tucker</strong></span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
              We Arrive <br className="hidden sm:inline" />
              <span className="text-[#F97316]">Faster Than A Supra</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#d4e4fa] max-w-xl leading-relaxed">
              Locked out of your car, house, or commercial building? Founded and operated by <strong>Daniel Tucker</strong>, our mobile locksmith units provide rapid, damage-free entry, smart lock upgrades, and on-site key programming across <strong>all of South Florida</strong>.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mt-2">
              <button
                id="hero-btn-help-now"
                onClick={onEmergencyCall}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base sm:text-lg px-7 py-3.5 rounded-xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call {COMPANY_INFO.phone}</span>
              </button>

              <button
                id="hero-btn-request-quote"
                onClick={() => onNavigate('quote')}
                className="bg-transparent border-2 border-[#bec6e0]/60 hover:bg-white/10 text-white font-semibold text-base sm:text-lg px-6 py-3.5 rounded-xl active:scale-95 transition-all cursor-pointer text-center"
              >
                Request Quote
              </button>
            </div>

            {/* Service Guarantee Line */}
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-[#bec6e0] pt-2">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F97316]" />
                <span>15–30 Min Arrival</span>
              </div>
              <span className="text-[#3f465c]">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Licensed & Bonded</span>
              </div>
              <span className="text-[#3f465c]">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span>All of South Florida</span>
              </div>
            </div>
          </div>

          {/* Right Column: Supra Hero Banner Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F97316]/40 group">
              <img
                src={IMAGES.hero}
                alt="Pro Locksmith - We Arrive Faster Than A Supra Hero Banner"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#131b2e] via-[#131b2e]/60 to-transparent p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                    PRO LOCKSMITH FLEET
                  </div>
                  <div className="text-xs text-white font-medium">
                    Owner: Daniel Tucker • 24/7 Mobile Service
                  </div>
                </div>
                <div className="bg-[#ba1a1a] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  15-Min ETA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section
        id="trust-badges"
        className="bg-[#f7f9fb] py-6 md:py-8 border-b border-[#e0e3e5]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap justify-center items-center gap-6 md:gap-14 text-[#45464d]">
          <div className="flex items-center gap-2.5 font-semibold text-sm md:text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2.5 font-semibold text-sm md:text-base">
            <Clock className="w-5 h-5 text-[#F97316]" />
            <span>15-Min Arrival</span>
          </div>
          <div className="flex items-center gap-2.5 font-semibold text-sm md:text-base">
            <Award className="w-5 h-5 text-[#131b2e]" />
            <span>Bonded Professionals</span>
          </div>
        </div>
      </section>

      {/* Our Services Bento Grid */}
      <section id="services-bento" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191c1e] tracking-tight">
              Our Services
            </h2>
            <p className="text-base text-[#45464d] mt-2 max-w-lg mx-auto">
              Comprehensive security solutions for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Residential Card */}
            <div
              id="service-card-residential"
              className="bg-[#f7f9fb] rounded-2xl border border-[#e0e3e5] overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-52 relative overflow-hidden">
                <img
                  src={SERVICES_DATA[0].image}
                  alt="Residential smart lock door"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="p-2 rounded-lg bg-black/40 backdrop-blur-xs">
                    <HomeIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-lg text-white">Residential</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#131b2e]/80 text-white text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-xs">
                  From $75
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                    Residential
                  </h3>
                  <p className="text-sm text-[#45464d] mb-4 leading-relaxed">
                    {SERVICES_DATA[0].shortDescription}
                  </p>
                  <ul className="text-xs text-[#556477] space-y-1.5 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>House lockouts (non-destructive)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Smart lock installation & setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Deadbolt rekeying & replacement</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService(SERVICES_DATA[0])}
                  className="text-[#131b2e] font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 text-left transition-all hover:text-[#F97316] cursor-pointer pt-2 border-t border-[#e0e3e5]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Commercial Card */}
            <div
              id="service-card-commercial"
              className="bg-[#f7f9fb] rounded-2xl border border-[#e0e3e5] overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-52 relative overflow-hidden">
                <img
                  src={SERVICES_DATA[1].image}
                  alt="Commercial keypad access door"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="p-2 rounded-lg bg-black/40 backdrop-blur-xs">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-lg text-white">Commercial</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#131b2e]/80 text-white text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-xs">
                  From $120
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                    Commercial
                  </h3>
                  <p className="text-sm text-[#45464d] mb-4 leading-relaxed">
                    {SERVICES_DATA[1].shortDescription}
                  </p>
                  <ul className="text-xs text-[#556477] space-y-1.5 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Master key systems & sub-trees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Access control & card readers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Panic bar crash hardware</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService(SERVICES_DATA[1])}
                  className="text-[#131b2e] font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 text-left transition-all hover:text-[#F97316] cursor-pointer pt-2 border-t border-[#e0e3e5]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Automotive Card */}
            <div
              id="service-card-automotive"
              className="bg-[#f7f9fb] rounded-2xl border border-[#e0e3e5] overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-52 relative overflow-hidden">
                <img
                  src={SERVICES_DATA[2].image}
                  alt="Automotive modern key fob"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="p-2 rounded-lg bg-black/40 backdrop-blur-xs">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-lg text-white">Automotive</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#131b2e]/80 text-white text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-xs">
                  From $85
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                    Automotive
                  </h3>
                  <p className="text-sm text-[#45464d] mb-4 leading-relaxed">
                    {SERVICES_DATA[2].shortDescription}
                  </p>
                  <ul className="text-xs text-[#556477] space-y-1.5 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Car lockouts (all makes/models)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Key fob & proximity programming</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Ignition cylinder repair on spot</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService(SERVICES_DATA[2])}
                  className="text-[#131b2e] font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 text-left transition-all hover:text-[#F97316] cursor-pointer pt-2 border-t border-[#e0e3e5]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Direct Commitment & Guarantee Section */}
      <section className="py-12 md:py-16 bg-[#f7f9fb] border-b border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#e0e3e5] shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#131b2e] text-[#F97316] flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="space-y-3 flex-grow text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] uppercase tracking-wider bg-[#fff7ed] px-3 py-1 rounded-full border border-[#ffedd5]">
                <Award className="w-3.5 h-3.5" />
                <span>Owner's Personal Guarantee</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#191c1e] tracking-tight">
                "We provide clear, honest pricing before we touch a single lock."
              </h3>
              <p className="text-sm md:text-base text-[#45464d] leading-relaxed max-w-3xl">
                As the owner of Pro Locksmith, I personally guarantee that our mobile locksmith fleet will treat your emergency with speed, precision, and respect. No hidden dispatch fees, no bait-and-switch pricing, and 100% damage-free entry techniques.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs md:text-sm font-semibold text-[#191c1e]">
                <span className="text-[#F97316] font-bold text-base">Daniel Tucker</span>
                <span className="text-[#bec6e0]">|</span>
                <span className="text-[#556477]">Owner & Master Technician</span>
                <span className="text-[#bec6e0]">|</span>
                <span className="text-[#556477]">Direct: 786-344-5765</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Fast Dispatch Feature Banner */}
      <section className="bg-[#131b2e] text-white py-12 px-4 md:px-8 border-y border-[#3f465c]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#F97316] text-xs uppercase font-bold tracking-wider">
              <Zap className="w-4 h-4" />
              Immediate Response Unit
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Stranded or Locked Out Right Now?
            </h3>
            <p className="text-[#bec6e0] text-sm md:text-base max-w-xl">
              Don't wait hours in the cold. Our GPS-dispatched mobile locksmith vans are equipped with modern decoders and key-cutting CNCs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={onEmergencyCall}
              className="w-full sm:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call {COMPANY_INFO.phone}</span>
            </button>
            <button
              onClick={() => onNavigate('emergency')}
              className="w-full sm:w-auto bg-[#ffdad6]/20 border border-[#ffdad6]/40 hover:bg-[#ffdad6]/30 text-white font-semibold py-3.5 px-6 rounded-xl text-center transition-all"
            >
              Track Mobile Van ETA
            </button>
          </div>
        </div>
      </section>

      {/* Verified Customer Testimonials Carousel Section */}
      <TestimonialCarousel
        onEmergencyCall={onEmergencyCall}
        onRequestQuote={() => onNavigate('quote')}
      />
    </div>
  );
};
