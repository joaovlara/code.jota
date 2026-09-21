"use client";

import Link from "next/link";
import { CtaSection } from "@/data/data.texts";
import SequentialFadeUp from "@/components/Animation/SequentialFadeUp";

export default function Contact() {
  const { title, description, contact, social, button } = CtaSection;

  return (
    <section
      id="contact"
      className="min-h-[70vh] flex flex-col items-center justify-center bg-linear-to-t from-stone-950"
    >
      <div className="container relative p-5 space-y-3">
        <SequentialFadeUp staggerDelay={0.4} duration={0.6}>
          <h2 className="textcolor-primary mb-10 uppercase">{title}</h2>

          <h3 className="leading-tight mb-16 text-neutral-200 text-4xl">
            {description}
          </h3>

          <SequentialFadeUp
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16"
            staggerDelay={0.3}
            duration={0.5}
          >
            {/* Coluna 1 - Contato */}
            <div>
              <h4 className="uppercase tracking-wider mb-4">{contact.title}</h4>
              <div className="space-y-2">
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
            </div>

            <div>
              <h4 className="uppercase tracking-wider mb-4">{social.title}</h4>
              <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
                {CtaSection.social.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna 3 - Botão */}
            <div>
              <Link href={button.link}>
                <div className="bg-zinc-800 hover:bg-zinc-700 textcolor-primary-500 uppercase tracking-widest py-4 px-8 text-center transition-colors">
                  {button.text}
                </div>
              </Link>
            </div>

          </SequentialFadeUp>
        </SequentialFadeUp>
      </div>
    </section>
  );
}
