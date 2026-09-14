import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Scale, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { OFFICE_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenConsultationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Áreas de Atuação', href: '#areas-de-atuacao' },
    { label: 'Sobre o Escritório', href: '#sobre' },
    { label: 'Corpo Jurídico', href: '#equipe' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <>
      {/* Institutional Top Bar */}
      <div className="bg-[#040A17] text-slate-300 text-xs border-b border-[#14243D] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-[#C5A880]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ambiente Institucional | {OFFICE_INFO.oabSocietyRegistration}</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-[#C5A880]" />
              <span>{OFFICE_INFO.hours}</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-medium">
            <span className="text-slate-400">Atendimento Telefônico:</span>
            <a 
              href="#contato" 
              className="text-[#C5A880] hover:text-[#E2CCA8] transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3" />
              <span>{OFFICE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#081430]/95 backdrop-blur-md shadow-md border-b border-[#14243D]'
            : 'bg-[#081430] border-b border-[#14243D]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3.5 group text-left">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#162E60] to-[#081224] border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880] shadow-sm">
                <Scale className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-display tracking-[0.12em] text-lg sm:text-xl font-bold text-white uppercase group-hover:text-[#E2CCA8] transition-colors">
                  Mendes & Associados
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-medium">
                  Sociedade de Advogados
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-[#C5A880] transition-colors py-1 relative text-[13px] tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA & Quick Phone */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultationModal}
                className="bg-[#C5A880] hover:bg-[#B38E5D] text-[#040A17] px-4 py-2 rounded-sm font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm flex items-center gap-1.5 cursor-pointer hover:shadow-md"
              >
                <span>Agendar Consulta</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2 focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#050E22] border-b border-[#14243D] px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-200 hover:text-[#C5A880] hover:bg-[#0A1835] px-3 py-2.5 rounded-sm text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-[#14243D] space-y-2">
              <div className="text-xs text-slate-400 px-3 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Atendimento: {OFFICE_INFO.phone}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full bg-[#C5A880] hover:bg-[#B38E5D] text-[#040A17] py-2.5 rounded-sm font-medium text-sm transition-colors text-center block cursor-pointer"
              >
                Agendar Consulta Institucional
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
