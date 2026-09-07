"use client"

import { TbDownloadFilled } from "react-icons/tb";
import Image from "next/image";
import config from "@/data/config.json";
import { BsPersonWorkspace } from "react-icons/bs";
import SocialLinks from "./SocialLinks";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="flex flex-col items-center gap-12 md:gap-18 md:flex-row">
        {/* LEFT SIDE: Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-56 w-56 md:h-74 md:w-74">
            <Image
              src="/mypic.jpg"
              alt={config.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-full object-cover border-4 border-accent/20"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE: Text */}
        <div className="flex-1 max-w-2xl">
          <p className="mb-5 font-mono text-sm text-muted">
            {config.handle}@dev:~$ whoami
          </p>
          {/* <div className="text-4xl font-semibold leading-tight text-accent md:text-5xl">
            <ReactTyped
              strings={[
                "Zain Ul Abidin",
                "Aspiring Software Engineer",
                "Full-Stack Developer",
                "DevOps Learner!"
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
              // className="text-accent"
            />
          </div> */}
          <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            {config.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{config.title}</p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            {config.heroLine}
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {/* View my work button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <BsPersonWorkspace size={18} /> View my work
            </a>

            {/* Download Resume button */}
            <a
              href="/zain-resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <TbDownloadFilled size={18} /> Download Resume
            </a>
          </div>

          {/* Social Links */}
          <SocialLinks
            className="mt-8 flex items-center justify-center gap-6 text-muted lg:justify-start"
            iconSize={20}
          />
        </div>
      </div>
    </section>
  );
}