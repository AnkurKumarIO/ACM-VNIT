/**
 * DomainsSection — Responsive Playing Card Grid
 *
 * Grid breakpoints:
 *   Mobile  (<640px):  1 column
 *   Tablet  (640px+):  2 columns
 *   Desktop (1024px+): 3 columns
 *   Wide    (1280px+): 4 columns
 *
 * Cards:
 *   - Natural height (no fixed px heights)
 *   - Hover to flip (front → back)
 *   - Keyboard accessible (Enter/Space to toggle, Escape to reset)
 *   - Scroll-triggered stagger entrance via IntersectionObserver
 */

import { useRef, useEffect, useCallback } from 'react';
import { DOMAINS } from '../data/domains';

/* ─── Card Front ─────────────────────────────────────────────── */
function CardFront({ domain }) {
  const { rank, suit, color, glow, shortTitle } = domain;
  return (
    <div
      className="card-face card-face-front rounded-[16px] flex flex-col justify-between"
      style={{
        padding: 'clamp(12px, 1.4vw, 20px)',
        background: 'linear-gradient(155deg, #1e1e1e 0%, #111 100%)',
        border: `1.5px solid ${color}40`,
        boxShadow: '0 8px 28px #00000099',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {/* Inner decorative frame */}
      <div
        className="absolute inset-[8px] rounded-[10px] pointer-events-none"
        style={{ border: `1px solid ${color}18` }}
      />

      {/* Top-left rank + suit */}
      <div className="flex flex-col items-start leading-none z-10" style={{ gap: 2 }}>
        <span
          className="font-black leading-none"
          style={{ color, fontSize: 'clamp(15px, 1.6vw, 22px)' }}
        >
          {rank}
        </span>
        <span
          className="leading-none"
          style={{ color, fontSize: 'clamp(13px, 1.3vw, 18px)' }}
        >
          {suit}
        </span>
      </div>

      {/* Centre: large suit icon + short title */}
      <div
        className="flex-1 flex flex-col items-center justify-center z-10"
        style={{ gap: 10, paddingBlock: '8px' }}
      >
        <span
          className="leading-none select-none"
          style={{
            fontSize: 'clamp(44px, 6vw, 72px)',
            color,
            filter: `drop-shadow(0 0 18px ${glow})`,
          }}
        >
          {suit}
        </span>
        <span
          className="font-extrabold uppercase text-center leading-tight text-[#FEFCD9]"
          style={{
            fontSize: 'clamp(12px, 1.15vw, 16px)',
            whiteSpace: 'pre-line',
            textShadow: `0 0 16px ${color}55`,
            letterSpacing: '0.04em',
          }}
        >
          {shortTitle}
        </span>
      </div>

      {/* Bottom-right corner (rotated 180°) */}
      <div
        className="flex flex-col items-end leading-none z-10 self-end rotate-180"
        style={{ gap: 2 }}
      >
        <span
          className="font-black leading-none"
          style={{ color, fontSize: 'clamp(15px, 1.6vw, 22px)' }}
        >
          {rank}
        </span>
        <span
          className="leading-none"
          style={{ color, fontSize: 'clamp(13px, 1.3vw, 18px)' }}
        >
          {suit}
        </span>
      </div>
    </div>
  );
}

/* ─── Card Back ──────────────────────────────────────────────── */
function CardBack({ domain }) {
  const { suit, color, glow, title, description, tags } = domain;
  return (
    <div
      className="card-face card-face-back rounded-[16px] flex flex-col"
      style={{
        padding: 'clamp(12px, 1.4vw, 20px)',
        gap: 'clamp(8px, 1vw, 14px)',
        background: 'linear-gradient(155deg, #1e1e1e 0%, #111 100%)',
        border: `1.5px solid ${color}65`,
        boxShadow: `0 20px 55px ${glow}, inset 0 1px 0 #ffffff08`,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {/* Inner decorative frame */}
      <div
        className="absolute inset-[8px] rounded-[10px] pointer-events-none"
        style={{ border: `1px solid ${color}22` }}
      />

      {/* Title */}
      <div
        className="font-extrabold uppercase tracking-widest text-center flex-shrink-0 z-10 pb-2"
        style={{
          color,
          fontSize: 'clamp(10px, 1.05vw, 14px)',
          textShadow: `0 0 12px ${glow}`,
          borderBottom: `1px solid ${color}30`,
        }}
      >
        {title}
      </div>

      {/* Description — always fully visible, wraps naturally */}
      <p
        className="z-10 leading-relaxed"
        style={{
          color: '#9999aa',
          fontSize: 'clamp(11px, 0.95vw, 13px)',
          margin: 0,
        }}
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap z-10 mt-auto" style={{ gap: 5 }}>
        {tags.map((t) => (
          <span
            key={t}
            className="rounded font-mono uppercase"
            style={{
              fontSize: 'clamp(8px, 0.7vw, 10px)',
              padding: '3px 7px',
              border: `1px solid ${color}40`,
              background: `${color}12`,
              color,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom suit watermark */}
      <div
        className="text-center flex-shrink-0 z-10"
        style={{ color, fontSize: 'clamp(13px, 1.3vw, 18px)', opacity: 0.25 }}
      >
        {suit}
      </div>
    </div>
  );
}

/* ─── Ghost element (drives card height without rendering) ─── */
function CardGhost({ domain }) {
  const { title, description, tags } = domain;
  return (
    <div className="card-ghost" aria-hidden="true">
      {/* mirrors back face layout exactly — same text, invisible */}
      <div style={{ fontSize: 'clamp(10px, 1.05vw, 14px)', paddingBottom: '8px' }}>
        {title}
      </div>
      <p style={{ fontSize: 'clamp(11px, 0.95vw, 13px)', margin: 0 }}>
        {description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto' }}>
        {tags.map((t) => (
          <span key={t} style={{ fontSize: 'clamp(8px, 0.7vw, 10px)', padding: '3px 7px' }}>
            {t}
          </span>
        ))}
      </div>
      <div style={{ fontSize: 'clamp(13px, 1.3vw, 18px)', textAlign: 'center' }}>
        &nbsp;
      </div>
    </div>
  );
}

/* ─── Single domain card ─────────────────────────────────────── */
function DomainCard({ domain }) {
  const wrapRef = useRef(null);

  const flip   = useCallback(() => wrapRef.current?.classList.add('kb-flipped'), []);
  const unflip = useCallback(() => wrapRef.current?.classList.remove('kb-flipped'), []);
  const toggle = useCallback(() => wrapRef.current?.classList.toggle('kb-flipped'), []);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      if (e.key === 'Escape') unflip();
    },
    [toggle, unflip],
  );

  return (
    /*
     * Outer wrapper — perspective + flip trigger.
     * Width is controlled by the parent CSS Grid cell.
     * Height is driven by whichever card face is taller
     * (via CSS Grid stacking in .card-ratio-box).
     */
    <div
      ref={wrapRef}
      className="domain-card-wrapper card-3d-wrapper kb-card cursor-pointer select-none outline-none"
      tabIndex={0}
      role="button"
      aria-label={`${domain.title} — click or press Enter to flip`}
      onMouseEnter={flip}
      onMouseLeave={unflip}
      onFocus={flip}
      onBlur={unflip}
      onKeyDown={onKeyDown}
    >
      {/*
       * card-ratio-box: CSS Grid stacking container.
       * card-inner-abs: the 3D flipping layer.
       * Both faces sit in the same grid cell — the taller one
       * dictates the overall card height.
       */}
      <div className="card-ratio-box">
        {/* Ghost: invisible, drives the container's intrinsic height */}
        <CardGhost domain={domain} />
        {/* Real card: absolutely overlaid, 3D flip */}
        <div className="card-3d-inner card-inner-abs">
          <CardFront domain={domain} />
          <CardBack  domain={domain} />
        </div>
      </div>
    </div>
  );
}

/* ─── Main exported section ──────────────────────────────────── */
export default function DomainsSection() {
  const sectionRef = useRef(null);
  const gridRef    = useRef(null);

  /* Scroll-entrance stagger via IntersectionObserver */
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.domain-card-wrapper');
    if (!cards?.length) return;

    /* Start hidden */
    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(28px)';
      card.style.transition = 'none';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const allCards = [...(gridRef.current?.querySelectorAll('.domain-card-wrapper') ?? [])];
            allCards.forEach((card, i) => {
              setTimeout(() => {
                card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, i * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08 },
    );

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="domains"
      className="relative w-full domains-section"
      style={{ background: '#0a0a0a' }}
    >
      {/* ── Section header ── */}
      <div className="domains-header">
        <p className="font-mono uppercase tracking-[0.22em] text-[#F95F4A] mb-2 text-[10px]">
          // Technical Ecosystem
        </p>
        <h2 className="font-black uppercase leading-[0.9] tracking-tighter text-[#FEFCD9] domains-heading">
          Architecting The{' '}
          <span className="text-[#F95F4A]">Core Specials</span>
        </h2>
        <p className="mt-3 leading-relaxed domains-subtext" style={{ color: '#666677' }}>
          Each domain is more than a skillset — it&apos;s a mindset. Build, break, design,
          and communicate — not in silos, but in sync.
        </p>
      </div>

      {/* ── Responsive card grid ── */}
      <div ref={gridRef} className="domains-grid">
        {DOMAINS.map((domain) => (
          <DomainCard key={domain.id} domain={domain} />
        ))}
      </div>
    </section>
  );
}
