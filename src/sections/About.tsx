import { Award, Users, MapPin, Shield } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const certBadges = [
  { label: 'GAF MasterElite®', sub: 'Certified Contractor' },
  { label: 'BBB', sub: 'Accredited Business' },
  { label: 'Owens Corning', sub: 'Preferred Contractor' },
  { label: 'Licensed & Insured', sub: 'State of Georgia' },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="about" className="bg-white">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Story */}
        <div className="animate-on-scroll-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            <span className="text-wood-DEFAULT font-display font-semibold text-sm tracking-widest uppercase">
              Our Story
            </span>
          </div>
          <h2 className="section-title text-navy-500 mb-6">
            Built on Honesty. Backed by 15 Years of Local Trust.
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed mb-5">
            SummitForge Roofing was founded in Woodstock, GA by a team of roofing professionals who believed the local market deserved better — better materials, better communication, and a contractor who actually answers the phone.
          </p>
          <p className="text-navy-300 leading-relaxed mb-8">
            Over 15 years later, we've completed more than 500 roofs across Cherokee, Cobb, and Forsyth counties. We earned GAF MasterElite® status — the top 2% of all roofing contractors nationally — and we've maintained it every single year by holding our team to the same standard we'd demand for our own homes.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Award, label: 'GAF MasterElite®', sub: 'Top 2% nationally' },
              { icon: Users, label: '500+ Roofs', sub: 'Completed in Atlanta Metro' },
              { icon: MapPin, label: 'Woodstock, GA', sub: 'Proudly local since 2009' },
              { icon: Shield, label: '25-Year Warranty', sub: 'On every installation' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="p-2 bg-navy-50 rounded-sm flex-shrink-0">
                  <item.icon className="w-5 h-5 text-wood-DEFAULT" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy-500 text-sm">{item.label}</p>
                  <p className="text-navy-300 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo grid + badges */}
        <div className="animate-on-scroll-right">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="space-y-4">
              <img
                src="/modern_house.jpg"
                alt="Modern home with premium roof installation in Woodstock GA"
                className="w-full h-48 object-cover rounded-sm"
                loading="lazy"
              />
              <img
                src="/residential_roof_replacement.jpg"
                alt="Residential roof replacement in Woodstock Georgia"
                className="w-full h-32 object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="/Roofing_inspections.jpg"
                alt="Roof inspection in progress in Canton GA"
                className="w-full h-32 object-cover rounded-sm"
                loading="lazy"
              />
              <img
                src="/house_after.jpg"
                alt="Completed shingle roof on home in Marietta GA"
                className="w-full h-48 object-cover rounded-sm"
                loading="lazy"
              />
            </div>
          </div>

          {/* Cert badges */}
          <div className="grid grid-cols-4 gap-3">
            {certBadges.map((badge) => (
              <div
                key={badge.label}
                className="bg-navy-50 border border-navy-100 rounded-sm p-3 text-center"
              >
                <p className="font-display font-bold text-navy-500 text-xs leading-tight">
                  {badge.label}
                </p>
                <p className="text-navy-300 text-xs mt-0.5">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
