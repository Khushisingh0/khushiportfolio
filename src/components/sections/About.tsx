"use client";

import Image from "next/image";
import {
  Code2,
  Gauge,
  MessageSquare,
  Smartphone,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import DotGrid from "@/components/DotGrid";
import { TechLogo } from "@/components/TechLogos";
import { fadeUp, stagger } from "@/lib/motion";
import { about, aboutTech, reasons } from "@/data/content";

const reasonIcons = {
  target: Target,
  smartphone: Smartphone,
  gauge: Gauge,
  code: Code2,
  message: MessageSquare,
};

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-visible bg-page py-20 lg:py-24">
      <DotGrid className="left-8 top-24 h-24 w-24 opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -left-6 top-10 h-56 w-56 rounded-full bg-brand-soft" />
            <DotGrid className="left-2 top-2 h-20 w-20" />
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src="/images/khushi-about.jpg"
                alt="Khushi Singh working"
                width={1024}
                height={885}
                className="h-[520px] w-full object-cover object-[center_20%]"
              />
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.18em] text-brand">
              ● ABOUT ME
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
            >
              {about.heading}{" "}
              <span className="relative inline-block text-brand">
                {about.accent}
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand/80" />
              </span>
            </motion.h2>
            {about.paragraphs.map((p) => (
              <motion.p key={p} variants={fadeUp} className="mt-4 text-[15px] leading-7 text-muted">
                {p}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">
                TECHNOLOGIES I WORK WITH
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {aboutTech.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-3 py-2 shadow-sm"
                  >
                    <TechLogo name={name} size={18} />
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">
            WHY WORK WITH ME?
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((item, i) => {
              const Icon = reasonIcons[item.icon];
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl bg-lavender p-5 ring-1 ring-line transition hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5 text-brand" />
                  <h3 className="mt-3 text-sm font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
