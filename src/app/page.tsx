"use client";

import About from "@/components/Sections/About";
import Hero from "@/components/Sections/Hero";
import Expertise from "@/components/Sections/Expertise";
import Works from "@/components/Sections/Works";
import CalltoAction from "@/components/Sections/CalltoAction";
import { motion } from "framer-motion";

export default function Home() {
  // Variante de animação para as seções
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main>
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <Expertise />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <Works />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <CalltoAction />
      </motion.div>
    </main>
  );
}
