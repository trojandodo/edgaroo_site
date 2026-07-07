"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Activity, Bot } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

function HeroCanvas() {
  // Lightweight animated SVG visualization (neural network + sparkline).
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#060b18_85%)]" />

      {/* Floating glow orbs — kept away from the headline (left-top) */}
      <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl animate-float-slow" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-float-medium" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl animate-pulse-glow" />

      {/* Left-side dark scrim to guarantee headline contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,11,24,0.92)_0%,rgba(6,11,24,0.7)_35%,rgba(6,11,24,0.25)_60%,transparent_75%)]" />

      {/* Neural network SVG */}
      <svg
        className="absolute right-2 top-1/2 hidden h-[460px] w-[460px] -translate-y-1/2 opacity-70 lg:block xl:right-16"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#1e90ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
          </linearGradient>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#1e90ff" />
          </radialGradient>
        </defs>
        {/* edges */}
        {[
          [80, 80, 200, 60],
          [80, 80, 200, 200],
          [80, 200, 200, 60],
          [80, 200, 200, 200],
          [80, 200, 200, 340],
          [80, 320, 200, 200],
          [80, 320, 200, 340],
          [200, 60, 320, 130],
          [200, 60, 320, 270],
          [200, 200, 320, 130],
          [200, 200, 320, 270],
          [200, 340, 320, 270],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#edge)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </line>
        ))}
        {/* nodes */}
        {[
          [80, 80],
          [80, 200],
          [80, 320],
          [200, 60],
          [200, 200],
          [200, 340],
          [320, 130],
          [320, 270],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill="url(#node)" opacity="0.18" />
            <circle cx={cx} cy={cy} r="4" fill="url(#node)">
              <animate
                attributeName="r"
                values="3.5;5.5;3.5"
                dur={`${2 + (i % 3)}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Sparkline ticker */}
      <div className="absolute bottom-24 left-0 right-0 hidden items-center gap-3 px-8 opacity-50 md:flex">
        <div className="flex-1">
          <svg viewBox="0 0 600 80" className="h-16 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 L60 50 L120 55 L180 35 L240 45 L300 28 L360 38 L420 20 L480 30 L540 14 L600 22 L600 80 L0 80 Z"
              fill="url(#spark)"
            />
            <path
              d="M0 60 L60 50 L120 55 L180 35 L240 45 L300 28 L360 38 L420 20 L480 30 L540 14 L600 22"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="navy-radial relative isolate overflow-hidden pt-28 pb-24 sm:pt-32 lg:pt-40 lg:pb-32"
    >
      <HeroCanvas />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {siteConfig.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name} —{" "}
            <span className="text-gradient-cyan">{siteConfig.headline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            Our expertise in artificial intelligence and machine learning helps
            your business make the right decisions — from data science and
            quantitative research to algorithmic trading and LLMs &amp; agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_-12px_rgba(30,144,255,0.7)] transition-transform hover:scale-[1.03]"
            >
              Contact us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore services
            </a>
          </motion.div>

          {/* Mini trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3"
          >
            {[
              { icon: TrendingUp, label: "Quant research", sub: "Smarter models" },
              { icon: Activity, label: "Algo-trading", sub: "Risk-aware" },
              { icon: Bot, label: "LLMs & Agents", sub: "Autonomous workflows" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-[#0a1226]/40 px-5 py-4"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-cyan-300 ring-1 ring-white/10">
                  <item.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-400">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
