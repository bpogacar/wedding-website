import Image from 'next/image';
import { wedding } from '../lib/wedding-data';

export default function HeroSection() {
  const { partner1, partner2, heroPhoto } = wedding.couple;
  const { date, time, venue } = wedding.event;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroPhoto}
          alt={`${partner1.name} and ${partner2.name}`}
          fill
          priority
          className="object-cover object-center"
          style={{ filter: 'brightness(0.55)' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 60%, rgba(45,45,45,0.8) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-white" style={{ color: 'var(--color-ivory)' }}>
        {/* Eyebrow */}
        <p
          className="uppercase tracking-[0.3em] text-xs mb-6 opacity-80"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          We&apos;re getting married
        </p>

        {/* Names */}
        <h1
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            color: '#fff',
            lineHeight: 1.1,
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          {partner1.name} & {partner2.name}
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div style={{ width: 60, height: 1, background: 'var(--color-gold)', opacity: 0.8 }} />
          <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem' }}>✦</span>
          <div style={{ width: 60, height: 1, background: 'var(--color-gold)', opacity: 0.8 }} />
        </div>

        {/* Date & venue */}
        <p
          className="text-lg mb-2"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1rem, 3vw, 1.4rem)' }}
        >
          {date} at {time}
        </p>
        <p
          className="opacity-80 tracking-wider"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', letterSpacing: '0.15em' }}
        >
          {venue.name} · {venue.city}, {venue.state}
        </p>

        {/* CTA */}
        <a
          href="#details"
          className="
            inline-block mt-10 px-10 py-3
            text-xs uppercase tracking-[0.2em]
            border
            transition-all duration-300
            text-white
            border-[rgba(255,255,255,0.5)]
            hover:bg-[var(--color-gold)]
            hover:border-[var(--color-gold)]
          "
          style={{
            fontFamily: 'var(--font-body)',
          }}
        >
          View Details
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-60 animate-bounce">
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <rect x="1" y="1" width="18" height="28" rx="9" stroke="white" strokeWidth="1.5"/>
          <rect x="9" y="6" width="2" height="6" rx="1" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
