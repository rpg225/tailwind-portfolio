import { useEffect, useRef, useState } from "react";

const RajeevCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const sectionStyles = (delay) => `
    transition-all duration-1000 ${delay}
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `;

  return (
    <section ref={sectionRef} className="bg-white border-t border-gray-200 py-28">
      <div className="mx-auto max-w-5xl px-6 space-y-24">
        
        {/* HERO */}
        <div className={sectionStyles("delay-0") + " text-center"}>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2F436E]">
            Rajeev Gupta Law
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Designed and built a conversion-focused legal website to improve trust, clarity, and client acquisition for a modern law firm.
          </p>
        </div>

        {/* PROJECT OVERVIEW */}
        <div className={sectionStyles("delay-150") + " grid md:grid-cols-2 gap-12 items-center"}>
          <img
            src="/assets/rajeev-hero.png"
            alt="Rajeev Gupta law firm website"
            className="rounded-xl ring-1 ring-gray-200 shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#2F436E]">Project Overview</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              I designed and developed a professional online presence for an Ontario-based firm. The primary goal was to create a clean experience that builds immediate trust and guides users toward booking a consultation.
            </p>
          </div>
        </div>

        {/* THE PROBLEM & TARGET USERS */}
        <div className={sectionStyles("delay-300") + " grid md:grid-cols-2 gap-12"}>
          <div>
            <h2 className="text-2xl font-semibold text-[#2F436E]">The Problem</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Most law firm websites suffer from outdated design, poor structure, and weak calls-to-action. These friction points cause stressed users to leave before ever making contact.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#2F436E]">Target Users</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Individuals needing urgent legal help (family, immigration, real estate) who are often stressed and time-sensitive. They require clarity, reassurance, and simple next steps.
            </p>
          </div>
        </div>

        {/* DESIGN APPROACH */}
        <div className={sectionStyles("delay-500") + " space-y-8"}>
          <h2 className="text-2xl font-semibold text-[#2F436E]">Design Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-[#2F436E] mb-2">Trust-First</h3>
              <p className="text-sm text-gray-600">Deep blue tones for authority, gold accents for credibility, and clean spacing to reduce overwhelm.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-[#2F436E] mb-2">Content Hierarchy</h3>
              <p className="text-sm text-gray-600">Every section answers a specific user question, from "Can I trust this lawyer?" to "How do I start?"</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-[#2F436E] mb-2">Conversion Layout</h3>
              <p className="text-sm text-gray-600">Low-friction consultation forms and consistent CTA sections repeated strategically across the site.</p>
            </div>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className={sectionStyles("delay-700") + " grid md:grid-cols-2 gap-12 items-center"}>
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-[#2F436E]">Key Features</h2>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#2F436E] font-bold">01.</span>
                <span><strong>Practice Areas:</strong> Clean card layout for easy scanning of services.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2F436E] font-bold">02.</span>
                <span><strong>FAQ Accordion:</strong> Reduces friction and uncertainty while keeping the UI clean.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#2F436E] font-bold">03.</span>
                <span><strong>Consultation Form:</strong> Minimalist, focused inputs to reduce cognitive load.</span>
              </li>
            </ul>
          </div>
          <img
            src="/assets/rajeev-features.png"
            alt="Feature highlights"
            className="rounded-xl shadow-lg order-1 md:order-2"
          />
        </div>

        {/* CHALLENGES & OUTCOME */}
        <div className={sectionStyles("delay-900") + " grid md:grid-cols-2 gap-12"}>
          <div>
            <h2 className="text-2xl font-semibold text-[#2F436E]">Challenges</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              The main challenge was balancing simplicity with professionalism—ensuring the site felt "clean but not empty." This was solved by building a robust design system in Figma early on.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#2F436E]">Outcome</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              A modern, fully structured legal website that bridges the gap between visual aesthetics and business goals, providing a clear user flow from landing to consultation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RajeevCaseStudy;