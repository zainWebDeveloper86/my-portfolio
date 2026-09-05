import skills from "@/data/skills.json";
import { getIcon } from "@/lib/icons";

const categoryLabels: Record<string, string> = {
  frontend: "frontend/",
  backend: "backend/",
  databases: "databases/",
  devops: "devops/",
  tools: "tools/",
  other: "other/",
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        Skills
      </h2>

      <div className="mt-8 space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="mb-3 font-mono text-sm text-accent">
              {categoryLabels[group.category] ?? `${group.category}/`}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-accent hover:text-foreground"
                  >
                    <Icon size={15} className="shrink-0 text-muted" />
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
