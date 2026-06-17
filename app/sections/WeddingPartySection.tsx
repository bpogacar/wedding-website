import Image from 'next/image';
import { wedding } from '../lib/wedding-data';

export default function WeddingPartySection() {
  const { weddingParty } = wedding;

  // Separate bridesmaids/groomsmen sides
  const bridesSide = weddingParty.filter(
    (m) => m.role.toLowerCase().includes('maid') || m.role.toLowerCase().includes('bridesmaid')
  );
  const groomsSide = weddingParty.filter(
    (m) => m.role.toLowerCase().includes('man') || m.role.toLowerCase().includes('groomsman')
  );
  const others = weddingParty.filter(
    (m) => !bridesSide.includes(m) && !groomsSide.includes(m)
  );

  const renderMember = (member: typeof weddingParty[0], i: number) => (
    <div key={i} className="text-center group">
      <div
        className="relative mx-auto mb-4 overflow-hidden"
        style={{
          width: 160,
          height: 200,
          borderRadius: '80px 80px 0 0',
          backgroundColor: 'var(--color-ivory-dark)',
        }}
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.15rem' }}>
        {member.name}
      </p>
      <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-gold)', opacity: 0.9 }}>
        {member.role}
      </p>
      {member.relation && (
        <p className="text-xs opacity-50 mt-1 italic">{member.relation}</p>
      )}
    </div>
  );

  return (
    <section
      id="party"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-ivory-dark)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Kristy and Ben's</span>
          <h2 className="section-title">Wedding Party</h2>
          <div className="section-divider" />
        </div>

        {/* Bride's side */}
        {bridesSide.length > 0 && (
          <div className="mb-16">
            <p
              className="text-center mb-10 uppercase tracking-widest text-sm"
              style={{ color: 'var(--color-sage-dark)', opacity: 0.7 }}
            >
              {wedding.couple.partner1.name}&apos;s Side
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              {bridesSide.map(renderMember)}
            </div>
          </div>
        )}

        {/* Groom's side */}
        {groomsSide.length > 0 && (
          <div className="mb-16">
            <p
              className="text-center mb-10 uppercase tracking-widest text-sm"
              style={{ color: 'var(--color-sage-dark)', opacity: 0.7 }}
            >
              {wedding.couple.partner2.name}&apos;s Side
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              {groomsSide.map(renderMember)}
            </div>
          </div>
        )}

        {/* Others */}
        {others.length > 0 && (
          <div>
            <div className="flex flex-wrap justify-center gap-10">
              {others.map(renderMember)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
