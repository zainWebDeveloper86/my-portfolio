import experience from "@/data/experience.json";

export default function WorkExperience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        Experience
      </h2>

      <div className="relative mt-10 grid gap-10 pl-6 after:absolute after:inset-y-1 after:left-0 after:w-px after:bg-border">
        {experience.map((exp) => (
          <div key={exp.id} className="relative">
            <span className="absolute -left-1 top-1 z-10 aspect-square w-2.5 -translate-x-[calc(1.5rem+1px)] rounded-full bg-accent" />

            <h3 className="text-lg font-medium text-foreground">
              {exp.role}
              {exp.company && (
                <a href={exp.companyUrl} className="ml-2 text-accent">
                  @{exp.company}
                </a>
              )}
            </h3>
            <p className="mt-0.5 font-mono text-xs text-muted">
              {exp.startDate} – {exp.endDate}
            </p>
            <p className="mt-3 max-w-2xl text-foreground/80">{exp.summary}</p>
            <ul className="mt-3 max-w-2xl space-y-1 text-sm text-foreground/70">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-accent">–</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
