import { Shield, Award, Star, Home, CheckCircle } from 'lucide-react';

const items = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Award, text: 'GAF MasterElite® Certified' },
  { icon: CheckCircle, text: '25-Year Workmanship Warranty' },
  { icon: Home, text: '500+ Atlanta Roofs Completed' },
  { icon: Star, text: '4.9-Star Rated' },
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Award, text: 'GAF MasterElite® Certified' },
  { icon: CheckCircle, text: '25-Year Workmanship Warranty' },
  { icon: Home, text: '500+ Atlanta Roofs Completed' },
  { icon: Star, text: '4.9-Star Rated' },
];

export default function TrustBar() {
  return (
    <div id="trust-bar" className="bg-wood-DEFAULT overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-8 text-white font-medium text-sm flex-shrink-0"
          >
            <item.icon className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
            <span>{item.text}</span>
            <span className="ml-8 text-white/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
