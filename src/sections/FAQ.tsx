import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { faqs } from '../data/faqs';
import { businessInfo } from '../data/serviceAreas';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`border rounded-sm transition-colors duration-200 ${isOpen ? 'border-wood-300/50 bg-navy-50' : 'border-navy-100 bg-white hover:border-navy-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-navy-500 text-sm sm:text-base leading-tight">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-wood-DEFAULT flex-shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 pb-5 text-navy-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useScrollAnimation();

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <SectionWrapper id="faq" className="bg-silver-50">
      <div ref={ref}>
        <div className="text-center mb-14 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
            <span className="text-wood-DEFAULT font-display font-semibold text-sm tracking-widest uppercase">
              FAQ
            </span>
            <div className="w-8 h-0.5 bg-wood-DEFAULT" />
          </div>
          <h2 className="section-title text-navy-500 mb-4">
            Common Questions Answered
          </h2>
          <p className="section-subtitle text-navy-300 max-w-2xl mx-auto">
            Everything you need to know about roofing in Woodstock GA and the Atlanta Metro — answered by our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 animate-on-scroll">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-navy-300 mb-4">Still have questions?</p>
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center gap-2 text-navy-500 font-display font-bold text-xl hover:text-wood-DEFAULT transition-colors"
          >
            <Phone className="w-5 h-5" />
            {businessInfo.phone}
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
