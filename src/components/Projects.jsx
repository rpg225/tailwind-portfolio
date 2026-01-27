import { useEffect, useRef, useState } from "react";

import ProjectNFT from "./ProjectNFT";
import ProjectVoltorb from "./ProjectVoltorb";
import ProjectAsteroids from "./ProjectAsteroids";
import ProjectVruLik from "./ProjectVruLik";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-slate-900 border-t border-slate-800 py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A curated selection of front-end projects focused on UI clarity,
            interaction, and real-world constraints.
          </p>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectNFT />
          <ProjectVoltorb />
          <ProjectAsteroids />
          <ProjectVruLik />
        </div>

        {/* Footer note */}
        <div
          className={`mt-24 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-slate-400">
            Additional experiments and side projects are available on{" "}
            <a
              href="https://github.com/rpg225"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;