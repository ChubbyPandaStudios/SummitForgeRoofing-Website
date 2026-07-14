import { useEffect, useRef } from 'react';
import {
  Award, Clock, FileCheck, Hammer, Shield, Leaf, Users, Zap
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: 500, suffix: '+', label: 'Roofs Completed' },
  { value: 25, suffix: '-Year', label: 'Workmanship Warranty' },
  { value: 4.9, suffix: '', label: 'Star Rating' },
  { value: 15, suffix: '+', label: 'Years Serving Atlanta' },
];

const benefits = [
  { icon: Award, title: 'GAF MasterElite® Certified', desc: 'Top 2% of all roofing contractors nationally. Unlocks the strongest manufacturer warranties available.' },
  { icon: FileCheck, title: 'Insurance Claim Experts', desc: 'We document, communicate, and advocate directly with your adjuster so you don\'t have to.' },
  { icon: Shield, title: 'Lifetime Material Warranties', desc: 'Golden Pledge® and Enhanced Lifetime warranties available on qualifying systems.' },
  { icon: Zap, title: 'Same-Day Emergency Response', desc: 'Storm tarp deployment within 2–4 hours. Available 24/7 during active storm events in Georgia.' },
  { icon: Leaf, title: 'Clean Job Sites Guaranteed', desc: 'We use magnetic nail sweepers, tarps around all landscaping, and haul off 100% of debris before we leave.' },
  { icon: Users, title: 'Local & Family-Owned', desc: 'Born in Woodstock, GA. We live in the communities we serve and our reputation depends on every single job.' },
  { icon: Hammer, title: 'W-2 Employee Crews', desc: 'No day-labor or rotating subs. Our background-checked, trained crew has installed hundreds of roofs together.' },
  { icon: Clock, title: 'On-Time. On-Budget.', desc: 'We provide a detailed written scope before every project and we stick to it. No surprise charges.' },
];

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const isDecimal = value % 1 !== 0;
          const duration = 1800;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - elapsed, 3);
            const current = isDecimal
              ? (eased * value).toFixed(1)
              : Math.round(eased * value).toString();
            if (el) el.textContent = current;
            if (elapsed < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="text-center">
      <div className="font-display font-extrabold text-4xl sm:text-5xl text-navy-500 mb-1">
        <span ref={countRef}>0</span>
        <span>{suffix}</span>
      </div>
      <p className="text-navy-300 text-sm font-medium">{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="why-us" className="bg-silver-50">
      <div ref={ref}>
        <div className="text-center mb-14 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            <span className="text-wood-DEFAULT font-display font-semibold text-sm tracking-widest uppercase">
              Why SummitForge
            </span>
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
          </div>
          <h2 className="section-title text-navy-500 mb-4">
            The Standard Atlanta Homeowners Deserve
          </h2>
          <p className="section-subtitle text-navy-300 max-w-2xl mx-auto">
            We set the bar others benchmark against. Here's why 500+ Atlanta families chose SummitForge over the competition.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-on-scroll">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-wood-DEFAULT mx-auto mb-16" />

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="animate-on-scroll group p-6 bg-white border border-navy-100 rounded-sm hover:border-wood-300/50 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="p-2.5 bg-navy-50 rounded-sm inline-flex mb-4 group-hover:bg-wood-50 transition-colors">
                <b.icon className="w-5 h-5 text-wood-DEFAULT" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-navy-500 text-sm mb-2">{b.title}</h3>
              <p className="text-navy-300 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
