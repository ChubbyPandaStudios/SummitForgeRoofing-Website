import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from 'lucide-react';
import { businessInfo, serviceAreas } from '../data/serviceAreas';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'ForgeView™ Projects', href: '#projects' },
  { label: 'Storm Damage', href: '#storm-damage' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-600 text-silver-200">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand & About */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <Shield className="w-7 h-7 text-wood-DEFAULT" strokeWidth={2} />
              <div>
                <span className="block font-display font-bold text-white text-lg tracking-wide">
                  SUMMITFORGE
                </span>
                <span className="block text-silver-400 text-xs tracking-widest uppercase -mt-0.5">
                  Roofing
                </span>
              </div>
            </a>
            <p className="text-silver-300 text-sm leading-relaxed mb-6">
              Woodstock GA's GAF MasterElite® certified roofing contractor. Serving the Atlanta Metro for over 15 years with honesty, craftsmanship, and a warranty that stands behind every nail.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-silver-300 text-sm">4.9 out of 5 — 200+ Reviews</span>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-navy-500 text-silver-300 hover:text-wood-300 hover:bg-navy-400 rounded-sm transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-navy-500 text-silver-300 hover:text-wood-300 hover:bg-navy-400 rounded-sm transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2 mb-8">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-silver-300 hover:text-wood-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href={businessInfo.phoneHref}
                className="flex items-center gap-3 text-silver-300 hover:text-wood-300 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {businessInfo.phone}
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-center gap-3 text-silver-300 hover:text-wood-300 text-sm transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {businessInfo.email}
              </a>
              <div className="flex items-start gap-3 text-silver-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {businessInfo.address}
              </div>
            </div>
          </div>

          {/* Hours & Service Areas */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-4">
              Hours
            </h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-3 text-silver-300 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{businessInfo.hours.weekdays}</p>
                  <p>{businessInfo.hours.saturday}</p>
                  <p>{businessInfo.hours.sunday}</p>
                  <p className="text-wood-300 font-medium mt-1">{businessInfo.hours.emergency}</p>
                </div>
              </div>
            </div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-4">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs bg-navy-500 text-silver-300 px-2 py-1 rounded-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-500">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-silver-400 text-xs">
            © {new Date().getFullYear()} SummitForge Roofing. All rights reserved. Licensed & Insured in Georgia.
          </p>
          <div className="flex gap-4 text-xs text-silver-400">
            <a href="#" className="hover:text-silver-300">Privacy Policy</a>
            <a href="#" className="hover:text-silver-300">Terms of Service</a>
          </div>
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 pb-3 text-center">
          <p className="text-silver-600 text-[10px] tracking-wide">Website created by Panda Pulse AI</p>
        </div>
      </div>
    </footer>
  );
}
