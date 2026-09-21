import { footerTexts, navigation } from "../data/data.texts";

export default function Footer() {
  return (
    <footer className="border-t border-brand-light/15 bg-brand-dark py-10">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 border-b border-brand-light/15 pb-10 md:flex-row md:items-end">
          <div>
            <p className="text-3xl font-semibold tracking-[-0.06em]">
              <span className="text-brand-teal">&lt;/&gt;</span> code.JOTA
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-gray">
              Web design e desenvolvimento para marcas que querem ser lembradas.
            </p>
          </div>
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="ui-label text-brand-light/75 transition hover:text-brand-teal"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-5 pt-6 text-xs text-brand-gray sm:flex-row sm:items-center sm:justify-between">
          <p>{footerTexts.copyright}</p>
          <div className="flex gap-5">
            {footerTexts.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-brand-teal"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
