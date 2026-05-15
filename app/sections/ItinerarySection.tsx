import { wedding } from '../lib/wedding-data';

export default function ItinerarySection() {
  const { itinerary } = wedding;

  return (
    <section
      id="itinerary"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-ivory)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="block mb-2"
            style={{ fontFamily: 'var(--font-script)', fontSize: '1.8rem', color: 'var(--color-gold)' }}
          >
            The Schedule
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 400,
              color: 'var(--color-ivory)',
            }}
          >
            Day-of Itinerary
          </h2>
          <div style={{ width: 60, height: 1, background: 'var(--color-gold)', margin: '1.5rem auto' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-24 top-0 bottom-0 hidden sm:block"
            style={{ width: 1, backgroundColor: 'rgba(196,160,68,0.3)' }}
          />

          <div className="flex flex-col gap-0">
            {itinerary.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 sm:gap-0 py-5"
                style={{ borderBottom: index < itinerary.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                {/* Time */}
                <div
                  className="sm:w-24 sm:pr-6 shrink-0 text-right"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.05em',
                    paddingTop: '2px',
                    minWidth: '5rem',
                  }}
                >
                  {item.time}
                </div>

                {/* Dot */}
                <div className="relative hidden sm:flex items-center justify-center" style={{ width: 0 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-gold)',
                      marginLeft: -4,
                      marginTop: 2,
                      boxShadow: '0 0 0 3px rgba(196,160,68,0.2)',
                    }}
                  />
                </div>

                {/* Event name */}
                <div className="sm:pl-8 flex-1">
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: 'var(--color-ivory)',
                    }}
                  >
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
