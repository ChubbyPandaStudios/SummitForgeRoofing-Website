import { useState, useEffect } from 'react';
import { ClipboardCheck } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-wood-DEFAULT text-white font-display font-semibold px-5 py-3 rounded-sm shadow-2xl hover:bg-wood-400 transition-all duration-300 hover:shadow-wood-500/30 hover:-translate-y-0.5 active:scale-95 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Get Free Inspection"
    >
      <ClipboardCheck className="w-4 h-4" />
      <span className="hidden sm:inline text-sm">Free Inspection</span>
    </a>
  );
}
