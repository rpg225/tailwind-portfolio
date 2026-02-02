import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="bg-neutral-950 border-b border-neutral-800 fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <span
          onClick={() => scrollToSection("home")}
          className="text-white font-semibold tracking-tight cursor-pointer"
        >
          Rambod
        </span>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-x-8">
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            About
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Projects
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-neutral-950 border-t border-neutral-800 px-6 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="block text-white text-sm font-medium"
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="block text-white text-sm font-medium"
          >
            About
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="block text-white text-sm font-medium"
          >
            Projects
          </NavLink>

          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="block text-white text-sm font-medium"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default NavBar;