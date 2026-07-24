"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { methodSteps } from "@/lib/data";
import { fadeInUp, viewportOptions } from "@/hooks/useScrollAnimation";

export default function Method() {
  return (
    <section className="py-24 sm:py-32" id="methode">
      <Container>
        <SectionHeading
          eyebrow="Notre méthode"
          title="Un processus éprouvé, du concept au lancement"
          description="Chaque projet suit une méthodologie claire pour garantir qualité et sérénité."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[27px] top-0 hidden h-full w-px bg-border md:block lg:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {methodSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex items-start gap-6 lg:w-1/2 ${
                  index % 2 === 0
                    ? "lg:ml-0 lg:pr-10"
                    : "lg:ml-auto lg:pl-10 lg:text-right lg:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-surface text-sm font-semibold text-primary-light">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}