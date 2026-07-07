"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Building2, MapPin, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { toast } = useToast();
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      toast({
        title: "Please fill in all required fields",
        description: "Name, email and message are required.",
        variant: "destructive",
      });
      return;
    }

    setStatus("submitting");
    // No backend on static hosting (GitHub Pages). Compose a mailto link,
    // copy the message to the clipboard as a fallback, and open the user's
    // email client. The toast always gives feedback either way.
    const subject = `Edgaroo enquiry from ${form.name}`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      (form.company ? `Company: ${form.company}\n` : "") +
      `\n${form.message}`;
    const mailto = `${siteConfig.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      await navigator.clipboard.writeText(body);
    } catch {
      // Clipboard may be unavailable; the mailto still works.
    }

    // Trigger the mailto via a temporary anchor (opens the email client if
    // one is configured). Does not navigate the page.
    const anchor = document.createElement("a");
    anchor.href = mailto;
    anchor.rel = "noopener noreferrer";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setStatus("success");
    toast({
      title: "Opening your email client",
      description: `If nothing opens, your message was copied to the clipboard — paste it into an email to ${siteConfig.email}.`,
    });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
      copyable: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: siteConfig.emailHref,
      copyable: true,
    },
    {
      icon: Building2,
      label: "Company",
      value: siteConfig.legalName,
      href: siteConfig.website,
      copyable: false,
    },
    {
      icon: MapPin,
      label: "Online",
      value: "www.edgaroo.com",
      href: siteConfig.website,
      copyable: false,
    },
  ] as const;

  const onContactClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof contactItems)[number]
  ) => {
    if (!item.copyable) return;
    // Always give the user feedback: copy the value to the clipboard so the
    // click is never silent (e.g. when no mail client / dialer is configured).
    try {
      await navigator.clipboard.writeText(item.value);
      toast({
        title: `${item.label} copied`,
        description: item.value,
      });
    } catch {
      toast({
        title: item.label,
        description: item.value,
      });
    }
    // We intentionally do NOT preventDefault — users with a configured mail
    // client / dialer still get the native compose / dial behavior.
    void e;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Put your data to work"
          description="Need to analyze your data? A model to consistently predict your outcomes into the future? Need help optimizing or automating your trading strategy? Get in touch with us today, to put your business on the path to success."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#060b18] p-8 text-white">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl" />
                <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Let&apos;s talk
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Reach the {siteConfig.name} team
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Tell us about your data, your objectives, and the decisions
                  you want to automate. We typically respond within one business
                  day.
                </p>

                <ul className="mt-8 space-y-3">
                  {contactItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => onContactClick(e, item)}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07]"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg">
                          <item.icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-wider text-slate-400">
                            {item.label}
                          </span>
                          <span className="block truncate text-sm font-semibold text-white">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={onSubmit}
              className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  placeholder="Company or organization"
                  autoComplete="organization"
                />
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">
                  How can we help? <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us about your data, your goals, and what you'd like to predict or automate."
                  rows={6}
                  required
                />
              </div>

              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by{" "}
                  {siteConfig.legalName}. We never share your information.
                </p>
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(30,144,255,0.6)] transition-transform hover:scale-[1.02] disabled:opacity-70 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
