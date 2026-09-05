import config from "@/data/config.json";

const meta = [
  { key: "based_in", value: config.location },
  { key: "focus", value: "Full-stack + DevOps" },
  { key: "status", value: "Final-year CS student" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        About
      </h2>

      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_260px]">
        <div className="max-w-2xl space-y-4 text-foreground/85">
          {config.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="h-fit rounded-md border border-border p-5 font-mono text-sm">
          {meta.map((row) => (
            <div key={row.key} className="flex justify-between gap-4 py-1.5">
              <span className="text-muted">{row.key}</span>
              <span className="text-right text-foreground/90">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
