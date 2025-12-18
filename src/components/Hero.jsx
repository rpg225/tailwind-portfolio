import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="bg-slate-900 text-white overflow-hidden"
    >
      <div className="mx-auto max-w-4xl pt-10 pb-20">
        {/* Avatar */}
        <div className="flex justify-center items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <img
              src="assets/headshot.jpg"
              alt="Rambod profile"
              className="rounded-full w-32 h-32 object-cover ring-2 ring-slate-700 shadow-xl"
            />
          </div>
        </div>

        {/* Text */}
        <div className="relative isolate px-6 pt-12 text-center">
          <h1
            className={`text-4xl font-semibold tracking-tight sm:text-6xl transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Hello, I’m <span className="text-cyan-400">Rambod</span>
          </h1>

          <h2
            className={`mt-4 text-xl sm:text-3xl font-light text-slate-300 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Web3 Front-End Engineer
          </h2>
        </div>

        {/* Actions */}
        <div
          className={`mt-12 flex items-center justify-center gap-x-8 transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#projects"
            className="rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-cyan-400 hover:scale-105 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Stay in Touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
