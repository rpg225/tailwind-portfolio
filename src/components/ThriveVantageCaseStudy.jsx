import { useEffect, useRef, useState } from "react";

const ThriveVantageCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

useEffect(() => {
  const target = sectionRef.current;
  if (!target) return;
  // Element is already on screen (above-the-fold) — show immediately
  const rect = target.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    setIsVisible(true);
    return;
  }
  const observer = new IntersectionObserver(
    ([entry]) => entry.isIntersecting && setIsVisible(true),
    { threshold: 0.05 }
  );
  observer.observe(target);
  return () => observer.unobserve(target);
}, []);

  const sectionStyles = (delay) => `
    transition-all duration-1000 ${delay}
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `;

  return (
    <section ref={sectionRef} className="bg-slate-900 border-t border-slate-800 py-28">
      <div className="mx-auto max-w-5xl px-6 space-y-24">

        {/* HERO */}
        <div className={sectionStyles("delay-0") + " text-center"}>
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-400 mb-4">
            Shopify · Klaviyo · Liquid · CSS
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Thrive Vantage Nutrition
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
            Designed and developed a full digital launch engine for a pre-launch nutrition brand that combined a custom Shopify storefront, Klaviyo email infrastructure, DNS setup, and branded content, delivered end to end as a solo design engineer.
          </p>
          <p className="mt-4 text-sm text-slate-500 italic">
            Pre-launch project. Video walkthrough and private GitHub repo available upon request.
          </p>
        </div>

        {/* OVERVIEW */}
        <div className={sectionStyles("delay-150") + " grid md:grid-cols-2 gap-12 items-center"}>
          <img
            src="/assets/thrive-vantage-home.png"
            alt="Thrive Vantage Nutrition homepage"
            className="rounded-xl ring-1 ring-slate-800 shadow-xl"
          />
          <div>
            <h2 className="text-2xl font-semibold text-white">Project Overview</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Thrive Vantage Nutrition Ltd. is a premium health supplements brand founded by an Ottawa-based Integrative Health Coach. To prepare for a successful launch, the founder needed a cohesive digital ecosystem that matched her brand's ambition. I crafted a high-performance Shopify storefront, built out robust email marketing funnels, and stabilized the underlying technical infrastructure. By focusing on intuitive content management and clean, scalable code, I delivered a platform that empowers the client to own their operations with confidence, removing the need for ongoing technical support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Shopify", "Klaviyo", "Liquid", "CSS", "GSAP", "GoDaddy DNS", "Figma"].map((tool) => (
                <span key={tool} className="px-3 py-1 text-xs font-semibold bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PROBLEM & TARGET USERS */}
        <div className={sectionStyles("delay-300") + " grid md:grid-cols-2 gap-12"}>
          <div>
            <h2 className="text-2xl font-semibold text-white">The Problem</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              The client had started building her own Shopify store using the Tinker theme and created a Canva mood board she called wireframes. The site lacked brand cohesion, proper email infrastructure, and a scalable content structure. DNS was misconfigured, Klaviyo was unverified, and there was no clear path to launch. The project required translating a founder's vision into a production-ready digital system — fast.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Target Users</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Ambitious professionals aged 25 to 45 seeking clean, science-backed supplements for physical performance, stress resilience, and cognitive function. Users who value premium positioning, authoritative brand voice, and transparent ingredient sourcing over generic wellness marketing.
            </p>
          </div>
        </div>

        {/* DESIGN APPROACH */}
        <div className={sectionStyles("delay-500") + " space-y-8"}>
          <h2 className="text-2xl font-semibold text-white">Design Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Quiet Confidence Aesthetic</h3>
              <p className="text-sm text-slate-400">
                The brand required an elegant, modern, and understated visual language. High contrast Navy and Gold palette with Montserrat typography. Premium without being pretentious.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Client-managed Architecture</h3>
              <p className="text-sm text-slate-400">
                Every custom Liquid section was built with schema-driven settings so the client can update content, swap images, and manage products directly in the Shopify customizer without touching code.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-semibold text-white mb-2">Pre-launch First Strategy</h3>
              <p className="text-sm text-slate-400">
                E-commerce elements were intentionally masked pending product launch. The site launched as a brand presence and email capture engine, with the store infrastructure ready to activate on demand.
              </p>
            </div>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className={sectionStyles("delay-700") + " grid md:grid-cols-2 gap-12 items-center"}>
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-white">What Was Built</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">/</span>
                <span><strong>Custom Shopify Theme:</strong> Tinker theme extended with custom Liquid sections including The Edge benefit cards, Meet Our Founder, Image With Text, and a dynamic blog template for the Learn page.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">/</span>
                <span><strong>Klaviyo Email Infrastructure:</strong> Pre-launch welcome flow, Launch Waitlist, six branded email templates, and full Shopify integration tested and live.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">/</span>
                <span><strong>DNS & Technical Setup:</strong> GoDaddy DNS configuration, SPF record consolidation, Klaviyo NS record verification, and Microsoft 365 email resolution.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">/</span>
                <span><strong>Editorial Content:</strong> Nine long-form blog articles written across three brand pillars — Physical Performance, Stress Resilience, and Cognitive Function.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">/</span>
                <span><strong>Client Handoff:</strong> Full Shopify and Klaviyo walkthrough, and live template building session with the founder.</span>
              </li>
            </ul>
          </div>
          <img
            src="/assets/thrive-vantage-edge.png"
            alt="Thrive Vantage The Edge section"
            className="rounded-xl ring-1 ring-slate-800 shadow-xl order-1 md:order-2"
          />
        </div>

        {/* BRAND TOKENS */}
        <div className={sectionStyles("delay-800") + " space-y-8"}>
          <h2 className="text-2xl font-semibold text-white">Brand System</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-3" style={{ backgroundColor: "#131e3d" }}></div>
              <p className="text-sm font-semibold text-white">Navy</p>
              <p className="text-xs text-slate-500 mt-1">#131e3d</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-3" style={{ backgroundColor: "#e0be4b" }}></div>
              <p className="text-sm font-semibold text-white">Gold</p>
              <p className="text-xs text-slate-500 mt-1">#e0be4b</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-3 bg-white"></div>
              <p className="text-sm font-semibold text-white">White</p>
              <p className="text-xs text-slate-500 mt-1">#ffffff</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-3 bg-slate-300 flex items-center justify-center">
                <span className="text-xs font-bold text-slate-800">Aa</span>
              </div>
              <p className="text-sm font-semibold text-white">Montserrat</p>
              <p className="text-xs text-slate-500 mt-1">Primary Font</p>
            </div>
          </div>
        </div>

        {/* CHALLENGES & OUTCOME */}
        <div className={sectionStyles("delay-900") + " grid md:grid-cols-2 gap-12"}>
          <div>
            <h2 className="text-2xl font-semibold text-white">Challenges</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Every project teaches you something and this one was no exception.
            </p>
            <p className="mt-6 text-slate-300 leading-relaxed">
              A few technical hurdles came up mid-project that required focused problem solving. DNS propagation delays, conflicting SPF records, and a GoDaddy dashboard issue that scrambled Klaviyo nameserver records all needed to be diagnosed and resolved before the email infrastructure could go live. Each one was solved and the system came out cleaner for it.
            </p>
            <p className="mt-6 text-slate-300 leading-relaxed">
              A few more clarifying questions at the start would have helped set clearer expectations on both sides. It is a small thing that makes a big difference and it is now a standard part of how I approach every new project.
            </p>
            <p className="mt-6 text-slate-300 leading-relaxed">
              The biggest takeaway was this. No question is too small. What seems minor in the moment can mean something entirely different to a client. Whether the task is large or small, asking thorough questions upfront prevents assumptions, avoids rework, and keeps everyone aligned throughout the process.
            </p>
            <p className="mt-6 text-slate-300 leading-relaxed">
              The project was delivered successfully and the process around it is sharper for having gone through it.
            </p>
            
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Outcome</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              A complete, production-ready digital launch engine delivered end to end. The Shopify store is branded, structured, and client-manageable. Klaviyo is verified, integrated, and automated. The founder can publish articles, send campaigns, and manage subscribers independently. The infrastructure is scalable and ready to activate the moment the product launches.
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className={sectionStyles("delay-1000") + " text-center border-t border-slate-800 pt-12"}>
          <p className="text-slate-500 text-sm">
            Pre-launch project — site currently password protected pending product launch.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Video walkthrough and private GitHub repository available upon request.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ThriveVantageCaseStudy;