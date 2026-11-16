import Link from "next/link";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import projects from "@/data/projects.json";
import config from "@/data/config.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 md:py-20"
    >
      {/* Section Header */}
      {/* <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            What I've been building
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Selected Projects<span className="text-accent">.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
            A collection of applications I've built, problems I've solved,
            and technologies I've worked with.
          </p>
        </div>

        <span className="font-mono text-xs text-muted">
          ({String(projects.length).padStart(2, "0")} projects)
        </span>
      </div> */}

      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/30 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
          >
            {/* Project Image */}
            <div className="relative aspect-[20/10] overflow-hidden border-b border-border bg-black/30">
              <Image
                src={project.image || "/placeholder.png"}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 transition-opacity group-hover:opacity-40" />

              {/* Project Number */}
              {/* <span className="absolute left-4 top-4 rounded-md border border-white/20 bg-black/50 px-3 py-1.5 font-mono text-[11px] text-white backdrop-blur-md">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span> */}

              {/* Status */}
              {/* {project.status && (
                <span className="absolute right-4 top-4 rounded-md border border-white/20 bg-black/50 px-3 py-1.5 font-mono text-[11px] text-white backdrop-blur-md">
                  {project.status}
                </span>
              )} */}
            </div>

            {/* Project Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div>
                {/* Category */}
                <p className="mb-2 text-sm text-muted">
                  {project.tag}
                </p>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="mt-3 leading-7 text-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights?.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {project.highlights.slice(0, 3).map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-foreground/75"
                      >
                        <span className="mt-0.5 text-accent">–</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Section */}
              <div className="mt-auto pt-2">
                {/* Tech Stack */}
                {/* <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[10px] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* Divider */}
                <div className="my-5 h-px bg-border/70" />

                {/* Actions */}
                {/* <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs font-medium text-accent-foreground transition-all hover:opacity-90"
                    >
                      <TbExternalLink size={14} />
                      Live Demo
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:border-accent/60 hover:text-accent"
                  >
                    <IoDocumentTextOutline size={14} />
                    Case Study
                  </Link>
                </div> */}
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
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* More Projects */}
      <div className="mt-12 flex justify-center">
        <a
          href={`${config.contact.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/60 hover:text-accent"
        >
          Explore more on GitHub
          <FiArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </section>
  );
}
