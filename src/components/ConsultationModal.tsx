import React, { useState } from 'react';
import { X, Calendar, Clock, ShieldCheck, CheckCircle2, ChevronRight, Video, Building2 } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultArea?: string;
  defaultMember?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultArea = '',
  defaultMember = ''
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: defaultArea || '',
    modality: 'presencial',
    preferredShift: 'manha',
    notes: '',
    confidentiality: false
  });
  const [protocol, setProtocol] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.confidentiality) {
      return;
    }
    const rand = Math.floor(1000 + Math.random() * 9000);
    setProtocol(`CONS-${new Date().getFullYear()}-${rand}`);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    setFormData({
      name: '',
      email: '',
      phone: '',
      area: '',
      modality: 'presencial',
      preferredShift: 'manha',
      notes: '',
      confidentiality: false
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-sm max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-300 shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#AA8957] font-semibold block">
              Agendamento de Consulta Institucional
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#081430] font-bold">
              Mendes &amp; Associados
            </h3>
            {defaultMember && (
              <p className="text-xs text-[#081430] font-medium mt-1">
                Preferência de atendimento: <span className="text-[#AA8957]">{defaultMember}</span>
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'confirmed' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif text-[#081430] font-bold">
              Pré-Agendamento Registrado
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Sua solicitação foi cadastrada com prioridade de triagem. A secretaria do escritório entrará em contato para confirmar o horário exato da reunião.
            </p>
            <div className="inline-block bg-[#081430] text-[#C5A880] px-4 py-2 rounded-sm font-mono text-sm font-bold tracking-wider">
              {protocol}
            </div>
            <p className="text-xs text-slate-500 max-w-sm mx-auto pt-2">
              Modalidade selecionada:{' '}
              <strong className="text-slate-700 uppercase">
                {formData.modality === 'presencial' ? 'Reunião Presencial na Sede' : 'Videoconferência Reservada'}
              </strong>
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#081430] hover:bg-[#0F2248] text-white rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Concluir e Fechar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-5 space-y-5">
            {/* Modality Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Modalidade de Atendimento Desejada
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, modality: 'presencial' })}
                  className={`p-3 rounded-sm border text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                    formData.modality === 'presencial'
                      ? 'border-[#081430] bg-[#081430]/5 text-[#081430]'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <Building2 className={`w-4 h-4 shrink-0 mt-0.5 ${formData.modality === 'presencial' ? 'text-[#AA8957]' : 'text-slate-400'}`} />
                  <div>
                    <span className="block text-xs font-bold">Presencial</span>
                    <span className="block text-[11px] text-slate-500 font-light">Na sede do escritório</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, modality: 'videoconferencia' })}
                  className={`p-3 rounded-sm border text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                    formData.modality === 'videoconferencia'
                      ? 'border-[#081430] bg-[#081430]/5 text-[#081430]'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <Video className={`w-4 h-4 shrink-0 mt-0.5 ${formData.modality === 'videoconferencia' ? 'text-[#AA8957]' : 'text-slate-400'}`} />
                  <div>
                    <span className="block text-xs font-bold">Videoconferência</span>
                    <span className="block text-[11px] text-slate-500 font-light">Sala virtual segura</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Inputs: Name, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white"
                />
              </div>
            </div>

            {/* Phone & Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Área Principal de Interesse
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white"
                >
                  <option value="">Selecione a área (opcional)</option>
                  {PRACTICE_AREAS.map((a) => (
                    <option key={a.id} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                  <option value="Consultoria Geral">Consultoria Geral</option>
                </select>
              </div>
            </div>

            {/* Turno Preferencial */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Turno de Preferência
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`p-2.5 rounded-sm border text-xs flex items-center gap-2 cursor-pointer ${
                  formData.preferredShift === 'manha'
                    ? 'border-[#081430] bg-slate-100 text-[#081430] font-semibold'
                    : 'border-slate-200 text-slate-600'
                }`}>
                  <input
                    type="radio"
                    name="shift"
                    value="manha"
                    checked={formData.preferredShift === 'manha'}
                    onChange={() => setFormData({ ...formData, preferredShift: 'manha' })}
                    className="hidden"
                  />
                  <Clock className="w-3.5 h-3.5 text-[#AA8957]" />
                  <span>Manhã (09h às 12h)</span>
                </label>

                <label className={`p-2.5 rounded-sm border text-xs flex items-center gap-2 cursor-pointer ${
                  formData.preferredShift === 'tarde'
                    ? 'border-[#081430] bg-slate-100 text-[#081430] font-semibold'
                    : 'border-slate-200 text-slate-600'
                }`}>
                  <input
                    type="radio"
                    name="shift"
                    value="tarde"
                    checked={formData.preferredShift === 'tarde'}
                    onChange={() => setFormData({ ...formData, preferredShift: 'tarde' })}
                    className="hidden"
                  />
                  <Clock className="w-3.5 h-3.5 text-[#AA8957]" />
                  <span>Tarde (14h às 18h)</span>
                </label>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Resumo da Demanda / Assunto (Opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Indique brevemente o objeto da consulta para direcionamento ao advogado especialista..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white resize-none"
              />
            </div>

            {/* Confidentiality Checkbox */}
            <div className="p-3 bg-slate-50 rounded-sm border border-slate-200">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.confidentiality}
                  onChange={(e) => setFormData({ ...formData, confidentiality: e.target.checked })}
                  className="mt-0.5 rounded border-slate-400 text-[#081430] focus:ring-0 w-3.5 h-3.5 cursor-pointer"
                />
                <span className="text-[11px] text-slate-600 leading-snug">
                  Estou ciente de que as informações prestadas são protegidas pelo sigilo profissional (Estatuto da OAB)
                  e destinam-se exclusivamente ao agendamento de consulta.
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-sm text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#C5A880] hover:bg-[#B38E5D] text-[#040A17] rounded-sm text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Confirmar Solicitação</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
