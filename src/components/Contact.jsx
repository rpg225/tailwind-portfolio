import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/xjgovwqe", {
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
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your message"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={sent}
            className={`mt-6 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-all
              ${
                sent
                  ? "bg-emerald-500 text-white"
                  : "bg-cyan-500 text-slate-900 hover:bg-cyan-400 hover:scale-105"
              }`}
          >
            {sent ? "Message sent ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;