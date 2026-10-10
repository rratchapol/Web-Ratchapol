import { Code2, LockKeyhole } from 'lucide-react';
import { projectVisualRecords } from './projects';

export function ProjectPreview({ slug, title }: { slug: string; title: string }) {
  if (slug === 'thai-address-select') {
    return (
      <div className="project-card-preview project-package-preview">
        <div><Code2 size={22} aria-hidden="true" /><small>npm package</small></div>
        <code><span>npm install</span><br /><b>thai-address-select</b></code>
        <p>Province → District → Subdistrict</p>
      </div>
    );
  }
  const image = projectVisualRecords[slug]?.slots.find((slot) => slot.src);
  if (!image?.src) return (
    <div className="project-card-preview project-private-preview">
      <LockKeyhole size={28} strokeWidth={1.5} aria-hidden="true" />
      <strong>Private interface</strong>
      <span>Explore the approach and contribution.</span>
    </div>
  );

  return (
    <div className="project-card-preview">
      <img src={image.src} alt={`${title} — ${image.title}`} loading="lazy" decoding="async" />
    </div>
  );
}
