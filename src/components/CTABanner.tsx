"use client";

import { ArrowUpRight, MessageSquare, Rocket, Send } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  icon?: "send" | "rocket";
  title: string;
  subtitle: string;
  button: string;
  href?: string;
  variant?: "solid" | "outline";
};

export default function CTABanner({
  icon = "rocket",
  title,
  subtitle,
  button,
  href = "#contact",
  variant = "solid",
}: Props) {
  const Icon = icon === "send" ? Send : Rocket;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col items-start justify-between gap-5 rounded-[28px] bg-lavender px-6 py-6 ring-1 ring-line sm:flex-row sm:items-center sm:px-8"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_20px_rgba(91,69,224,0.3)]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-base font-bold text-ink">{title}</p>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
      </div>
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={
          variant === "outline"
            ? "inline-flex items-center gap-2 rounded-xl border-2 border-brand bg-card px-5 py-2.5 text-sm font-semibold text-brand"
            : "inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(91,69,224,0.28)] hover:bg-brand-dark"
        }
      >
        {button}
        {variant === "outline" ? (
          <ArrowUpRight className="h-4 w-4" />
        ) : (
          <MessageSquare className="h-4 w-4" />
        )}
      </motion.a>
    </motion.div>
  );
}
