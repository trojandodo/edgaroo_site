"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060b18] px-6 py-12 sm:px-12 sm:py-14"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to put your data on the path to success?
              </h2>
              <p className="mt-3 text-base text-slate-300 sm:text-lg">
                From predictive analytics to live, risk-aware trading systems —
                let&apos;s build something that performs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_-12px_rgba(30,144,255,0.7)] transition-transform hover:scale-[1.03]"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
