import React from 'react';
import { ServiceItem } from '../types';
import {
  X,
  CheckCircle,
  Clock,
  Shield,
  Tag,
  Phone,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceName: string) => void;
  onEmergencyCall: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
  onEmergencyCall,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#e0e3e5] relative animate-in zoom-in-95 max-h-[90vh] flex flex-col">
        {/* Modal Image Header */}
        <div className="h-48 w-full relative overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 text-white">
            <span className="text-xs uppercase font-bold tracking-wider text-[#F97316] bg-black/40 px-2.5 py-1 rounded-md">
              {service.badge || 'Professional Service'}
            </span>
            <h2 className="text-2xl font-bold tracking-tight mt-1 text-white">
              {service.title} Locksmith Solutions
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#191c1e] mb-1">
              Overview
            </h3>
            <p className="text-sm text-[#45464d] leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#f7f9fb] p-3 rounded-xl border border-[#e0e3e5]">
              <div className="text-[11px] font-semibold text-[#556477]">Starting Price</div>
              <div className="text-base font-bold text-[#191c1e]">${service.startingPrice}</div>
            </div>
            <div className="bg-[#f7f9fb] p-3 rounded-xl border border-[#e0e3e5]">
              <div className="text-[11px] font-semibold text-[#556477]">Response Time</div>
              <div className="text-base font-bold text-[#191c1e]">{service.timeframe}</div>
            </div>
            <div className="bg-[#f7f9fb] p-3 rounded-xl border border-[#e0e3e5] col-span-2 sm:col-span-1">
              <div className="text-[11px] font-semibold text-[#556477]">Warranty</div>
              <div className="text-base font-bold text-emerald-700">90-Day Labor</div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#191c1e] mb-3">
              Included Services & Capabilities
            </h3>
            <div className="space-y-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#45464d]">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware Options */}
          {service.popularOptions && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#191c1e] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F97316]" />
                Supported Hardware & Brands
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.popularOptions.map((opt, i) => (
                  <span
                    key={i}
                    className="bg-[#f2f4f6] text-[#191c1e] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#e0e3e5]"
                  >
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-4 sm:p-6 bg-[#f7f9fb] border-t border-[#e0e3e5] flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={() => {
              onRequestQuote(service.title);
              onClose();
            }}
            className="flex-1 bg-[#131b2e] hover:bg-black text-white py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              onClose();
              onEmergencyCall();
            }}
            className="bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
