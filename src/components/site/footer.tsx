"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Building2, Globe, ArrowUpRight } from "lucide-react";
import { navLinks, services, siteConfig } from "@/lib/site-data";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const year = new Date().getFullYear();
  const { toast } = useToast();

  const copyValue = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({ title: `${label} copied`, description: value });
    } catch {
      toast({ title: label, description: value });
    }
  };

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-[#060b18] text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="#home" className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/15">
                <Image
                  src={siteConfig.logoSrc}
                  alt={`${siteConfig.name} logo`}
                  width={388}
                  height={316}
                  className="h-8 w-auto object-contain"
                />
              </span>
              <span className="text-xl font-semibold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <p className="mt-5 text-sm font-medium text-cyan-300">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  onClick={() => copyValue("Phone", siteConfig.phone)}
                  className="group flex items-start gap-2.5 text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-cyan-400" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  onClick={() => copyValue("Email", siteConfig.email)}
                  className="group flex items-start gap-2.5 text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-cyan-400" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <Building2 className="mt-0.5 h-4 w-4 text-cyan-400" />
                <span>{siteConfig.legalName}</span>
              </li>
              <li>
                <a
                  href={siteConfig.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  <Globe className="mt-0.5 h-4 w-4 text-cyan-400" />
                  <span className="flex items-center gap-1">
                    www.edgaroo.com
                    <ArrowUpRight className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            Copyright © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            AI · Machine Learning · Quantitative Research · Algo-Trading · LLMs &amp; Agents
          </p>
        </div>
      </div>
    </footer>
  );
}
