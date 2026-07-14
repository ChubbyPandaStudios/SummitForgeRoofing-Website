export type ProjectCategory = 'All' | 'Storm Repair' | 'Replacement' | 'Metal' | 'Shingle' | 'Gutter';

export interface Project {
  id: string;
  title: string;
  location: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  beforeImage: string;
  afterImage: string;
  thumbnails: string[];
  testimonialId: string;
}

export const projects: Project[] = [
  {
    id: 'woodstock-storm-2024',
    title: 'Full Replacement After Hail Storm',
    location: 'Woodstock, GA',
    category: 'Storm Repair',
    description: 'Hail storm in April 2024 caused widespread damage to this Woodstock home. We documented the full damage, worked with State Farm, and completed a full shingle replacement in under two days.',
    beforeImage: '/before1.jpg',
    afterImage: '/after1.jpg',
    thumbnails: [
      '/after1.jpg',
      '/before1.jpg',
      'https://images.pexels.com/photos/5997990/pexels-photo-5997990.jpeg',
    ],
    testimonialId: 'james-t',
  },
  {
    id: 'canton-metal-roof',
    title: 'Standing Seam Metal Roof Install',
    location: 'Canton, GA',
    category: 'Metal',
    description: 'This Canton homeowner chose a charcoal standing seam metal roof for maximum longevity. The install took three days and came with a 50-year manufacturer warranty.',
    beforeImage: '/before2.jpg',
    afterImage: '/after2.jpg',
    thumbnails: [
      '/after2.jpg',
      '/before2.jpg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    ],
    testimonialId: 'sarah-m',
  },
  {
    id: 'marietta-shingle',
    title: 'Architectural Shingle Replacement',
    location: 'Marietta, GA',
    category: 'Shingle',
    description: 'A 22-year-old three-tab shingle roof replaced with GAF Timberline HDZ in Pewter Gray. The homeowner saw an immediate improvement in energy efficiency.',
    beforeImage: '/before1.jpg',
    afterImage: '/after2.jpg',
    thumbnails: [
      '/after2.jpg',
      '/before1.jpg',
      'https://images.pexels.com/photos/5997990/pexels-photo-5997990.jpeg',
    ],
    testimonialId: 'derek-w',
  },
  {
    id: 'roswell-full-replacement',
    title: 'Complete Tear-Off Replacement',
    location: 'Roswell, GA',
    category: 'Replacement',
    description: 'This Roswell home needed a full tear-off after inspectors found two layers of old shingles and compromised decking. We replaced it all — decking, ice barrier, underlayment, and a new Owens Corning Duration shingle system.',
    beforeImage: '/storm_damage.jpg',
    afterImage: '/after1.jpg',
    thumbnails: [
      '/after1.jpg',
      '/storm_damage.jpg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
    ],
    testimonialId: 'linda-p',
  },
  {
    id: 'alpharetta-gutter',
    title: 'Seamless Gutter System with Leaf Guards',
    location: 'Alpharetta, GA',
    category: 'Gutter',
    description: 'We replaced deteriorated sectional gutters with a custom-fabricated seamless aluminum system and installed micro-mesh leaf guards to eliminate future cleaning on this wooded Alpharetta lot.',
    beforeImage: 'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg',
    afterImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    thumbnails: [
      'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/5997990/pexels-photo-5997990.jpeg',
    ],
    testimonialId: 'michael-h',
  },
  {
    id: 'kennesaw-wind-repair',
    title: 'Wind Damage Repair — Partial Replacement',
    location: 'Kennesaw, GA',
    category: 'Storm Repair',
    description: 'Straight-line winds from a late summer storm lifted ridge caps and tore off three sections of shingles. We completed emergency tarping the same day and finished repairs within the week.',
    beforeImage: '/before2.jpg',
    afterImage: '/after2.jpg',
    thumbnails: [
      '/after2.jpg',
      '/before2.jpg',
      'https://images.pexels.com/photos/5997990/pexels-photo-5997990.jpeg',
    ],
    testimonialId: 'tom-b',
  },
  {
    id: 'holly-springs-metal',
    title: 'Metal Shake Roof — Full Install',
    location: 'Holly Springs, GA',
    category: 'Metal',
    description: 'A stunning metal shake profile in weathered copper finish for this craftsman-style Holly Springs home. The textured look mimics cedar shake while providing the durability of steel.',
    beforeImage: 'https://images.pexels.com/photos/1029625/pexels-photo-1029625.jpeg',
    afterImage: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
    thumbnails: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/1029625/pexels-photo-1029625.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    ],
    testimonialId: 'karen-r',
  },
  {
    id: 'acworth-replacement',
    title: 'Designer Shingle Full Replacement',
    location: 'Acworth, GA',
    category: 'Replacement',
    description: 'An older home in Acworth with failing shingles and active leaks got a complete transformation with GAF Camelot II designer shingles in Antique Slate — turning a liability into a showpiece.',
    beforeImage: 'https://images.pexels.com/photos/7218664/pexels-photo-7218664.jpeg',
    afterImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    thumbnails: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/7218664/pexels-photo-7218664.jpeg',
      'https://images.pexels.com/photos/1029625/pexels-photo-1029625.jpeg',
    ],
    testimonialId: 'patricia-g',
  },
];
