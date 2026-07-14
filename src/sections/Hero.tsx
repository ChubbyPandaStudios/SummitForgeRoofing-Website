import { useEffect, useRef } from 'react';
import { ChevronDown, Phone, Star } from 'lucide-react';
import { businessInfo } from '../data/serviceAreas';

const RAIN_COUNT = 40;

export default function Hero() {
  const rainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = rainRef.current;
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < RAIN_COUNT; i++) {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';
      drop.style.setProperty('--duration', `${1.2 + Math.random() * 1.5}s`);
      drop.style.setProperty('--delay', `${Math.random() * 3}s`);
      drop.style.setProperty('--height', `${60 + Math.random() * 80}px`);
      drop.style.left = `${Math.random() * 100}%`;
      container.appendChild(drop);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500/90 via-navy-500/75 to-navy-600/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-600/60 via-transparent to-transparent" />

      {/* Rain effect */}
      <div ref={rainRef} className="rain-container" />

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-white text-sm font-medium">4.9 Stars — 200+ Atlanta Homeowners</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl text-shadow-lg mb-6 max-w-5xl mx-auto leading-tight">
          Fortified Roofs.
          <br />
          <span className="text-wood-300">Forged for Atlanta Homes.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-silver-200 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 text-shadow leading-relaxed">
          Certified Storm Damage Experts Serving Woodstock &amp; Greater Atlanta Metro.
          GAF MasterElite® Certified. 25-Year Workmanship Warranty.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-wood-DEFAULT text-white font-display font-semibold px-8 py-4 text-lg rounded-sm hover:bg-wood-400 hover:shadow-2xl hover:shadow-wood-500/30 transition-all duration-200 active:scale-95"
          >
            Get Your Free Roof Inspection
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-display font-semibold px-8 py-4 text-lg rounded-sm hover:bg-white/10 hover:border-white transition-all duration-200 active:scale-95"
          >
            See Our Work
          </a>
        </div>

        {/* Phone */}
        <a
          href={businessInfo.phoneHref}
          className="inline-flex items-center gap-2 text-silver-200 hover:text-white transition-colors text-base font-medium"
        >
          <Phone className="w-4 h-4" />
          <span>Call 24/7: <strong className="text-white">{businessInfo.phone}</strong></span>
        </a>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {['Licensed & Insured', 'GAF MasterElite®', 'BBB Accredited', '500+ Roofs Completed'].map(
            (item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-silver-300 text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-wood-300" />
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust-bar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
