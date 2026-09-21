import Image from "next/image";
import { aboutSection } from "@/data/data.texts";
import FadeUpAnimation from "../Animation/FadeUpAnimation";

export default function About() {
  const [firstHeadingLine, secondHeadingLine, thirdHeadingLine] = aboutSection.heading;

  return (
    <section
      id="about"
      className="section-space overflow-hidden bg-brand-yellow text-brand-dark"
    >
      <div className="site-container">
        <FadeUpAnimation>
          <div className="flex flex-col justify-between gap-6 border-b border-brand-dark/20 pb-7 sm:flex-row sm:items-end">
            <p className="eyebrow text-black">{aboutSection.eyebrow}</p>
            <p className="max-w-xs text-sm leading-relaxed text-brand-dark/60">
              {aboutSection.intro}
            </p>
          </div>
        </FadeUpAnimation>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <FadeUpAnimation className="lg:col-span-7">
            <h2
              className="font-black uppercase leading-[0.84] tracking-[-0.075em] text-brand-dark"
              style={{ fontSize: "clamp(3.7rem, 8.2vw, 8.5rem)" }}
            >
              {firstHeadingLine}
              <br />
              <span className="text-brand-orange">{secondHeadingLine}</span>
              <br />{thirdHeadingLine}
            </h2>
          </FadeUpAnimation>

          <FadeUpAnimation delay={0.12} className="lg:col-span-5 lg:pb-2">
            <p className="max-w-md text-base leading-relaxed text-brand-dark/75 sm:text-lg">
              {aboutSection.description}
            </p>
            <a
              href={aboutSection.button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex border-b-2 border-brand-dark pb-2 text-sm font-bold uppercase tracking-[0.08em] transition hover:border-brand-teal hover:text-brand-teal"
            >
              {aboutSection.button.text}
              <span className="ml-3">↗</span>
            </a>
          </FadeUpAnimation>
        </div>

        <FadeUpAnimation delay={0.18} className="mt-14">
          <div className="grid overflow-hidden rounded-panel bg-brand-dark lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-80 lg:min-h-[31rem]">
              <Image
                src={aboutSection.image.src}
                alt={aboutSection.image.alt}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-brand-orange/20 mix-blend-multiply" />
              <p className="absolute bottom-6 left-6 ui-label text-brand-light/80">
                {aboutSection.imageCaption[0]}
                <br />
                {aboutSection.imageCaption[1]}
              </p>
            </div>

            <div className="flex flex-col justify-between p-6 text-brand-light sm:p-10">
              <div>
                <p className="ui-label text-brand-teal">
                  {aboutSection.techTitle}
                </p>
                <div className="mt-8 border-t border-brand-light/20">
                  {aboutSection.techIcons.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between border-b border-brand-light/20 py-4 transition hover:pl-2 hover:text-brand-teal"
                      >
                        <span className="text-lg font-semibold tracking-[-0.03em]">
                          {tech.name}
                        </span>
                        <Icon
                          aria-hidden="true"
                          className="size-5 text-brand-teal"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="mt-10 max-w-sm text-sm leading-relaxed text-brand-gray">
                {aboutSection.closingDescription}
              </p>
            </div>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  );
}
