"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { capabilities } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-[#060b18] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Why Edgaroo"
          title="Intelligence engineered for outcomes"
          description="We combine deep technical expertise with a results-driven mindset — turning raw data into systems that consistently predict, optimize and automate."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-2xl transition-colors duration-500 group-hover:bg-cyan-400/10" />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg ring-1 ring-white/10">
                <cap.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
