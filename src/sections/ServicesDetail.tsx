import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Home, CloudLightning, Layers, Search, Shield, Grid3x3 as Grid3X3, Droplets, Sun } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { services } from '../data/services';
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

export default function ServicesDetail() {
  const [activeService, setActiveService] = useState(services[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const ref = useScrollAnimation();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((service) => {
      const el = sectionRefs.current[service.id];
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActiveService(service.id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <SectionWrapper id="services" className="bg-navy-500">
      <div ref={ref}>
        <div className="text-center mb-14 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            <span className="text-wood-300 font-display font-semibold text-sm tracking-widest uppercase">
              Our Services
            </span>
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
          </div>
          <h2 className="section-title text-white mb-4">
            Every Roofing Need. One Trusted Team.
          </h2>
          <p className="section-subtitle text-silver-300 max-w-2xl mx-auto">
            From emergency tarping to 50-year metal installations, we have the expertise and the equipment to handle any residential roofing project in the Atlanta Metro.
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sticky side nav — desktop only */}
          <nav className="hidden lg:block w-56 flex-shrink-0 sticky top-24 h-fit">
            <ul className="space-y-1">
              {services.map((s) => {
                const Icon = iconMap[s.icon] || Home;
                return (
                  <li key={s.id}>
                    <a
                      href={`#service-${s.id}`}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-sm text-sm font-medium transition-all duration-200 ${
                        activeService === s.id
                          ? 'bg-wood-DEFAULT text-white'
                          : 'text-silver-300 hover:text-white hover:bg-navy-400'
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                      <span className="leading-tight">{s.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Service blocks */}
          <div className="flex-1 space-y-20">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Home;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  ref={(el) => { sectionRefs.current[service.id] = el; }}
                  className="animate-on-scroll"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Image */}
                    <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                      <div className="relative overflow-hidden rounded-sm aspect-[4/3] group">
                        <img
                          src={service.image.startsWith('/') ? service.image : `${service.image}?auto=compress&cs=tinysrgb&w=700`}
                          alt={`${service.title} in Woodstock GA — SummitForge Roofing`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-600/40 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-navy-400 border border-silver-300/20 rounded-sm">
                          <Icon className="w-5 h-5 text-wood-300" strokeWidth={1.5} />
                        </div>
                        <span className="text-wood-300 font-display font-semibold text-xs tracking-widest uppercase">
                          Service {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-silver-300 leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2.5 text-silver-200 text-sm">
                            <CheckCircle className="w-4 h-4 text-wood-300 flex-shrink-0 mt-0.5" strokeWidth={2} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <p className="text-silver-400 text-xs italic mb-5">{service.pricing}</p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-wood-DEFAULT text-white font-display font-semibold px-6 py-3 rounded-sm hover:bg-wood-400 transition-all duration-200 hover:shadow-lg active:scale-95 text-sm"
                      >
                        Request a Free Quote
                      </a>
                    </div>
                  </div>

                  {i < services.length - 1 && (
                    <div className="mt-16 border-t border-navy-400/50" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
