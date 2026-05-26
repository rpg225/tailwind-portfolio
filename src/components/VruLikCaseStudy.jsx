import { useEffect, useRef, useState } from "react";

const VruLikCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const sectionStyles = (delay) => `
    transition-all duration-1000 ${delay}
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `;

  return (
    <section ref={sectionRef} className="bg-slate-900 border-t border-slate-800 py-28">
      <div className="mx-auto max-w-5xl px-6 space-y-24">

        {/* HERO */}
        <div className={sectionStyles("delay-0") + " text-center"}>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            VruLik Ink
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
            Designed and developed a brand-driven website for a tattoo studio focused on bold, minimal, and intentional design.
          </p>
        </div>

        {/* OVERVIEW */}
        <div className={sectionStyles("delay-150") + " grid md:grid-cols-2 gap-12 items-center"}>
          <img
            src="/assets/vrulik-hero.png"
            alt="Vrulik Ink website"
            className="rounded-xl ring-1 ring-slate-800 shadow-xl"
          />
          <div>
            <h2 className="text-2xl font-semibold text-white">Project Overview</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              VruLik Ink is a tattoo studio website designed to reflect the atmosphere of tattoo culture—bold, minimal, and intentional. The goal was to create a digital experience that reflects the studio's vibe while keeping the artwork as the primary focus.
            </p>
          </div>
        </div>

        {/* PROBLEM & TARGET USERS */}
        <div className={sectionStyles("delay-300") + " grid md:grid-cols-2 gap-12"}>
          <div>
            <h2 className="text-2xl font-semibold text-white">The Problem</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Many tattoo studio websites rely on outdated, template-based layouts or overly busy designs that distract from the artwork. This causes the brand identity to get lost in a space that relies heavily on visual trust.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Target Users</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Visually driven users looking for inspiration or an artist who care deeply about style and vibe. For these users, the first impression and the "vibe" of the site matter more than anything.
            </p>
          </div>
        </div>

        {/* DESIGN APPROACH */}
        <div className={sectionStyles("delay-500") + " space-y-8"}>
          <h2 className="text-2xl font-semibold text-white">Design Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Atmosphere-first</h3>
              <p className="text-sm text-slate-400">Dark backgrounds and a minimal color palette create an immersive, bold feeling similar to stepping into the studio.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Artwork-led UI</h3>
              <p className="text-sm text-slate-400">Avoided clutter and unnecessary text to ensure the UI supports the artwork rather than competing with it.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Typography Identity</h3>
              <p className="text-sm text-slate-400">Used a clean, expressive hierarchy with a spacious layout to give the site a confident, editorial feel.</p>
            </div>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className={sectionStyles("delay-700") + " grid md:grid-cols-2 gap-12 items-center"}>
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-white">Key Features</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="text-white font-bold">/</span>
                <span><strong>Portfolio Focus:</strong> Large imagery with minimal framing and a clean grid structure.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">/</span>
                <span><strong>Minimal Navigation:</strong> Simple and direct to reduce friction and keep focus on content.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">/</span>
                <span><strong>Subtle Motion:</strong> Used Framer Motion to enhance hierarchy without distracting from the work.</span>
              </li>
            </ul>
          </div>
          <img
            src="/assets/vrulik-ink-figma.png"
            alt="Vrulik Ink design features"
            className="rounded-xl ring-1 ring-slate-800 shadow-xl order-1 md:order-2"
          />
        </div>

        {/* CHALLENGES & OUTCOME */}
        <div className={sectionStyles("delay-900") + " grid md:grid-cols-2 gap-12"}>
          <div>
            <h2 className="text-2xl font-semibold text-white">Challenges</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              The main challenge was balancing minimalism with personality—ensuring the site didn't feel empty while avoiding an over-designed, messy look. I focused on restraint, letting the artwork carry the personality.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Outcome</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              A strong, brand-aligned website that feels modern and confident. The immersive experience maintains a clear focus on identity while providing a scalable front-end structure.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VruLikCaseStudy;