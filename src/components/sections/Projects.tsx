"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  LayoutGrid,
  LayoutTemplate,
  MoreHorizontal,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";
import DotGrid from "@/components/DotGrid";
import TiltCard from "@/components/TiltCard";
import { TechLogo, type LogoName } from "@/components/TechLogos";
import { projectFilters, projects } from "@/data/content";

const filterIcons = {
  grid: LayoutGrid,
  layout: LayoutTemplate,
  building: Building2,
  dots: MoreHorizontal,
};

function stackLabel(name: string) {
  if (name === "nextjs") return "Next.js";
  if (name === "tailwind") return "Tailwind CSS";
  return "JavaScript";
}

function hostname(url: string) {
  if (!url || url === "#") return "preview";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "preview";
  }
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.filter === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative scroll-mt-28 overflow-x-hidden bg-page-alt py-20 lg:py-24">
      <DotGrid className="left-10 top-16 h-24 w-24" />
      <DotGrid className="right-10 top-16 h-24 w-24" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-brand">● MY WORK</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Featured <span className="text-brand">Projects</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            Live client websites I designed and developed — hover a card to feel the 3D preview,
            then open the real site.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {projectFilters.map((item) => {
            const Icon = filterIcons[item.icon];
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "border-brand bg-card text-brand shadow-sm"
                    : "border-line bg-card text-muted hover:border-brand/40 hover:text-ink"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-7 [perspective:1200px] md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const live = project.url !== "#";
              return (
                <TiltCard key={project.title} intensity={9} className="group h-full">
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="flex h-full flex-col overflow-hidden rounded-[26px] bg-card ring-1 ring-line card-shadow"
                  >
                    <div className="relative isolate overflow-hidden">
                      <div className="flex items-center gap-2 border-b border-line bg-surface px-3 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                        <span className="ml-1 min-w-0 flex-1 truncate rounded-md bg-page px-2 py-0.5 text-[10px] text-muted">
                          {hostname(project.url)}
                        </span>
                      </div>
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.08]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                        {live ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-x-0 bottom-4 mx-auto flex w-max translate-y-3 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                          >
                            View live site
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-bold text-ink">{project.title}</h3>
                        <span className="shrink-0 rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand">
                          {project.category}
                        </span>
                      </div>
                      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.description}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          {project.stack.map((name) => (
                            <span key={name} className="inline-flex items-center gap-1 text-[11px] text-ink">
                              <TechLogo name={name as LogoName} size={14} showLabel={false} />
                              <span className="hidden sm:inline">{stackLabel(name)}</span>
                            </span>
                          ))}
                        </div>
                        {live ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-brand"
                          >
                            View Live
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="text-xs font-medium text-muted">Case study</span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </TiltCard>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14">
          <CTABanner
            title="Like what you see?"
            subtitle="Let's work together to bring your ideas to life."
            button="Let's Talk"
          />
        </div>
      </div>
    </section>
  );
}
