import { CtaSection } from "@/data/data.texts";
import FadeUpAnimation from "@/components/Animation/FadeUpAnimation";

export default function CalltoAction() {
  const { contact, social, button } = CtaSection;
  const [firstHeadingLine, secondHeadingLine, accentHeadingLine] = CtaSection.heading;
  return (
    <section id="contact" className="bg-brand-dark px-0 pb-20 sm:px-8">
      <div className="site-container rounded-none bg-brand-yellow py-16 text-brand-dark sm:rounded-panel sm:px-12 sm:py-20 lg:px-20">
        <FadeUpAnimation>
          <p className="eyebrow text-black">{CtaSection.eyebrow}</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <h2 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                {firstHeadingLine}
                <br />
                {secondHeadingLine}
                <br />
                <span className="text-brand-light">{accentHeadingLine}</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-dark/75 sm:text-lg">
                {CtaSection.description}
              </p>
            </div>
            <a
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button w-fit"
            >
              {button.text} <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-16 grid gap-6 border-t border-brand-dark/25 pt-6 text-sm sm:grid-cols-3">
            <div>
              <p className="ui-label text-brand-dark/55">{contact.title}</p>
              <a
                className="mt-2 block font-semibold hover:text-brand-red"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
              <a
                className="mt-1 block font-semibold hover:text-brand-red"
                href={`https://wa.me/55${contact.phone}`}
              >
                {contact.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="ui-label text-brand-dark/55">{social.title}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                {social.socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-brand-red"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <p className="self-end text-sm leading-relaxed text-brand-dark/65">
              {CtaSection.footerDescription}
            </p>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  );
}
