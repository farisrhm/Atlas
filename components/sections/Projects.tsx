"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/hooks/useScrollAnimation";

export default function Projects() {
  return (
    <section className="py-24 sm:py-32" id="realisations">
      <Container>
        <SectionHeading
          eyebrow="Réalisations"
          title="Des projets qui parlent d'eux-mêmes"
          description="Découvrez quelques-unes des applications que nous avons conçues et développées."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface/50"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10">
                <Image
                  src={project.image}
                  alt={`Capture d'écran du projet ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <Badge className="mb-3">{project.category}</Badge>
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-1 border-t border-border pt-4">
                  {project.results.map((result) => (
                    <li key={result} className="text-xs text-muted">
                      → {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}