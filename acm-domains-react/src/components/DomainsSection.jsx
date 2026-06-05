/**
 * DomainsSection — "Card Dealer" scroll animation
 *
 * Layout (desktop):
 *  ┌─────────────────────────────────────────────────────┐
 *  │  HEADER (top ~22% of vh)                            │
 *  ├──────────────────────────────┬──────────────────────┤
 *  │  4-col grid (cards land here)│  DECK (right panel)  │
 *  │  ~72% wide                   │  ~22% wide, centred  │
 *  └──────────────────────────────┴──────────────────────┘
 *
 * Animation:
 *  Each card starts in the right-panel deck (stacked/fanned).
 *  On scroll → card rises to a spotlight position (right panel, 
 *  upper half), user reads it, then it flies into its grid slot.
 *  Reverse on scroll-up. Section is pinned for the full sequence.
 */

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOMAINS } from '../data/domains';

gsap.registerPlugin(ScrollTrigger);

/* ─── Card faces ──────────────────────────────────────────────── */
function CardFront({ domain }) {
  const { rank, suit, color, glow, shortTitle } = domain;
  return (
    <div
      className="absolute inset-0 rounded-[16px] flex flex-col justify-between overflow-hidden"
      style={{
        padding: 'clamp(10px,1.2vw,18px)',
        background: 'linear-gradient(155deg,#1e1e1e 0%,#111 100%)',
        border: `1.5px solid ${color}40`,
        boxShadow: `0 8px 28px #00000099`,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {/* inner frame */}
      <div className="absolute inset-[8px] rounded-[10px] pointer-events-none"
           style={{ border: `1px solid ${color}18` }} />

      {/* top-left corner */}
      <div className="flex flex-col items-start leading-none z-10" style={{ gap: 1 }}>
        <span className="font-black leading-none" style={{ color, fontSize:'clamp(14px,1.5vw,20px)' }}>{rank}</span>
        <span className="leading-none" style={{ color, fontSize:'clamp(12px,1.2vw,16px)' }}>{suit}</span>
      </div>

      {/* centre */}
      <div className="flex-1 flex flex-col items-center justify-center z-10" style={{ gap: 8 }}>
        <span className="leading-none select-none" style={{
          fontSize: 'clamp(40px,5vw,68px)', color,
          filter: `drop-shadow(0 0 18px ${glow})`
        }}>{suit}</span>
        <span className="font-extrabold uppercase text-center leading-tight text-[#FEFCD9]"
              style={{ fontSize:'clamp(11px,1.1vw,15px)', whiteSpace:'pre-line',
                textShadow:`0 0 16px ${color}55`, letterSpacing:'0.04em' }}>
          {shortTitle}
        </span>
      </div>

      {/* bottom-right corner (rotated) */}
      <div className="flex flex-col items-end leading-none z-10 self-end rotate-180" style={{ gap: 1 }}>
        <span className="font-black leading-none" style={{ color, fontSize:'clamp(14px,1.5vw,20px)' }}>{rank}</span>
        <span className="leading-none" style={{ color, fontSize:'clamp(12px,1.2vw,16px)' }}>{suit}</span>
      </div>
    </div>
  );
}

function CardBack({ domain }) {
  const { suit, color, glow, title, description, tags } = domain;
  return (
    <div
      className="absolute inset-0 rounded-[16px] flex flex-col overflow-hidden"
      style={{
        padding: 'clamp(10px,1.2vw,18px)',
        gap: 10,
        background: 'linear-gradient(155deg,#1e1e1e 0%,#111 100%)',
        border: `1.5px solid ${color}65`,
        boxShadow: `0 20px 55px ${glow}, inset 0 1px 0 #ffffff08`,
        transform: 'rotateY(180deg)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <div className="absolute inset-[8px] rounded-[10px] pointer-events-none"
           style={{ border:`1px solid ${color}22` }} />

      <div className="font-extrabold uppercase tracking-widest text-center flex-shrink-0 z-10 pb-2"
           style={{ color, fontSize:'clamp(10px,1vw,13px)',
             textShadow:`0 0 12px ${glow}`,
             borderBottom:`1px solid ${color}30` }}>
        {title}
      </div>
      <p className="flex-1 leading-relaxed z-10" style={{ color:'#9999aa', fontSize:'clamp(9px,0.85vw,11px)' }}>
        {description}
      </p>
      <div className="flex flex-wrap z-10" style={{ gap: 5 }}>
        {tags.map(t => (
          <span key={t} className="rounded font-mono uppercase"
                style={{ fontSize:8, padding:'3px 7px',
                  border:`1px solid ${color}40`, background:`${color}12`, color }}>
            {t}
          </span>
        ))}
      </div>
      <div className="text-center flex-shrink-0 z-10" style={{ color, fontSize:16, opacity:0.25 }}>{suit}</div>
    </div>
  );
}

/* ─── Single card with hover-tilt + flip ─────────────────────── */
function DomainCard({ domain, domRef }) {
  const wrapRef  = useRef(null);
  const innerRef = useRef(null);

  const onMove = (e) => {
    // tilt disabled — hover flip is CSS-driven, GSAP rotateX/Y would fight it
  };
  const onLeave = () => {
    wrap.current?.classList.remove('kb-flipped');
  };
  const onKeyDown = (e) => {
    if (e.key==='Enter'||e.key===' ') { e.preventDefault(); wrapRef.current?.classList.toggle('kb-flipped'); }
    if (e.key==='Escape') wrapRef.current?.classList.remove('kb-flipped');
  };

  return (
    <div
      ref={(n) => { wrapRef.current = n; if (domRef) domRef.current = n; }}
      className="absolute cursor-pointer select-none outline-none"
      tabIndex={0} role="button"
      aria-label={`${domain.title} — hover to flip`}
      style={{ perspective:1200, willChange:'transform' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onFocus={() => innerRef.current?.classList.add('flipped')}
      onBlur={onLeave}
      onKeyDown={onKeyDown}
    >
      <div ref={innerRef} className="card-3d-inner relative w-full h-full"
           style={{ transformStyle:'preserve-3d' }}>
        <CardFront domain={domain} />
        <CardBack  domain={domain} />
      </div>
    </div>
  );
}

/* ─── Main exported section ──────────────────────────────────── */
export default function DomainsSection() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const stageRef   = useRef(null);
  const cardRefs   = useRef(DOMAINS.map(() => ({ current: null })));

  useEffect(() => {
    const section = sectionRef.current;
    const stage   = stageRef.current;
    const header  = headerRef.current;
    const cards   = cardRefs.current.map(r => r.current).filter(Boolean);
    if (!section || !stage || cards.length === 0) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    /* ── MOBILE: stagger fade-in, no pin ─────────────────────── */
    if (isMobile) {
      const ctx = gsap.context(() => {
        const vw  = stage.clientWidth;
        const pad = 14;
        const cols = 2;
        const cw  = (vw - pad * (cols + 1)) / cols;
        const ch  = cw * (7 / 5);

        cards.forEach((card, i) => {
          gsap.set(card, {
            width: cw, height: ch,
            x: pad + (i % cols) * (cw + pad),
            y: pad + Math.floor(i / cols) * (ch + pad),
            opacity: 0, yPercent: 8,
          });
        });

        gsap.set(header, { opacity: 1 });

        ScrollTrigger.create({
          trigger: section, start: 'top 72%',
          onEnter: () => gsap.to(cards, {
            opacity:1, yPercent:0, stagger:0.08, duration:0.6, ease:'power3.out',
          }),
        });
      }, section);
      return () => ctx.revert();
    }

    /* ── DESKTOP ─────────────────────────────────────────────── */
    const ctx = gsap.context(() => {
      const VW  = window.innerWidth;
      const VH  = window.innerHeight;
      const N   = cards.length;         // 8
      const COLS = 4;
      const ROWS = 2;                   // ceil(8/4)

      /* ─── Horizontal split ───────────────────────────────────
         Left zone  = grid (80% of VW)
         Right zone = deck panel (20% of VW, minimum 180px)
      ─────────────────────────────────────────────────────────── */
      const RIGHT_PANEL_W = Math.max(VW * 0.20, 180);
      const LEFT_W        = VW - RIGHT_PANEL_W;

      /* ─── Header height — compact, fixed 22% of VH ─── */
      const HEADER_H = Math.round(VH * 0.22);

      /* ─── Grid: fits inside left zone below the header ─── */
      const GRID_PAD_L = Math.round(VW * 0.06);   // left padding
      const GRID_PAD_R = 20;                        // gap before right panel
      const GRID_GAP   = 14;
      const GRID_TOP   = HEADER_H + 10;
      const GRID_BOT   = VH - 16;                  // 16px from bottom
      const GRID_AVAIL_H = GRID_BOT - GRID_TOP;
      const GRID_AVAIL_W = LEFT_W - GRID_PAD_L - GRID_PAD_R;

      /* Card size: solve height-first, then clamp by width */
      const CH_h = (GRID_AVAIL_H - GRID_GAP * (ROWS - 1)) / ROWS;
      const CH_w = ((GRID_AVAIL_W - GRID_GAP * (COLS - 1)) / COLS) * (7 / 5);
      const CH   = Math.floor(Math.min(CH_h, CH_w));
      const CW   = Math.floor(CH * (5 / 7));

      /* ─── Grid slot absolute positions ─── */
      const gridPos = cards.map((_, i) => ({
        x: GRID_PAD_L + (i % COLS) * (CW + GRID_GAP),
        y: GRID_TOP   + Math.floor(i / COLS) * (CH + GRID_GAP),
        w: CW,
        h: CH,
      }));

      /* ─── Right panel geometry ───────────────────────────────
         Deck lives in the right panel, vertically centred.
         Deck cards are slightly smaller than grid cards.
      ─────────────────────────────────────────────────────────── */
      const PANEL_L  = LEFT_W;                        // x start of right panel
      const PANEL_CX = PANEL_L + RIGHT_PANEL_W / 2;  // centre-x of panel
      const PANEL_CY = VH / 2;                        // centre-y of viewport

      const DECK_W   = Math.min(CW * 0.92, RIGHT_PANEL_W - 20);
      const DECK_H   = DECK_W * (7 / 5);
      const DECK_CY  = PANEL_CY;                      // vertically centred in panel

      const MID = (N - 1) / 2;
      const pilePos = cards.map((_, i) => {
        const delta = i - MID;
        return {
          x:        PANEL_CX - DECK_W / 2 + delta * 2.5,
          y:        DECK_CY  - DECK_H / 2 + delta * 1.5,
          w:        DECK_W,
          h:        DECK_H,
          rotation: delta * 3.5,
          scale:    1 - Math.abs(delta) * 0.01,
          zIndex:   N - i,
        };
      });

      /* ─── Spotlight: right panel, upper third ─── */
      const SPOT_W = DECK_W * 1.1;
      const SPOT_H = SPOT_W * (7 / 5);
      const SPOT_X = PANEL_CX - SPOT_W / 2;
      const SPOT_Y = VH * 0.12;

      /* ─── Initial GSAP state ─── */
      gsap.set(header, { opacity: 0, y: 20 });

      cards.forEach((card, i) => {
        const p = pilePos[i];
        gsap.set(card, {
          x: p.x, y: p.y, width: p.w, height: p.h,
          rotation: p.rotation, scale: p.scale, zIndex: p.zIndex,
          opacity: 1, transformOrigin: 'center center',
        });
      });

      /* ─── Master timeline ─── */
      const tl = gsap.timeline({ paused: true });

      /* Header entrance */
      tl.to(header, { opacity:1, y:0, duration:0.06, ease:'power2.out' }, 0);

      /* Per-card sequence */
      const W_START = 0.07;
      const W_END   = 0.96;
      const PER     = (W_END - W_START) / N;

      cards.forEach((card, i) => {
        const ws  = W_START + i * PER;
        const wm1 = ws  + PER * 0.38;       // spotlight reached
        const wm2 = wm1 + PER * 0.22;       // hold ends, fly starts
        const we  = ws  + PER;

        const g = gridPos[i];

        /* Rise to spotlight */
        tl.to(card, {
          x: SPOT_X, y: SPOT_Y, width: SPOT_W, height: SPOT_H,
          rotation: 0, scale: 1, zIndex: 1000 + i, opacity: 1,
          duration: wm1 - ws, ease: 'power2.out',
        }, ws);

        /* Float hold */
        tl.to(card, { y: SPOT_Y - 7, duration:(wm2-wm1)*0.5, ease:'sine.inOut' }, wm1);
        tl.to(card, { y: SPOT_Y,     duration:(wm2-wm1)*0.5, ease:'sine.inOut' }, wm1+(wm2-wm1)*0.5);

        /* Fly to grid */
        tl.to(card, {
          x: g.x, y: g.y, width: g.w, height: g.h,
          rotation: 0, scale: 1, zIndex: i + 1, opacity: 1,
          duration: we - wm2, ease: 'power3.inOut',
        }, wm2);
      });

      /* ─── ScrollTrigger pin + scrub ─── */
      ScrollTrigger.create({
        trigger: section,
        start:   'top top',
        end:     `+=${VH * 5}`,
        pin:     true,
        scrub:   1.5,
        anticipatePin: 1,
        animation: tl,
        invalidateOnRefresh: true,
        onRefresh() { tl.invalidate(); },
      });

    }, section);

    return () => ctx.revert();
  }, []);

  /* ── JSX ───────────────────────────────────────────────────── */
  return (
    <section
      ref={sectionRef}
      id="domains"
      className="relative w-full"
      style={{ background: '#0a0a0a' }}
    >
      <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="absolute z-20 pointer-events-none"
          style={{ top: '4vh', left: '6vw', right: '22vw' }}
        >
          <p className="font-mono uppercase tracking-[0.22em] text-[#F95F4A] mb-2"
             style={{ fontSize: 10 }}>
            // Technical Ecosystem
          </p>
          <h2
            className="font-black uppercase leading-[0.88] tracking-tighter text-[#FEFCD9]"
            style={{ fontSize: 'clamp(1.6rem, 3.8vw, 3rem)' }}
          >
            Architecting The{' '}
            <span className="text-[#F95F4A]">Core Specials</span>
          </h2>
          <p className="mt-2 leading-relaxed"
             style={{ color:'#666677', fontSize:'clamp(11px,1vw,13px)', maxWidth: 480 }}>
            Each domain is more than a skillset — it&apos;s a mindset. Build, break, design,
            and communicate — not in silos, but in sync.
          </p>
        </div>

        {/* ── Scroll hint (left edge) ── */}
        <div className="hidden md:flex absolute z-20 flex-col items-center gap-2 pointer-events-none"
             style={{ left: '2vw', top: '50%', transform: 'translateY(-50%)' }}>
          <span className="font-mono text-[8px] tracking-[0.3em] uppercase opacity-20 text-[#FEFCD9]"
                style={{ writingMode:'vertical-rl', transform:'rotate(180deg)' }}>
            SCROLL TO DEAL
          </span>
          <div className="w-px h-14 bg-white/10" />
        </div>

        {/* ── Right panel divider ── */}
        <div className="hidden md:block absolute z-10 top-[4vh] bottom-[4vh] pointer-events-none"
             style={{ right: '20vw', width: 1, background: 'rgba(255,255,255,0.06)' }} />

        {/* ── Right panel label ── */}
        <div className="hidden md:flex absolute z-20 flex-col items-center gap-2 pointer-events-none"
             style={{ right: '2vw', top: '50%', transform: 'translateY(-50%)' }}>
          <div className="w-px h-14 bg-white/10" />
          <span className="font-mono text-[8px] tracking-[0.3em] uppercase opacity-20 text-[#FEFCD9]"
                style={{ writingMode:'vertical-rl' }}>
            DECK
          </span>
        </div>

        {/* ── Stage: all cards live here ── */}
        <div
          ref={stageRef}
          className="absolute inset-0"
          style={{ zIndex: 10 }}
        >
          {DOMAINS.map((domain, i) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              domRef={cardRefs.current[i]}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
