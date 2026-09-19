import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import {
  Phone,
  X,
  ShieldCheck,
  Clock,
  MapPin,
  AlertOctagon,
  CheckCircle,
  MessageSquare
} from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToEmergency: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  onNavigateToEmergency,
}) => {
  const [calledSimulated, setCalledSimulated] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#e0e3e5] relative animate-in zoom-in-95">
        {/* Header Ribbon */}
        <div className="bg-[#ba1a1a] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <h3 className="font-bold text-lg tracking-tight">24/7 Urgent Dispatch</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="text-center space-y-1">
            <div className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
              Immediate Phone Connection
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
              {COMPANY_INFO.phone}
            </div>
            <p className="text-xs text-[#556477]">
              Call to confirm current availability and ETA.
            </p>
          </div>

          {/* Big Action Call Button */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            onClick={() => setCalledSimulated(true)}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all text-lg font-bold text-center cursor-pointer"
          >
            <Phone className="w-6 h-6 fill-white" />
            <span>Call Now ({COMPANY_INFO.phone})</span>
          </a>

          {calledSimulated && (
            <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl text-xs flex items-center gap-2 border border-emerald-200">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Your phone app should open with the emergency number ready to dial.</span>
            </div>
          )}

          {/* Secondary Actions */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => {
                onClose();
                onNavigateToEmergency();
              }}
              className="bg-[#131b2e] hover:bg-black text-white py-2.5 px-3 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Track Mobile Van ETA
            </button>
            <a
              href={`sms:${COMPANY_INFO.phoneRaw}?body=Emergency%20Lockout%20at%20my%20location`}
              className="bg-[#f2f4f6] hover:bg-[#eceef0] text-[#191c1e] py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors text-center border border-[#e0e3e5]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Text Dispatcher</span>
            </a>
          </div>

          {/* Urgent Lockout Tips */}
          <div className="bg-[#f7f9fb] p-4 rounded-xl border border-[#e0e3e5] space-y-2 text-xs text-[#45464d]">
            <div className="font-bold text-[#191c1e] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              While You Wait for the Technician:
            </div>
            <ul className="list-disc pl-4 space-y-1 text-[11px]">
              <li>Stay in a safe, well-lit area or with a neighbor.</li>
              <li>Have a photo ID ready to verify ownership/tenancy.</li>
              <li>Avoid prying windows or using sharp objects that damage frames.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f2f4f6] border-t border-[#e0e3e5] text-center text-xs text-[#556477]">
          Confirm credentials, estimate, and service terms before authorizing work
        </div>
      </div>
    </div>
  );
};
