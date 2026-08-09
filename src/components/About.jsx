import { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
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
      id="about"
      className="bg-slate-900 border-t border-slate-800 py-28"
    >
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <img
              src="assets/headshot.jpg"
              alt="Rambod Pour Goshtasbi"
              className="w-64 h-64 rounded-2xl object-cover ring-1 ring-slate-700 shadow-2xl"
            />
            {/* subtle glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/20 pointer-events-none" />
          </div>
        </div>

        {/* Text */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Accent line */}
          <div className="absolute -left-6 top-2 h-16 w-px bg-cyan-400/40 hidden md:block" />

          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            About Me
          </h2>

          <p className="mt-6 text-slate-300 leading-relaxed text-[15.5px]">
  I&rsquo;m a design engineer working at the intersection of interface and implementation. What this means is that I design the experience and build it, without a handoff in between. My focus is on clean, predictable UI built with JavaScript and React, but I care as much about the visual and interaction decisions as the code that ships them. I like working close to the browser, understanding how things actually work rather than leaning on abstractions I can&rsquo;t explain.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed text-[15.5px]">
            I&rsquo;ve also spent time in Web3 front-end work which includes wallet interactions, UX under real technical constraints, and making interfaces feel usable even when what&rsquo;s underneath them is genuinely complex.
          </p>

          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/rpg225/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md border border-slate-700 px-4 py-2 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin className="text-lg" />
              <span className="text-sm font-medium">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;