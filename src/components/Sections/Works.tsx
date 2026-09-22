import Image from "next/image";
import { workSection } from "@/data/data.texts";
import SequentialFadeUp from "@/components/Animation/SequentialFadeUp";

export default function Works() {
  const { projects } = workSection;
  const [firstHeadingLine, accentHeadingLine] = workSection.heading;
  return (
    <section id="portfolio" className="site-containerbg-brand-dark">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 border-b border-brand-light/20 pb-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{workSection.eyebrow}</p>
            <h2 className="section-title mt-7">
              {firstHeadingLine}
              <br />
              <span className="text-brand-yellow">{accentHeadingLine}</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-brand-gray">
            {workSection.description}
          </p>
        </div>
        <SequentialFadeUp
          className="mt-12 grid gap-x-5 gap-y-14 md:grid-cols-2"
          staggerDelay={0.12}
        >
          {projects.map((project, index) => (
            <article key={project.id} className={index % 2 ? "md:mt-20" : ""}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-panel bg-brand-light/10">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 transition group-hover:bg-brand-dark/10" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 border-b border-brand-light/20 pb-5">
                  <div>
                    <p className="ui-label text-brand-teal">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold uppercase tracking-[-0.05em]">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-2 flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-light/30 transition group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </article>
          ))}
        </SequentialFadeUp>
      </div>
    </section>
  );
}
