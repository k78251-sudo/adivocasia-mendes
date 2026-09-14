import React from 'react';
import { Quote, Shield } from 'lucide-react';
import { INSTITUTIONAL_TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#AA8957] font-semibold text-xs tracking-widest uppercase block mb-2">
            Reconhecimento Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#081430] tracking-tight mb-4">
            Avaliações de Clientes &amp; Parceiros
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mb-6" />
          <p className="text-slate-600 text-base leading-relaxed font-light">
            A seriedade de nossa atuação refletida na percepção de gestores e clientes quanto à pontualidade,
            clareza e estrita observância ética.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTITUTIONAL_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 rounded-sm p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#C5A880]/30 absolute top-6 right-6" />

              <div>
                <p className="text-slate-700 text-sm leading-relaxed italic font-serif mb-6 relative z-10">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <span className="block text-xs font-bold text-[#081430] uppercase tracking-wide">
                  {t.authorType}
                </span>
                <span className="block text-xs text-slate-500 font-medium mt-0.5">
                  {t.organization}
                </span>
                <span className="inline-block mt-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded-xs bg-[#F4F2EC] text-[#8A6C3F]">
                  {t.segment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* OAB disclaimer badge below testimonials */}
        <div className="mt-12 max-w-2xl mx-auto p-4 bg-white rounded-sm border border-slate-200 flex items-start gap-3">
          <Shield className="w-4 h-4 text-[#AA8957] shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <strong>Ressalva Ética OAB:</strong> Os depoimentos acima refletem avaliações qualitativas de atendimento,
            clareza e postura profissional. Em conformidade com o Código de Ética e Disciplina da OAB, cada demanda
            possui particularidades próprias e os relatos não constituem, sob nenhuma hipótese, garantia ou promessa de resultado.
          </p>
        </div>

      </div>
    </section>
  );
};
