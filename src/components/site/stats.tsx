"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/site-data";

function Counter({ value }: { value: string }) {
  // Some "values" are non-numeric (AI, ∞). Render them statically.
  const isNumeric = /^\d+(\.\d+)?$/.test(value);
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = React.useState(isNumeric ? "0" : value);

  React.useEffect(() => {
    if (!inView || !isNumeric) return;
    const target = parseInt(value, 10);
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target).toString());
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, value]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="relative bg-card px-6 py-8"
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                <Counter value={s.value} />
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {s.label}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {s.sub}
              </div>
              <div className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
