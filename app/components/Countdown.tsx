'use client';

import { useEffect, useState } from 'react';
import { wedding } from '../lib/wedding-data';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(wedding.event.dateISO + 'T16:00:00');

    const tick = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      className="py-20 px-6 text-center"
      style={{
        background: 'linear-gradient(135deg, var(--color-blush) 0%, var(--color-ivory) 100%)',
      }}
    >
      <p
        className="text-xs tracking-[0.25em] uppercase mb-8"
        style={{ fontFamily: 'var(--font-body)', opacity: 0.7 }}
      >
        Counting Down to the Big Day
      </p>
      <div className="flex justify-center gap-6 sm:gap-12 flex-wrap">
        {units.map(({ label, value }) => (
          <div key={label} className="text-center">
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 300,
                lineHeight: 1,
                color: 'var(--color-charcoal)',
              }}
            >
              {String(value).padStart(2, '0')}
            </p>
            <p
              className="text-xs tracking-widest uppercase mt-2"
              style={{ opacity: 0.5, letterSpacing: '0.2em' }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
