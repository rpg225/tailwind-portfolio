import { useState } from "react";

function Contact() {

  const [sent, setSent ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/abcdwxyz", {
      method: "POST",
      body: new FormData(e.target),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSent(true);
      e.target.reset();
    }
  };



  return (
    <section
      id="contact"
      className="bg-slate-950 border-t border-slate-800 py-20"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Let’s Connect
        </h2>

        <p className="mt-4 text-slate-400">
          Interested in working together or just want to chat about frontend or Web3?
          Feel free to reach out.
        </p>

        <form 
        action="https://formspree.io/f/xjgovwqe"
        method = "POST"
        className="mt-12 space-y-6">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-400 hover:scale-105 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
