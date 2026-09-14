import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { DiscreetWhatsApp } from './components/DiscreetWhatsApp';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedAreaForModal, setSelectedAreaForModal] = useState('');
  const [selectedMemberForModal, setSelectedMemberForModal] = useState('');
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const handleOpenConsultationModal = (area: string = '', member: string = '') => {
    setSelectedAreaForModal(area);
    setSelectedMemberForModal(member);
    setIsConsultationModalOpen(true);
  };

  const handleSelectAreaFromCard = (areaTitle: string) => {
    handleOpenConsultationModal(areaTitle);
  };

  const handleSelectMemberFromCard = (memberName: string) => {
    handleOpenConsultationModal('', memberName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFC] text-[#1E293B]">
      {/* 1. Header with Logo, Navigation, Phone Highlight and Consultation CTA */}
      <Header onOpenConsultationModal={() => handleOpenConsultationModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero with positioning phrase, CTAs, and Institutional Trust Pillars */}
        <Hero onOpenConsultationModal={() => handleOpenConsultationModal()} />

        {/* 3. Practice Areas (Áreas de Atuação) with OAB informative cards and detail modal */}
        <PracticeAreas onSelectAreaForConsultation={handleSelectAreaFromCard} />

        {/* 4. About the Firm (Sobre o Escritório / História / Valores) */}
        <AboutSection />

        {/* 5. Team (Sócios & Corpo Jurídico with OAB placeholders and credentials) */}
        <TeamSection onSelectMemberForConsultation={handleSelectMemberFromCard} />

        {/* 6. Differentials (Anos de experiência, supervisão por sócios, rigor ético) */}
        <DifferentialsSection />

        {/* 7. Institutional Testimonials (Discretos, sem prometer resultados) */}
        <TestimonialsSection />

        {/* 8. Contact (Formulário com termo de sigilo, canais de contato e Mapa) */}
        <ContactSection
          initialArea={selectedAreaForModal}
          onOpenWhatsAppModal={() => setIsWhatsAppOpen(true)}
        />
      </main>

      {/* 9. Footer with OAB Society Registration, CNPJ, and Ethics Notice */}
      <Footer />

      {/* Interactive Consultation Appointment Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultArea={selectedAreaForModal}
        defaultMember={selectedMemberForModal}
      />

      {/* Discreet, non-aggressive WhatsApp floating widget */}
      <DiscreetWhatsApp
        isOpen={isWhatsAppOpen}
        onToggle={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />
    </div>
  );
}
