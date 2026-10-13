import type { Metadata } from 'next';

export const siteUrl = 'https://www.taotech.site';
export const profileName = 'Ratchapol Rujiwatch';
export const profileDescription = 'Full-stack developer based in Bang Pa In, Thailand, building CRM, admin tools and API-connected product workflows.';
export const profileId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

export function pageMetadata(title: string, description: string, path: string, imagePath = '/opengraph-image'): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: `${profileName} — Developer Portfolio`,
      type: 'website',
      locale: 'en_US',
      images: [{ url: imagePath, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [imagePath] },
  };
}
