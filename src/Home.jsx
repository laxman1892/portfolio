import { ArrowRight, FileDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "./data/projects";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Python", "Django", "Node.js", "REST APIs", "Authentication"],
  },
  {
    title: "Data & Tools",
    items: ["MongoDB", "Git", "GitHub", "API Integration", "Database Design"],
  },
];

function Home() {
  return (
    <div className="mx-5 sm:mx-[100px]">
      <section className="grid min-h-screen items-center gap-12 pt-28 sm:grid-cols-[1.25fr_0.75fr] sm:pt-20">
        <div className="relative max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-black/55 dark:text-white/55">
            Software Engineer | Full-Stack Developer
          </p>
          <h1 className="mt-5 text-5xl font-black leading-tight text-black dark:text-white sm:text-7xl">
            Laxman Rijal
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-bold leading-snug text-black/75 dark:text-white/75 sm:text-3xl">
            I build full-stack web applications with clean interfaces,
            API-driven workflows, and maintainable backend logic.
          </p>
          <p className="mt-6 max-w-2xl leading-8 text-black/70 dark:text-white/65">
            I have hands-on experience across React, Next.js, TypeScript,
            Python, Django, Node.js, and MongoDB, including authentication,
            role-based access control, admin dashboards, payment workflows, and
            dynamic content systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded bg-black px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
              to="/projects"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded border border-black/15 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              to="/contact"
            >
              Get in Touch
              <Mail size={18} />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded border border-black/15 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              href="/LR-CV.pdf"
              download="Laxman-Rijal-CV.pdf"
            >
              Download CV
              <FileDown size={18} />
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-black/10 bg-[#f7f7f5] p-6 dark:border-white/10 dark:bg-white/5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45 dark:text-white/45">
              Core stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Next.js", "Django", "Node.js", "MongoDB"].map(
                (skill) => (
                  <span
                    className="rounded border border-black/10 bg-white px-3 py-2 text-sm font-bold text-black/75 dark:border-white/10 dark:bg-white/10 dark:text-white/75"
                    key={skill}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-8 border-t border-black/10 pt-6 dark:border-white/10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45 dark:text-white/45">
              Experience
            </p>
            <p className="mt-3 font-bold text-black/75 dark:text-white/75">
              Backend Developer, Kitab Yatra Pvt. Ltd.
            </p>
            <p className="mt-1 text-sm text-black/55 dark:text-white/55">Jan 2024 - Mar 2025</p>
            <p className="mt-3 leading-7 text-black/75 dark:text-white/65">
              Built Django backend modules for authentication, access control,
              data management, and transaction-related workflows.
            </p>
          </div>

          <div className="mt-8 border-t border-black/10 pt-6 dark:border-white/10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45 dark:text-white/45">
              Based in
            </p>
            <p className="mt-3 font-bold text-black/75 dark:text-white/75">Nepal</p>
          </div>
        </aside>
      </section>

      <section className="py-20">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-black text-black dark:text-white sm:text-4xl">
              Projects with backend, data, and content workflows.
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-black underline decoration-black/25 underline-offset-4 transition-colors hover:text-black/65 dark:text-white dark:decoration-white/25 dark:hover:text-white/65"
            to="/projects"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {projects.map((project) => (
            <article
              className="rounded-lg border border-black/10 bg-white p-5 transition-colors hover:bg-[#f7f7f5] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              key={project.title}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
                {project.stack.slice(0, 3).join(" / ")}
              </p>
              <h3 className="mt-4 text-xl font-black text-black dark:text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-black/70 dark:text-white/65">
                {project.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-black/10 py-20 dark:border-white/10 sm:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-black text-black dark:text-white">What I work with.</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-black text-black dark:text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    className="rounded border border-black/10 bg-[#f7f7f5] px-3 py-2 text-sm font-bold text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-black/10 py-20 dark:border-white/10 sm:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
            About
          </p>
          <h2 className="mt-3 text-3xl font-black text-black dark:text-white">Engineering background, product delivery mindset.</h2>
        </div>

        <div className="space-y-5 leading-8 text-black/70 dark:text-white/65">
          <p>
            I studied Electronics, Communication, and Information Technology
            Engineering at Thapathali Engineering Campus and have applied that
            foundation to full-stack web development.
          </p>
          <p>
            My work has included backend APIs, authentication flows, role-based
            access, admin-facing content systems, and frontend integration. I
            care about building features that are understandable, maintainable,
            and useful beyond the first demo.
          </p>
          <div className="rounded-lg border border-black/10 bg-[#f7f7f5] p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
              Education
            </p>
            <p className="mt-4 font-bold text-black dark:text-white">
              Bachelor of Electronics, Communication, and Information
              Technology Engineering
            </p>
            <p className="mt-1 text-black/60 dark:text-white/60">
              Thapathali Engineering Campus, 2019 - 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
