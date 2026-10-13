import Link from 'next/link';
import { academicProjects, independentProjects, projects } from '../projects';
import { ProjectCard } from '../project-card';
import { ProjectNavigation } from '../project-navigation';
import { pageMetadata, profileName, siteUrl, websiteId } from '../seo';
import { StructuredData } from '../structured-data';

export const metadata = pageMetadata(`Developer Projects & Case Studies — ${profileName}`, 'Explore 10 professional, independent and academic projects, with implementation workflows and Ratchapol’s contributions to CRM, automation and full-stack systems.', '/projects', '/projects/opengraph-image');

const projectGroups = [
  { id: 'professional', title: 'Professional work', description: 'Product systems built with teams, for day-to-day operations.', projects },
  { id: 'independent', title: 'Independent builds', description: 'Personal products, open-source tools and automation experiments.', projects: independentProjects },
  { id: 'academic', title: 'Academic work', description: 'A team project connecting mobile, backend and administration.', projects: academicProjects },
];

export default function ProjectArchive() {
  return (
    <main className="project-archive">
      <StructuredData data={{
        '@context': 'https://schema.org', '@type': 'CollectionPage', url: `${siteUrl}/projects`,
        name: 'Developer Projects & Case Studies', isPartOf: { '@id': websiteId },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [...projects, ...independentProjects, ...academicProjects].map((project, index) => ({
            '@type': 'ListItem', position: index + 1, name: project.title, url: `${siteUrl}/work/${project.slug}`,
          })),
        },
      }} />
      <ProjectNavigation archive />
      <nav className="project-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Projects</span></nav>
      <header className="project-archive-header">
        <p className="eyebrow">WORK RECORD</p>
        <h1>All projects.</h1>
        <p>From internal systems to independent products. Explore the context, my contribution and the work behind each build.</p>
      </header>
      <nav className="project-jump-links" aria-label="Jump to project category">
        {projectGroups.map(group => <a href={`#${group.id}`} key={group.id}>{group.title}<span>{group.projects.length}</span></a>)}
      </nav>
      {projectGroups.map(group => (
        <section className="project-archive-section" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
          <header className="project-group-heading">
            <div><h2 id={`${group.id}-title`}>{group.title}</h2><p>{group.description}</p></div>
            <span>{String(group.projects.length).padStart(2, '0')} {group.projects.length === 1 ? 'project' : 'projects'}</span>
          </header>
          <div className="project-card-grid">
            {group.projects.map(project => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </section>
      ))}
    </main>
  );
}
