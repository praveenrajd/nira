export interface CoreAreaItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  note?: string;
  iconName: string;
  badge: string;
}

export interface VisionMissionData {
  vision: string;
  missionIntro: string;
  missionPoints: string[];
}

export interface WhyNiraPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface PartnershipStep {
  stepNumber: string;
  title: string;
  description: string;
  stage: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceCategory: string;
  message: string;
}
