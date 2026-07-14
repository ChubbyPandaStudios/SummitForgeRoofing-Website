import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { businessInfo, serviceAreas } from '../data/serviceAreas';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact">
      <SectionWrapper className="bg-navy-500">
        <div ref={ref}>
          <div className="text-center mb-14 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-wood-DEFAULT" />
              <span className="text-wood-300 font-display font-semibold text-sm tracking-widest uppercase">
                Contact
              </span>
              <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            </div>
            <h2 className="section-title text-white mb-4">
              Forge Your Protection
            </h2>
            <p className="section-subtitle text-silver-300 max-w-xl mx-auto">
              Let's talk about your roof. We're available Monday through Saturday and for emergencies 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact info */}
            <div className="animate-on-scroll-left space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-400 border border-silver-300/20 rounded-sm flex-shrink-0">
                  <Phone className="w-5 h-5 text-wood-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-silver-400 text-xs uppercase tracking-widest font-medium mb-1">Phone</p>
                  <a
                    href={businessInfo.phoneHref}
                    className="font-display font-bold text-white text-2xl hover:text-wood-300 transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                  <p className="text-silver-400 text-sm mt-0.5">24/7 for storm emergencies</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-400 border border-silver-300/20 rounded-sm flex-shrink-0">
                  <Mail className="w-5 h-5 text-wood-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-silver-400 text-xs uppercase tracking-widest font-medium mb-1">Email</p>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-white font-medium hover:text-wood-300 transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-400 border border-silver-300/20 rounded-sm flex-shrink-0">
                  <Clock className="w-5 h-5 text-wood-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-silver-400 text-xs uppercase tracking-widest font-medium mb-2">Hours</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-silver-200">{businessInfo.hours.weekdays}</p>
                    <p className="text-silver-200">{businessInfo.hours.saturday}</p>
                    <p className="text-silver-400">{businessInfo.hours.sunday}</p>
                    <p className="text-wood-300 font-medium">{businessInfo.hours.emergency}</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-400 border border-silver-300/20 rounded-sm flex-shrink-0">
                  <MapPin className="w-5 h-5 text-wood-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-silver-400 text-xs uppercase tracking-widest font-medium mb-1">Address</p>
                  <p className="text-silver-200 text-sm">{businessInfo.address}</p>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <p className="text-silver-400 text-xs uppercase tracking-widest font-medium mb-3">
                  Service Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-navy-400/60 border border-silver-300/20 text-silver-300 px-2.5 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-3 bg-navy-400/50 border border-silver-300/20 rounded-sm p-4">
                <Shield className="w-6 h-6 text-wood-300 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-silver-300 text-sm">
                  <strong className="text-white">Free, no-obligation inspections.</strong> We'll give you an honest assessment and a clear written quote. No pressure, ever.
                </p>
              </div>
            </div>

            {/* Right: Form placeholder */}
            <div className="animate-on-scroll-right">
              {/*
                THIRD-PARTY LEAD CAPTURE EMBED
                ================================
                Drop your lead form embed code (iframe, script tag, or widget div) here.
                Replace the placeholder block below entirely with your form provider's embed snippet.
                The parent container is styled to match the SummitForge design system.

                Recommended providers: JotForm, Typeform, HubSpot, Calendly, or similar.
              */}
              <div className="bg-navy-600/60 border border-silver-300/20 rounded-sm p-8 sm:p-10 h-full min-h-[480px] flex flex-col">
                <div className="mb-6">
                  <h3 className="font-display font-bold text-white text-xl mb-2">
                    Schedule Your Free Roof Inspection
                  </h3>
                  <p className="text-silver-300 text-sm">
                    Available Monday–Saturday. Same-day response for storm emergencies.
                  </p>
                </div>

                {/* Placeholder block */}
                <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-silver-300/20 rounded-sm p-8 text-center">
                  <div className="p-4 bg-navy-400/40 rounded-full mb-4">
                    <Shield className="w-8 h-8 text-wood-300/60" strokeWidth={1.5} />
                  </div>
                  <p className="text-silver-400 font-display font-semibold text-sm mb-2">
                    Lead Capture Form
                  </p>
                  <p className="text-silver-500 text-xs leading-relaxed max-w-xs">
                    Your third-party form embed goes here. Replace this placeholder with your JotForm, HubSpot, Typeform, or preferred lead capture tool.
                  </p>
                  <div className="mt-6 text-xs text-silver-600 border border-silver-600/30 rounded px-3 py-1.5">
                    Embed code placeholder
                  </div>
                </div>

                {/* Interim CTAs while form isn't live */}
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={businessInfo.phoneHref}
                    className="flex items-center justify-center gap-2 bg-wood-DEFAULT text-white font-display font-semibold py-3 rounded-sm hover:bg-wood-400 transition-all duration-200 hover:shadow-lg active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    Call {businessInfo.phone}
                  </a>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="flex items-center justify-center gap-2 border border-silver-300/40 text-silver-300 font-medium py-3 rounded-sm hover:border-silver-300 hover:text-white text-sm transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    Send us an email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map section */}
      <div className="w-full h-72 sm:h-96 relative bg-navy-600 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Woodstock GA area — SummitForge Roofing service area"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-4">
          <div className="p-4 bg-navy-500/80 border border-silver-300/20 rounded-full">
            <MapPin className="w-8 h-8 text-wood-300" strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-display font-bold text-white text-xl mb-1">Woodstock, GA 30188</p>
            <p className="text-silver-300 text-sm">Serving the Atlanta Metro — Cherokee, Cobb &amp; Forsyth Counties</p>
          </div>
          <a
            href="https://maps.google.com/?q=Woodstock,GA+30188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wood-DEFAULT text-white font-display font-semibold px-5 py-2.5 rounded-sm text-sm hover:bg-wood-400 transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
