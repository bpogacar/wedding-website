import type { Metadata } from 'next';

import RsvpForm from './components/RsvpForm';
import { rsvpConfig } from '../lib/rsvp-config';
import { wedding } from '../lib/wedding-data';

export const metadata: Metadata = {
  title: `RSVP | ${wedding.couple.partner1.name} & ${wedding.couple.partner2.name}`,
  description: `RSVP for the wedding of ${wedding.couple.partner1.fullName} and ${wedding.couple.partner2.fullName}.`,
};

export default function RsvpPage() {
  return (
    <section className="min-h-screen bg-ivory-100 px-6 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <span className="section-subtitle">{rsvpConfig.copy.eyebrow}</span>
          <h1 className="section-title">{rsvpConfig.copy.title}</h1>
          <div className="section-divider" />
          <p className="mx-auto max-w-2xl text-sm leading-7 text-charcoal/80 md:text-base">
            {rsvpConfig.copy.intro}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-gold-600">
            Kindly reply by {rsvpConfig.deadline}
          </p>
        </div>
        <RsvpForm />
      </div>
    </section>
  );
}
