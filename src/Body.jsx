import { useEffect, useState } from "react";
import { Code2, ExternalLink, FileDown, Mail, Moon, Sun } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  [
    "flex h-10 items-center rounded-full px-4 text-sm no-underline transition-colors duration-300 sm:px-7",
    "text-black hover:bg-white dark:text-white dark:hover:bg-white/10",
    isActive ? "bg-white dark:bg-white/10" : "",
  ]
    .filter(Boolean)
    .join(" ");

function Body() {
  const date = new Date().getFullYear();
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
      <header className="fixed left-0 right-0 top-7 z-50 flex justify-center text-sm">
        <div className="flex items-center gap-2">
          <nav className="rounded-full bg-[#e8e5e480] p-1 backdrop-blur-md dark:bg-white/10">
            <div className="flex items-center justify-center gap-1">
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
              <NavLink className={navLinkClass} to="/projects">
                Projects
              </NavLink>
              <NavLink className={navLinkClass} to="/contact">
                Contact
              </NavLink>
            </div>
          </nav>
          <button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e5e480] text-black backdrop-blur-md transition-colors hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            onClick={toggleTheme}
            type="button"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mx-5 border-t border-black/10 py-8 dark:border-white/10 sm:mx-[100px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-black/50 dark:text-white/50">
            &copy; {date} Laxman Rijal. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
              href="mailto:laxman.rijal1892@gmail.com"
            >
              <Mail size={17} />
              Email
            </a>
            <a
              className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
              href="https://www.linkedin.com/in/laxman-rijal"
            >
              <ExternalLink size={17} />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
              href="https://www.github.com/laxman1892"
            >
              <Code2 size={17} />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
              href="/LR-CV.pdf"
              download="Laxman-Rijal-CV.pdf"
            >
              <FileDown size={17} />
              CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Body;
