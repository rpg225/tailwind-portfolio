import { useEffect, useState } from "react";

const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
  {
    title: "Shopify",
    items: [
      "Liquid",
      "Custom Sections",
      "Theme Development",
      "Klaviyo Integration",
    ],
  },
  {
    title: "Design",
    items: [
      "Figma",
      "Design Systems",
      "Prototyping",
    ],
  },
  {
    title: "Web3 (Learning & Building)",
    items: [
      "Ethers.js",
      "Wallet Integrations",
      "Smart Contract Interaction",
      "Solidity (Basics)",
    ],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger section animation on mount
    setIsVisible(true);
  }, []);

  return (
    <section
      id="skills"
      className={`
        bg-slate-950 text-white py-24 border-t border-slate-800
        transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div
          className={`
            mb-14 text-center transition-all duration-1000 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Skills & Stack
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            The tools I design and build with, day to day.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, idx) => (
            <div
              key={group.title}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`
                rounded-xl bg-slate-900/60 border border-slate-800 p-6
                transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <h3 className="text-lg font-medium text-violet-400 mb-4">
                {group.title}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="
                      rounded-md
                      border border-violet-500/30
                      px-3 py-1
                      text-sm
                      text-violet-300
                      hover:border-violet-400
                      hover:text-violet-200
                      transition-colors
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;