import type { Metadata } from "next";

export const seoConfig: Metadata = {
  title: "Jwao | Desenvolvedor Web Freelancer",
  description:
    "Portfólio de Jwao, desenvolvedor web freelancer especializado em websites comerciais, landing pages e portfólios profissionais com Next.js e TailwindCSS.",
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
    "Jwao",
  ],
  openGraph: {
    title: "Jwao | Desenvolvedor Web Freelancer",
    description:
      "Criação de websites, landing pages e portfólios profissionais com Next.js e TailwindCSS.",
    url: "https://jwaodev.com.br",
    siteName: "Portfólio Jwao",
    images: [
      {
        url: "https://jwaodev.com.br/preview.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Jwao - Desenvolvedor Web Freelancer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jwao | Desenvolvedor Web Freelancer",
    description:
      "Websites, landing pages e portfólios profissionais com Next.js e TailwindCSS.",
    images: ["https://jwaodev.com.br/preview.png"],
  },
};
