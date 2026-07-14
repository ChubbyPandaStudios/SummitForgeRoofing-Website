export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  image: string;
  icon: string;
  pricing: string;
}

export const services: Service[] = [
  {
    id: 'roof-replacement',
    title: 'Residential Roof Replacement',
    shortDesc: 'Complete tear-off and replacement using premium materials backed by a 25-year workmanship warranty.',
    fullDesc: 'When repair is no longer the right answer, SummitForge delivers seamless, stress-free roof replacements from start to finish. We use only GAF and Owens Corning premium shingles, properly sized decking, and code-compliant ventilation — all installed by our certified crews.',
    benefits: [
      'Full tear-off of old shingles and underlayment',
      'Premium GAF or Owens Corning shingles',
      '25-year SummitForge workmanship warranty',
      'Licensed, insured crew with daily site cleanup',
      'Permit pulled and inspected in your jurisdiction',
      'Completion typically in 1–2 days for most homes',
    ],
    image: '/residential_roof_replacement.jpg',
    icon: 'Home',
    pricing: 'Pricing varies by project size — contact us for a free quote',
  },
  {
    id: 'storm-damage-repair',
    title: 'Storm Damage Repair',
    shortDesc: 'Fast, expert repairs for hail, wind, and fallen-tree damage. We work directly with your insurance company.',
    fullDesc: 'Atlanta Metro storms can be brutal. From hail dents on metal flashing to blown-off ridge caps, SummitForge\'s storm specialists document every detail of your claim, communicate directly with your adjuster, and restore your roof to pre-storm condition — often at no out-of-pocket cost to you.',
    benefits: [
      'Same-day damage assessment and emergency tarping',
      'Detailed photo documentation for insurance claims',
      'Direct communication with your insurance adjuster',
      'All repairs match your existing materials and color',
      'Hail, wind, fallen tree, and debris damage covered',
      'We fight for maximum claim value on your behalf',
    ],
    image: '/storm_damage.jpg',
    icon: 'CloudLightning',
    pricing: 'Pricing varies by project size — contact us for a free quote',
  },
  {
    id: 'metal-roofing',
    title: 'Metal Roofing',
    shortDesc: 'Standing seam and metal shingle systems built to last 50+ years with superior energy efficiency.',
    fullDesc: 'Metal roofing is the premium choice for Georgia homeowners who want maximum longevity, energy savings, and curb appeal. SummitForge installs standing seam, corrugated metal, and metal shake profiles in a full range of colors and finishes — all with manufacturer warranties up to 50 years.',
    benefits: [
      'Standing seam, metal shake, and corrugated profiles',
      'Manufacturer warranties up to 50 years',
      'Energy Star rated finishes reduce cooling costs',
      'Class 4 impact resistance — ideal for Georgia hail',
      'Fire resistant and mold/mildew proof',
      'Available in 30+ colors and factory finishes',
    ],
    image: '/metal_roofing_01.jpg',
    icon: 'Layers',
    pricing: 'Pricing varies by project size — contact us for a free quote',
  },
  {
    id: 'roof-inspections',
    title: 'Roof Inspections',
    shortDesc: 'Comprehensive 27-point inspections for peace of mind, home sales, or post-storm documentation.',
    fullDesc: 'Our 27-point inspection covers every inch of your roof system — from decking and flashing to ridge vents and gutters. We provide a detailed written report with photos, a condition summary, and an honest recommendation. No upselling, no pressure.',
    benefits: [
      '27-point written inspection with photo documentation',
      'Attic ventilation and moisture evaluation',
      'Flashing, chimney, and skylight inspection',
      'Gutter condition and drainage assessment',
      'Detailed report delivered within 24 hours',
      'No-pressure findings and honest recommendations',
    ],
    image: '/Roofing_inspections.jpg',
    icon: 'Search',
    pricing: 'Free inspections for storm damage — contact us for a free quote',
  },
  {
    id: 'emergency-tarping',
    title: 'Emergency Tarping',
    shortDesc: 'Rapid response tarping and board-up services to protect your home after storm damage.',
    fullDesc: 'When a storm exposes your home to the elements, every hour matters. SummitForge\'s emergency response team deploys within hours to secure your roof with heavy-duty tarps, protecting your home from further water intrusion while you navigate the insurance process.',
    benefits: [
      'Response within 2–4 hours of your call',
      'Heavy-duty 20-mil poly tarps properly secured',
      'Board-up services for structural damage',
      'Emergency documentation for insurance adjuster',
      'Available 24/7 during active storm events',
      'No emergency fee for insurance-covered damage',
    ],
    image: '/emergency_tarping.jpg',
    icon: 'Shield',
    pricing: 'Pricing varies by project size — contact us for a free quote',
  },
  {
    id: 'shingle-roofing',
    title: 'Shingle Roofing',
    shortDesc: 'Architectural and designer shingles installed with precision for lasting beauty and protection.',
    fullDesc: 'Asphalt architectural shingles remain the most popular roofing choice for Georgia homeowners — and for good reason. SummitForge installs GAF Timberline HDZ, Owens Corning Duration, and designer-grade shingles with the precision installation that unlocks full manufacturer warranties.',
    benefits: [
      'GAF Timberline HDZ and Owens Corning Duration lines',
      'Enhanced Lifetime Limited Manufacturer Warranty available',
      'Thousands of color and style combinations',
      'Wind resistance up to 130 mph',
      'Impact-resistant Class 4 options for insurance discounts',
      'Available with SureNail® technology for superior adhesion',
    ],
    image: '/house_after.jpg',
    icon: 'Grid3x3',
    pricing: 'Pricing varies by project size — contact us for a free quote',
  },
  {
    id: 'gutter-systems',
    title: 'Gutter Systems',
    shortDesc: 'Seamless aluminum gutters, guards, and downspout systems designed to protect your foundation.',
    fullDesc: 'Your gutters are your roof\'s first line of defense for your home\'s foundation. SummitForge installs custom-fabricated seamless aluminum gutters in any color, sized correctly for Atlanta\'s heavy rain events, with optional micro-mesh leaf guards that eliminate cleaning entirely.',
    benefits: [
      'Custom-fabricated seamless aluminum gutters on-site',
      'Properly sized for Atlanta rainfall intensity',
      'K-style and half-round profiles available',
      '40+ color options to match your home',
      'Optional micro-mesh leaf guard systems',
      'Underground drainage and downspout extensions',
    ],
    image: '/gutter_systems.jpg',
    icon: 'Droplets',
    pricing: 'Pricing varies by project size — contact us for a free quote',
  },
  {
    id: 'solar-ready',
    title: 'Solar-Ready Installs',
    shortDesc: 'New roofs engineered for future solar panel installation without costly re-roofing.',
    fullDesc: 'Planning to go solar in the next few years? Don\'t re-roof twice. SummitForge installs solar-ready roofs with reinforced decking, pre-positioned conduit pathways, and solar-compatible underlayment — so your future solar install is clean, code-compliant, and doesn\'t void your roofing warranty.',
    benefits: [
      'Reinforced decking rated for panel load',
      'Pre-positioned conduit pathways and penetrations',
      'Solar-compatible GAF Timberline CS shingles available',
      'Fully compatible with all major solar panel brands',
      'Doesn\'t void your roofing manufacturer warranty',
      'Coordination with your solar installer at no extra charge',
    ],
    image: '/solar_ready_installs.jpg',
    icon: 'Sun',
    pricing: 'Pricing varies by project size — contact us for a free quote',
  },
];

export const serviceOverview = services.slice(0, 4);