import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "./data/projects";

function Projects() {
  return (
    <div className="mx-5 min-h-screen pt-32 sm:mx-[100px]">
      <section className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-black/45 dark:text-white/45">
          Selected projects
        </p>
        <h1 className="mt-4 text-5xl font-black leading-tight text-black dark:text-white sm:text-6xl">
          Work that shows backend, data, and product delivery.
        </h1>
        <p className="mt-6 max-w-3xl leading-8 text-black/70 dark:text-white/65">
          These projects come from my CV and focus on the parts that matter:
          application logic, API workflows, authentication, admin behavior,
          persistence, and frontend integration.
        </p>
      </section>

      <section className="mt-14 grid gap-5 pb-20">
        {projects.map((project, index) => (
          <article
            className="grid gap-8 rounded-lg border border-black/10 bg-white p-6 transition-colors hover:bg-[#f7f7f5] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 sm:grid-cols-[0.35fr_0.65fr] sm:p-8"
            key={project.title}
          >
            <div>
              <p className="text-sm font-bold text-black/35 dark:text-white/35">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-black/45 dark:text-white/45">
                {project.category}
              </p>
              <h2 className="mt-3 text-3xl font-black text-black dark:text-white">{project.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded border border-black/10 bg-white px-3 py-2 text-sm font-bold text-black/65 dark:border-white/10 dark:bg-white/10 dark:text-white/65"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg leading-8 text-black/75 dark:text-white/70">
                {project.summary}
              </p>

              <div className="mt-6 border-t border-black/10 pt-6 dark:border-white/10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
                  Key work
                </p>
                <ul className="mt-4 space-y-3 leading-7 text-black/70 dark:text-white/65">
                  {project.highlights.map((highlight) => (
                    <li className="flex gap-3" key={highlight}>
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35 dark:bg-white/35" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.repositoryUrl && (
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded border border-black/10 px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                    href={project.repositoryUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Code2 size={16} />
                    View repository
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Projects
