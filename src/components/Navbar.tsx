"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, profile } from "@/data/content";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function goToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector("header");
    const offset = (header?.getBoundingClientRect().height ?? 78) + 16;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-line bg-page/90 shadow-sm backdrop-blur-md"
          : "bg-page/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goToSection("home");
          }}
          className="flex items-center gap-3"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
            <span className="font-script text-[30px] leading-none text-brand">KS</span>
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold text-ink">{profile.name}</span>
            <span className="block text-[11px] text-muted">{profile.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                goToSection(link.id);
              }}
              className={`relative pb-1 text-sm font-medium transition-colors ${
                active === link.id ? "text-brand" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              {active === link.id ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-brand"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goToSection("contact");
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(91,69,224,0.28)] hover:bg-brand-dark sm:inline-flex"
          >
            Let&apos;s Work Together
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
          <button
            type="button"
            className="rounded-xl border border-line bg-card p-2 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-line bg-page px-4 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection(link.id);
                  }}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    active === link.id ? "bg-brand-soft text-brand" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("contact");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
