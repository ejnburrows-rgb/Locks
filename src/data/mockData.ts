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
    shortDescription: 'Lockouts, re-keying, smart lock installation, and security upgrades to keep your home safe.',
    fullDescription: 'Protect your home and family with our comprehensive residential locksmith services. From high-security deadbolts to smart lock installations and emergency lockouts.',
    image: IMAGES.residential,
    features: [
      'House Lockouts (Damage-Free Entry)',
      'Smart Lock Installation & WiFi Setup',
      'Lock Rekeying & Cylinder Replacement',
      'High-Security Deadbolts & Hardware',
      'Sliding Door & Window Lock Reinforcement'
    ],
    startingPrice: 75,
    timeframe: '15-20 min arrival',
    popularOptions: ['Schlage Encode Smart Deadbolt', 'Yale Assure Lock 2', 'Kwikset SmartCode', 'Medeco High Security Cylinders'],
    badge: 'Most Popular'
  },
  {
    id: 'commercial',
    category: 'commercial',
    title: 'Commercial',
    shortDescription: 'Master key systems, high-security locks, and access control for businesses of all sizes.',
    fullDescription: 'Secure your business assets with advanced commercial security solutions. We specialize in master key systems, access control, and high-traffic commercial hardware.',
    image: IMAGES.commercial,
    features: [
      'Master Key Systems & Sub-Key Trees',
      'Access Control Solutions (RFID, Keycard, Keypad)',
      'Panic Bar & Crash Hardware Installation',
      'Commercial Door Closer Adjustment & Repair',
      'ADA Compliant Locks & Lever Hardware'
    ],
    startingPrice: 120,
    timeframe: 'Same-day / Scheduled or Emergency',
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
    startingPrice: 85,
    timeframe: '15-30 min mobile dispatch',
    popularOptions: ['Smart Fob Replacement', 'Laser-Cut High-Security Keys', 'Remote Head Keys', 'OBD-II ECU Key Pairing'],
    badge: 'Mobile Units Ready'
  }
];

export const EMERGENCY_SERVICES: EmergencyServiceItem[] = [
  {
    id: 'em-home',
    iconName: 'home',
    title: 'Home Lockouts',
    description: 'Non-destructive entry to get you back inside your house safely and quickly.',
    avgTime: '15 - 25 min',
    estPrice: 'From $75'
  },
  {
    id: 'em-car',
    iconName: 'directions_car',
    title: 'Car Lockouts',
    description: 'Keys locked in the trunk or ignition? We open all vehicle makes and models without scratch or damage.',
    avgTime: '15 - 25 min',
    estPrice: 'From $85'
  },
  {
    id: 'em-rekey',
    iconName: 'key',
    title: 'Emergency Rekeying',
    description: 'Lost your keys or tenant departure? Secure your property immediately with a fast lock rekey on site.',
    avgTime: '20 - 35 min',
    estPrice: 'From $95'
  },
  {
    id: 'em-extraction',
    iconName: 'build',
    title: 'Broken Key Extraction',
    description: 'Careful removal of broken keys without damaging the delicate lock cylinder.',
    avgTime: '15 - 20 min',
    estPrice: 'From $70'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How fast can you arrive in an emergency?',
    answer: 'We aim for a 15–30 minute response time for all emergencies within our primary service area. Traffic and exact location may affect this slightly, but our GPS-dispatched mobile units are stationed across the city.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, all our technicians are fully licensed, bonded, and insured. We prioritize your security and peace of mind by adhering strictly to state certification and background checks.'
  },
  {
    question: 'How much does a standard lockout cost?',
    answer: 'Standard residential lockouts start at $75. However, prices vary based on the lock complexity, security grade, and time of day. We always provide an upfront, transparent estimate before starting any work.'
  },
  {
    question: 'Can you replace modern smart keys?',
    answer: 'Yes, we have advanced mobile diagnostic computers to program and replace most modern automotive transponder keys, proximity fobs, and push-to-start smart remotes on-site.'
  },
  {
    question: 'Do you offer warranty on lock hardware and labor?',
    answer: 'Absolutely. We provide a 90-day comprehensive labor warranty on all installations and repairs, along with full manufacturer warranties on all deadbolts, smart locks, and access hardware.'
  }
];

export const COMPANY_INFO = {
  name: 'PRO LOCKSMITH',
  owner: 'Daniel Tucker',
  ownerRole: 'Owner & Master Locksmith',
  tagline: 'Fast, Reliable Locksmith Services 24/7',
  phone: '786-344-5765',
  phoneRaw: '7863445765',
  email: 'support@prolocksmith.com',
  serviceArea: 'All of South Florida',
  workingHours: '24 Hours / 7 Days a Week / 365 Days',
  avgArrival: '15 - 30 MIN',
  licenseNo: 'LIC #FL-LK-99428',
  guarantee: 'No Hidden Fees Guarantee — Upfront pricing before any work begins. Fully licensed, bonded, and insured professionals.'
};

export const TESTIMONIALS_DATA = [
  {
    id: 'rev-1',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    location: 'Miami / Brickell',
    serviceCategory: 'emergency',
    serviceName: 'Midnight Emergency Lockout',
    rating: 5,
    date: 'Yesterday',
    highlightPhrase: 'Arrived in 18 minutes with zero door damage',
    comment: 'Got home from a flight at 11:30 PM only to realize my front door deadbolt had completely jammed. Marcus arrived in under 20 minutes, unlocked the door non-destructively, and rebuilt the tumbler on-site. The price matched the phone quote to the exact dollar!',
    verified: true,
    verifiedSource: 'Google Review',
    technicianName: 'Marcus Vance'
  },
  {
    id: 'rev-2',
    name: 'David Korzinski',
    role: 'Vehicle Owner',
    location: 'Fort Lauderdale',
    serviceCategory: 'automotive',
    serviceName: 'Key Fob Replacement & Programming',
    rating: 5,
    date: '3 days ago',
    highlightPhrase: 'Saved me over $350 compared to the dealership',
    comment: 'Lost my only smart proximity key for my 2021 Audi at the supermarket parking lot. The dealership wanted to tow it and charge $600 with a 4-day wait. Pro Locksmith dispatched a mobile van equipped with key-cutting CNCs and had me driving in 35 minutes.',
    verified: true,
    verifiedSource: 'Yelp Verified',
    technicianName: 'Ray Delgado'
  },
  {
    id: 'rev-3',
    name: 'Elena Rostova',
    role: 'Commercial Facilities Director',
    location: 'Coral Gables',
    serviceCategory: 'commercial',
    serviceName: 'Master Key System & Crash Bars',
    rating: 5,
    date: '1 week ago',
    highlightPhrase: 'Clean execution for our 3-floor office building',
    comment: 'We needed our corporate offices rekeyed under a 3-tier master key hierarchy following a management turnover. They audited 42 doors, installed high-security Schlage Primus cylinders, and provided stamped restricted duplicates with zero disruption to staff.',
    verified: true,
    verifiedSource: 'Google Review',
    technicianName: 'Marcus Vance & Team'
  },
  {
    id: 'rev-4',
    name: 'James Thornton',
    role: 'Apartment Owner',
    location: 'Boca Raton',
    serviceCategory: 'residential',
    serviceName: 'Smart Lock Installation & WiFi Bridge',
    rating: 5,
    date: '2 weeks ago',
    highlightPhrase: 'Flawless Schlage Encode smart lock integration',
    comment: 'Wanted keyless entry for my family and Airbnb guests. The technician cleanly prepped the mortise pocket, aligned the strike plate so the deadbolt closes effortlessly, and walked us through the smartphone app permissions.',
    verified: true,
    verifiedSource: 'Angi Certified',
    technicianName: 'Ray Delgado'
  },
  {
    id: 'rev-5',
    name: 'Patricia Wu',
    role: 'Boutique Owner',
    location: 'Hollywood / Aventura',
    serviceCategory: 'commercial',
    serviceName: 'Panic Hardware & Storefront Rekey',
    rating: 5,
    date: '3 weeks ago',
    highlightPhrase: 'Prompt code-compliant emergency exit setup',
    comment: 'Our rear commercial exit panic bar failed an inspection. Pro Locksmith came out the same afternoon, replaced the rim cylinder and latch assembly to full commercial code, and provided a receipt with full warranty documentation.',
    verified: true,
    verifiedSource: 'Google Review',
    technicianName: 'Marcus Vance'
  },
  {
    id: 'rev-6',
    name: 'Michael Alvarez',
    role: 'Driver & Commuter',
    location: 'West Palm Beach',
    serviceCategory: 'emergency',
    serviceName: 'Broken Ignition Key Extraction',
    rating: 5,
    date: '1 month ago',
    highlightPhrase: 'Extracted snapped key blade without damaging cylinder',
    comment: 'My ignition key snapped in half inside the steering column. The technician arrived with specialized extraction tools, carefully pulled the fragment, and cut a fresh high-durability steel blade from code on the spot.',
    verified: true,
    verifiedSource: 'Yelp Verified',
    technicianName: 'Ray Delgado'
  }
];
