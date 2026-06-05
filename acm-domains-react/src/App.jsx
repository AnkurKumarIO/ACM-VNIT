import DomainsSection from './components/DomainsSection';

export default function App() {
  return (
    <main className="bg-bg text-cream min-h-screen">
      {/* ── Spacer so the section isn't at the very top ── */}
      <div
        className="flex items-center justify-center"
        style={{ height: '100vh', background: '#0a0a0a' }}
      >
        <div className="text-center px-8">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#F95F4A] mb-4">
            // ACM VNIT — Domains Preview
          </p>
          <h1
            className="font-black uppercase leading-tight tracking-tight text-[#FEFCD9]"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            We Are<br />
            <span className="text-[#F95F4A]">ACM VNIT</span>
          </h1>
          <p className="mt-6 text-[#666] text-sm font-mono tracking-wide">
            ↓ Scroll to see the card dealer
          </p>
        </div>
      </div>

      {/* ── Domains Section ─────────────────────────── */}
      <DomainsSection />

      {/* ── Trailing spacer ─────────────────────────── */}
      <div
        className="flex items-center justify-center"
        style={{ height: '60vh', background: '#0a0a0a' }}
      >
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#333]">
          // End of domains
        </p>
      </div>
    </main>
  );
}
