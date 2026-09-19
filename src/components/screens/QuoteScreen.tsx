import React, { useState } from 'react';
import { ScreenType, QuoteRequest } from '../../types';
import { COMPANY_INFO, FAQ_DATA } from '../../data/mockData';
import {
  Phone,
  MapPin,
  Mail,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Send,
  Calculator,
  ShieldAlert,
  Clock
} from 'lucide-react';

interface QuoteScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onEmergencyCall: () => void;
}

export const QuoteScreen: React.FC<QuoteScreenProps> = ({
  onNavigate,
  onEmergencyCall,
}) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    phoneNumber: '',
    serviceType: 'Residential Lockout',
    details: '',
    urgency: 'immediate',
    address: ''
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<string>('Estimate after review');

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({ ...prev, serviceType: service }));
    setEstimatedCost('Estimate after review');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Title & Introduction */}
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191c1e] tracking-tight mb-3">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-[#45464d] max-w-2xl mx-auto leading-relaxed">
          Need assistance? Request a quote, ask a question, or call us for immediate emergency service.
        </p>
      </section>

      {/* Emergency Assistance Direct Call Card */}
      <div className="bg-white rounded-2xl border border-[#e0e3e5] shadow-sm overflow-hidden mb-8 border-t-4 border-t-[#F97316]">
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c1e]">
                Emergency Assistance
              </h2>
              <p className="text-sm text-[#45464d] mt-1">
                Available 24/7 for lockouts and urgent security issues.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <Clock className="w-3.5 h-3.5" />
              <span>Call for current ETA</span>
            </div>
          </div>

          <button
            id="quote-page-emergency-call"
            onClick={onEmergencyCall}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-95 transition-all text-lg cursor-pointer"
          >
            <Phone className="w-6 h-6 fill-white" />
            <span>{COMPANY_INFO.phone}</span>
          </button>
        </div>
      </div>

      {/* Service Coverage Area Card */}
      <div className="bg-white rounded-2xl border border-[#e0e3e5] shadow-sm overflow-hidden mb-8">
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#131b2e] text-[#F97316] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#191c1e]">Service Area & Owner Contact</h3>
              <p className="text-base font-semibold text-[#F97316] mt-0.5">All of South Florida</p>
              <p className="text-xs sm:text-sm text-[#45464d] mt-1">
                Contact: <strong className="text-[#191c1e]">Daniel Tucker</strong>. Call to confirm current service coverage, availability, and ETA for your location.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#e0e3e5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#191c1e] shrink-0" />
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#191c1e] hover:text-[#F97316] font-medium transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-[#191c1e] hover:text-[#F97316] font-bold transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Request a Quote Form Card */}
      <div className="bg-white rounded-2xl border border-[#e0e3e5] shadow-sm overflow-hidden mb-12 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e0e3e5]">
          <div>
            <h2 className="text-2xl font-bold text-[#191c1e]">Request a Quote</h2>
            <p className="text-xs sm:text-sm text-[#45464d] mt-0.5">
              Use the form to organize your request, then contact the business directly by phone or email.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#556477] bg-[#f2f4f6] px-3 py-1.5 rounded-lg font-mono">
            <Calculator className="w-4 h-4 text-[#F97316]" />
            <span>Est: {estimatedCost}</span>
          </div>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-950">Quote Request Ready</h3>
            <p className="text-sm text-emerald-800 max-w-md mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Your request details are ready, but this preview does not transmit them automatically. Call <strong>{COMPANY_INFO.phone}</strong> or email <strong>{COMPANY_INFO.email}</strong> to send the request.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    phoneNumber: '',
                    serviceType: 'Residential Lockout',
                    details: '',
                    urgency: 'immediate',
                    address: ''
                  });
                }}
                className="text-xs font-bold text-emerald-900 bg-white border border-emerald-300 px-4 py-2 rounded-xl hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-[#f7f9fb] border border-[#CBD5E1] rounded-xl text-sm focus:outline-hidden focus:border-[#131b2e] focus:bg-white transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="(555) 000-0000"
                className="w-full px-4 py-3 bg-[#f7f9fb] border border-[#CBD5E1] rounded-xl text-sm focus:outline-hidden focus:border-[#131b2e] focus:bg-white transition-all"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1.5">
                Service Type
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => handleServiceChange(e.target.value)}
                className="w-full px-4 py-3 bg-[#f7f9fb] border border-[#CBD5E1] rounded-xl text-sm focus:outline-hidden focus:border-[#131b2e] focus:bg-white transition-all cursor-pointer"
              >
                <option value="Residential Lockout">Residential Lockout (House / Apartment)</option>
                <option value="Smart Lock Installation">Smart Lock Installation & Setup</option>
                <option value="Lock Rekeying & Replacement">Lock Rekeying & Replacement</option>
                <option value="Commercial Access Control">Commercial Access Control & Keycards</option>
                <option value="Commercial Master Key">Commercial Master Key System</option>
                <option value="Automotive Car Lockout">Automotive Car Lockout</option>
                <option value="Car Key Fob Programming">Car Key Fob & Transponder Programming</option>
                <option value="Broken Key Extraction">Broken Key Extraction</option>
                <option value="Security Consultation">Comprehensive Security Consultation</option>
              </select>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1.5">
                Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'immediate' })}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                    formData.urgency === 'immediate'
                      ? 'bg-[#ffdad6] text-[#ba1a1a] border-[#ba1a1a]'
                      : 'bg-white text-[#45464d] border-[#CBD5E1] hover:bg-[#f2f4f6]'
                  }`}
                >
                  Immediate (Now)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'today' })}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                    formData.urgency === 'today'
                      ? 'bg-[#d2e1f7] text-[#131b2e] border-[#131b2e]'
                      : 'bg-white text-[#45464d] border-[#CBD5E1] hover:bg-[#f2f4f6]'
                  }`}
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'flexible' })}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                    formData.urgency === 'flexible'
                      ? 'bg-[#eceef0] text-[#191c1e] border-[#191c1e]'
                      : 'bg-white text-[#45464d] border-[#CBD5E1] hover:bg-[#f2f4f6]'
                  }`}
                >
                  Flexible / Next Week
                </button>
              </div>
            </div>

            {/* Details / Message */}
            <div>
              <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1.5">
                Details / Message
              </label>
              <textarea
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Describe your issue or request (e.g., brand of lock, number of doors, year/make/model of car)..."
                className="w-full px-4 py-3 bg-[#f7f9fb] border border-[#CBD5E1] rounded-xl text-sm focus:outline-hidden focus:border-[#131b2e] focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              id="btn-submit-quote-request"
              type="submit"
              className="w-full bg-[#000000] hover:bg-[#131b2e] text-white font-bold py-4 px-6 rounded-xl shadow-md active:scale-95 transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#F97316]" />
              <span>Submit Request</span>
            </button>
          </form>
        )}
      </div>

      {/* Frequently Asked Questions */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#45464d] mt-1">
            Answers to common questions regarding our mobile locksmith response and pricing.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = expandedFAQ === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e0e3e5] shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFAQ(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#191c1e] text-sm sm:text-base hover:bg-[#f7f9fb] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#F97316] shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#556477] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#556477] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#45464d] leading-relaxed border-t border-[#eceef0] bg-[#f7f9fb]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
