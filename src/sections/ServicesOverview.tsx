import { Home, CloudLightning, Layers, Search, Shield, Grid3x3 as Grid3X3, Droplets, Sun } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { serviceOverview } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap: Record<string, React.ElementType> = {
  Home,
  CloudLightning,
  Layers,
  Search,
  Shield,
  Grid3x3: Grid3X3,
  Droplets,
  Sun,
};

export default function ServicesOverview() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="services-overview" className="bg-navy-500">
      <div ref={ref}>
        <div className="text-center mb-14 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            <span className="text-wood-300 font-display font-semibold text-sm tracking-widest uppercase">
              What We Do
            </span>
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
          </div>
          <h2 className="section-title text-white mb-4">
            Roofing Solutions for Every Situation
          </h2>
          <p className="section-subtitle text-silver-300 max-w-2xl mx-auto">
            From emergency storm repair to full metal roof installations, SummitForge has the crew, the certifications, and the experience to handle any roofing project in the Atlanta Metro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceOverview.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={service.id}
                className="animate-on-scroll group relative bg-navy-600/60 border border-silver-shimmer hover:border-silver-300/40 rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 silver-shimmer animate-shimmer" />
                </div>

                <div className="relative z-10">
                  <div className="p-3 bg-navy-500 border border-silver-300/20 rounded-sm inline-flex mb-5 group-hover:border-silver-300/40 transition-colors">
                    <Icon className="w-6 h-6 text-wood-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-silver-300 text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>
                  <a
                    href="#services"
                    className="inline-flex items-center text-wood-300 text-sm font-medium hover:text-wood-200 transition-colors group/link"
                  >
                    Learn More
                    <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <p className="text-silver-300 text-sm mb-4">
            Looking for something specific?
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-silver-300/40 text-silver-300 hover:border-silver-300 hover:text-white font-medium px-6 py-3 rounded-sm text-sm transition-all duration-200"
          >
            View All 8 Services ↓
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
