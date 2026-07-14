import { AlertTriangle, Phone, CheckCircle, FileText, Shield, Clock } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { businessInfo } from '../data/serviceAreas';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const damageItems = [
  'Missing, cracked, or lifted shingles',
  'Granule loss visible in gutters or on ground',
  'Dented or bent gutters and downspouts',
  'Active interior leaks or ceiling stains',
  'Dented or cracked metal flashing',
  'Bruised or pockmarked shingle surface',
  'Cracked or displaced ridge caps',
  'Tree branch impact or debris punctures',
];

const steps = [
  { icon: Phone, step: '01', title: 'Call Us First', desc: 'Call (770) 482-9631. Our storm specialist picks up, even nights and weekends.' },
  { icon: Clock, step: '02', title: 'Same-Day Inspection', desc: 'We dispatch within 2–4 hours with cameras and documentation equipment.' },
  { icon: FileText, step: '03', title: 'Insurance Documentation', desc: 'Detailed photo report, measurements, and adjuster-ready documentation — all done for you.' },
  { icon: Shield, step: '04', title: 'Full Restoration', desc: 'We complete all approved repairs and handle final insurance billing directly.' },
];

export default function StormDamage() {
  const ref = useScrollAnimation();

  return (
    <section id="storm-damage" className="relative overflow-hidden">
      {/* Alert banner */}
      <div className="bg-danger-700 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium text-sm">
            Storm in the Atlanta area? We respond within hours.
          </span>
          <a
            href={businessInfo.phoneHref}
            className="font-bold underline hover:no-underline text-sm ml-2 whitespace-nowrap"
          >
            Call {businessInfo.phone} Now →
          </a>
        </div>
      </div>

      <SectionWrapper className="bg-navy-600">
        <div ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Content */}
            <div className="animate-on-scroll-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-danger-500" />
                <span className="text-danger-500 font-display font-semibold text-sm tracking-widest uppercase">
                  Storm Damage
                </span>
              </div>
              <h2 className="section-title text-white mb-6">
                Atlanta Storms Are Brutal.
                <br />
                <span className="text-wood-300">We're Ready When They Hit.</span>
              </h2>
              <p className="text-silver-300 leading-relaxed mb-6 text-lg">
                Hail, straight-line winds, fallen trees — Atlanta Metro homes face serious storm threats every spring and summer. SummitForge has been responding to storm damage across Woodstock, Canton, Marietta, and the greater Atlanta area for over 15 years.
              </p>
              <p className="text-silver-300 leading-relaxed mb-8">
                We don't just repair roofs. We document your damage, communicate with your insurance adjuster, and advocate for maximum claim value — so you get the full restoration your home deserves.
              </p>

              {/* Big phone CTA */}
              <div className="bg-danger-700/20 border border-danger-500/40 rounded-sm p-5 mb-8">
                <p className="text-danger-400 font-display font-semibold text-sm mb-2 uppercase tracking-wide">
                  24/7 Emergency Response
                </p>
                <a
                  href={businessInfo.phoneHref}
                  className="flex items-center gap-3 text-white hover:text-wood-300 transition-colors group"
                >
                  <Phone className="w-6 h-6 text-danger-400 group-hover:text-wood-300 transition-colors" />
                  <span className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                    {businessInfo.phone}
                  </span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-danger-600 hover:bg-danger-700 text-white font-display font-semibold px-6 py-3 rounded-sm transition-all duration-200 hover:shadow-lg active:scale-95"
                >
                  Request Emergency Assessment
                </a>
                <a
                  href={businessInfo.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-display font-semibold px-6 py-3 rounded-sm hover:bg-white/10 hover:border-white/60 transition-all duration-200 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right: Image + Checklist */}
            <div className="animate-on-scroll-right space-y-6">
              <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                <img
                  src="/storm_damage.jpg"
                  alt="Storm damaged roof on suburban home in Woodstock Georgia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-600/60 to-transparent" />
              </div>

              {/* Damage checklist */}
              <div className="bg-navy-500/60 border border-silver-300/20 rounded-sm p-6">
                <p className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wide">
                  Signs You Have Storm Damage
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {damageItems.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-silver-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-wood-300 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process steps */}
          <div className="animate-on-scroll">
            <h3 className="font-display font-bold text-white text-xl text-center mb-10">
              How Our Storm Response Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.step}
                  className="relative text-center p-6 bg-navy-500/50 border border-silver-300/10 rounded-sm"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wood-DEFAULT text-white font-display font-bold text-xs px-3 py-1 rounded-full">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 text-wood-300 mx-auto mb-3 mt-2" strokeWidth={1.5} />
                  <h4 className="font-display font-bold text-white text-sm mb-2">{step.title}</h4>
                  <p className="text-silver-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance trust block */}
          <div className="mt-12 bg-navy-500/40 border border-wood-DEFAULT/30 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 animate-on-scroll">
            <div className="p-4 bg-wood-DEFAULT/20 rounded-sm flex-shrink-0">
              <Shield className="w-8 h-8 text-wood-300" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg mb-2">
                We Work Directly with Your Insurance Company
              </h4>
              <p className="text-silver-300 text-sm leading-relaxed">
                SummitForge has helped hundreds of Atlanta homeowners maximize their storm damage claims with State Farm, Allstate, USAA, Farmers, Travelers, and more. Our detailed documentation and adjuster experience means you receive the full value your policy entitles you to.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
