import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white font-semibold tracking-tight">
            Rambod
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `
              inline-flex items-center py-6 text-sm font-medium transition-colors
              ${
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-slate-300 hover:text-white"
              }
            `
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `
              inline-flex items-center py-6 text-sm font-medium transition-colors
              ${
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-slate-300 hover:text-white"
              }
            `
            }
          >
            About
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              `
              inline-flex items-center py-6 text-sm font-medium transition-colors
              ${
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-slate-300 hover:text-white"
              }
            `
            }
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
