import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { OFFICE_INFO, PRACTICE_AREAS } from '../data/mockData';
import { InteractiveMap } from './InteractiveMap';

interface ContactSectionProps {
  initialArea?: string;
  onOpenWhatsAppModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialArea = '', 
  onOpenWhatsAppModal 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: initialArea || '',
    modality: 'indiferente',
    message: '',
    confidentiality: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [protocol, setProtocol] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!formData.confidentiality) {
      setErrorMsg('É necessário confirmar a ciência quanto ao termo de sigilo profissional.');
      return;
    }

    setErrorMsg('');
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setProtocol(`MA-${new Date().getFullYear()}-${randomNum}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      area: '',
      modality: 'indiferente',
      message: '',
      confidentiality: false
    });
    setSubmitted(false);
    setProtocol('');
  };

  return (
    <section id="contato" className="py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#AA8957] font-semibold text-xs tracking-widest uppercase block mb-2">
            Atendimento Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#081430] tracking-tight mb-4">
            Canais de Contato &amp; Agendamento
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mb-6" />
          <p className="text-slate-600 text-base leading-relaxed font-light">
            Entre em contato para agendar uma reunião presencial ou por videoconferência com nossos advogados.
            Garantimos sigilo irrestrito desde a comunicação preliminar.
          </p>
        </div>

        {/* Contact Info Cards Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Telefone */}
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-sm bg-[#081430] text-[#C5A880]">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Central Telefônica
              </span>
            </div>
            <div>
              <p className="text-base font-semibold text-[#081430]">
                {OFFICE_INFO.phone}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Atendimento direto para agendamentos
              </p>
            </div>
          </div>

          {/* Card 2: WhatsApp Institucional */}
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-sm bg-[#0E2C1E] text-emerald-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Canal WhatsApp
              </span>
            </div>
            <div>
              <p className="text-base font-semibold text-[#081430]">
                {OFFICE_INFO.whatsapp}
              </p>
              <button
                type="button"
                onClick={onOpenWhatsAppModal}
                className="text-xs text-emerald-700 hover:text-emerald-800 font-medium mt-1 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Iniciar mensagem institucional</span>
              </button>
            </div>
          </div>

          {/* Card 3: E-mail */}
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-sm bg-[#081430] text-[#C5A880]">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                E-mail Institucional
              </span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#081430] break-all font-mono">
                {OFFICE_INFO.email}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Para remessa de documentos preliminares
              </p>
            </div>
          </div>

          {/* Card 4: Horário */}
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-sm bg-[#081430] text-[#C5A880]">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Horário Forense
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#081430]">
                Seg. a Sex., 09h às 18h
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Atendimento presencial com hora marcada
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Form on Left (7 cols), Map & Sede on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-slate-200 shadow-sm">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#AA8957] font-semibold">
                    Protocolo de Solicitação
                  </span>
                  <h3 className="text-xl font-serif text-[#081430] font-bold">
                    Formulário de Contato &amp; Triagem
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="font-medium">Sigilo OAB Garantido</span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif text-[#081430] font-bold">
                  Solicitação Registrada com Sucesso
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Agradecemos seu contato. O registro preliminar foi gravado sob o protocolo demonstrativo:
                </p>
                <div className="inline-block bg-[#081430] text-[#C5A880] px-4 py-2 rounded-sm font-mono text-sm font-bold tracking-wider">
                  {protocol}
                </div>
                <p className="text-xs text-slate-500 max-w-md mx-auto pt-2">
                  Nossa equipe jurídica analisará a viabilidade da demanda e retornará no prazo de até 1 dia útil.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 border border-slate-300 rounded-sm text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Enviar Nova Solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: Dra. / Dr. / Sr(a). Nome Sobrenome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      E-mail Institucional ou Pessoal *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="nome@dominio.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Telefone com DDD *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-area" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Área Jurídica de Interesse
                    </label>
                    <select
                      id="contact-area"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white transition-colors"
                    >
                      <option value="">Selecione a área (opcional)</option>
                      {PRACTICE_AREAS.map((a) => (
                        <option key={a.id} value={a.title}>
                          {a.title}
                        </option>
                      ))}
                      <option value="Outras Demandas">Outras Demandas / Consultoria Geral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Breve Síntese da Consulta *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Descreva de forma concisa o objeto da consulta ou a situação fática para fins de triagem interna..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#081430] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Confidentiality Checkbox */}
                <div className="p-4 bg-[#F8F9FA] rounded-sm border border-slate-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.confidentiality}
                      onChange={(e) => setFormData({ ...formData, confidentiality: e.target.checked })}
                      className="mt-0.5 rounded border-slate-400 text-[#081430] focus:ring-0 w-4 h-4 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-600 leading-relaxed">
                      <strong>Termo de Sigilo e Confidencialidade:</strong> Declaro ciência de que os dados transmitidos
                      neste formulário são estritamente sigilosos e protegidos pelas prerrogativas da advocacia
                      (Art. 7º, inciso II da Lei Federal nº 8.906/1994 - Estatuto da OAB) e pelas diretrizes da LGPD (Lei 13.709/2018).
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#081430] hover:bg-[#0F2248] text-white rounded-sm font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>Transmitir Solicitação para Triagem</span>
                    <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Interactive Map & Physical Office Specs */}
          <div className="lg:col-span-5 space-y-6">
            <InteractiveMap />

            {/* Fictitious notice card */}
            <div className="p-5 bg-white border border-slate-200 rounded-sm flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-[#AA8957] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-[#081430] uppercase tracking-wider mb-1">
                  Nota Explicativa sobre Dados
                </h5>
                <p className="text-[11px] text-slate-600 leading-relaxed font-light">
                  Em obediência às regras do projeto de demonstração e à regulamentação ética, este site utiliza exclusivamente
                  identificadores genéricos fictícios (<span className="font-mono text-slate-700">[Telefone], [Endereço], [CNPJ], [OAB]</span>).
                  Nenhum vínculo real pré-existente é estabelecido.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
