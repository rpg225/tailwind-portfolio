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

  return (
    <section
      ref={sectionRef}
      className="bg-slate-900 border-t border-slate-800 py-28"
    >
      <div className="mx-auto max-w-5xl px-6 space-y-24">

        {/* HERO */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            VruLik Ink
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Brand-driven UI & front-end case study for a tattoo studio website.
          </p>
        </div>

        {/* OVERVIEW */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="/public/assets/vrulik-hero.png"
            alt="Vrulik Ink website"
            className="rounded-xl ring-1 ring-slate-800 shadow-xl"
          />

          <div>
            <h2 className="text-2xl font-semibold text-white">
              Project Overview
            </h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              VruLik Ink is a tattoo studio website designed to reflect the
              atmosphere of tattoo culture — bold, minimal, and intentional.
              The goal was to create a visual experience that felt confident
              without becoming overwhelming.
            </p>
          </div>
        </div>

        {/* PROBLEM */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold text-white">
            The Problem
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed max-w-3xl">
            Many tattoo studio websites rely on outdated layouts or overly busy
            visuals. The challenge was to create a site that felt modern and
            atmospheric while keeping the focus on the artwork and the studio's
            identity.
          </p>
        </div>

        {/* DESIGN PROCESS */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Design Process
            </h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              I started with visual exploration in Figma — focusing on contrast,
              spacing, and typography. Dark backgrounds, restrained accent
              colors, and strong hierarchy were used to mirror tattoo culture's
              visual language.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Components were designed first, then translated directly into
              reusable front-end components.
            </p>
          </div>

          <img
            src="/public/assets/vrulik-ink-figma.png"
            alt="Vrulik Ink Figma design"
            className="rounded-xl ring-1 ring-slate-800 shadow-xl"
          />
        </div>

        {/* IMPLEMENTATION */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold text-white">
            Front-End Implementation
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed max-w-3xl">
            The final implementation focuses on clean structure, predictable
            spacing, and subtle motion. Animations are minimal and purposeful,
            reinforcing hierarchy without distracting from the artwork.
          </p>
        </div>

        {/* OUTCOME */}
        <div
          className={`transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold text-white">
            Outcome
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed max-w-3xl">
            The result is a brand-aligned website that feels modern, confident,
            and easy to navigate — allowing the studio's work to remain the
            focal point.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VruLikCaseStudy;