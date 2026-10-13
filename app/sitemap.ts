import type { MetadataRoute } from 'next';
import { academicProjects, independentProjects, projects } from './projects';
import { siteUrl } from './seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/projects` },
    ...[...projects, ...independentProjects, ...academicProjects].map(({ slug }) => ({ url: `${siteUrl}/work/${slug}` })),
  ];
}
