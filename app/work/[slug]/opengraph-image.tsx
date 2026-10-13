import { notFound } from 'next/navigation';
import { academicProjects, independentProjects, projectCaseStudies, projects } from '../../projects';
import { socialImage } from '../../social-image';

export const alt = 'Project case study — Ratchapol Rujiwatch';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = [...projects, ...independentProjects, ...academicProjects].find((item) => item.slug === slug);
  if (!project) notFound();
  return socialImage(project.title, projectCaseStudies[slug].focus);
}
