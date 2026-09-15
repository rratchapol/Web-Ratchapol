import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ratchapol Rujiwatch — Full-stack Developer',
  description: 'Full-stack developer portfolio — building responsive, API-integrated web applications with Angular, React, Next.js, Laravel and NestJS.',
  openGraph: {
    title: 'Ratchapol Rujiwatch — Full-stack Developer',
    description: 'Full-stack developer portfolio — Angular · React · Next.js · Laravel · NestJS',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
