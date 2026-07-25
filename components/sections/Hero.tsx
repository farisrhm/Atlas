"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Fond dégradé subtil */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-[size:60px_60px] opacity-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
          >
            <Sparkles size={14} className="text-primary-light" />
            Flutter & Intelligence Artificielle
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Transformez votre idée en{" "}
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              application mobile.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
          >
            Nous concevons des applications iOS et Android modernes,
            performantes et intégrant les dernières technologies
            d\'intelligence artificielle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#contact">
              Discutons de votre projet
              <ArrowRight size={16} />
            </Button>
            <Button href="#realisations" variant="secondary">
              Voir nos réalisations
            </Button>
          </motion.div>
        </div>

        {/* Illustration mockup smartphone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-sm"
        >
          <div className="animate-float rounded-[2.5rem] border border-border bg-surface p-3 shadow-2xl shadow-primary/10">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-background">
              <div className="flex items-center justify-between px-6 py-3 text-xs text-muted">
                <span>9:41</span>
                <span>●●●</span>
              </div>
              <div className="space-y-4 px-6 pb-10">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20" />
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded-full bg-border" />
                  <div className="h-3 w-1/2 rounded-full bg-border" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl border border-border bg-surface/50" />
                  <div className="h-20 rounded-xl border border-border bg-surface/50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}