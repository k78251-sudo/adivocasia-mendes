import React, { useState } from 'react';
import { MessageSquare, X, Shield, ChevronRight, Check } from 'lucide-react';
import { OFFICE_INFO } from '../data/mockData';

interface DiscreetWhatsAppProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenConsultationModal: () => void;
}

export const DiscreetWhatsApp: React.FC<DiscreetWhatsAppProps> = ({
  isOpen,
  onToggle,
  onOpenConsultationModal
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(OFFICE_INFO.whatsapp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="Canal de Atendimento WhatsApp" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Discreet Dialog Modal */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white border border-slate-300 rounded-sm shadow-xl p-5 text-slate-800 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between border-b border-slate-200 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#081430] text-[#C5A880] flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#081430] uppercase tracking-wide">
                  Atendimento Preliminar
                </h4>
                <span className="text-[10px] text-slate-500 font-medium">
                  Mendes &amp; Associados
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onToggle}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Fechar janela de atendimento"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
            Este canal destina-se ao agendamento de consultas jurídicas e direcionamento de novos expedientes aos advogados responsáveis.
          </p>

          <div className="bg-[#F8F9FA] p-3 rounded-sm border border-slate-200 space-y-1.5 mb-4 text-xs font-mono">
            <div className="text-[11px] text-slate-500">Contato Fictício Institucional:</div>
            <div className="text-xs font-bold text-[#081430] flex items-center justify-between">
              <span>{OFFICE_INFO.whatsapp}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-[11px] font-sans font-medium text-[#AA8957] hover:underline cursor-pointer flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : null}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => {
                onToggle();
                onOpenConsultationModal();
              }}
              className="w-full py-2.5 px-3 bg-[#081430] hover:bg-[#0F2248] text-white rounded-sm text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Agendar Consulta Formal</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>

            <a
              href="#contato"
              onClick={onToggle}
              className="block w-full py-2 text-center text-xs text-slate-600 hover:text-[#081430] font-medium transition-colors"
            >
              Ir ao formulário institucional
            </a>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400">
            <Shield className="w-3 h-3 text-[#AA8957]" />
            <span>Comunicação resguardada por sigilo profissional.</span>
          </div>
        </div>
      )}

      {/* Discreet Trigger Button */}
      <button
        type="button"
        onClick={onToggle}
        className="group bg-[#081430] hover:bg-[#0F2248] text-white border border-[#C5A880]/60 px-4 py-2.5 rounded-sm shadow-lg flex items-center gap-2.5 transition-all cursor-pointer hover:shadow-xl focus:outline-none"
        aria-label="Abrir canal institucional de WhatsApp"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-300 animate-pulse" />
        <MessageSquare className="w-4 h-4 text-[#C5A880]" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          Atendimento Jurídico
        </span>
      </button>
    </aside>
  );
};
