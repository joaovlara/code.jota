"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { workSection } from "@/data/data.texts";
import SequentialFadeUp from "@/components/Animation/SequentialFadeUp";

export default function Portfolio() {
  const { title, subtitle, buttonText, projects } = workSection;

  // State to track which card is clicked on mobile
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  // Handle card click on mobile
  const handleCardClick = (projectId: number) => {
    // Toggle active state (close if clicking the same card again)
    setActiveCardId(activeCardId === projectId ? null : projectId);
  };

  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center"
    >
      <div className="container relative p-5 space-y-3">
        <div className="">
          <h2 className="">{title}</h2>
          <h3 className="mb-10">{subtitle}</h3>
        </div>
        {/* Portfolio grid */}
        <SequentialFadeUp
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px"
          staggerDelay={0.3}
          duration={0.6}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden"
              onClick={() => handleCardClick(project.id)}
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                }}
                className="transition-transform duration-500"
              />

              {/* Overlay on hover (desktop) or click (mobile) */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 flex flex-col items-center justify-center cursor-pointer
        ${
          activeCardId === project.id
            ? "opacity-100"
            : "opacity-0 md:group-hover:opacity-100"
        }`}
              >
                <div className="text-center p-6">
                  <span className="textcolor-primary-500 block mb-2">
                    {project.category}
                  </span>
                  <h3 className="mb-8">{project.title}</h3>

                  <Link
                    href={project.link} target="blank"
                    className="inline-block border border-amber-500 textcolor-primary-500 hover:bg-amber-500 hover:text-black transition-colors py-2 px-4 text-xs uppercase tracking-wider"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </SequentialFadeUp>
      </div>
    </section>
  );
}
