"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <section id="services" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Four practices, one obsession"
          description="We harness the breakthroughs in machine learning and artificial intelligence to build original, state-of-the-art learning algorithms with superior predictive capabilities."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-card-hover sm:p-8"
            >
              {/* gradient glow on hover */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
                  >
                    <service.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Edgaroo service
                    </p>
                  </div>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:text-blue-600">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">
                {service.short}
              </p>

              <ul className="relative mt-6 space-y-2.5 border-t border-border pt-5">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-foreground/90"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/12 text-blue-600">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
