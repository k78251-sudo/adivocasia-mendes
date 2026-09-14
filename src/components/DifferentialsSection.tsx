import React from 'react';
import { UserCheck, ShieldCheck, FileText, Award, Scale, Check } from 'lucide-react';
import { DIFFERENTIALS } from '../data/mockData';

export const DifferentialsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      default:
        return <Scale className="w-6 h-6" />;
    }
  };

  return (
    <section id="diferenciais" className="py-24 bg-[#061026] text-white border-b border-[#14243D] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#C5A880] font-semibold text-xs tracking-widest uppercase block mb-2">
            Padrões Institucionais
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mb-4">
            Diferenciais de Nossa Prática Jurídica
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mb-6" />
          <p className="text-slate-300 text-base leading-relaxed font-light">
            Nossa estrutura operacional foi desenhada para priorizar a profundidade técnica e a proximidade no relacionamento com cada cliente, assegurando segurança jurídica e previsibilidade.
          </p>
        </div>

        {/* Institutional Metrics Symmetrical Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded-sm bg-[#081430] border border-[#142646] text-center">
            <span className="block text-3xl sm:text-4xl font-serif text-[#C5A880] font-bold mb-1">
              +15
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
              Anos de Prática Jurídica
            </span>
          </div>

          <div className="p-6 rounded-sm bg-[#081430] border border-[#142646] text-center">
            <span className="block text-3xl sm:text-4xl font-serif text-[#C5A880] font-bold mb-1">
              100%
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
              Atuação Conduzida por Sócios
            </span>
          </div>

          <div className="p-6 rounded-sm bg-[#081430] border border-[#142646] text-center">
            <span className="block text-3xl sm:text-4xl font-serif text-[#C5A880] font-bold mb-1">
              +850
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
              Demandas e Pareceres Conduzidos
            </span>
          </div>

          <div className="p-6 rounded-sm bg-[#081430] border border-[#142646] text-center">
            <span className="block text-3xl sm:text-4xl font-serif text-[#C5A880] font-bold mb-1">
              Ética
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
              Conformidade OAB Irrestrita
            </span>
          </div>
        </div>

        {/* Differentials Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIALS.map((diff) => (
            <div
              key={diff.id}
              className="p-8 rounded-sm bg-[#07132B]/80 border border-[#14284A] hover:border-[#C5A880] transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group"
            >
              <div className="w-12 h-12 rounded-sm bg-[#0F2248] text-[#C5A880] flex items-center justify-center shrink-0 group-hover:bg-[#C5A880] group-hover:text-[#081430] transition-colors">
                {getIcon(diff.iconName)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-serif font-bold text-white">
                    {diff.title}
                  </h3>
                  {diff.metric && (
                    <span className="text-[10px] font-mono uppercase bg-[#0F2248] text-[#C5A880] px-2 py-0.5 rounded-xs border border-[#C5A880]/30 shrink-0">
                      {diff.metric}
                    </span>
                  )}
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {diff.description}
                </p>

                {diff.metricLabel && (
                  <div className="mt-4 pt-3 border-t border-[#142647] flex items-center gap-2 text-xs text-[#C5A880]">
                    <Check className="w-3.5 h-3.5" />
                    <span>{diff.metricLabel}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
