import { useEffect, useState, useRef } from 'react';

// Custom hook to observe when an element is in view
function useIntersectionObserver(options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}

// Spark Section: A blinking cursor, high contrast text transition
function SparkSection() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.2, triggerOnce: false });
  const [typedText, setTypedText] = useState('');
  const fullText = "A quiet curiosity. A dream to build something bigger.";

  useEffect(() => {
    if (inView) {
      let index = 0;
      setTypedText('');
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    } else {
      setTypedText('');
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center items-center bg-bg px-6 py-12 relative overflow-hidden"
    >
      <div className="max-w-4xl text-center space-y-6 z-10">
        <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-2 animate-pulse">
          // Scroll Position 01 — The Spark
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-cream uppercase tracking-tight leading-tight mb-8">
          The Spark
        </h2>
        <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center">
          <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-cream max-w-2xl leading-relaxed tracking-wide font-sans">
            {typedText}
            <span className="inline-block w-[3px] h-[1.2em] bg-accent ml-2 animate-blink align-middle"></span>
          </p>
        </div>
      </div>

      {/* Decorative background visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-accent filter blur-[120px] mix-blend-screen animate-pulse" />
      </div>
    </section>
  );
}

// Momentum Section: Dynamic counter increments and hackathon grid
function MomentumSection() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.15, triggerOnce: false });
  const [years, setYears] = useState(0);
  const [events, setEvents] = useState(0);
  const [minds, setMinds] = useState(0);

  useEffect(() => {
    if (inView) {
      // Years counter (15+)
      let startYears = 0;
      const endYears = 15;
      const durationYears = 1000;
      const stepTimeYears = Math.abs(Math.floor(durationYears / endYears));
      const timerYears = setInterval(() => {
        startYears += 1;
        setYears(startYears);
        if (startYears >= endYears) clearInterval(timerYears);
      }, stepTimeYears);

      // Events counter (500+)
      let startEvents = 0;
      const endEvents = 500;
      const durationEvents = 1000;
      const incrementEvents = Math.ceil(endEvents / 50);
      const timerEvents = setInterval(() => {
        startEvents += incrementEvents;
        if (startEvents >= endEvents) {
          setEvents(endEvents);
          clearInterval(timerEvents);
        } else {
          setEvents(startEvents);
        }
      }, 20);

      // Minds Impacted counter (10,000+)
      let startMinds = 0;
      const endMinds = 10000;
      const durationMinds = 1000;
      const incrementMinds = Math.ceil(endMinds / 50);
      const timerMinds = setInterval(() => {
        startMinds += incrementMinds;
        if (startMinds >= endMinds) {
          setMinds(endMinds);
          clearInterval(timerMinds);
        } else {
          setMinds(startMinds);
        }
      }, 20);

      return () => {
        clearInterval(timerYears);
        clearInterval(timerEvents);
        clearInterval(timerMinds);
      };
    } else {
      setYears(0);
      setEvents(0);
      setMinds(0);
    }
  }, [inView]);

  const hackathons = [
    { name: 'Insomnia', year: '2023', theme: 'Unsleeping Innovation', color: '#F95F4A' },
    { name: 'ACM Meet', year: '2024', theme: 'Algorithmic Mastery', color: '#4A9FF5' },
    { name: 'PyDev', year: '2023', theme: 'AI & Data Science', color: '#B44AF5' },
    { name: 'Cyber Hack', year: '2024', theme: 'Securing the Future', color: '#4AE6A0' },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center items-center bg-bg px-6 py-16 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full text-center space-y-12 z-10">
        <div>
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-2">
            // Scroll Position 02 — The Momentum
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-cream uppercase tracking-tight leading-tight">
            The Momentum
          </h2>
          <p className="text-lg md:text-xl text-[#9999aa] max-w-xl mx-auto mt-4 font-mono">
            "15+ Years. 500+ Events. 10,000+ Minds Impacted."
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#111] p-8 rounded-2xl border border-dim/40 hover:border-accent/40 transition-all duration-300">
            <div className="text-4xl md:text-6xl font-black text-accent mb-2">
              {years}+
            </div>
            <div className="text-[#9999aa] font-mono text-sm uppercase tracking-wider">
              Years of Legacy
            </div>
          </div>
          <div className="bg-[#111] p-8 rounded-2xl border border-dim/40 hover:border-accent/40 transition-all duration-300">
            <div className="text-4xl md:text-6xl font-black text-accent mb-2">
              {events}+
            </div>
            <div className="text-[#9999aa] font-mono text-sm uppercase tracking-wider">
              Events Organised
            </div>
          </div>
          <div className="bg-[#111] p-8 rounded-2xl border border-dim/40 hover:border-accent/40 transition-all duration-300">
            <div className="text-4xl md:text-6xl font-black text-accent mb-2">
              {minds.toLocaleString()}+
            </div>
            <div className="text-[#9999aa] font-mono text-sm uppercase tracking-wider">
              Minds Impacted
            </div>
          </div>
        </div>

        {/* Hackathon Grid */}
        <div className="space-y-6 pt-6">
          <h3 className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-[#666]">
            // Dynamic Grid of Past Hackathons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {hackathons.map((h, i) => (
              <div
                key={i}
                className="group relative bg-[#141414] border border-dim/40 p-6 rounded-xl hover:border-accent/60 transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                }}
              >
                {/* Glowing border hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${h.color} 0%, transparent 70%)`,
                  }}
                />
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="font-black text-lg md:text-xl uppercase"
                    style={{ color: h.color }}
                  >
                    {h.name}
                  </span>
                  <span className="font-mono text-xs text-[#666] bg-dim/20 px-2.5 py-1 rounded">
                    {h.year}
                  </span>
                </div>
                <p className="text-sm text-[#9999aa] font-mono">{h.theme}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Blueprint Section: Visual showing "The blueprint that actually ships"
function BlueprintSection() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.15, triggerOnce: false });

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center items-center bg-bg px-6 py-16 relative overflow-hidden"
    >
      <div className="max-w-4xl text-center space-y-10 z-10">
        <div>
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-2">
            // Scroll Position 03 — The Blueprint
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-cream uppercase tracking-tight leading-tight">
            The Blueprint
          </h2>
        </div>
        <p className="text-2xl md:text-4xl font-extrabold text-cream leading-snug tracking-tight max-w-3xl mx-auto">
          "We're not just another tech chapter. We're the blueprint that <span className="text-accent underline decoration-accent/40 decoration-2 underline-offset-8">actually ships</span>."
        </p>

        <p className="text-sm font-mono text-[#666] tracking-wide animate-bounce">
          ↓ Discover our interactive 3D Domain Cards below
        </p>
      </div>

      {/* Futuristic Blueprint background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#F95F4A 1px, transparent 1px), linear-gradient(90deg, #F95F4A 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </section>
  );
}

export default function TypographyTransitions() {
  return (
    <div className="relative z-10 w-full divide-y divide-dim/20">
      <SparkSection />
      <MomentumSection />
      <BlueprintSection />
    </div>
  );
}
