"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Lock,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";
import DotGrid from "@/components/DotGrid";
import { fadeUp, stagger } from "@/lib/motion";
import { profile } from "@/data/content";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.66.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.7.11 2.5.32 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.71 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7zM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.53 3.69-8.21 8.23-8.21 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.4 5.81c0 4.54-3.69 8.23-8.19 8.23zm4.5-6.16c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.12-.16.25-.63.81-.77.97-.14.17-.28.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 1.8H7A3.2 3.2 0 0 0 3.8 7v10A3.2 3.2 0 0 0 7 20.2h10a3.2 3.2 0 0 0 3.2-3.2V7A3.2 3.2 0 0 0 17 3.8zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8zm5.35-2.55a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15z" />
    </svg>
  );
}

const contactCards = [
  {
    title: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    color: "text-brand bg-brand-soft",
  },
  {
    title: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${profile.phoneHref}?text=${encodeURIComponent("Hi Khushi, I would like to discuss a website project.")}`,
    icon: WhatsAppIcon,
    color: "text-white bg-[#25D366]",
  },
  {
    title: "Location",
    value: profile.location,
    href: "https://maps.google.com/?q=Bihar,India",
    icon: MapPin,
    color: "text-brand bg-brand-soft",
  },
  {
    title: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: LinkedInIcon,
    color: "text-sky-600 bg-sky-50 dark:text-sky-400 dark:bg-sky-950/40",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "New project inquiry");
    const message = String(data.get("message") || "");
    const body = `Hi Khushi,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden bg-page-alt py-20 lg:py-24">
      <DotGrid className="right-10 top-16 h-24 w-24" />
      <DotGrid className="bottom-24 left-10 h-24 w-24" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.18em] text-brand">
              ● GET IN TOUCH
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-lg text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
            >
              Let&apos;s Build Something Amazing{" "}
              <span className="relative inline-block text-brand">
                Together
                <svg className="absolute -bottom-1 left-0 h-3 w-full" viewBox="0 0 180 10" fill="none">
                  <path
                    d="M2 7 C 30 2, 70 9, 110 5 S 160 2, 178 6"
                    stroke="#5b45e0"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-md text-[15px] leading-7 text-muted">
              Have a project in mind or need help with your website? I&apos;d love to hear about it.
              Let&apos;s bring your ideas to life!
            </motion.p>

            <div className="mt-8 space-y-3">
              {contactCards.map((card) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 rounded-2xl bg-card px-4 py-3.5 ring-1 ring-line card-shadow"
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${card.color}`}>
                    <card.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted">{card.title}</span>
                    <span className="block truncate text-sm font-semibold text-ink">{card.value}</span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted" />
                </motion.a>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-brand">
                LET&apos;S CONNECT
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2] text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={`https://wa.me/${profile.phoneHref}?text=${encodeURIComponent("Hi Khushi, I would like to discuss a website project.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[28px] bg-card p-6 ring-1 ring-line card-shadow sm:p-8"
          >
            <svg
              className="absolute right-6 top-6 h-12 w-16 text-brand"
              viewBox="0 0 70 50"
              fill="none"
              aria-hidden
            >
              <path d="M8 32 C 20 18, 38 12, 52 8" stroke="currentColor" strokeDasharray="4 5" />
              <path d="M44 18 L58 6 L46 10" fill="currentColor" />
            </svg>
            <h3 className="text-2xl font-extrabold text-ink">Send Me a Message</h3>
            <p className="mt-2 text-sm text-muted">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink">
                  Your Name
                  <input
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none ring-brand/20 placeholder:text-muted focus:border-brand focus:ring-4"
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  Your Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="mt-1.5 w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none ring-brand/20 placeholder:text-muted focus:border-brand focus:ring-4"
                  />
                </label>
              </div>
              <label className="block text-sm font-medium text-ink">
                Subject
                <input
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="mt-1.5 w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none ring-brand/20 placeholder:text-muted focus:border-brand focus:ring-4"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                Your Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="mt-1.5 w-full resize-none rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none ring-brand/20 placeholder:text-muted focus:border-brand focus:ring-4"
                />
              </label>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(91,69,224,0.3)] hover:bg-brand-dark"
              >
                Send Message
                <Send className="h-4 w-4" />
              </motion.button>
              {status === "sent" ? (
                <p className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Opening your email app — I&apos;ll reply soon.
                </p>
              ) : (
                <p className="flex items-center justify-center gap-2 text-xs text-muted">
                  <Lock className="h-3.5 w-3.5" />
                  Your information is safe with me. I&apos;ll never share it.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <div className="mt-14">
          <CTABanner
            title="Ready to start your project?"
            subtitle="Let's work together to create something exceptional."
            button="Let's Work Together"
            variant="outline"
          />
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Khushi Singh. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-1 font-medium text-brand">
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </footer>
      </div>
    </section>
  );
}
