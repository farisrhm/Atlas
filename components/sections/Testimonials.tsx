"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/hooks/useScrollAnimation";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32" id="avis">
      <Container>
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils nous ont fait confiance"
          description="Des entrepreneurs et dirigeants satisfaits de notre accompagnement."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.id}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col rounded-2xl border border-border bg-surface/50 p-8"
            >
              <Quote
                size={28}
                className="mb-4 text-primary-light/60"
                aria-hidden="true"
              />
              <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                {testimonial.content}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-border">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}