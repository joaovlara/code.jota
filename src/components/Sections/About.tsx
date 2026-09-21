import { aboutSection } from "@/data/data.texts";
import AboutImageAnimation from "../Animation/AboutImageAnimation";
import AboutContentAnimation from "../Animation/AboutContentAnimation";
import AboutIconsAnimation from "../Animation/AboutIconsAnimation";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex justify-center py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left side image container with relative positioning */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* The portrait image */}
          <AboutImageAnimation className="relative h-[700px] w-[600px] md:h-[800px] md:w-[650px]">
            <img
              src={aboutSection.image.src}
              alt={aboutSection.image.alt}
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-sm"
            />

            {/* Technology icons column - absolute positioned on top right of image */}
            <div className="absolute top-7 left-7 flex flex-col gap-4">
              {aboutSection.techIcons.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <AboutIconsAnimation key={index} index={index}>
                    <IconComponent
                      title={tech.name}
                      className="text-stone-500 text-4xl md:text-5xl hover:text-primary-200 transition-colors cursor-pointer"
                    />
                  </AboutIconsAnimation>
                );
              })}
            </div>
          </AboutImageAnimation>
        </div>

        {/* Right side content */}
        <AboutContentAnimation className="md:pt-8 w-full md:w-1/2 space-y-6 md:pl-4">
          <h2 className="title-section">{aboutSection.title}</h2>

          <p className="leading-relaxed text-justify">
            {aboutSection.description}
          </p>

          <a
            href={aboutSection.button.link}
            className="inline-block uppercase tracking-wider textcolor-primary bg-zinc-800 hover:bg-zinc-700 transition-colors py-3 px-8"
            download
          >
            {aboutSection.button.text}
          </a>
        </AboutContentAnimation>
      </div>
    </section>
  );
}
