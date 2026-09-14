import React, { useState } from 'react';
import { 
  Scale, 
  Briefcase, 
  Building2, 
  Users, 
  Landmark, 
  Home, 
  ChevronRight, 
  CheckCircle2, 
  X,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/mockData';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  onSelectAreaForConsultation: (areaTitle: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectAreaForConsultation }) => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'empresarial' | 'individual'>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Scale':
        return <Scale className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6" />;
      case 'Home':
        return <Home className="w-6 h-6" />;
      default:
        return <Scale className="w-6 h-6" />;
    }
  };

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    if (activeFilter === 'empresarial') {
      return ['direito-empresarial', 'direito-trabalhista', 'direito-tributario'].includes(area.id);
    }
    if (activeFilter === 'individual') {
      return ['direito-civil', 'direito-familia', 'direito-imobiliario'].includes(area.id);
    }
    return true;
  });

  return (
    <section id="areas-de-atuacao" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-[#AA8957] font-semibold text-xs tracking-widest uppercase block mb-2">
            Especialidades Jurídicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#081430] tracking-tight mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mb-6" />
          <p className="text-slate-600 text-base leading-relaxed font-light">
            Desenvolvemos soluções jurídicas fundamentadas no rigor técnico e no alinhamento às decisões mais recentes
            dos Tribunais, proporcionando segurança em âmbitos consultivos e contenciosos.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#081430] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todas as Áreas ({PRACTICE_AREAS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('empresarial')}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeFilter === 'empresarial'
                  ? 'bg-[#081430] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Corporativo &amp; Empresarial
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('individual')}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeFilter === 'individual'
                  ? 'bg-[#081430] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Cível, Família &amp; Imobiliário
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="bg-[#FCFCFD] border border-slate-200 rounded-sm p-8 hover:border-[#C5A880] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#081430] text-[#C5A880] flex items-center justify-center mb-6 group-hover:bg-[#0F2248] transition-colors">
                  {getIcon(area.iconName)}
                </div>

                <h3 className="text-xl font-serif text-[#081430] font-bold mb-3 group-hover:text-[#0F2248]">
                  {area.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {area.shortDescription}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                  {area.topics.slice(0, 3).map((topic, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#AA8957] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="text-xs font-semibold text-[#081430] hover:text-[#AA8957] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Conhecer Escopo Técnico</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                  OAB Infor.
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Guidance Banner */}
        <div className="mt-14 p-6 rounded-sm bg-[#F4F6F9] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-[#081430] text-[#C5A880]">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#081430]">
                Necessita de análise preliminar sobre alguma destas matérias?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Nossos advogados realizam atendimento inicial sob agendamento e estrito sigilo.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="whitespace-nowrap px-5 py-2.5 bg-[#081430] hover:bg-[#0F2248] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center gap-2"
          >
            <span>Consultar Disponibilidade</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
          </a>
        </div>

      </div>

      {/* Modal: Full Practice Area Scope */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-300 shadow-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#081430] text-[#C5A880] flex items-center justify-center">
                  {getIcon(selectedArea.iconName)}
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#AA8957] font-semibold">
                    Escopo de Atuação Jurídica
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#081430] font-bold">
                    {selectedArea.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Visão Geral da Prática
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed font-light">
                  {selectedArea.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
                  Principais Demandas Atendidas
                </h4>
                <ul className="space-y-2.5">
                  {selectedArea.topics.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#AA8957] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#F8F9FA] rounded-sm border-l-3 border-[#C5A880]">
                <h4 className="text-xs font-semibold text-[#081430] uppercase tracking-wide mb-1">
                  Metodologia &amp; Rigor Técnico
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {selectedArea.approach}
                </p>
              </div>

              <div className="text-[11px] text-slate-500 italic bg-slate-50 p-3 rounded-sm border border-slate-200">
                Aviso: A descrição acima possui caráter estritamente acadêmico e informativo, em consonância com as
                diretrizes do Provimento nº 205/2021 da OAB.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-sm text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={() => {
                  const areaTitle = selectedArea.title;
                  setSelectedArea(null);
                  onSelectAreaForConsultation(areaTitle);
                }}
                className="w-full sm:w-auto px-5 py-2 bg-[#C5A880] hover:bg-[#B38E5D] text-[#040A17] rounded-sm text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Solicitar Contato sobre Esta Área</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
