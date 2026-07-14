import { useState, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { projects, ProjectCategory, Project } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories: ProjectCategory[] = ['All', 'Storm Repair', 'Replacement', 'Metal', 'Shingle', 'Gutter'];

function imgSrc(src: string, w = 900) {
  if (src.startsWith('/')) return src;
  return `${src}?auto=compress&cs=tinysrgb&w=${w}`;
}

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [value, setValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (e.buttons === 0 && e.type !== 'pointermove') return;
    if (e.type === 'pointermove' && e.buttons === 0) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setValue(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="before-after-slider w-full h-72 sm:h-96 rounded-sm overflow-hidden"
      onPointerMove={handlePointerMove}
    >
      {/* After (base) */}
      <img
        src={imgSrc(after, 900)}
        alt={`After: ${title}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <img
          src={imgSrc(before, 900)}
          alt={`Before: ${title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          BEFORE
        </div>
      </div>
      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
        AFTER
      </div>
      {/* Divider */}
      <div
        className="before-after-divider"
        style={{ left: `${value}%` }}
      />
      <div
        className="before-after-handle"
        style={{ left: `${value}%` }}
      >
        <ChevronLeft className="w-3 h-3 text-navy-500" />
        <ChevronRight className="w-3 h-3 text-navy-500" />
      </div>
      {/* Invisible range input for drag/touch */}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        aria-label="Before/after slider"
      />
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const testimonial = testimonials.find((t) => t.id === project.testimonialId);
  const [thumb, setThumb] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-white rounded-sm w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between bg-navy-500 px-6 py-4 z-10">
          <div>
            <h3 className="font-display font-bold text-white">{project.title}</h3>
            <p className="text-silver-300 text-sm flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {project.location}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-silver-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <BeforeAfterSlider
            before={project.beforeImage}
            after={project.afterImage}
            title={project.title}
          />
          <p className="text-xs text-navy-300 text-center mt-2">
            Drag the slider to compare before &amp; after
          </p>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {project.thumbnails.map((src, i) => (
              <button
                key={i}
                onClick={() => setThumb(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-sm overflow-hidden border-2 transition-colors ${
                  thumb === i ? 'border-wood-DEFAULT' : 'border-transparent'
                }`}
              >
                <img
                  src={imgSrc(src, 200)}
                  alt={`View ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <p className="text-navy-300 leading-relaxed mt-5">{project.description}</p>

          {/* Testimonial pull */}
          {testimonial && (
            <blockquote className="mt-6 border-l-4 border-wood-DEFAULT pl-4 bg-navy-50 py-4 pr-4 rounded-r-sm">
              <p className="text-navy-400 text-sm italic leading-relaxed">
                "{testimonial.review.slice(0, 200)}..."
              </p>
              <footer className="mt-2 text-navy-500 text-sm font-semibold">
                — {testimonial.name}, {testimonial.neighborhood}
              </footer>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ForgeView() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useScrollAnimation();

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SectionWrapper id="projects" className="bg-white">
        <div ref={ref}>
          <div className="text-center mb-12 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-wood-DEFAULT" />
              <span className="text-wood-DEFAULT font-display font-semibold text-sm tracking-widest uppercase">
                ForgeView™
              </span>
              <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            </div>
            <h2 className="section-title text-navy-500 mb-4">Our Work Speaks for Itself</h2>
            <p className="section-subtitle text-navy-300 max-w-xl mx-auto">
              Browse real projects completed across Woodstock, Canton, Marietta, and the Atlanta Metro. Click any project to see before &amp; after.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-500 text-white shadow-md'
                    : 'bg-navy-50 text-navy-300 hover:bg-navy-100 hover:text-navy-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="animate-on-scroll group relative overflow-hidden rounded-sm cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={imgSrc(project.afterImage, 600)}
                    alt={`${project.title} — ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-600/90 via-navy-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="inline-flex items-center gap-1 text-xs text-wood-300 font-medium mb-1">
                    <Tag className="w-3 h-3" /> {project.category}
                  </span>
                  <h4 className="font-display font-bold text-white text-sm leading-tight mb-1">
                    {project.title}
                  </h4>
                  <p className="text-silver-300 text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {project.location}
                  </p>
                  <button className="mt-3 text-xs border border-white/50 text-white px-3 py-1.5 rounded-sm hover:bg-white hover:text-navy-500 transition-colors w-fit">
                    View Project →
                  </button>
                </div>
                {/* Category badge (always visible) */}
                <div className="absolute top-3 left-3 bg-navy-500/80 text-silver-200 text-xs px-2 py-0.5 rounded-full">
                  {project.category}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-navy-300 mb-4">Ready for your transformation?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-wood-DEFAULT text-white font-display font-semibold px-8 py-4 rounded-sm hover:bg-wood-400 hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Get a Free Inspection
            </a>
          </div>
        </div>
      </SectionWrapper>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
