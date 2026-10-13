import Home from './home';
import { pageMetadata, profileDescription, profileId, profileName, siteUrl, websiteId } from './seo';
import { StructuredData } from './structured-data';

export const metadata = pageMetadata(`${profileName} — Full-stack Developer in Thailand`, profileDescription, '/');

export default function HomePage() {
  return <>
    <StructuredData data={{
      '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': `${siteUrl}/#profile`,
      url: `${siteUrl}/`, name: `${profileName} — Full-stack Developer in Thailand`, inLanguage: 'en',
      isPartOf: { '@id': websiteId }, mainEntity: { '@id': profileId },
    }} />
    <Home />
  </>;
}
