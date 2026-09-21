import { navigation, footerTexts } from "../data/data.texts";

export default function Footer() {
  return (
    <footer className="py-8 bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
          <nav className="flex flex-col md:flex-row gap-6 items-center">
            {navigation.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-lg transition-colors"
              >
                {idx === 0 && (
                  <span className="inline-block"><svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h3a1 1 0 001-1v-3h2v3a1 1 0 001 1h3a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z" /></svg></span>
                )}
                {idx === 1 && (
                  <span className="inline-block"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></span>
                )}
                {idx === 2 && (
                  <span className="inline-block"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.46V19a2 2 0 01-2 2H5a2 2 0 01-2-2V10.46a2 2 0 01.91-1.66l7-4.24a2 2 0 012.18 0l7 4.24a2 2 0 01.91 1.66z" /></svg></span>
                )}
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Center Section: Social Links */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerTexts.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-700 hover:bg-stone-600 rounded-full p-3 transition-colors"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Terms/Privacy */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <p className="text-sm">
            {footerTexts.copyright}

          </p>
        </div>
      </div>
    </footer>
  );
}