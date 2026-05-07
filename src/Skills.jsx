import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { skillGroups } from "./data/skills";

function Skills() {
  return (
    <div className="motion-fade-up mx-auto min-h-screen max-w-6xl px-6 pt-36 sm:px-10">
      <section className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-black/45 dark:text-white/45">
          Skills
        </p>
        <h1 className="mt-4 text-5xl font-black leading-tight text-black dark:text-white sm:text-6xl">
          Tools I use to turn requirements into working products.
        </h1>
        <p className="mt-6 max-w-3xl leading-8 text-black/70 dark:text-white/65">
          This is not a badge wall. These are the technologies I have used
          across backend workflows, frontend interfaces, content systems,
          authentication, and project delivery.
        </p>
      </section>

      <section className="mt-16 grid gap-8 pb-28 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            className="rounded-lg border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f7f7f5] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            key={group.title}
          >
            <h2 className="text-2xl font-black text-black dark:text-white">
              {group.title}
            </h2>
            <p className="mt-4 leading-7 text-black/70 dark:text-white/65">
              {group.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  className="rounded border border-black/10 bg-[#f7f7f5] px-3 py-2 text-sm font-bold text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-black/10 pt-5 dark:border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
                Used in
              </p>
              <div className="mt-3 space-y-2 text-sm font-bold text-black/65 dark:text-white/65">
                {group.usedIn.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-black/10 py-20 dark:border-white/10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
              Proof
            </p>
            <h2 className="mt-3 text-3xl font-black text-black dark:text-white">
              Skills matter more when they show up in projects.
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 rounded bg-black px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
            to="/projects"
          >
            View Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Skills;
