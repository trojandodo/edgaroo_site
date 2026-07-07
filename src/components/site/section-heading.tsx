"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
            dark
              ? "border-white/15 bg-white/5 text-cyan-200"
              : "border-blue-500/20 bg-blue-500/10 text-blue-600"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
