import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProjectPreview } from './project-preview';

type ProjectCardProps = {
  project: { slug: string; title: string; category: string; desc: string; tags: readonly string[] };
  reveal?: boolean;
};

const projectTypes: Record<string, string> = {
  'nci-crm': 'Internal CRM',
  'trr-admin-system': 'Operations platform',
  'sos-wasty': 'CRM & LINE integration',
  cmdf: 'Startup directory',
  'nfi-classwin': 'Learning platform',
  'thai-address-select': 'Open-source package',
  'pet-community-thailand': 'Community platform',
  'tradingview-line-alert-bot': 'Alert automation',
  'qa-mcp': 'AI QA automation',
  'kmitl-xchange': 'Student marketplace',
};

export function ProjectCard({ project, reveal = false }: ProjectCardProps) {
  return (
    <article className={`project-card-item${reveal ? ' reveal' : ''}`}>
      <Link className="project-card" href={`/work/${project.slug}`} aria-labelledby={`project-${project.slug}`}>
        <ProjectPreview slug={project.slug} title={project.title} />
        <div className="project-card-body">
          <p className="project-card-kind">{projectTypes[project.slug] ?? project.category}</p>
          <h3 id={`project-${project.slug}`}>{project.title}</h3>
          <p className="project-card-description">{project.desc}</p>
          <ul className="project-card-stack" aria-label="Technologies">
            {project.tags.slice(0, 3).map(tag => <li key={tag}>{tag}</li>)}
          </ul>
          <div className="project-card-footer">
            <span>View project</span>
            <span className="project-card-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
          </div>
        </div>
      </Link>
    </article>
  );
}
