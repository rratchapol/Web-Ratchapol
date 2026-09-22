'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, X, ZoomIn } from 'lucide-react';

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
};

export function ProjectVisualGallery({ projectTitle, disclosure, note, slots }: ProjectVisualGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const previewSlots = slots.slice(0, 3);
  const mediaSlots = slots.filter((slot) => slot.src);
  const activeSlot = activeIndex === null ? null : mediaSlots[activeIndex];
  const hiddenCount = slots.length - previewSlots.length;
  const singleSlot = mediaSlots[0];
  const isSingleVisual = mediaSlots.length === 1;

  useEffect(() => {
    if (activeIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => index === null ? null : (index - 1 + mediaSlots.length) % mediaSlots.length);
      if (event.key === 'ArrowRight') setActiveIndex((index) => index === null ? null : (index + 1) % mediaSlots.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, mediaSlots.length]);

  const openSlot = (slot: GallerySlot) => {
    const index = mediaSlots.indexOf(slot);
    if (index >= 0) setActiveIndex(index);
  };

  const move = (direction: -1 | 1) => {
    setActiveIndex((index) => index === null ? null : (index + direction + mediaSlots.length) % mediaSlots.length);
  };

  return (
    <>
    <section className={`detail-visual-record detail-visual-record-${disclosure}${isSingleVisual ? ' detail-visual-record-single' : ''}`} aria-labelledby="visual-record-title">
      <div className="detail-visual-heading">
        <p className="eyebrow">VISUAL EVIDENCE</p>
        <div><h2 id="visual-record-title">What can be shown.</h2><p>{note}</p></div>
        <span className="detail-disclosure">{disclosure === 'limited' ? 'LIMITED VISUALS' : 'PUBLIC-READY'}</span>
      </div>
      {isSingleVisual && singleSlot ? <div className="detail-single-media">
        <div className={`detail-single-image is-fit-${singleSlot.fit ?? 'cover'}`}>
          <div className="detail-media-frame">
            <button className="detail-media-slot-button" type="button" onClick={() => openSlot(singleSlot)} aria-label={`View ${singleSlot.title} in full`}>
              <img src={singleSlot.src} alt={`${projectTitle} — ${singleSlot.title}`} />
              <span className="detail-media-open"><ZoomIn size={15} /> View full image</span>
            </button>
          </div>
        </div>
        <aside className="detail-single-summary">
          <span>01 / APPROVED SCREEN</span>
          <h3>{singleSlot.title}</h3>
          <p>{singleSlot.caption}</p>
          <div><b>CONFIDENTIAL BY DESIGN</b><small>Additional product surfaces are intentionally withheld from this public record.</small></div>
        </aside>
      </div> : <div className="detail-media-slots">
        {previewSlots.map((slot, index) => <figure className={`detail-media-slot${index === 0 ? ' detail-media-slot-primary' : ''} is-${slot.state}${slot.src ? ' has-media' : ''} is-fit-${slot.fit ?? 'cover'}`} key={slot.title}>
          <div className="detail-media-frame">
            {slot.src ? <button className="detail-media-slot-button" type="button" onClick={() => openSlot(slot)} aria-label={`View ${slot.title} in full`}>
              <img src={slot.src} alt={`${projectTitle} — ${slot.title}`} />
              <span className="detail-media-open"><ZoomIn size={15} /> View full image</span>
              {index === previewSlots.length - 1 && hiddenCount > 0 ? <span className="detail-media-more">+{hiddenCount} MORE</span> : null}
            </button> : <div className="detail-media-placeholder" aria-hidden="true">
              <span className="detail-media-index">0{index + 1}</span>
              <div className="detail-media-bars"><i /><i /><i /></div>
              <b>{slot.state === 'restricted' ? 'SELECTED / REDACTED' : 'VISUAL SLOT'}</b>
              <small>{slot.state === 'restricted' ? 'Approved excerpt only' : 'Ready for an approved capture'}</small>
            </div>}
          </div>
          <figcaption><strong>{slot.title}</strong><span>{slot.caption}</span></figcaption>
        </figure>)}
      </div>}

    </section>
    {activeSlot ? createPortal(<div className="detail-gallery-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
        <section className="detail-gallery-dialog" role="dialog" aria-modal="true" aria-label={`${projectTitle} image gallery`}>
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
