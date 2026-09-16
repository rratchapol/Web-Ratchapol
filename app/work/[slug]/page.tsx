import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, Layers3 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { academicProjects, independentProjects, projectCaseStudies, projectVisualRecords, projects } from '../../projects';

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

  return (
    <main className="project-detail">
      <nav className="detail-nav">
        <Link href="/#work"><ArrowLeft size={15} /> Back to selected work</Link>
        {'npmUrl' in project ? (
          <a href={project.npmUrl} target="_blank" rel="noreferrer">View on npm <ArrowUpRight size={15} /></a>
        ) : (
          <Link href="/#contact">Start a conversation <ArrowUpRight size={15} /></Link>
        )}
      </nav>
      <section className="detail-hero">
        <div className="detail-hero-mark"><span>{project.n}</span><p>{workType}</p></div>
        <div className="detail-hero-copy">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.desc}</p>
          <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <div className="detail-portrait" aria-hidden="true">
          <div className="detail-portrait-sprite"><img src="/images/ratchapol-3d-sprite-sheet-detail.png" alt="" /></div>
          <span>PROJECT COMPANION</span>
        </div>
        <div className="detail-facts" aria-label="Project overview">
          <div><span>ROLE</span><strong>{caseStudy.role}</strong></div>
          <div><span>FOCUS</span><strong>{caseStudy.focus}</strong></div>
          <div><span>DELIVERABLES</span><strong>{caseStudy.deliverables.length} documented outputs</strong></div>
        </div>
      </section>
      <section className={`detail-visual-record detail-visual-record-${visualRecord.disclosure}`} aria-labelledby="visual-record-title">
        <div className="detail-visual-heading">
          <p className="eyebrow">VISUAL EVIDENCE</p>
          <div><h2 id="visual-record-title">What can be shown.</h2><p>{visualRecord.note}</p></div>
          <span className="detail-disclosure">{visualRecord.disclosure === 'limited' ? 'LIMITED VISUALS' : 'PUBLIC-READY'}</span>
        </div>
        <div className="detail-media-slots">
          {visualRecord.slots.map((slot, index) => <figure className={`detail-media-slot${index === 0 ? ' detail-media-slot-primary' : ''} is-${slot.state}${slot.src ? ' has-media' : ''}`} key={slot.title}>
            <div className="detail-media-frame">
              {slot.src ? <img src={slot.src} alt={`${project.title} — ${slot.title}`} /> : <div className="detail-media-placeholder" aria-hidden="true">
                <span className="detail-media-index">0{index + 1}</span>
                <div className="detail-media-bars"><i /><i /><i /></div>
                <b>{slot.state === 'restricted' ? 'SELECTED / REDACTED' : 'VISUAL SLOT'}</b>
                <small>{slot.state === 'restricted' ? 'Approved excerpt only' : 'Ready for an approved capture'}</small>
              </div>}
            </div>
            <figcaption><strong>{slot.title}</strong><span>{slot.caption}</span></figcaption>
          </figure>)}
        </div>
      </section>
      <section className="detail-case-study">
        <aside className="detail-rail" aria-label="Case study sections">
          <p>CASE STUDY</p>
          <span>01 / Brief</span>
          <span>02 / Ownership</span>
          <span>03 / Workflow</span>
          <span>04 / Delivered</span>
        </aside>
        <div className="detail-content">
          <article className="detail-introduction">
            <p className="eyebrow">01 / PROJECT BRIEF</p>
            <h2>The work behind the interface.</h2>
            {caseStudy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>

          <article className="detail-section detail-responsibilities">
            <div className="detail-section-heading"><p className="eyebrow">02 / MY CONTRIBUTION</p><h2>What I owned.</h2></div>
            <ul>{caseStudy.responsibilities.map((item) => <li key={item}><Check size={15} aria-hidden="true" /><span>{item}</span></li>)}</ul>
          </article>

          <article className="detail-section detail-workflow">
            <div className="detail-section-heading"><p className="eyebrow">03 / WORKFLOW</p><h2>How the system moves.</h2></div>
            <div className="detail-steps">
              {caseStudy.workflow.map((step, index) => <div className="detail-step" key={step.title}>
                <span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div>
              </div>)}
            </div>
          </article>

          <article className="detail-section detail-deliverables">
            <div className="detail-section-heading"><p className="eyebrow">04 / DELIVERED</p><h2>Concrete outputs.</h2></div>
            <div className="detail-deliverable-list">{caseStudy.deliverables.map((item) => <div key={item}><Layers3 size={15} aria-hidden="true" /><span>{item}</span></div>)}</div>
          </article>

          <article className="detail-outcome">
            <p className="eyebrow">OUTCOME</p>
            <p>{project.outcome}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
