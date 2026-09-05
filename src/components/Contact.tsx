import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        Let&apos;s talk
      </h2>
      <p className="mt-4 max-w-xl leading-relaxed text-foreground/80">
        Have a project in mind, want to work together, or just want to talk
        about software development? Feel free to reach out.
      </p>
      <div className="mt-7">
        <SocialLinks
          showLabels
          className="flex flex-col gap-3"
          iconSize={17}
          linkClassName="flex w-fit items-center gap-2.5 text-foreground/85 transition-colors hover:text-accent"
        />
      </div>
    </section>
  );
}
