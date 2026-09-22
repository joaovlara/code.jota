"use client";

import HeroAnimation from "../Animation/HeroAnimation";
import { heroSection } from "@/data/data.texts";

export default function Hero() {
  const [firstTitleLine, secondTitleLine, accentTitleLine] = heroSection.title;

  return (
    <section id="hero" className="relative overflow-hidden bg-brand-dark">
      <div
        aria-hidden="true"
        className="absolute right-[-0.05em] top-12 select-none text-[clamp(12rem,30vw,32rem)] font-black leading-none tracking-[-0.15em] text-brand-light/[0.035]"
      >
        &lt;/&gt;
      </div>
      <HeroAnimation className="site-container section-space relative grid content-center gap-12">
        <div className="flex items-center justify-between border-b border-brand-light/20 pb-4">
          <p className="eyebrow">{heroSection.eyebrow}</p>
          <p className="ui-label text-brand-gray">{heroSection.location}</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <h1 className="display-title">
              {firstTitleLine}
              <br />
              {secondTitleLine}
              <br />
              <span className="text-brand-yellow">{accentTitleLine}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-gray sm:text-lg">
              {heroSection.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 border-t border-brand-light/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#contact" className="brand-button w-fit">
            {heroSection.buttonText} <span aria-hidden="true">→</span>
          </a>
          <p className="ui-label text-brand-light/50">
            {heroSection.scrollLabel} <span className="ml-2 text-brand-teal">↓</span>
          </p>
        </div>
      </HeroAnimation>
    </section>
  );
}
