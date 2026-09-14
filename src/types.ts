export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  topics: string[];
  approach: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  oab: string;
  specialty: string;
  bio: string;
  education: string[];
  memberships: string[];
  imageUrl: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
  metricLabel?: string;
}

export interface InstitutionalTestimonial {
  id: string;
  quote: string;
  authorType: string;
  organization: string;
  segment: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  areaId: string;
  preferredModality: 'presencial' | 'videoconferencia' | 'indiferente';
  preferredTime: 'manha' | 'tarde' | 'indiferente';
  briefDescription: string;
  confidentialityAccepted: boolean;
}
