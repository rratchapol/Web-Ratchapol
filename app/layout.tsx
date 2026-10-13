import type { Metadata } from 'next';
import { profileDescription, profileId, profileName, siteUrl, websiteId } from './seo';
import { StructuredData } from './structured-data';
import './globals.css';
import './portfolio-refinements.css';
import './project-system.css';
import './tech-stack.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ratchapol Rujiwatch — Full-stack Developer',
  description: profileDescription,
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Person', '@id': profileId, name: profileName, url: `${siteUrl}/`,
              jobTitle: 'Full-stack Developer', description: profileDescription,
              sameAs: ['https://github.com/rratchapol', 'https://www.linkedin.com/in/ratchapol-rujiwach'],
              knowsAbout: ['Angular', 'React', 'Next.js', 'Laravel', 'NestJS', 'REST APIs', 'MCP'],
            },
            {
              '@type': 'WebSite', '@id': websiteId, url: `${siteUrl}/`,
              name: `${profileName} — Developer Portfolio`, inLanguage: 'en', publisher: { '@id': profileId },
            },
          ],
        }} />
        {children}
      </body>
    </html>
  );
}
