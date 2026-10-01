"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-card text-ink shadow-sm transition-colors hover:border-brand/40"
    >
      {isDark ? <Sun className="h-4 w-4 text-brand" /> : <Moon className="h-4 w-4 text-brand" />}
    </motion.button>
  );
}
