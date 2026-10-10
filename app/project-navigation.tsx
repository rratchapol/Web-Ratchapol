import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ProjectNavigation({ archive = false }: { archive?: boolean }) {
  return (
    <nav className="project-navigation" aria-label="Portfolio navigation">
      <Link className="project-brand" href="/"><span>RR</span><b>Ratchapol Rujiwatch</b></Link>
      <div>
        <Link href="/projects" aria-current={archive ? 'page' : undefined}>All projects</Link>
        <Link href="/#contact">Contact <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
    </nav>
  );
}
