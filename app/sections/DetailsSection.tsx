import { wedding } from '../lib/wedding-data';
import { MapPin, Clock, CalendarDays, Shirt } from 'lucide-react';

export default function DetailsSection() {
  const { date, time, timezone, venue } = wedding.event;
  const { style, description, colorPalette } = wedding.dressCode;

  return (
    <section id="details" className="py-24 px-6" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">The Big Day</span>
          <h2 className="section-title">Wedding Details</h2>
          <div className="section-divider" />
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Date */}
          <div
            className="card-hover p-8 text-center rounded-sm"
            style={{ backgroundColor: '#fff', border: '1px solid var(--color-ivory-dark)' }}
          >
            <CalendarDays size={28} style={{ color: 'var(--color-gold)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              DATE
            </h3>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300 }}>{date}</p>
          </div>

          {/* Time */}
          <div
            className="card-hover p-8 text-center rounded-sm"
            style={{ backgroundColor: '#fff', border: '1px solid var(--color-ivory-dark)' }}
          >
            <Clock size={28} style={{ color: 'var(--color-gold)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              TIME
            </h3>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300 }}>{time} {timezone}</p>
          </div>

          {/* Venue */}
          <div
            className="card-hover p-8 text-center rounded-sm md:col-span-2"
            style={{ backgroundColor: '#fff', border: '1px solid var(--color-ivory-dark)' }}
          >
            <MapPin size={28} style={{ color: 'var(--color-gold)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              VENUE
            </h3>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, marginBottom: '0.25rem' }}>
              {venue.name}
            </p>
            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
              {venue.address}, {venue.city}, {venue.state} {venue.zip}
            </p>
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-gold)', borderBottom: '1px solid var(--color-gold)', paddingBottom: '2px' }}
            >
              View on Map →
            </a>
          </div>
        </div>

        {/* Dress Code */}
        <div
          className="p-10 text-center rounded-sm"
          style={{ background: 'linear-gradient(135deg, var(--color-blush) 0%, var(--color-ivory-dark) 100%)' }}
        >
          <Shirt size={28} style={{ color: 'var(--color-charcoal)', margin: '0 auto 1rem' }} />
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              marginBottom: '0.75rem',
            }}
          >
            {style}
          </h3>
          <p className="max-w-lg mx-auto" style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.8 }}>
            {description}
          </p>
          {colorPalette.length > 0 && (
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase mb-3" style={{ opacity: 0.6 }}>
                Suggested Color Palette
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {colorPalette.map((color) => (
                  <span
                    key={color}
                    className="px-4 py-1 text-xs tracking-wider"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.5)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '2px',
                    }}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
