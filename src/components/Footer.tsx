import React from 'react';
import { Scale, ShieldCheck, ExternalLink, Linkedin, ArrowUp } from 'lucide-react';
import { OFFICE_INFO, PRACTICE_AREAS } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040A17] text-slate-300 pt-16 pb-12 border-t border-[#0E1A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#14243D]">
          
          {/* Brand & Society Registration (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#0F2248] border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display tracking-widest text-lg font-bold text-white uppercase block">
                  Mendes &amp; Associados
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#C5A880] uppercase font-medium block">
                  Sociedade de Advogados
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              Sociedade devidamente inscrita perante a Ordem dos Advogados do Brasil, dedicada à assessoria jurídica
              estratégica, consultoria corporativa e patrocínio de causas de relevância técnica.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 font-mono bg-[#061022] p-3.5 rounded-sm border border-[#0E1A30]">
              <p className="text-[#C5A880] font-semibold">
                {OFFICE_INFO.oabSocietyRegistration}
              </p>
              <p className="text-slate-400">
                {OFFICE_INFO.cnpj}
              </p>
            </div>
          </div>

          {/* Practice Areas Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest border-b border-[#14243D] pb-2">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-xs">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.id}>
                  <a
                    href="#areas-de-atuacao"
                    className="text-slate-400 hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                    <span>{area.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Institutional Links & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest border-b border-[#14243D] pb-2">
              Sede &amp; Contato Fictício
            </h4>
            
            <div className="text-xs text-slate-400 space-y-1.5 font-light">
              <p className="font-semibold text-slate-200">
                {OFFICE_INFO.address.line1}
              </p>
              <p>{OFFICE_INFO.address.building}</p>
              <p>{OFFICE_INFO.address.cityState}</p>
              <p className="text-slate-500 italic text-[11px] pt-1">
                Central: <span className="text-[#C5A880] font-mono">{OFFICE_INFO.phone}</span>
              </p>
              <p className="text-slate-500 italic text-[11px]">
                E-mail: <span className="text-[#C5A880] font-mono">{OFFICE_INFO.email}</span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#C5A880] p-2 rounded-sm bg-[#081430] border border-[#142646] transition-colors"
                title="LinkedIn Institucional"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="text-[11px]">LinkedIn Institucional</span>
              </a>

              <a
                href="https://www.oab.org.br"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 p-2 rounded-sm bg-[#081430] border border-[#142646] transition-colors"
                title="Portal OAB Nacional"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px]">Portal OAB</span>
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer (Provimento 205/2021 & CED OAB) */}
        <div className="py-6 border-b border-[#0E1A30] text-[11px] text-slate-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-[#C5A880] font-semibold uppercase tracking-wider text-[10px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Nota de Conformidade Ética e Regulamentar (OAB)</span>
          </div>
          <p className="font-light">
            {OFFICE_INFO.disclaimerOab}
          </p>
          <p className="text-slate-500 font-mono text-[10px]">
            [Ambiente de Demonstração Web: Todos os dados cadastrais, telefones, números de inscrição de OAB e CNPJ
            aqui expostos são estritamente fictícios e ilustrativos.]
          </p>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Mendes &amp; Associados Sociedade de Advogados. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <a href="#sobre" className="hover:text-slate-300 transition-colors">Termos Institucionais</a>
            <span>•</span>
            <a href="#contato" className="hover:text-slate-300 transition-colors">Privacidade &amp; LGPD</a>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#C5A880] hover:text-[#E2CCA8] transition-colors cursor-pointer"
              title="Voltar ao início da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
