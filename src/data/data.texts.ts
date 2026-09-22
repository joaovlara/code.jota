// Centraliza todos os textos das sessões e componentes do projeto

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaAws,
  FaPenNib,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const heroSection = {
  eyebrow: "Web dev · Web design",
  location: "Curitiba, BR",
  title: ["Sites modernos", "para marcas", "modernas."],
  description:
    "Desenvolvo websites que unem design, tecnologia e estratégia para transformar sua presença digital.",
  panelTitle: "Presença digital",
  panelDescription:
    "Alta performance, interfaces com personalidade e resultados que dão para medir.",
  buttonText: "Me conte sua ideia",
  scrollLabel: "Scroll para explorar",
};

export const socialLinks = [
  { name: "Github", icon: FaGithub, url: "https://github.com/joaovlara" },
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/5541998205576" },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/joaovlara/",
  },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/code.jota" },
];

export const aboutSection = {
  title: "SOBRE",
  eyebrow: "Sobre code.JOTA",
  intro:
    "Estratégia, design e desenvolvimento para transformar boas ideias em presença digital.",
  heading: ["Não é só", "um site.", "É presença."],
  imageCaption: ["Design com intenção", "Tecnologia com clareza"],
  techTitle: "Ferramentas que movem o projeto",
  description:
    "Eu sou o João. Crio e desenvolvo aplicações e materiais para a internet, com especialização em Desenvolvimento Front-End, criando interfaces para Web e Mobile com foco em performance, responsividade e experiência do usuário. Colaborei com startups, empresas e instituições, além de prestar serviços para clientes individuais, atuando em todo o ciclo de criação e publicação de projetos. Trabalho com tecnologias modernas de desenvolvimento, programando plataformas web, landing pages, portfólios e sites comerciais. Gosto de unir criatividade e presença online para alcançar prospecções, campanhas ou solucionar problemas de forma eficaz e otimizada.",
  image: {
    src: "/images/about.gif",
    alt: "Foto de perfil",
  },
  techIcons: [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: FaAws, name: "AWS" },
    { icon: FaPenNib, name: "Adobe Creative Cloud" },
  ],
  button: {
    text: "DOWNLOAD CV",
    link: "https://drive.google.com/file/d/1Zyic7fu4gkKX3e4a8jyKi8ZsKgqWRqAz/view?usp=drive_link",
  },
};

export const expertiseTexts = {
  title: "EXPERIÊNCIAS",
  eyebrow: "Expertise",
  heading: ["Do conceito", "ao", "lançamento."],
  subtitle:
    "Visual Design, Branding Identity, UI Design, Product Design, Prototyping, Illustration",
  description:
    "Design, desenvolvimento e estratégia organizados em uma experiência digital que representa sua marca.",
  capabilities: [
    {
      title: "Web design",
      description: "Interfaces memoráveis, claras e centradas na sua marca.",
    },
    {
      title: "Desenvolvimento",
      description:
        "Tecnologia atual, responsividade e performance em cada detalhe.",
    },
    {
      title: "Landing pages",
      description: "Páginas pensadas para comunicar, captar e converter.",
    },
    {
      title: "Sites institucionais",
      description: "Presença digital sólida para negócios que querem crescer.",
    },
  ],
  technicalBase: "Base técnica",
  technicalDescription:
    "Experiência prática em times, produtos e projetos digitais de diferentes escalas.",
  experience: {
    title: "EXPERIÊNCIA",
    items: [
      {
        company: "OnFocus Marketing",
        position: "Desenvolvedor Web",
        period: "Atualmente",
        description:
          "Desenvolvimento e hospedagem de websites, landing pages, sites comerciais, sites institucionais, cardápios e portfólios. Projetos com responsividade, otimização, uso de tecnologias atuais e boas práticas de SEO e segurança, mantendo a identidade visual da marca.",
      },
      {
        company: "FAE Centro Universitário",
        position: "Desenvolvedor Frontend",
        period: "Atualmente",
        description:
          "Desenvolvimento de aplicações web e interfaces para mobile e desktop. Colaboração em equipes multidisciplinares, com metodologia ágil, versionamento e entrega de soluções. Atuação com integrações, APIs, documentação técnica, sustentação e rotina de monitoramento.",
      },
    ],
  },
  education: {
    title: "EDUCAÇÃO",
    items: [
      {
        institution: "PUCPR - Pontifícia Universidade Católica do Paraná",
        degree:
          "Graduação Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
        period: "2022-2025",
        description:
          "Formação na área de Tecnologia da Informação, com ênfase em Engenharia de Software, visando adquirir conhecimentos práticos e teóricos em programação, algoritmos, cibersegurança, análise de dados e desenvolvimento de sistemas.",
      },
      {
        institution: "Escola Conquer",
        degree: "Desenvolvimento Web Avançado",
        period: "2022-2023",
        description:
          "Curso de especialização em Desenvolvimento Web e Front-End, com foco na criação de projetos reais e aplicação de conhecimentos em programação com HTML5, CSS, JavaScript, TypeScript, React, responsividade, hospedagem e deploy de aplicações.",
      },
    ],
  },
  skills: {
    title: "SKILLS",
    categories: [
      {
        title: "Design",
        skills: [
          "UI/UX Design",
          "Prototipagem",
          "Figma",
          "Photoshop",
          "Illustrator",
          "Identidade Visual",
        ],
      },
      {
        title: "Desenvolvimento",
        skills: [
          "HTML/CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "React Native",
          "Node.js",
        ],
      },
      {
        title: "Ferramentas e Serviços",
        skills: [
          "AWS",
          "Adobe AEM",
          "Firebase",
          "WordPress",
          "Jira",
          "Confluence",
          "GitHub",
          "Google Ads",
        ],
      },
    ],
  },
};

export const workSection = {
  title: "PORTFÓLIO",
  eyebrow: "Projetos selecionados",
  heading: ["Trabalho que", "aparece."],
  subtitle: "Conheça alguns dos meus trabalhos recentes",
  description:
    "Cada entrega combina uma identidade visual própria com uma experiência objetiva e responsiva.",
  buttonText: "Ver Projeto",
  projects: [
    {
      id: 1,
      title: "Landing Pages",
      category: "Landing Pages",
      alt: "Projeto de landing pages",
      image: "/images/landing-pages.png",
      link: "https://www.onfocus.com.br/",
    },
    {
      id: 2,
      title: "Desenvolvimento Mobile",
      category: "Mobile",
      alt: "Projeto de desenvolvimento mobile",
      image: "/images/mobile.png",
      link: "https://pokedex-plum-rho.vercel.app/",
    },
    {
      id: 3,
      title: "Website Comercial",
      category: "Desenvolvimento Web",
      alt: "Projeto de website comercial",
      image: "/images/website-comercial.png",
      link: "https://grupodigital.com.br/",
    },
    {
      id: 4,
      title: "Website Institucional",
      category: "Social Media",
      alt: "Projeto de website institucional",
      image: "/images/site-institucional.png",
      link: "https://advocaciamarialara.com.br/",
    },
  ],
};

export const CtaSection = {
  title: "Entre em Contato",
  eyebrow: "Vamos criar juntos",
  heading: ["Sua marca", "merece um site", "à altura."],
  description:
    "Vamos desenvolver uma presença online clara, memorável e preparada para gerar resultado.",
  footerDescription:
    "Design, desenvolvimento, tecnologia e estratégia em uma única experiência.",
  contact: {
    title: "Envie sua ideia, faça um orçamento",
    email: "joaovdelara@gmail.com",
    phone: "41998205576",
    phoneDisplay: "+55 41 99820-5576",
  },
  social: {
    title: "Social",
    socialLinks,
  },
  button: {
    text: "Contato",
    link: "https://wa.me/5541998205576",
  },
};

export const navigation = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Contato", href: "#contact" },
];

export const footerTexts = {
  copyright: "Code.JOTA © 2025 Todos direitos reservados",
  socialLinks,
};
