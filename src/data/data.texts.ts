// Centraliza todos os textos das sessões e componentes do projeto

import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp , FaAws} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAdobecreativecloud } from "react-icons/si";

export const socialLinks = [
  { name: "Github", icon: FaGithub, url: "https://github.com/joaovlara"},
  { name: "WhatsApp", icon: FaWhatsapp, url:"https://wa.me/5541998205576"},
  { name: "Linkedin", icon: FaLinkedin, url: "https://www.linkedin.com/in/joaovlara/"},
  // { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
];

export const aboutSection = {
  title: "SOBRE",
  description:
    "Eu sou o João. Crio e desenvolvo aplicações e materiais para a internet, com especialização em Desenvolvimento Front-End, criando interfaces para Web e Mobile com foco em performance, responsividade e experiência do usuário. Colaborei com startups, empresas e instituições, além de prestar serviços para clientes individuais, atuando em todo o ciclo de criação e publicação de projetos. Trabalho com tecnologias modernas de desenvolvimento, programando plataformas web, landing pages, portfólios e sites comerciais. Gosto de unir criatividade e presença online para alcançar prospecções, campanhas ou solucionar problemas de forma eficaz e otimizada.",
  image: {
    src: "/images/about-photo.jpg",
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
    { icon: SiAdobecreativecloud, name: "Adobe Creative Cloud" },
  ],
  button: {
    text: "DOWNLOAD CV",
    link: "https://drive.google.com/file/d/1Zyic7fu4gkKX3e4a8jyKi8ZsKgqWRqAz/view?usp=drive_link",
  },
};

export const expertiseTexts = {
  title: "EXPERIÊNCIAS",
  subtitle:
    "Visual Design, Branding Identity, UI Design, Product Design, Prototyping, Illustration",
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
  subtitle: "Conheça alguns dos meus trabalhos recentes",
  buttonText: "Ver Projeto",
  projects: [
    {
      id: 1,
      title: "Landing Pages",
      category: "Landing Pages",
      image: "/images/landing-pages.png",
      link: "https://www.onfocus.com.br/",
    },
    {
      id: 2,
      title: "Desenvolvimento Mobile",
      category: "Mobile",
      image: "/images/mobile.png",
      link: "https://pokedex-plum-rho.vercel.app/",
    },
    {
      id: 3,
      title: "Website Comercial",
      category: "Desenvolvimento Web",
      image: "/images/website-comercial.png",
      link: "https://grupodigital.com.br/",
    },
    {
      id: 4,
      title: "Website Institucional",
      category: "Social Media",
      image: "/images/site-institucional.png",
      link: "https://advocaciamarialara.com.br/",
    },
  ],
};

export const CtaSection = {
  title: "Entre em Contato",
  description:
    "Vamos desenvolver sua presença online, com criatividade, segurança e bom desempenho na web",
  contact: {
    title: "Envie sua ideia, faça um orçamento",
    email: "joaovdelara@gmail.com",
    phone: "41998205576",
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
  copyright: "JWAO © 2025 Todos direitos reservados",
  socialLinks,
};
