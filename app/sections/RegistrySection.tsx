import { wedding } from '../lib/wedding-data';
import { Gift, ExternalLink } from 'lucide-react';

export default function RegistrySection() {
  const { registry } = wedding;

  return (
    <section
      id="registry"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-ivory)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <span
          className="block mb-2"
          style={{ fontFamily: 'var(--font-script)', fontSize: '1.8rem', color: 'var(--color-gold)' }}
        >
          A Little Help
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--color-ivory)',
            fontWeight: 400,
          }}
        >
          Wedding Registry
        </h2>
        <div style={{ width: 60, height: 1, background: 'var(--color-gold)', margin: '1.5rem auto 1rem' }} />

        <p
          className="max-w-xl mx-auto mb-12 opacity-70"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.8 }}
        >
          Your presence is the greatest gift of all. If you&apos;d like to celebrate us with a gift, 
          we&apos;ve registered at the following stores.
        </p>

        {/* Gift icon */}
        <Gift size={32} style={{ color: 'var(--color-gold)', margin: '0 auto 3rem' }} />

        {/* Registry links */}
        <div className="flex flex-wrap justify-center gap-6">
          {registry.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                card-hover
                inline-flex items-center gap-3 px-8 py-5
                transition-all duration-300
                min-w-[200px]
                rounded-[2px]
                no-underline
                text-[var(--color-ivory)]
                border border-[rgba(196,160,68,0.3)]
                bg-[rgba(255,255,255,0.06)]
                hover:border-[var(--color-gold)]
                hover:bg-[rgba(196,160,68,0.1)]
              "
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                }}
              >
                {item.store}
              </span>
              <ExternalLink size={14} style={{ opacity: 0.5 }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
