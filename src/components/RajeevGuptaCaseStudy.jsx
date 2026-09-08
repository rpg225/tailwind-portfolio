import { useEffect, useRef, useState } from "react";

const RajeevGuptaCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // If the section is already in the viewport on mount (e.g. direct page load),
    // show it immediately without waiting for the observer to fire.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const sectionStyles = (delay) => `
    transition-all duration-1000 ${delay}
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `;

  const loFiWireframes = [
    { src: "/assets/RajeevGupta/home-lofi.png", label: "Home" },
    { src: "/assets/RajeevGupta/about-lofi.png", label: "About" },
    { src: "/assets/RajeevGupta/consultation-page-lofi.png", label: "Book a Consultation" },
    { src: "/assets/RajeevGupta/faqs-lofi.png", label: "FAQs" },
    { src: "/assets/RajeevGupta/contact-lofi.png", label: "Contact" },
    { src: "/assets/RajeevGupta/practice-areas-lofi.png", label: "Practice Areas" },
    { src: "/assets/RajeevGupta/resources-lofi.png", label: "Resources" },
  ];

  const wireframes = [
    { src: "/assets/RajeevGupta/home.png", label: "Home" },
    { src: "/assets/RajeevGupta/about.png", label: "About" },
    { src: "/assets/RajeevGupta/consultation-page.png", label: "Book a Consultation" },
    { src: "/assets/RajeevGupta/faqs.png", label: "FAQs" },
    { src: "/assets/RajeevGupta/contact.png", label: "Contact" },
    { src: "/assets/RajeevGupta/practice-areas.png", label: "Practice Areas" },
    { src: "/assets/RajeevGupta/Resources.png", label: "Resources" },
  ];

  const WireframeGrid = ({ items }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {items.map(({ src, label }) => (
        <div key={label} className="flex flex-col gap-3">
          <div className="rounded-xl overflow-hidden ring-1 ring-slate-700 shadow-lg bg-slate-800">
            <img
              src={src}
              alt={`${label} page wireframe`}
              className="w-full object-top object-cover"
            />
          </div>
          <span className="text-sm text-slate-400 text-center">{label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-slate-900 border-t border-slate-800 py-28">
      <div className="mx-auto max-w-5xl px-6 space-y-24">

        {/* HERO */}
        <div className={sectionStyles("delay-0") + " text-center"}>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Rajeev Gupta Law
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
            Designed and developed a professional law firm website focused on building trust and making information easy to find. The design combines a polished, sophisticated look with a clear and straightforward user experience.
          </p>
        </div>

        {/* OVERVIEW */}
        <div className={sectionStyles("delay-150") + " grid md:grid-cols-2 gap-12 items-center"}>
          <img
            src="/assets/rajeev-gupta-home.png"
            alt="Rajeev Gupta Law website"
            className="rounded-xl ring-1 ring-slate-800 shadow-xl"
          />
          <div>
            <h2 className="text-2xl font-semibold text-white">Project Overview</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Rajeev Gupta Law is a professional law firm website designed to establish credibility and facilitate client engagement. The goal was to create a digital experience that reflects expertise and professionalism while guiding potential clients toward consultation and service inquiry.
            </p>
          </div>
        </div>

        {/* PROBLEM & TARGET USERS */}
        <div className={sectionStyles("delay-300") + " grid md:grid-cols-2 gap-12"}>
          <div>
            <h2 className="text-2xl font-semibold text-white">The Problem</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Many law firm websites feel dated, overwhelming, or overly formal, making it difficult for potential clients to understand services or take action. The challenge is balancing professionalism with accessibility, ensuring information is clear without feeling cold or corporate.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Target Users</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Individuals seeking legal counsel who value professionalism, transparency, and ease of navigation. For these users, trust, clarity of services, and a clear path to consultation matter most.
            </p>
          </div>
        </div>

        {/* DESIGN APPROACH */}
        <div className={sectionStyles("delay-500") + " space-y-8"}>
          <h2 className="text-2xl font-semibold text-white">Design Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Trust-first Design</h3>
              <p className="text-sm text-slate-400">Clean typography, structured layout, and professional imagery establish credibility and confidence from the first interaction.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Conversion-focused UI</h3>
              <p className="text-sm text-slate-400">Clear hierarchy and strategically placed CTAs guide users toward consultation requests and service inquiries without aggressive tactics.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Information Clarity</h3>
              <p className="text-sm text-slate-400">Services, practice areas, and expertise are presented with visual and textual clarity to reduce friction and build confidence.</p>
            </div>
          </div>
        </div>

        {/* LO-FI WIREFRAMES */}
        <div className={sectionStyles("delay-550") + " space-y-10"}>
          <div>
            <h2 className="text-2xl font-semibold text-white">Lo-Fi Wireframes</h2>
            <p className="mt-3 text-slate-400">
              Early-stage sketches used to define layout structure, content hierarchy, and user flow before visual design began.
            </p>
          </div>
          <WireframeGrid items={loFiWireframes} />
        </div>

        {/* HI-FIDELITY WIREFRAMES */}
        <div className={sectionStyles("delay-600") + " space-y-10"}>
          <div>
            <h2 className="text-2xl font-semibold text-white">Hi-Fidelity Wireframes</h2>
            <p className="mt-3 text-slate-400">
              Full-page designs across all core sections of the site, built in Figma before development.
            </p>
          </div>
          <WireframeGrid items={wireframes} />
        </div>

        {/* KEY FEATURES */}
        <div className={sectionStyles("delay-700") + " grid md:grid-cols-2 gap-12 items-center"}>
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-white">Key Features</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="text-white font-bold">/</span>
                <span><strong>Services Overview:</strong> Well-organized practice areas with clear descriptions and expertise highlights.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">/</span>
                <span><strong>Strategic CTAs:</strong> Prominently placed consultation request forms and contact options throughout the site.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">/</span>
                <span><strong>Subtle Motion:</strong> Used Framer Motion to enhance engagement and guide user attention without compromising professionalism.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CHALLENGES & OUTCOME */}
        <div className={sectionStyles("delay-900") + " grid md:grid-cols-2 gap-12"}>
          <div>
            <h2 className="text-2xl font-semibold text-white">Challenges</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              The main challenge was balancing professionalism with modern design—avoiding an overly formal or outdated aesthetic while maintaining the gravitas required in the legal industry. I focused on clean design language that feels contemporary yet trustworthy.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Outcome</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              A professional, modern law firm website that builds credibility and guides potential clients toward action. The experience balances sophisticated design with functional user flows, creating a scalable foundation for client engagement and inquiries.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RajeevGuptaCaseStudy;