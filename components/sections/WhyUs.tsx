"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/hooks/useScrollAnimation";

export default function WhyUs() {
  return (
    <section className="py-24 sm:py-32" id="pourquoi-nous">
      <Container>
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Une expertise complète, un seul interlocuteur"
          description="De la conception à la publication, nous maîtrisons l'ensemble de la chaîne de développement mobile."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = Icons[
              feature.icon as keyof typeof Icons
            ] as Icons.LucideIcon;

            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="group rounded-2xl border border-border bg-surface/50 p-8 transition-colors hover:border-primary/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-colors group-hover:bg-primary/20">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}