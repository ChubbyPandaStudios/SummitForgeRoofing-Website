export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
  projectId?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'james-t',
    name: 'James T.',
    neighborhood: 'Woodstock, GA',
    rating: 5,
    date: 'April 2024',
    review: 'After the April hailstorm I was worried sick about my roof. I called SummitForge on a Monday morning and they had someone out that afternoon. The inspection was thorough, the photos were detailed, and they handled everything with my State Farm adjuster. I barely had to lift a finger. Roof was done in two days, site was spotless, and the crew was professional from start to finish. Can\'t recommend them highly enough.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    projectId: 'woodstock-storm-2024',
  },
  {
    id: 'sarah-m',
    name: 'Sarah M.',
    neighborhood: 'Canton, GA',
    rating: 5,
    date: 'March 2024',
    review: 'We\'ve been putting off replacing our roof for two years, going back and forth on metal vs shingles. The SummitForge consultant walked us through the whole decision without any pressure and gave us a realistic price comparison. We went with standing seam metal and it has completely transformed the look of our home. Neighbors keep asking who did it. Worth every penny.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    projectId: 'canton-metal-roof',
  },
  {
    id: 'derek-w',
    name: 'Derek W.',
    neighborhood: 'Marietta, GA',
    rating: 5,
    date: 'February 2024',
    review: 'I got three quotes for my roof and SummitForge wasn\'t the cheapest, but they were the most honest. The other guys were vague about materials and warranties. SummitForge told me exactly what brand, exactly what warranty, and gave me a line-item breakdown. The job came in under the estimated time and my energy bills have noticeably dropped. That\'s the kind of quality that speaks for itself.',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    projectId: 'marietta-shingle',
  },
  {
    id: 'linda-p',
    name: 'Linda P.',
    neighborhood: 'Roswell, GA',
    rating: 5,
    date: 'January 2024',
    review: 'I was selling my house and needed the roof inspected before listing. SummitForge found issues that could have killed the deal and gave me a fair price to fix everything before the buyers\' inspector came through. We closed on time with zero roofing contingencies. The buyer\'s agent actually commented on what great shape the roof was in. That\'s a real estate win I owe to SummitForge.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    projectId: 'roswell-full-replacement',
  },
  {
    id: 'michael-h',
    name: 'Michael H.',
    neighborhood: 'Alpharetta, GA',
    rating: 5,
    date: 'December 2023',
    review: 'We live on a heavily wooded lot and our old gutters were a constant nightmare — clogs, overflow, damaged fascia. The SummitForge gutter team came in, ripped out the old sectional gutters, and installed seamless aluminum with micro-mesh guards all in one day. Six months later, zero issues. Zero cleaning. It\'s the best home improvement investment we\'ve made in ten years.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    projectId: 'alpharetta-gutter',
  },
  {
    id: 'tom-b',
    name: 'Tom B.',
    neighborhood: 'Kennesaw, GA',
    rating: 5,
    date: 'November 2023',
    review: 'The storm came through on a Thursday night and by Friday afternoon SummitForge had tarps on my roof and was already documenting for insurance. Their adjuster communication was exceptional — they knew exactly what language to use and what to document to get the full claim approved. My out-of-pocket after insurance was minimal. Fast, professional, and genuinely helpful in a stressful situation.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    projectId: 'kennesaw-wind-repair',
  },
  {
    id: 'karen-r',
    name: 'Karen R.',
    neighborhood: 'Holly Springs, GA',
    rating: 5,
    date: 'October 2023',
    review: 'Our house is a craftsman built in 1994 and we wanted something that honored the original character. SummitForge showed us metal shake options I didn\'t even know existed. The weathered copper finish they recommended looks absolutely stunning — it looks like natural cedar but I know it\'ll outlast me. Their crew was meticulous, used protective tarps around all our landscaping, and the job was cleaner than it started.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    projectId: 'holly-springs-metal',
  },
  {
    id: 'patricia-g',
    name: 'Patricia G.',
    neighborhood: 'Acworth, GA',
    rating: 5,
    date: 'September 2023',
    review: 'I have an older home that needed significant roof work and I was nervous about both the cost and disruption. The SummitForge team was patient, explained everything in plain language, and gave me options at different price points. The designer shingles they installed look absolutely incredible — completely modernized the exterior. Three of my neighbors have already asked for their number.',
    avatar: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg',
    projectId: 'acworth-replacement',
  },
  {
    id: 'robert-k',
    name: 'Robert K.',
    neighborhood: 'Woodstock, GA',
    rating: 5,
    date: 'August 2023',
    review: 'Had a leak over our master bedroom that two other roofers told us needed a full replacement. SummitForge came out, identified a failing flashing around the chimney, and fixed it for a fraction of the cost of replacement. That honest assessment saved us thousands. When we do need a full replacement in a few years, SummitForge is the only call I\'ll make.',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
  },
  {
    id: 'angela-v',
    name: 'Angela V.',
    neighborhood: 'Canton, GA',
    rating: 5,
    date: 'July 2023',
    review: 'I manage four rental properties in the Canton area and SummitForge has become my go-to for all roof work. They understand the economics of rental property maintenance, give fair pricing, schedule efficiently, and document everything I need for tax purposes. The reliability and quality consistency across multiple properties is something I\'ve never found with other contractors. They\'ve earned every bit of my repeat business.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  },
];
