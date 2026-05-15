import { wedding } from '../lib/wedding-data';
import { Hotel, Navigation, ExternalLink } from 'lucide-react';

export default function TravelSection() {
  const { accommodations, directions } = wedding;

  return (
    <section id="travel" className="py-24 px-6" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Getting Here & Staying</span>
          <h2 className="section-title">Travel & Accommodations</h2>
          <div className="section-divider" />
        </div>

        {/* Accommodations */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Hotel size={22} style={{ color: 'var(--color-gold)' }} />
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 400,
              }}
            >
              Where to Stay
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accommodations.map((hotel, i) => (
              <div
                key={i}
                className="card-hover p-7 rounded-sm"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-ivory-dark)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  {hotel.name}
                </p>
                <p
                  className="text-xs tracking-wider uppercase mb-4"
                  style={{ color: 'var(--color-sage-dark)', opacity: 0.8 }}
                >
                  {hotel.distance}
                </p>
                <p className="text-sm mb-1 opacity-70">{hotel.address}</p>
                <p className="text-sm mb-1 opacity-70">{hotel.phone}</p>
                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--color-gold)' }}
                >
                  {hotel.priceRange}
                </p>
                {hotel.notes && (
                  <p
                    className="text-xs italic mb-4 p-3 rounded"
                    style={{
                      backgroundColor: 'var(--color-ivory)',
                      borderLeft: '2px solid var(--color-blush)',
                    }}
                  >
                    {hotel.notes}
                  </p>
                )}
                <a
                  href={hotel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-gold)', borderBottom: '1px solid var(--color-gold)', paddingBottom: '1px' }}
                >
                  Book Now <ExternalLink size={10} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Directions */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Navigation size={22} style={{ color: 'var(--color-gold)' }} />
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 400,
              }}
            >
              Directions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {directions.map((dir, i) => (
              <div
                key={i}
                className="p-7 rounded-sm"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-ivory-dark)',
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                    }}
                  >
                    From {dir.from}
                  </p>
                  <div className="text-right">
                    <p className="text-xs opacity-60">{dir.distance}</p>
                    <p className="text-xs" style={{ color: 'var(--color-gold)' }}>{dir.duration}</p>
                  </div>
                </div>
                <p className="text-sm opacity-70 leading-relaxed">{dir.steps}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
