import React from "react";
import { expertiseTexts } from "@/data/data.texts";
import type {
  ExperienceItem,
  EducationItem,
  SkillCategory,
} from "@/types/type";
import FadeUpAnimation from "@/components/Animation/FadeUpAnimation";
import SequentialFadeUp from "@/components/Animation/SequentialFadeUp";

export default function Expertise() {
  const { title, subtitle, experience, education, skills } = expertiseTexts;

  return (
    <section id="expertise" className="flex flex-col items-center justify-center">
      <div className="container relative p-5 space-y-3">
        {/* Expertise Header */}
        <FadeUpAnimation>
          <div className="">
            <h2 className="">{title}</h2>
            <h3 className="mb-10">{subtitle}</h3>
          </div>
        </FadeUpAnimation>

        <SequentialFadeUp className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {/* Experience Column */}
          <div className="col-span-1">
            <p className="uppercase tracking-wider textcolor-primary-500 mb-10 font-semibold">
              {experience.title}
            </p>

            {experience.items.map((item: ExperienceItem, index: number) => (
              <div key={index} className="mb-12">
                <div className="flex items-start mb-3">
                  <span className="mr-3">•</span>
                  <div>
                    <h4 className="mb-1">{item.position}</h4>
                    <p className="text-neutral-300">{item.company}</p>
                    <p className="tracking-wider mt-1 text-neutral-500">
                      {item.period}
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed ml-6 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="col-span-1">
            <p className="uppercase tracking-wider textcolor-primary-500 mb-10 font-semibold">
              {education.title}
            </p>

            {education.items.map((item: EducationItem, index: number) => (
              <div key={index} className="mb-12">
                <div className="flex items-start mb-3">
                  <span className="textcolor-primary-500 mr-3">•</span>
                  <div>
                    <h4 className="mb-1 text-neutral-300">
                      {item.institution}
                    </h4>
                    <p className="">{item.degree}</p>
                    <p className="uppercase tracking-wider mt-1 text-neutral-500">
                      {item.period}
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed ml-6 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Skills Column (Third column) */}
          <div className="col-span-1">
            <p className="uppercase tracking-wider textcolor-primary-500 mb-10 font-semibold">
              {skills.title}
            </p>

            {skills.categories.map((category: SkillCategory, index: number) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="bg-zinc-800 px-3 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SequentialFadeUp>
      </div>
    </section>
  );
}