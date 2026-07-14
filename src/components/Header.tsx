import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { businessInfo } from '../data/serviceAreas';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Storm Damage', href: '#storm-damage' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy-500 shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="relative">
                <Shield
                  className="w-8 h-8 text-wood-DEFAULT group-hover:text-wood-300 transition-colors"
                  strokeWidth={2}
                />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-extrabold text-white text-lg tracking-wide">
                  SUMMITFORGE
                </span>
                <span className="block text-silver-300 text-xs tracking-widest uppercase font-medium -mt-0.5">
                  Roofing
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-silver-200 hover:text-wood-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={businessInfo.phoneHref}
                className="flex items-center gap-2 text-white font-medium hover:text-wood-300 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {businessInfo.phone}
              </a>
              <a
                href="#contact"
                className="bg-wood-DEFAULT text-white font-display font-semibold px-5 py-2.5 rounded-sm text-sm hover:bg-wood-400 transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                Free Inspection
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 -mr-2"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-navy-500 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-navy-400">
            <span className="font-display font-bold text-white">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-silver-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-silver-200 hover:text-wood-300 font-medium py-3 border-b border-navy-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={businessInfo.phoneHref}
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 bg-navy-400 text-white font-medium py-3 rounded-sm hover:bg-navy-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {businessInfo.phone}
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="flex items-center justify-center bg-wood-DEFAULT text-white font-display font-semibold py-3 rounded-sm hover:bg-wood-400 transition-colors"
              >
                Free Inspection
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
