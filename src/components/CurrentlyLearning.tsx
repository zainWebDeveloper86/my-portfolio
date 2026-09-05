import learning from "@/data/learning.json";

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        Currently learning
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
        {learning.intro}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {learning.groups.map((group) => (
          <div key={group.category}>
            <p className="mb-3 font-mono text-sm text-muted">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-dashed border-border px-3 py-1.5 text-sm text-foreground/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
