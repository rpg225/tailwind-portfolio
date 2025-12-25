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
      className="bg-slate-900 border-t border-slate-800 py-24"
    >
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src="assets/headshot.jpg"
            alt="Rambod Pour Goshtasbi"
            className="w-64 h-64 rounded-xl object-cover ring-1 ring-slate-700 shadow-xl"
          />
        </div>

        {/* Text */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-semibold text-white">
            About Me
          </h2>

          <p className="mt-6 text-slate-300 leading-relaxed">
            I’m a front-end engineer with a strong foundation in JavaScript and
            React, focused on building clean, predictable user interfaces.
            I enjoy working close to the browser — understanding how things work
            under the hood rather than relying solely on abstractions.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            Lately, I’ve been exploring Web3 front-end development, focusing on
            wallet interactions, UX constraints, and building interfaces that
            remain usable even when the underlying systems are complex.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/rpg225/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
