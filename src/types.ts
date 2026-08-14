export type ScreenType = 'home' | 'services' | 'quote' | 'emergency';

export type ServiceCategory = 'residential' | 'commercial' | 'automotive' | 'emergency';

export interface ServiceItem {
  id: string;
  category: 'residential' | 'commercial' | 'automotive';
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  startingPrice: number;
  timeframe: string;
  popularOptions?: string[];
  badge?: string;
}

export interface EmergencyServiceItem {
  id: string;
  iconName: 'home' | 'directions_car' | 'key' | 'build';
  title: string;
  description: string;
  avgTime: string;
  estPrice: string;
}

export interface QuoteRequest {
  fullName: string;
  phoneNumber: string;
  serviceType: string;
  details: string;
  urgency: 'immediate' | 'today' | 'flexible';
  address?: string;
}

export interface DispatchStatus {
  step: 'idle' | 'received' | 'dispatched' | 'en_route' | 'arrived';
  technicianName: string;
  technicianPhone: string;
  vehicle: string;
  etaMinutes: number;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  serviceCategory: 'residential' | 'commercial' | 'automotive' | 'emergency';
  serviceName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  verifiedSource: 'Google Review' | 'Yelp Verified' | 'Angi Certified';
  technicianName: string;
  highlightPhrase?: string;
}
