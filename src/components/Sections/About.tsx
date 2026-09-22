import Image from "next/image";
import { aboutSection } from "@/data/data.texts";
import FadeUpAnimation from "../Animation/FadeUpAnimation";

export default function About() {
  return (
    <section
      id="about"
      className="section-space overflow-hidden bg-brand-yellow text-brand-dark"
    >
      <div className="site-container">
        {/* Topo / Eyebrow */}
        <FadeUpAnimation>
          <div className="flex flex-col justify-between gap-6 border-b border-brand-dark/20 pb-7 sm:flex-row sm:items-end">
            <p className="eyebrow text-black">{aboutSection.eyebrow}</p>
          </div>
        </FadeUpAnimation>

        {/* Grid Principal: Card (Esquerda) e Texto (Direita) */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* CARD DO LADO ESQUERDO */}
          <FadeUpAnimation delay={0.12} className="min-w-0 lg:col-span-6">
            <div className="flex flex-col sm:flex-row overflow-hidden rounded-panel w-full">
              {/* Foto - Adicionado 'group' para disparar o hover corretamente */}
              <div className="group relative min-h-[22rem] w-full flex-1 sm:min-h-[26rem] overflow-hidden">
                <Image
                  src={aboutSection.image.src}
                  alt={aboutSection.image.alt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
                {/* pointer-events-none impede que essa camada bloqueie o hover */}
                <div className="pointer-events-none absolute inset-0 bg-brand-orange/20 mix-blend-multiply" />
                <p className="absolute bottom-4 left-4 text-xs ui-label text-brand-light/80">
                  {aboutSection.imageCaption[0]}
                  <br />
                  {aboutSection.imageCaption[1]}
                </p>
              </div>

              {/* Coluna de Ícones - Adicionado 'flex-wrap' para não quebrar a largura no mobile */}
              <div className="flex flex-wrap sm:flex-col items-center justify-center gap-3 sm:gap-1 p-4 sm:px-4 sm:py-6 w-full sm:w-auto">
                {aboutSection.techIcons.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="flex items-center justify-center rounded-lg p-2"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-10 text-brand-dark transition-transform duration-200"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeUpAnimation>

          {/* TEXTO "SOBRE" DO LADO DIREITO */}
          <FadeUpAnimation delay={0.18} className="min-w-0 lg:col-span-6 lg:pl-6">
            <p className="font-semibold text-base leading-relaxed text-brand-dark/75 sm:text-lg">
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
      </div>
    </section>
  );
}