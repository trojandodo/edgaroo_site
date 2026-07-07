"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { philosophyQuote, siteConfig } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="relative bg-background py-20 sm:py-28">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-card-hover">
              <Image
                src="/about-visual.png"
                alt="Abstract visualization of data flowing through a neural network"
                width={1344}
                height={768}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#060b18]/70 via-transparent to-transparent" />

              {/* floating stat card */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#060b18]/70 p-4 backdrop-blur-md">
                <div>
                  <div className="text-xs uppercase tracking-wider text-cyan-300">
                    Predictive accuracy
                  </div>
                  <div className="text-2xl font-semibold text-white">
                    State-of-the-art
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                    <motion.span
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="w-2 rounded-t bg-gradient-to-t from-blue-500 to-cyan-300"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* decorative ring */}
            <div className="pointer-events-none absolute -right-6 -top-6 -z-10 h-28 w-28 rounded-full border border-blue-500/30" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 -z-10 h-20 w-20 rounded-full bg-cyan-400/20 blur-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              align="left"
              eyebrow="About Edgaroo"
              title={
                <>
                  Successfully predicting{" "}
                  <span className="text-gradient-brand">the future</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {siteConfig.name} has experience of working with large amounts
                of data in various industries. Our goal is to help companies
                successfully gain insights and predictions through the
                exploration and study of data, and to automate their
                decision-making processes.
              </p>
              <p>
                As a results-driven organization, we are constantly looking for
                new challenges to take our clients to the next level. For
                details about our services, get in touch with us.
              </p>
            </div>

            <figure className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
              <Quote className="h-6 w-6 text-blue-500" />
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
                {philosophyQuote}
              </blockquote>
            </figure>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Work with us
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                See our services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
