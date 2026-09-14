import React from 'react';
import { Shield, ChevronRight, BookOpen, Lock, Scale, Award } from 'lucide-react';
import { OFFICE_INFO } from '../data/mockData';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section className="relative bg-[#061026] text-white overflow-hidden border-b border-[#14243D]">
      {/* Background with institutional photography overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
        <img
          src="/sample-product.svg"
          alt="Imagem meramente ilustrativa para amostra do produto"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Subtle geometric vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#040A17] via-[#061026]/95 to-[#040A17]/90" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Institutional badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#091630]/70 text-[#C5A880] text-xs sm:text-sm font-medium tracking-wider uppercase mb-8">
            <Scale className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Advocacia Estratégica &amp; Consultoria Jurídica</span>
          </div>

          {/* Main positioning title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-[1.2] tracking-tight text-white mb-6">
            Defendendo seus direitos com{' '}
            <span className="text-[#C5A880] font-normal italic">
              excelência, ética
            </span>{' '}
            e rigor técnico.
          </h1>

          {/* Subheading in compliance with OAB standards */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Assessoria jurídica sob medida para pessoas físicas e jurídicas. Atuação pautada pela estrita discrição,
            lealdade processual e compromisso inarredável com a legalidade.
          </p>

          {/* Symmetrical CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              type="button"
              onClick={onOpenConsultationModal}
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#B38E5D] text-[#040A17] px-7 py-3.5 rounded-sm font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Agende uma Consulta</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#areas-de-atuacao"
              className="w-full sm:w-auto bg-[#091630] hover:bg-[#10244C] text-slate-200 border border-[#1C335A] px-7 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#C5A880]" />
              <span>Conheça Nossas Áreas</span>
            </a>
          </div>

          {/* 3 Pillars / Trust Badges with Symmetrical Spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-[#142647] text-left">
            <div className="p-4 rounded-sm bg-[#07132B]/60 border border-[#122444] flex items-start gap-3.5">
              <div className="p-2 rounded bg-[#0A1937] text-[#C5A880] shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide uppercase">
                  Sigilo Profissional
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Confidencialidade resguardada pelo Art. 7º do Estatuto da OAB.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-[#07132B]/60 border border-[#122444] flex items-start gap-3.5">
              <div className="p-2 rounded bg-[#0A1937] text-[#C5A880] shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide uppercase">
                  Atuação Preventiva
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Mitigação de passivos e segurança documental para seus negócios.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-[#07132B]/60 border border-[#122444] flex items-start gap-3.5">
              <div className="p-2 rounded bg-[#0A1937] text-[#C5A880] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide uppercase">
                  Corpo Jurídico Dedicado
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Atendimento direto e condução técnica personalizada por sócios.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
