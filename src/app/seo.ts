import type { Metadata } from "next";

export const seoConfig: Metadata = {
  title: "Code.JOTA | Desenvolvedor Web Freelancer",
  description:
    "Portfólio de Code.JOTA, desenvolvedor web freelancer especializado em websites comerciais, landing pages e portfólios profissionais com Next.js e TailwindCSS.",
  keywords: [
    "Desenvolvedor Web Freelancer",
    "Criação de Websites Comerciais",
    "Landing Pages Responsivas",
    "Portfólios Profissionais",
    "Sites Institucionais",
    "Next.js",
    "ReactJs",
    "React",
    "Desenvolvimento web front end",
    "TailwindCSS",
    "Desenvolvedor Front-End",
    "Freelancer Curitiba",
    "Code.JOTA",
  ],
  openGraph: {
    title: "Code.JOTA | Desenvolvedor Web Freelancer",
    description:
      "Criação de websites, landing pages e portfólios profissionais com Next.js e TailwindCSS.",
    url: "https://codejota.com.br",
    siteName: "Portfólio Code.JOTA",
    images: [
      {
        url: "https://codejota.com.br/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Code.JOTA - Desenvolvedor Web Freelancer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code.JOTA | Desenvolvedor Web Freelancer",
    description:
      "Websites, landing pages e portfólios profissionais com Next.js e TailwindCSS.",
    images: ["https://codejota.com.br/preview.png"],
  },
};
