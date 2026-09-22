import { expertiseTexts } from "@/data/data.texts";
import FadeUpAnimation from "@/components/Animation/FadeUpAnimation";

export default function Expertise() {
  const [firstHeadingLine, secondHeadingLine, accentHeadingLine] = expertiseTexts.heading;

  return (
    <section id="expertise" className="section-space bg-brand-dark">
      <div className="site-container">
        <FadeUpAnimation>
          <div className="flex flex-col justify-between gap-8 pb-10 lg:flex-row lg:items-end">
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
