"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInUp, viewportOptions } from "@/hooks/useScrollAnimation";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="contact">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[140px]"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl border border-border bg-gradient-to-b from-surface to-surface/40 p-10 text-center sm:p-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Parlons de votre projet.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Échangeons 30 minutes pour comprendre vos besoins et évaluer
            ensemble la meilleure approche pour votre application.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="mailto:contact@votre-domaine.com">
              <Mail size={16} />
              Contactez-nous
              <ArrowRight size={16} />
            </Button>
            <Button href="tel:+33600000000" variant="secondary">
              Appelez-nous
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted">
            Réponse sous 24h ouvrées · Premier échange gratuit et sans
            engagement
          </p>
        </motion.div>
      </Container>
    </section>
  );
}