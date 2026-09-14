import React, { useState } from 'react';
import { GraduationCap, Award, FileText, ChevronRight, X, User } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';
import { TeamMember } from '../types';

interface TeamSectionProps {
  onSelectMemberForConsultation?: (memberName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectMemberForConsultation }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="equipe" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#AA8957] font-semibold text-xs tracking-widest uppercase block mb-2">
            Quadro Societário
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#081430] tracking-tight mb-4">
            Corpo Jurídico &amp; Sócios
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mb-6" />
          <p className="text-slate-600 text-base leading-relaxed font-light">
            Profissionais com sólida formação acadêmica e dedicação exclusiva à prática jurídica. Atuação conjunta
            e multidisciplinar para soluções estratégicas seguras.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAFBFD] border border-slate-200 rounded-sm overflow-hidden hover:border-[#C5A880] hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
              <div className="relative h-72 w-full overflow-hidden bg-[#181B1E] flex items-center justify-center">
                <img
                  src={member.imageUrl}
                  alt={`Foto demonstrativa de ${member.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081430]/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* OAB Badge in photo corner */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-block bg-[#081430]/90 backdrop-blur-xs border border-[#C5A880]/50 text-[#C5A880] text-[10px] font-mono px-2 py-0.5 rounded-xs tracking-wider">
                    {member.oab}
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#AA8957] font-semibold block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#081430] group-hover:text-[#0F2248] transition-colors leading-tight mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-normal mb-3">
                    {member.specialty}
                  </p>
                  <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-semibold text-[#081430] hover:text-[#AA8957] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Currículo Institucional</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <User className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory note regarding fictitious data */}
        <div className="mt-12 text-center text-xs text-slate-400 font-mono">
          [Nota do Projeto: As inscrições de OAB e nomes são fictícios para fins de conformidade e demonstração técnica]
        </div>

      </div>

      {/* Member Curriculum Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-300 shadow-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <img
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  className="w-16 h-16 rounded-sm object-cover border border-slate-300 bg-[#181B1E]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[11px] font-mono text-[#AA8957] font-semibold block">
                    {selectedMember.oab}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#081430] font-bold">
                    {selectedMember.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedMember.role} • {selectedMember.specialty}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#AA8957]" />
                  <span>Trajetória Profissional</span>
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed font-light">
                  {selectedMember.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2.5 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#AA8957]" />
                  <span>Formação Acadêmica</span>
                </h4>
                <ul className="space-y-2">
                  {selectedMember.education.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#AA8957]" />
                  <span>Associações &amp; Comissões</span>
                </h4>
                <ul className="space-y-2">
                  {selectedMember.memberships.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#081430] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-[11px] text-slate-500 italic bg-slate-50 p-3 rounded-sm border border-slate-200">
                Informações curriculares apresentadas com fim estritamente institucional e informativo (Provimento CFOAB nº 205/2021).
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-sm text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Fechar
              </button>
              {onSelectMemberForConsultation && (
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedMember.name;
                    setSelectedMember(null);
                    onSelectMemberForConsultation(name);
                  }}
                  className="w-full sm:w-auto px-5 py-2 bg-[#081430] hover:bg-[#0F2248] text-white rounded-sm text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Agendar com este Profissional</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
