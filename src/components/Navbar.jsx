import { NavLink } from "react-router-dom";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function NavBar() {
  return (
    <header className="bg-neutral-950 border-b border-neutral-800 fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white font-semibold tracking-tight">
            Rambod
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-x-8">
          {/* Home (real route) */}
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="inline-flex items-center py-6 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Home
          </NavLink>

          {/* About (scroll) */}
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="inline-flex items-center py-6 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            About
          </NavLink>

          {/* Projects (scroll) */}
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="inline-flex items-center py-6 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Projects
          </NavLink>

          {/* Contact (scroll) */}
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-flex items-center py-6 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;