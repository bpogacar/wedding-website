'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { wedding } from '../lib/wedding-data';

const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Details', href: '#details' },
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Travel', href: '#travel' },
  { label: 'Wedding Party', href: '#party' },
  { label: 'Registry', href: '#registry' },
  { label: 'Explore', href: '#attractions' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(249,248,240,0.95)' : 'transparent' }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-script text-2xl text-gold-500" style={{ fontFamily: 'var(--font-script)', color: 'var(--color-gold)', fontSize: '1.8rem' }}>
          {wedding.couple.partner1.name} & {wedding.couple.partner2.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.72rem', letterSpacing: '0.12em' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 shadow-lg py-6 px-6"
          style={{ backgroundColor: 'var(--color-ivory)' }}
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-widest uppercase"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.12em' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
