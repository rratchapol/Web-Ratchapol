import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, Layers3 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { academicProjects, independentProjects, projectCaseStudies, projectVisualRecords, projects } from '../../projects';
import { ProjectVisualGallery } from '../project-visual-gallery';
import { ProjectNavigation } from '../../project-navigation';

const detailProjects = [...projects, ...independentProjects, ...academicProjects];

export function generateStaticParams() {
  return detailProjects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = detailProjects.find((item) => item.slug === slug);

  if (!project) notFound();
  const caseStudy = projectCaseStudies[project.slug];
  const visualRecord = projectVisualRecords[project.slug];
  const workType = 'kicker' in project ? project.kicker : 'COMMISSIONED WORK';
  const nextProject = detailProjects[(detailProjects.findIndex((item) => item.slug === slug) + 1) % detailProjects.length];

  return (
    <main className="project-detail">
      <ProjectNavigation />
      <Link className="project-back-link" href="/projects"><ArrowLeft size={15} /> All projects</Link>
      <section className="detail-hero">
        <div className="detail-hero-copy">
          <p className="eyebrow">{workType}</p>
          <h1>{project.title}</h1>
          <p>{project.desc}</p>
          <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {'npmUrl' in project ? <a className="project-resource-link" href={project.npmUrl} target="_blank" rel="noreferrer">View package on npm <ArrowUpRight size={16} /></a> : null}
        </div>
        <div className="detail-facts" aria-label="Project overview">
          <div><span>ROLE</span><strong>{caseStudy.role}</strong></div>
          <div><span>FOCUS</span><strong>{caseStudy.focus}</strong></div>
          <div><span>CONTEXT</span><strong>{project.category}</strong></div>
        </div>
      </section>
      <ProjectVisualGallery projectTitle={project.title} disclosure={visualRecord.disclosure} note={visualRecord.note} slots={visualRecord.slots} packageName={'npmUrl' in project ? project.title : undefined} />
      <section className="detail-case-study">
        <aside className="detail-rail" aria-label="Case study sections">
          <p>CASE STUDY</p>
          <a href="#brief">01 / Brief</a>
          <a href="#ownership">02 / Ownership</a>
          <a href="#workflow">03 / Workflow</a>
          <a href="#delivered">04 / Delivered</a>
        </aside>
        <div className="detail-content">
          <article id="brief" className="detail-introduction">
            <p className="eyebrow">01 / PROJECT BRIEF</p>
            <h2>The problem and context.</h2>
            {caseStudy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>

          <article id="ownership" className="detail-section detail-responsibilities">
            <div className="detail-section-heading"><p className="eyebrow">02 / MY CONTRIBUTION</p><h2>What I owned.</h2></div>
            <ul>{caseStudy.responsibilities.map((item) => <li key={item}><Check size={15} aria-hidden="true" /><span>{item}</span></li>)}</ul>
          </article>

          <article id="workflow" className="detail-section detail-workflow">
            <div className="detail-section-heading"><p className="eyebrow">03 / WORKFLOW</p><h2>How the system moves.</h2></div>
            <div className="detail-steps">
              {caseStudy.workflow.map((step, index) => <div className="detail-step" key={step.title}>
                <span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div>
              </div>)}
            </div>
          </article>

          <article id="delivered" className="detail-section detail-deliverables">
            <div className="detail-section-heading"><p className="eyebrow">04 / DELIVERED</p><h2>Concrete outputs.</h2></div>
            <div className="detail-deliverable-list">{caseStudy.deliverables.map((item) => <div key={item}><Layers3 size={15} aria-hidden="true" /><span>{item}</span></div>)}</div>
          </article>

          <article className="detail-outcome">
            <p className="eyebrow">OUTCOME</p>
            <p>{project.outcome}</p>
          </article>
        </div>
      </section>
      <nav className="detail-pagination" aria-label="More projects">
        <Link href="/projects"><ArrowLeft size={17} /> All projects</Link>
        <Link href={`/work/${nextProject.slug}`}><span>Next project<b>{nextProject.title}</b></span><ArrowUpRight size={20} /></Link>
      </nav>
    </main>
  );
}
