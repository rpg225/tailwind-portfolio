import { useEffect, useRef, useState } from "react";

import ProjectNFT from "./ProjectNFT"; // NFT Minter
import ProjectAsteroids from "./ProjectAsteroids"; // Asteroids
import ProjectVoltorb from "./ProjectVoltorb"; // Voltorb Flip
// import ProjectVruLik from "./ProjectVruLik //Project VruLik

const Project = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const featured = [
    { id: "nft-minter", node: <ProjectNFT /> },
    { id: "voltorb-flip", node: <ProjectVoltorb /> },
    { id: "asteroids", node: <ProjectAsteroids /> },
  ];

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative bg-slate-950 overflow-hidden py-32"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Projects
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            A curated selection of playful, logic-driven, and Web3-focused
            front-end projects.
          </p>
        </div>

        {/* Featured */}
        <div className="mt-32">
          <h2 className="mb-12 text-2xl font-semibold text-cyan-400 text-center">
            Featured
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featured.map((item, idx) => (
              <div
                key={item.id}
                className={`transform-gpu transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-[0.98]"
                }`}
                style={{ transitionDelay: `${idx * 140}ms` }}
              >
                <div className="hover:-translate-y-3 hover:scale-[1.03] transition-all duration-300 cursor-pointer">
                  {item.node}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More work */}
        <div className="mt-40">
          <h2 className="mb-12 text-2xl font-semibold text-slate-300 text-center">
            More Work
          </h2>

          <div
            className={`flex justify-center transform-gpu transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="w-full max-w-md hover:-translate-y-3 hover:scale-[1.03] transition-all duration-300">
              {/* <ProjectVruLik /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;