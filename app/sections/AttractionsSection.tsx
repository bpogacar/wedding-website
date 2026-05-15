import { wedding } from '../lib/wedding-data';
import { MapPin, ExternalLink } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Culture: '#8fab80',
  Outdoors: '#5a7a52',
  Family: '#c4a044',
  Entertainment: '#d4896a',
  Food: '#e8c4b8',
};

export default function AttractionsSection() {
  const { attractions } = wedding;

  return (
    <section id="attractions" className="py-24 px-6" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">While You&apos;re in Town</span>
          <h2 className="section-title">Things to Do Nearby</h2>
          <div className="section-divider" />
          <p
            className="max-w-lg mx-auto mt-6 opacity-70"
            style={{ fontSize: '0.95rem', lineHeight: 1.8 }}
          >
            Make a weekend of it! Here are some of our favorite local spots near the venue.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((place, i) => (
            <a
              key={i}
              href={place.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover block p-7 rounded-sm no-underline"
              style={{
                backgroundColor: '#fff',
                border: '1px solid var(--color-ivory-dark)',
                color: 'var(--color-charcoal)',
              }}
            >
              {/* Category badge */}
              <span
                className="inline-block text-xs tracking-widest uppercase px-3 py-1 mb-4"
                style={{
                  backgroundColor: categoryColors[place.category] || 'var(--color-blush)',
                  color: '#fff',
                  borderRadius: '2px',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                }}
              >
                {place.category}
              </span>

              <h3
                className="mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400 }}
              >
                {place.name}
              </h3>

              <p className="text-sm mb-4 opacity-70 leading-relaxed">{place.description}</p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs opacity-50">
                  <MapPin size={11} />
                  {place.distance}
                </span>
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: 'var(--color-gold)' }}
                >
                  Visit <ExternalLink size={10} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
