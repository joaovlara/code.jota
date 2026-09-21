import { expertiseTexts } from "@/data/data.texts";
import FadeUpAnimation from "@/components/Animation/FadeUpAnimation";

export default function Expertise() {
  const [firstHeadingLine, secondHeadingLine, accentHeadingLine] = expertiseTexts.heading;

  return (
    <section id="expertise" className="section-space bg-brand-dark">
      <div className="site-container">
        <FadeUpAnimation>
          <div className="flex flex-col justify-between gap-8 border-b border-brand-light/20 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">{expertiseTexts.eyebrow}</p>
              <h2 className="section-title mt-7">
                {firstHeadingLine}
                <br />
                {secondHeadingLine} <span className="text-brand-teal">{accentHeadingLine}</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-brand-gray">
              {expertiseTexts.description}
            </p>
          </div>
        </FadeUpAnimation>
        <div className="mt-12 grid gap-3 lg:grid-cols-4">
          {expertiseTexts.capabilities.map((capability, index) => (
            <FadeUpAnimation
              key={capability.title}
              delay={index * 0.08}
              className="rounded-card border border-brand-light/20 p-6 transition hover:-translate-y-1 hover:border-brand-teal"
            >
              <h3 className="mt-10 text-2xl font-extrabold uppercase leading-none tracking-[-0.05em]">
                {capability.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-brand-gray">
                {capability.description}
              </p>
            </FadeUpAnimation>
          ))}
        </div>
        <div className="mt-16 grid gap-10 border-t border-brand-light/20 pt-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="ui-label text-brand-yellow">{expertiseTexts.technicalBase}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-gray">
              {expertiseTexts.technicalDescription}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {expertiseTexts.experience.items.map((item) => (
              <div
                key={item.company}
                className="border-l border-brand-teal pl-5"
              >
                <p className="ui-label text-brand-gray">{item.period}</p>
                <h3 className="mt-3 text-xl font-bold">{item.position}</h3>
                <p className="mt-1 text-sm text-brand-teal">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
