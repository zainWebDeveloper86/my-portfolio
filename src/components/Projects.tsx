import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        Projects
      </h2>

      <div className="mt-8 flex flex-col gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-md border border-border p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-muted">
                {project.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{project.tag}</p>

            <p className="mt-4 max-w-3xl leading-relaxed text-foreground/85">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border px-2 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-5 grid gap-x-6 gap-y-1.5 text-sm text-foreground/80 md:grid-cols-2">
              {project.highlights.slice(0, 4).map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-accent">–</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <TbExternalLink size={15} /> Live demo
                </a>
              )}
              <Link
                href={`/projects/${project.id}`}
                className="flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <IoDocumentTextOutline size={15} /> Project details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
