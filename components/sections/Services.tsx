"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/hooks/useScrollAnimation";

export default function Services() {
  return (
    <section className="py-24 sm:py-32" id="services">
      <Container>
        <SectionHeading
          eyebrow="Nos services"
          title="Un service adapté à chaque ambition"
          description="Que vous lanciez un MVP ou une plateforme complexe, nous avons l'expertise adéquate."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = Icons[
              service.icon as keyof typeof Icons
            ] as Icons.LucideIcon;

            return (
              <motion.article
                key={service.title}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="flex flex-col rounded-2xl border border-border bg-gradient-to-b from-surface/80 to-surface/30 p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <Check
                        size={14}
                        className="shrink-0 text-primary-light"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}