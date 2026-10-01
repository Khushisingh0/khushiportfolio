"use client";

import {
  AppWindow,
  BarChart3,
  Check,
  Monitor,
  PenLine,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";
import DotGrid from "@/components/DotGrid";
import TiltCard from "@/components/TiltCard";
import { services } from "@/data/content";

const icons = {
  layout: AppWindow,
  monitor: Monitor,
  pen: PenLine,
  devices: Smartphone,
  chart: BarChart3,
};

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 overflow-x-hidden bg-page-alt py-20 lg:py-24">
      <DotGrid className="left-10 top-16 h-24 w-24" />
      <DotGrid className="right-16 top-48 h-24 w-24" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-brand">● SERVICES</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Services <span className="text-brand">I Offer</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            I help businesses and individuals create powerful digital experiences with clean
            design, modern technologies & great performance.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
                <TiltCard key={service.title} intensity={8} className="group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-full rounded-3xl bg-card p-8 ring-1 ring-line card-shadow"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
              </TiltCard>
            );
          })}
        </div>

        <div className="relative mt-14">
          <svg
            className="absolute -left-2 -top-10 hidden h-24 w-16 text-brand/40 lg:block"
            viewBox="0 0 60 90"
            fill="none"
            aria-hidden
          >
            <ellipse cx="30" cy="78" rx="16" ry="6" stroke="currentColor" />
            <path d="M30 78 V28" stroke="currentColor" />
            <path d="M18 42 C 22 28, 38 28, 42 42" stroke="currentColor" fill="none" />
          </svg>
          <svg
            className="absolute -right-2 -top-8 hidden h-20 w-28 text-brand/50 lg:block"
            viewBox="0 0 110 70"
            fill="none"
            aria-hidden
          >
            <path
              d="M8 55 C 30 55, 45 20, 70 28 S 100 12, 104 8"
              stroke="currentColor"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
            <path d="M96 4 L106 8 L98 16" stroke="currentColor" />
          </svg>
          <CTABanner
            icon="send"
            title="Have a project in mind?"
            subtitle="Let's work together to bring your ideas to life."
            button="Let's Talk"
          />
        </div>
      </div>
    </section>
  );
}
