import { useEffect, useState } from "react";
import { Code2, ExternalLink, FileDown, Mail, Moon, Sun } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  [
    "relative pb-1 text-sm font-bold no-underline transition-colors duration-300",
    "after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300",
    "hover:after:w-full",
    "text-black hover:text-black dark:text-white dark:hover:text-white",
    isActive ? "text-black after:w-full dark:text-white" : "",
  ]
    .filter(Boolean)
    .join(" ");

function Body() {
  const date = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-black transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 dark:bg-neutral-950/95">
        <div className="mx-6 flex h-20 items-center justify-between sm:mx-16 lg:mx-24">
          <NavLink
            className="text-base font-black text-black no-underline dark:text-white"
            to="/"
          >
            Laxman Rijal
          </NavLink>

          <nav className="hidden sm:block">
            <div className="flex items-center justify-center gap-12">
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
              <NavLink className={navLinkClass} to="/projects">
                Projects
              </NavLink>
              <NavLink className={navLinkClass} to="/skills">
                Skills
              </NavLink>
              <NavLink className={navLinkClass} to="/contact">
                Contact
              </NavLink>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f7f5] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
              onClick={toggleTheme}
              type="button"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {!isHomePage && (
        <footer className="mx-6 border-t border-black/10 py-10 dark:border-white/10 sm:mx-16 lg:mx-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-black/50 dark:text-white/50">
              &copy; {date} Laxman Rijal. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                href="mailto:laxman.rijal1892@gmail.com"
              >
                <Mail size={17} />
                Email
              </a>
              <a
                className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                href="https://www.linkedin.com/in/laxman-rijal"
              >
                <ExternalLink size={17} />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                href="https://www.github.com/laxman1892"
              >
                <Code2 size={17} />
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                href="/LR-CV.pdf"
                download="Laxman-Rijal-CV.pdf"
              >
                <FileDown size={17} />
                CV
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default Body;
