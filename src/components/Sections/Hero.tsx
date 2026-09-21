"use client";

import HeroAnimation from "../Animation/HeroAnimation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <HeroAnimation className="container p-5 space-y-3 relative">
        <h3 className="md:text-3xl font-mono textcolor-primary border-none">
          &lt; &gt;
        </h3>
        <h1 className="pl-3 text-5xl md:text-8xl font-bold rufina-regular">
          Eu sou João, <br /> Desenvolvedor <br />
          Web & Front-End <br />
        </h1>
        <h3 className=" pl-3 md:text-lg pt-10 font-mono border-none text-neutral-400">
          Design, Intefaces e aplicações para Web e Mobile
        </h3>
        <h3 className="md:text-3xl font-mono textcolor-primary border-none">
          &lt;/&gt;
        </h3>
      </HeroAnimation>
    </section>
  );
}
