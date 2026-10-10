'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, Code2, LockKeyhole, X, ZoomIn } from 'lucide-react';

type GallerySlot = {
  title: string;
  caption: string;
  state: 'reserved' | 'restricted';
  src?: string;
  fit?: 'cover' | 'contain';
};

type ProjectVisualGalleryProps = {
  projectTitle: string;
  disclosure: 'public-ready' | 'limited';
  note: string;
  slots: readonly GallerySlot[];
  packageName?: string;
};

export function ProjectVisualGallery({ projectTitle, disclosure, note, slots, packageName }: ProjectVisualGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const isOpen = activeIndex !== null;
  const mediaSlots = slots.filter((slot) => slot.src);
  const previewSlots = mediaSlots.slice(0, 3);
  const activeSlot = activeIndex === null ? null : mediaSlots[activeIndex];
  const hiddenCount = mediaSlots.length - previewSlots.length;
  const singleSlot = mediaSlots[0];
  const isSingleVisual = mediaSlots.length === 1;

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    const background = Array.from(document.body.children).filter((element): element is HTMLElement => element instanceof HTMLElement && !element.contains(dialog));
    const originalInert = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });
    const focusable = () => Array.from(dialog.querySelectorAll<HTMLButtonElement>('button:not([disabled])'));
    focusable()[0]?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setActiveIndex(null); }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const direction = event.key === 'ArrowLeft' ? -1 : 1;
        setActiveIndex((index) => index === null ? null : (index + direction + mediaSlots.length) % mediaSlots.length);
      }
      if (event.key === 'Tab') {
        const buttons = focusable();
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (!dialog.contains(document.activeElement) || (event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
          event.preventDefault();
          (event.shiftKey ? last : first)?.focus();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      background.forEach((element, index) => { element.inert = originalInert[index]; });
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [isOpen, mediaSlots.length]);

  const openSlot = (slot: GallerySlot) => {
    const index = mediaSlots.indexOf(slot);
    if (index >= 0) setActiveIndex(index);
  };

  const move = (direction: -1 | 1) => {
    setActiveIndex((index) => index === null ? null : (index + direction + mediaSlots.length) % mediaSlots.length);
  };

  if (mediaSlots.length === 0) {
    return (
      <section className="project-visual-note" aria-labelledby="visual-record-title">
        {packageName ? <Code2 size={28} aria-hidden="true" /> : <LockKeyhole size={28} aria-hidden="true" />}
        <div>
          <p className="eyebrow">{packageName ? 'OPEN-SOURCE PACKAGE' : 'VISUAL DISCLOSURE'}</p>
          <h2 id="visual-record-title">{packageName ? 'One connected address flow.' : 'The interface stays private.'}</h2>
          <p>{packageName ? 'Linked Thai address fields, packaged for reuse in web forms.' : 'Public screenshots are not included for this project. The context, responsibilities and workflow are documented below without exposing internal screens.'}</p>
          {packageName ? <><code className="project-install-command">npm install {packageName}</code><ol className="project-package-flow"><li>Province</li><li>District</li><li>Subdistrict</li></ol></> : null}
        </div>
      </section>
    );
  }

  return (
    <>
    <section className={`detail-visual-record detail-visual-record-${disclosure}${isSingleVisual ? ' detail-visual-record-single' : ''}`} aria-labelledby="visual-record-title">
      <div className="detail-visual-heading">
        <p className="eyebrow">PROJECT GALLERY</p>
        <div><h2 id="visual-record-title">{disclosure === 'limited' ? 'Selected project views.' : 'Inside the project.'}</h2><p>{note}</p></div>
        <span className="detail-disclosure">{mediaSlots.length} {mediaSlots.length === 1 ? 'image' : 'images'}{disclosure === 'limited' ? ' · Limited preview' : ''}</span>
      </div>
      {isSingleVisual && singleSlot ? <div className="detail-single-media">
        <div className={`detail-single-image is-fit-${singleSlot.fit ?? 'cover'}`}>
          <div className="detail-media-frame">
            <button className="detail-media-slot-button" type="button" onClick={() => openSlot(singleSlot)} aria-label={`View ${singleSlot.title} in full`}>
              <img src={singleSlot.src} alt={`${projectTitle} — ${singleSlot.title}`} loading="lazy" />
              <span className="detail-media-open"><ZoomIn size={15} /> View full image</span>
            </button>
          </div>
        </div>
        <aside className="detail-single-summary">
          <span>PROJECT PREVIEW</span>
          <h3>{singleSlot.title}</h3>
          <p>{singleSlot.caption}</p>
          {disclosure === 'limited' ? <div><b><LockKeyhole size={14} aria-hidden="true" /> Limited public preview</b><small>Additional product screens are intentionally kept private.</small></div> : null}
        </aside>
      </div> : <div className="detail-media-slots">
        {previewSlots.map((slot, index) => <figure className={`detail-media-slot${index === 0 ? ' detail-media-slot-primary' : ''} is-${slot.state}${slot.src ? ' has-media' : ''} is-fit-${slot.fit ?? 'cover'}`} key={slot.title}>
          <div className="detail-media-frame">
            <button className="detail-media-slot-button" type="button" onClick={() => openSlot(slot)} aria-label={`View ${slot.title} in full`}>
              <img src={slot.src} alt={`${projectTitle} — ${slot.title}`} loading="lazy" />
              <span className="detail-media-open"><ZoomIn size={15} /> View full image</span>
              {index === previewSlots.length - 1 && hiddenCount > 0 ? <span className="detail-media-more">+{hiddenCount} MORE</span> : null}
            </button>
          </div>
          <figcaption><strong>{slot.title}</strong><span>{slot.caption}</span></figcaption>
        </figure>)}
      </div>}

    </section>
    {activeSlot ? createPortal(<div className="detail-gallery-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
        <section ref={dialogRef} className="detail-gallery-dialog" role="dialog" aria-modal="true" aria-label={`${projectTitle} image gallery`}>
          <div className="detail-gallery-toolbar"><span>IMAGE {String((activeIndex ?? 0) + 1).padStart(2, '0')} / {String(mediaSlots.length).padStart(2, '0')}</span><button type="button" onClick={() => setActiveIndex(null)} aria-label="Close image gallery"><X size={18} /> Close</button></div>
          <div className="detail-gallery-stage">
            {mediaSlots.length > 1 ? <button className="detail-gallery-nav detail-gallery-prev" type="button" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft size={19} /></button> : null}
            <img src={activeSlot.src} alt={`${projectTitle} — ${activeSlot.title}`} />
            {mediaSlots.length > 1 ? <button className="detail-gallery-nav detail-gallery-next" type="button" onClick={() => move(1)} aria-label="Next image"><ArrowRight size={19} /></button> : null}
          </div>
          <div className="detail-gallery-caption"><div><strong>{activeSlot.title}</strong><span>{activeSlot.caption}</span></div>{mediaSlots.length > 1 ? <span>Use ← → to browse</span> : null}</div>
        </section>
      </div>, document.body) : null}
    </>
  );
}
