import type { Metadata } from 'next';
import './globals.css';
import { wedding } from './lib/wedding-data';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: `${wedding.couple.partner1.name} & ${wedding.couple.partner2.name} | Wedding`,
  description: `Join us as we celebrate the marriage of ${wedding.couple.partner1.fullName} and ${wedding.couple.partner2.fullName} on ${wedding.event.date}.`,
  openGraph: {
    title: `${wedding.couple.partner1.name} & ${wedding.couple.partner2.name} | Wedding`,
    description: `We're getting married! ${wedding.event.date} · ${wedding.event.venue.name}, ${wedding.event.venue.city}, ${wedding.event.venue.state}`,
    images: [wedding.couple.heroPhoto],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
