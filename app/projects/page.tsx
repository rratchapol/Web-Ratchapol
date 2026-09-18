import Link from 'next/link';
import { ArrowLeft, ArrowRight, Bot, Cable, Database, Workflow } from 'lucide-react';
import { academicProjects, independentProjects, projectCaseStudies, projects } from '../projects';

export default function ProjectArchive() {
  return (
    <main className="project-archive">
      <nav className="archive-nav">
        <Link href="/#work"><ArrowLeft size={15} /> Back to selected work</Link>
        <Link href="/#contact">Start a conversation <ArrowRight size={15} /></Link>
      </nav>

      <header className="archive-hero">
        <p className="eyebrow">ALL PROJECT RECORDS</p>
        <h1>The complete work archive.</h1>
        <p>Commissioned product systems, independent builds and academic work — each record documents the problem, scope and contribution behind the result.</p>
        <div className="archive-counts" aria-label="Project archive summary">
          <div><span>06</span><b>Professional systems</b></div>
          <div><span>04</span><b>Independent builds</b></div>
          <div><span>01</span><b>Academic project</b></div>
        </div>
      </header>

      <section className="archive-group" aria-labelledby="professional-work-title">
        <div className="work-group-head">
          <p id="professional-work-title">01 / PROFESSIONAL WORK</p>
          <span>COMMISSIONED PRODUCT SYSTEMS</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.slug}>
              <div className="project-top"><span>{project.n}</span><small>PROJECT RECORD</small></div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className={`project-evidence ${project.tone}`}><span>{project.category}</span><b>{project.preview}</b><small>ROLE / {projectCaseStudies[project.slug].role}</small></div>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="case" href={`/work/${project.slug}`}>Read Project Record <ArrowRight size={14} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-group independent-work" aria-labelledby="independent-work-title">
        <div className="work-group-head">
          <p id="independent-work-title">02 / PERSONAL BUILDS &amp; OPEN SOURCE</p>
          <span>EXPERIMENTS THAT BECAME USEFUL TOOLS</span>
        </div>
        <div className="independent-grid">
          {independentProjects.map((project, index) => {
            const ProjectIcon = project.kind === 'qa' ? Cable : project.kind === 'bot' ? Bot : project.kind === 'platform' ? Workflow : Database;
            return (
              <article className="independent-project" key={project.slug}>
                <div className="independent-project-top"><span>{project.kicker} / 0{index + 1}</span><ProjectIcon size={20} strokeWidth={1.8} /></div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="independent-package">{project.packageName}</div>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <Link className="case" href={`/work/${project.slug}`}>Read Case Study <ArrowRight size={14} /></Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="archive-group academic-work" aria-labelledby="academic-work-title">
        <div className="work-group-head">
          <p id="academic-work-title">03 / ACADEMIC TEAM PROJECT</p>
          <span>PRODUCT DESIGN + MULTI-SURFACE DELIVERY</span>
        </div>
        <div className="academic-grid">
          {academicProjects.map((project) => (
            <article className="independent-project academic-project" key={project.slug}>
              <div className="independent-project-top"><span>{project.kicker}</span><Workflow size={20} strokeWidth={1.8} /></div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="independent-package">{project.packageName}</div>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="case" href={`/work/${project.slug}`}>Read Project Record <ArrowRight size={14} /></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
