import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { projects } from '../../projects';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="project-detail">
      <nav className="detail-nav">
        <Link href="/#work"><ArrowLeft size={15} /> Back to selected work</Link>
        <Link href="/#contact">Start a conversation <ArrowUpRight size={15} /></Link>
      </nav>
      <section className="detail-hero">
        <p className="eyebrow">{project.n} / {project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.desc}</p>
        <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </section>
      <section className="detail-body">
        <article><p className="eyebrow">CONTEXT</p><p>{project.context}</p></article>
        <article><p className="eyebrow">CONTRIBUTION</p><p>{project.contribution}</p></article>
        <article className="detail-outcome"><p className="eyebrow">DELIVERED</p><p>{project.outcome}</p></article>
      </section>
    </main>
  );
}
