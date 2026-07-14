import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { testimonials } from '../data/testimonials';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startXRef = useRef<number | null>(null);
  const ref = useScrollAnimation();

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)), []);
  const next = useCallback(() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  const handlePointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startXRef.current === null) return;
    const diff = startXRef.current - e.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    startXRef.current = null;
  };

  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonials" className="bg-navy-500">
      <div ref={ref}>
        <div className="text-center mb-14 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            <span className="text-wood-300 font-display font-semibold text-sm tracking-widest uppercase">
              What Our Clients Say
            </span>
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
          </div>
          <h2 className="section-title text-white mb-4">
            Trusted by 500+ Atlanta Homeowners
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="animate-on-scroll max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div className="relative bg-navy-600/60 border border-silver-300/20 rounded-sm p-8 sm:p-12 text-center min-h-[280px] flex flex-col justify-center">
            <Quote className="w-10 h-10 text-wood-300/40 mx-auto mb-6 flex-shrink-0" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Review text */}
            <blockquote className="text-silver-200 text-base sm:text-lg leading-relaxed mb-8 italic">
              "{t.review}"
            </blockquote>

            {/* Reviewer */}
            <div className="flex items-center justify-center gap-3">
              <img
                src={`${t.avatar}?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop`}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-wood-DEFAULT/40"
              />
              <div className="text-left">
                <p className="font-display font-bold text-white text-sm">{t.name}</p>
                <p className="text-silver-400 text-xs">{t.neighborhood} • {t.date}</p>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-silver-400 hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-silver-400 hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? 'w-6 h-2 bg-wood-DEFAULT'
                    : 'w-2 h-2 bg-silver-600 hover:bg-silver-400'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-silver-300 mb-5">
            Join 500+ happy Atlanta homeowners who chose SummitForge.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-wood-DEFAULT text-white font-display font-semibold px-8 py-4 rounded-sm hover:bg-wood-400 hover:shadow-lg transition-all duration-200 active:scale-95"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
