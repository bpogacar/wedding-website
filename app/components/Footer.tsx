import { wedding } from '../lib/wedding-data';

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-ivory)' }}
    >
      <p
        className="font-script mb-2"
        style={{ fontFamily: 'var(--font-script)', fontSize: '2rem', color: 'var(--color-gold)' }}
      >
        {wedding.couple.partner1.name} & {wedding.couple.partner2.name}
      </p>
      <p className="text-xs tracking-widest uppercase opacity-60" style={{ letterSpacing: '0.2em' }}>
        {wedding.event.date} · {wedding.event.venue.name} · {wedding.event.venue.city}, {wedding.event.venue.state}
      </p>
      <p className="text-xs opacity-40 mt-6">
        Made with love ♥
      </p>
    </footer>
  );
}
