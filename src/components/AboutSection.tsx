import React from 'react';
import { ShieldCheck, BookOpen, Scale, Compass, CheckCircle } from 'lucide-react';
import { OFFICE_INFO } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Symmetrical Grid: Left Content, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Institutional narrative */}
          <div className="lg:col-span-7">
            <span className="text-[#AA8957] font-semibold text-xs tracking-widest uppercase block mb-2">
              Tradição &amp; Rigor Técnico
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#081430] tracking-tight mb-6">
              Sobre a Sociedade Mendes &amp; Associados
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mb-8" />

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              <p>
                O escritório <strong className="font-semibold text-[#081430]">Mendes &amp; Associados Sociedade de Advogados</strong> consolidou sua
                atuação com base no compromisso inegociável com a ética profissional, o rigor hermenêutico e a dedicação artesanal a cada causa confiada aos nossos cuidados.
              </p>
              <p>
                Compreendemos que a advocacia contemporânea exige não apenas domínio minucioso da legislação e dos precedentes judiciais, mas também capacidade analítica para antecipar contingências e estruturar estratégias que confiram previsibilidade e tranquilidade aos nossos clientes.
              </p>
              <p>
                Nossa atuação abrange tanto a esfera consultiva e preventiva — com ênfase na elaboração de pareceres fundamentados e contratos blindados — quanto o patrocínio de contencioso estratégico perante a Justiça Estadual, Federal e os Tribunais Superiores em Brasília.
              </p>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 pt-8 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#081430] text-[#C5A880] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#081430] uppercase tracking-wide">
                    Ética e Sigilo Inegociáveis
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal font-light">
                    Confidencialidade absoluta protegida por prerrogativa legal estatutária.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#081430] text-[#C5A880] shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#081430] uppercase tracking-wide">
                    Rigor Hermenêutico
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal font-light">
                    Estudo aprofundado da doutrina clássica e das tendências jurisprudenciais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#081430] text-[#C5A880] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#081430] uppercase tracking-wide">
                    Transparência Processual
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal font-light">
                    Clareza técnica sem promessas ilusórias, orientando com base na lei.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#081430] text-[#C5A880] shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#081430] uppercase tracking-wide">
                    Advocacia Artesanal
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal font-light">
                    Atendimento personalizado diretamente com advogados titulares.
                  </p>
                </div>
              </div>
            </div>

            {/* Fictitious entity identification label */}
            <div className="mt-8 text-xs text-slate-500 font-mono flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#AA8957]" />
              <span>Registro Institucional: {OFFICE_INFO.oabSocietyRegistration}</span>
            </div>
          </div>

          {/* Right Column: Prestigious corporate legal photography */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-2 rounded-sm border border-[#C5A880]/40 pointer-events-none hidden sm:block" />
              
              <div className="relative rounded-sm overflow-hidden shadow-xl border border-slate-300 bg-white">
                <img
                  src="/sample-product.svg"
                  alt="Imagem meramente ilustrativa para amostra do produto"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay box inside image */}
                <div className="p-6 bg-[#081430] text-white">
                  <div className="flex items-center justify-between border-b border-[#14243D] pb-3 mb-3">
                    <span className="text-[11px] font-mono uppercase text-[#C5A880] tracking-wider">
                      Compromisso Institucional
                    </span>
                    <span className="text-xs text-slate-400">Desde a Fundação</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic font-serif">
                    "A dignidade da advocacia reside na defesa intransigente da ordem jurídica e no respeito incondicional aos direitos confiados ao nosso zelo."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
