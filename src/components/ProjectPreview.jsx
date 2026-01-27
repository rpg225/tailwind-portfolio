import { useEffect, useRef, useState } from "react";
import ProjectNFT from "./ProjectNFT";
import ProjectVoltorb from "./ProjectVoltorb";
import ProjectAsteroids from "./ProjectAsteroids";


const ProjectsPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-slate-900 py-24 border-t border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A selection of projects showcasing my approach to Web3 front-end
            development.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectNFT />
          <ProjectVoltorb />
          <ProjectAsteroids />
        </div>

        {/* CTA */}
        <div
          className={`mt-14 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="/project"
            className="inline-flex items-center gap-x-2 rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 hover:border-cyan-400 hover:text-white transition-colors"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;