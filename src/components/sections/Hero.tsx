"use client";

import Image from "next/image";
import { ArrowUpRight, Code2, MessageSquare, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import DotGrid from "@/components/DotGrid";
import TiltCard from "@/components/TiltCard";
import { TechLogo, type LogoName } from "@/components/TechLogos";
import { fadeUp, stagger } from "@/lib/motion";
import { hero, heroHighlights, techRibbon } from "@/data/content";

const highlightIcons = {
  zap: Zap,
  smartphone: Smartphone,
  code: Code2,
};

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden bg-page pt-28 pb-16 lg:pt-32">
      <div className="hero-orb pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-ink ring-1 ring-line"
            >
              <span>👋</span> {hero.badge}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[56px]"
            >
              {hero.titleLead}{" "}
              <span className="relative inline-block text-brand">
                {hero.titleAccent}
                <svg
                  className="absolute -bottom-1 left-0 h-3 w-full"
                  viewBox="0 0 280 12"
                  fill="none"
                  aria-hidden
                >
                  <motion.path
                    d="M3 8 C 50 2, 120 12, 180 6 S 260 3, 277 7"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-[15px] leading-7 text-muted"
            >
              {hero.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(91,69,224,0.3)] hover:bg-brand-dark"
              >
                View My Work
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand bg-card px-6 py-3 text-sm font-semibold text-brand"
              >
                Let&apos;s Talk
                <MessageSquare className="h-4 w-4" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3"
            >
              {heroHighlights.map((item) => {
                const Icon = highlightIcons[item.icon];
                return (
                  <div key={item.title} className="flex items-start gap-2.5">
                    <Icon className="mt-0.5 h-[18px] w-[18px] text-brand" />
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-xs text-muted">{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <TiltCard intensity={7} className="relative mx-auto h-[520px] w-full max-w-[560px] lg:h-[560px]">
            <DotGrid className="right-2 top-6 h-24 w-24" />
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-[46%] rounded-full bg-brand-soft sm:h-[420px] sm:w-[420px]" />
            <div className="absolute left-1/2 top-[58%] h-[280px] w-[280px] -translate-x-[42%] -translate-y-1/2 rounded-full bg-brand/20 sm:h-[340px] sm:w-[340px]" />

            <div className="absolute inset-x-10 top-6 bottom-2 overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(17,24,39,0.18)] sm:inset-x-14 sm:top-8 sm:bottom-4">
              <Image
                src="/images/khushi-hero-sit.jpg"
                alt="Khushi Singh"
                fill
                priority
                className="object-cover object-[center_12%]"
                sizes="(max-width: 768px) 90vw, 520px"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-16 z-10 w-[168px] rounded-2xl bg-card p-2.5 ring-1 ring-line card-shadow sm:left-2"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/card-building.png"
                  alt="Modern design preview"
                  width={320}
                  height={180}
                  className="h-20 w-full object-cover"
                />
              </div>
              <p className="mt-2 px-1 text-[11px] font-semibold leading-4 text-ink">
                Modern Design.
                <br />
                Better Experience.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute right-0 top-[28%] z-10 flex flex-col items-center gap-3 rounded-full border border-line bg-card px-3 py-4 card-shadow sm:right-4"
            >
              {(["react", "nextjs", "javascript", "tailwind"] as LogoName[]).map((name) => (
                <TechLogo key={name} name={name} size={22} showLabel={false} />
              ))}
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute bottom-6 right-0 z-10 w-[170px] rounded-2xl bg-card p-2.5 ring-1 ring-line card-shadow sm:right-6"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/card-plant.png"
                  alt="Build launch grow preview"
                  width={320}
                  height={180}
                  className="h-20 w-full object-cover"
                />
              </div>
              <p className="mt-2 px-1 text-[11px] font-semibold leading-4 text-ink">
                Build. Launch. Grow.
              </p>
            </motion.div>
          </TiltCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 overflow-hidden rounded-[28px] bg-lavender px-0 py-8 ring-1 ring-line"
        >
          <div className="flex items-center justify-center gap-3 px-6">
            <span className="h-px w-8 bg-brand/20 sm:w-12" />
            <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-muted">
              TECHNOLOGIES I WORK WITH
            </p>
            <span className="h-px w-8 bg-brand/20 sm:w-12" />
          </div>

          <div className="tech-marquee-fade mt-6 overflow-hidden">
            <div className="tech-marquee flex w-max gap-3 pr-3">
              {[...techRibbon, ...techRibbon].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-2xl border border-line bg-card px-4 py-2.5 card-shadow"
                >
                  <TechLogo name={name} size={20} />
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
