import { Star, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { testimonials } from '../data/testimonials';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-silver-300'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="reviews" className="bg-white">
      <div ref={ref}>
        <div className="text-center mb-14 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            <span className="text-wood-DEFAULT font-display font-semibold text-sm tracking-widest uppercase">
              Reviews
            </span>
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
          </div>
          <h2 className="section-title text-navy-500 mb-4">
            See What Your Neighbors Are Saying
          </h2>

          {/* Rating summary bar */}
          <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
            <div className="text-center">
              <div className="font-display font-extrabold text-5xl text-navy-500">4.9</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-navy-100 hidden sm:block" />
            <div className="text-left">
              <p className="font-display font-bold text-navy-500 text-lg">4.9 out of 5</p>
              <p className="text-navy-300 text-sm">Based on 200+ verified reviews</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-wood-DEFAULT text-sm hover:text-wood-400 transition-colors mt-1"
              >
                Read all reviews on Google
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="animate-on-scroll break-inside-avoid bg-white border border-navy-100 rounded-sm p-6 hover:border-wood-300/50 hover:shadow-lg transition-all duration-300 group inline-block w-full"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="border-l-4 border-wood-DEFAULT pl-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={`${t.avatar}?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop`}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-navy-100"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-display font-bold text-navy-500 text-sm">{t.name}</p>
                      <p className="text-navy-300 text-xs">{t.neighborhood}</p>
                    </div>
                  </div>
                  <span className="text-navy-300 text-xs flex-shrink-0 ml-2">{t.date}</span>
                </div>
                <StarRating rating={t.rating} />
                <p className="text-navy-400 text-sm leading-relaxed mt-3">{t.review}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-wood-DEFAULT text-white font-display font-semibold px-8 py-4 rounded-sm hover:bg-wood-400 hover:shadow-lg transition-all duration-200 active:scale-95"
          >
            Get Your Free Inspection Today
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
