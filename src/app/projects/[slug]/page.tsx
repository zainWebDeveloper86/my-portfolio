import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiGithub } from "react-icons/si";
import { TbExternalLink, TbArrowLeft } from "react-icons/tb";
import projects from "@/data/projects.json";

type ParamsPromise = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: ParamsPromise;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  return { title: project ? project.title : "Project" };
}

export default async function ProjectDetail({
  params,
}: {
  params: ParamsPromise;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <Link
        href="/#projects"
        className="flex w-fit items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <TbArrowLeft size={15} /> Back to projects
      </Link>

      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
          {project.title}
        </h1>
        <span className="font-mono text-xs text-muted">{project.status}</span>
      </div>
      <p className="mt-1 text-muted">{project.tag}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <section className="mt-8">
        <h2 className="font-mono text-sm text-accent">overview</h2>
        <p className="mt-3 leading-relaxed text-foreground/85">
          {project.description}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-sm text-accent">my role</h2>
        <p className="mt-3 leading-relaxed text-foreground/85">
          {project.role}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-sm text-accent">highlights</h2>
        <ul className="mt-3 space-y-1.5 text-foreground/80">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-accent">–</span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
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
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <SiGithub size={15} /> Source code
          </a>
        )}
      </div>
    </main>
  );
}
