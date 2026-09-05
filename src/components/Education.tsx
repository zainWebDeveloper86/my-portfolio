import education from "@/data/education.json";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        Education
      </h2>

      <div className="relative mt-10 grid gap-10 pl-6 after:absolute after:inset-y-1 after:left-0 after:w-px after:bg-border">
        {education.map((ed) => (
          <div key={ed.id} className="relative">
            <span className="absolute -left-1 top-1 z-10 aspect-square w-2.5 -translate-x-[calc(1.5rem+1px)] rounded-full bg-accent" />

            <h3 className="text-lg font-medium text-foreground">
              {ed.degree}
            </h3>
            <p className="text-foreground/80">{ed.institution}</p>
            <p className="mt-0.5 font-mono text-xs text-muted">
              {ed.startDate} – {ed.endDate}
              {ed.note && ` · ${ed.note}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
