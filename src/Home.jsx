import { ArrowRight, FileDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-6 sm:mx-16 lg:mx-24">
      <section className="flex min-h-screen items-center justify-center pt-28 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="motion-fade-up text-sm font-bold uppercase tracking-[0.28em] text-black/55 dark:text-white/55">
            Software Engineer | Full-Stack Developer
          </p>
          <h1 className="motion-fade-up motion-delay-1 mx-auto mt-8 max-w-4xl text-6xl font-black leading-[0.95] text-black dark:text-white sm:text-8xl">
            Laxman Rijal
          </h1>
          <p className="motion-fade-up motion-delay-2 mx-auto mt-8 max-w-3xl text-2xl font-bold leading-snug text-black/75 dark:text-white/75 sm:text-4xl">
            I build full-stack web applications with clean interfaces,
            API-driven workflows, and maintainable backend logic.
          </p>
          <p className="motion-fade-up motion-delay-3 mx-auto mt-8 max-w-2xl leading-8 text-black/70 dark:text-white/65">
            I work across React, Next.js, Django, Node.js, and MongoDB,
            focusing on reliable application logic, clean data flow, and useful
            product features.
          </p>

          <div className="motion-fade-up motion-delay-3 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded bg-black px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
              to="/projects"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded border border-black/15 px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              to="/skills"
            >
              Skills
              <ArrowRight size={18} />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded border border-black/15 px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              to="/contact"
            >
              Get in Touch
              <Mail size={18} />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded border border-black/15 px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              href="/LR-CV.pdf"
              download="Laxman-Rijal-CV.pdf"
            >
              Download CV
              <FileDown size={18} />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
