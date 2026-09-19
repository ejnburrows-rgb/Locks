import { ServiceItem, EmergencyServiceItem, FAQItem } from '../types';
import heroSupraBanner from '../assets/images/hero_supra_banner_1786667608046.jpg';

export const IMAGES = {
  hero: heroSupraBanner,
  residential: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWyhewYR2a-Fagt-QcPfpW7NCq4bDaGida7sYChdzHNKD4m0oSaX6NPqEQdAeQMBGb5qpr6HVNLpxqbh92uCFzYMOnvAW80HNXZVz6_v58SAL3rbIyLaagJPUVIFgkuPPnhRU4JpLwfZoqFBxUe887nRrQODdCWxnHw7QLGWMAA7HXOSZ9mTYJCsqCIQ4sTw8tcb2utpuJSNGF4odRCo8U0VwJRIZY39NUg4pNZPeHfrmbron1BfM',
  commercial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpz0hUxkwTA3dHRVrz2bpKDa3fA7Q1RKG6i1WsoKveCurXX9ytmuS7am7D4xTJIklNbYJ9Z9CmZsxx_2YLQuUPn41ufiFCNc8Mn6d_TcvxnXaHhyj2D5sVOAHixuphDgP660dsXU2etdv8IPE3Z6CZ77Z5z_EJfY4NHoG6oK6wmrPaZ2-5JNnUpj30eXqgpkGhvHdfx04JRIIAKfsJ9cDFZrT9U3mcQtEGY-OHUfjrPMlG76a6zoVN',
  automotive: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2VnhF3o_VxaG8lWXkj_qPv66rpffrHwvtFyociLi00ZJl2AMr6RPCqrpjFQuhgXCUuxEr261FFL3FVXrLXq7ZNfyqAIfYc28InTwDXvRCR0XiqWELJ9E-aUAjw8NWmBYWn3XzgJ3uf-Zkp-DogzqcdWniW58fG5MN4F3xrGx6cAvS4YImMXQIcsRuTJcRlkwLHTgEIOnnFgfzdAuCmbOEKgwZ4fdAkNUoWnLQNbksI6W-YPkMPoyH',
  marketingVan: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvMREcr3AJFXTm_JJlyLSlltuKIxzIDJHe5BvSO2CUpfzX4NbeC79NY_DVT3oi8xgpvV-lkE30s7DCSe3W8csTaDkYW_HAN01_GnNu40AfzJ5tjA2Fr8PW63p8j8kphSmT-Q4HRq4v7xTg5zsGN2jtfTgYvPzvNW1A40cUsr36R6mQoLyrLQ7v90g71fUiiNn_NHz3byun1pQdF5WFmv046WR3yGaU1NyHNZOZuayTc53a0Nw_wKtt',
  mapPreview: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential',
    category: 'residential',
    title: 'Residential',
    shortDescription: 'Lockouts, re-keying, smart lock installation, and common residential lock services.',
    fullDescription: 'Residential locksmith services including lockout assistance, re-keying, hardware replacement, and smart lock installation.',
    image: IMAGES.residential,
    features: [
      'House Lockout Assistance',
      'Smart Lock Installation & WiFi Setup',
      'Lock Rekeying & Cylinder Replacement',
      'High-Security Deadbolts & Hardware',
      'Sliding Door & Window Lock Reinforcement'
    ],
    startingPrice: 0,
    timeframe: 'Call for current ETA',
    popularOptions: ['Schlage Encode Smart Deadbolt', 'Yale Assure Lock 2', 'Kwikset SmartCode', 'Medeco High Security Cylinders'],
    badge: 'Most Popular'
  },
  {
    id: 'commercial',
    category: 'commercial',
    title: 'Commercial',
    shortDescription: 'Master key systems, high-security locks, and access control for businesses of all sizes.',
    fullDescription: 'Commercial locksmith services including master-key systems, access-control hardware, panic hardware, and door-lock service.',
    image: IMAGES.commercial,
    features: [
      'Master Key Systems & Sub-Key Trees',
      'Access Control Solutions (RFID, Keycard, Keypad)',
      'Panic Bar & Crash Hardware Installation',
      'Commercial Door Closer Adjustment & Repair',
      'ADA Compliant Locks & Lever Hardware'
    ],
    startingPrice: 0,
    timeframe: 'Call for current availability',
    popularOptions: ['HID Proximity Card Readers', 'Von Duprin Panic Bars', 'Commercial Mortise Locks', 'Salto Wireless Access Systems'],
    badge: 'Enterprise Grade'
  },
  {
    id: 'automotive',
    category: 'automotive',
    title: 'Automotive',
    shortDescription: 'Car lockouts, key duplication, transponder programming, and ignition repair on the spot.',
    fullDescription: 'Fast, damage-free automotive locksmith services. Whether you\'re locked out, need a new transponder key, or require ignition repair, our mobile units are ready.',
    image: IMAGES.automotive,
    features: [
      'Car Lockouts (All Makes & Luxury Models)',
      'Key Fob & Push-to-Start Programming',
      'Transponder Chip Key Duplication',
      'Ignition Cylinder Repair & Replacement',
      'Broken Key Extraction from Car Doors/Ignition'
    ],
    startingPrice: 0,
    timeframe: 'Call for current ETA',
    popularOptions: ['Smart Fob Replacement', 'Laser-Cut High-Security Keys', 'Remote Head Keys', 'OBD-II ECU Key Pairing'],
    badge: 'Mobile Units Ready'
  }
];

export const EMERGENCY_SERVICES: EmergencyServiceItem[] = [
  {
    id: 'em-home',
    iconName: 'home',
    title: 'Home Lockouts',
    description: 'Home lockout assistance. Call to confirm service availability and approach for your lock.',
    avgTime: 'Call for ETA',
    estPrice: 'Quote required'
  },
  {
    id: 'em-car',
    iconName: 'directions_car',
    title: 'Car Lockouts',
    description: 'Vehicle lockout assistance. Call with the year, make, model, and location to confirm service.',
    avgTime: '15 - 25 min',
    estPrice: 'Quote required'
  },
  {
    id: 'em-rekey',
    iconName: 'key',
    title: 'Emergency Rekeying',
    description: 'Re-keying service for lost keys, tenant changes, and other access-control needs.'
    avgTime: 'Call for ETA',
    estPrice: 'Quote required'
  },
  {
    id: 'em-extraction',
    iconName: 'build',
    title: 'Broken Key Extraction',
    description: 'Broken-key extraction service. The required method depends on the lock and key condition.'
    avgTime: 'Call for ETA',
    estPrice: 'Quote required'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How fast can you arrive in an emergency?',
    answer: 'Arrival time depends on technician availability, traffic, location, and the requested service. Call for the current ETA before relying on an arrival estimate.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Ask the business to confirm the credentials, insurance, and any licensing information that applies to your service before work begins.'
  },
  {
    question: 'How much does a standard lockout cost?',
    answer: 'Pricing depends on the service, hardware, lock condition, location, and timing. Request an estimate before authorizing work.'
  },
  {
    question: 'Can you replace modern smart keys?',
    answer: 'Yes, we have advanced mobile diagnostic computers to program and replace most modern automotive transponder keys, proximity fobs, and push-to-start smart remotes on-site.'
  },
  {
    question: 'Do you offer warranty on lock hardware and labor?',
    answer: 'Warranty terms vary by service and hardware. Confirm the applicable labor and manufacturer warranty terms before authorizing work.'
  }
];

export const COMPANY_INFO = {
  name: 'PRO LOCKSMITH',
  owner: 'Daniel Tucker',
  ownerRole: 'Owner',
  tagline: 'Mobile locksmith services in South Florida',
  phone: '786-344-5765',
  phoneRaw: '7863445765',
  email: 'support@prolocksmith.com',
  serviceArea: 'All of South Florida',
  workingHours: 'Call to confirm current availability',
  avgArrival: 'CALL FOR CURRENT ETA',
  licenseNo: 'Confirm credentials before service',
  guarantee: 'Request an estimate and confirm credentials, service terms, and warranty coverage before work begins.'
};

export const TESTIMONIALS_DATA = [];
