import React, { useState } from 'react';
import { MapPin, Navigation, Car, Train, Building, Check, Copy } from 'lucide-react';
import { OFFICE_INFO } from '../data/mockData';

export const InteractiveMap: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'mapa' | 'acesso'>('mapa');

  const handleCopyAddress = () => {
    const fullAddr = `${OFFICE_INFO.address.line1}, ${OFFICE_INFO.address.building}, ${OFFICE_INFO.address.cityState}`;
    navigator.clipboard.writeText(fullAddr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm flex flex-col">
      {/* Map Header Tabs */}
      <div className="bg-[#081430] text-white px-5 py-3.5 flex items-center justify-between border-b border-[#14243D]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#C5A880]" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Localização Institucional
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('mapa')}
            className={`px-3 py-1 rounded-xs text-[11px] font-medium transition-colors cursor-pointer ${
              activeTab === 'mapa'
                ? 'bg-[#C5A880] text-[#040A17]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Visualização
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('acesso')}
            className={`px-3 py-1 rounded-xs text-[11px] font-medium transition-colors cursor-pointer ${
              activeTab === 'acesso'
                ? 'bg-[#C5A880] text-[#040A17]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Acesso &amp; Estacionamento
          </button>
        </div>
      </div>

      {activeTab === 'mapa' ? (
        /* Stylized Architectural Map View */
        <div className="relative h-72 sm:h-80 w-full bg-[#EBF0F5] overflow-hidden">
          {/* Stylized Vector Grid Background */}
          <svg
            className="w-full h-full object-cover"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Background Base */}
            <rect width="600" height="400" fill="#E8EDF2" />

            {/* City Blocks */}
            <g fill="#DCE3EB" stroke="#CBD5E1" strokeWidth="1">
              <rect x="20" y="20" width="120" height="80" rx="3" />
              <rect x="160" y="20" width="200" height="80" rx="3" />
              <rect x="380" y="20" width="190" height="80" rx="3" />

              <rect x="20" y="130" width="120" height="130" rx="3" />
              <rect x="160" y="130" width="200" height="130" rx="3" fill="#D3DCE6" />
              <rect x="380" y="130" width="190" height="130" rx="3" />

              <rect x="20" y="290" width="120" height="90" rx="3" />
              <rect x="160" y="290" width="200" height="90" rx="3" />
              <rect x="380" y="290" width="190" height="90" rx="3" />
            </g>

            {/* Avenues & Streets */}
            <g stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round">
              <line x1="145" y1="0" x2="145" y2="400" />
              <line x1="365" y1="0" x2="365" y2="400" />
              <line x1="0" y1="110" x2="600" y2="110" />
              <line x1="0" y1="275" x2="600" y2="275" />
            </g>

            {/* Lane Dashings */}
            <g stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="6,8">
              <line x1="145" y1="0" x2="145" y2="400" />
              <line x1="365" y1="0" x2="365" y2="400" />
              <line x1="0" y1="110" x2="600" y2="110" />
              <line x1="0" y1="275" x2="600" y2="275" />
            </g>

            {/* Water / Green Area Accent */}
            <rect x="420" y="145" width="130" height="100" rx="6" fill="#D1E2D7" stroke="#A7C4B2" strokeWidth="1" />
            <text x="440" y="200" fill="#4B6B56" fontSize="10" fontFamily="sans-serif">Parque das Nações</text>

            {/* Law Courts / Fórum landmark */}
            <rect x="30" y="150" width="100" height="90" rx="4" fill="#C5CFDB" stroke="#94A3B8" strokeWidth="1" />
            <text x="45" y="195" fill="#334155" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Fórum Central</text>
            <text x="45" y="210" fill="#64748B" fontSize="8" fontFamily="sans-serif">(Poder Judiciário)</text>

            {/* Primary Target Location: Mendes & Associados Building */}
            <rect x="210" y="170" width="100" height="70" rx="4" fill="#081430" stroke="#C5A880" strokeWidth="2" />
            <text x="222" y="202" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">EDIFÍCIO CORPORATE</text>
            <text x="232" y="217" fill="#C5A880" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Mendes &amp; Associados</text>

            {/* Pulsing Pin Marker */}
            <circle cx="260" cy="155" r="14" fill="#C5A880" fillOpacity="0.3" className="animate-ping" />
            <circle cx="260" cy="155" r="7" fill="#081430" stroke="#C5A880" strokeWidth="2" />
          </svg>

          {/* Floating Address Overlay Card */}
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-xs p-3.5 rounded-sm border border-slate-300 shadow-md">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#AA8957] font-semibold block">
                  Edifício Corporativo
                </span>
                <p className="text-xs font-bold text-[#081430]">
                  {OFFICE_INFO.address.line1}
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  {OFFICE_INFO.address.building} • {OFFICE_INFO.address.cityState}
                </p>
                <p className="text-[10px] text-slate-500 italic mt-1">
                  {OFFICE_INFO.address.reference}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shrink-0 cursor-pointer"
                title="Copiar endereço"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Access, Parking and Transit Instructions */
        <div className="p-6 bg-slate-50 space-y-4 text-xs text-slate-700 min-h-72">
          <div className="flex items-start gap-3 p-3 bg-white rounded-sm border border-slate-200">
            <Car className="w-4 h-4 text-[#AA8957] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#081430] block text-xs mb-0.5">Estacionamento &amp; Valet</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Estacionamento rotativo coberto no próprio edifício, com serviço de manobrista para clientes sob agendamento.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-white rounded-sm border border-slate-200">
            <Building className="w-4 h-4 text-[#AA8957] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#081430] block text-xs mb-0.5">Recepção &amp; Acessibilidade</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Portaria com controle biométrico/documental de acesso. Edifício 100% adaptado com rampas e elevadores acessíveis.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-white rounded-sm border border-slate-200">
            <Train className="w-4 h-4 text-[#AA8957] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#081430] block text-xs mb-0.5">Transporte Público</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Localizado a curta caminhada da estação central e das principais vias de acesso ao centro judiciário e financeiro.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer bar of map */}
      <div className="p-3 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
        <span>Atendimento presencial mediante agendamento prévio.</span>
        <button
          type="button"
          onClick={handleCopyAddress}
          className="text-xs font-semibold text-[#081430] hover:text-[#AA8957] flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Navigation className="w-3 h-3 text-[#AA8957]" />
          <span>{copied ? 'Endereço copiado!' : 'Copiar endereço fictício'}</span>
        </button>
      </div>
    </div>
  );
};
