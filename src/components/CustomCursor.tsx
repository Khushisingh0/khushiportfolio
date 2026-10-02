"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 32, mass: 0.4 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 32, mass: 0.4 });
  const ringX = useSpring(mouseX, { stiffness: 160, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 160, damping: 22, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      setHovering(
        Boolean(
          el?.closest("a, button, input, textarea, select, label, [role='button'], [data-cursor]"),
        ),
      );
    };

    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] hidden h-5 w-5 -ml-2.5 -mt-2.5 md:block"
        style={{ left: ringX, top: ringY }}
      >
        <motion.span
          animate={{
            scale: hovering ? 1.45 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="block h-full w-full rounded-full border border-brand"
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] hidden h-1.5 w-1.5 -ml-[3px] -mt-[3px] md:block"
        style={{ left: dotX, top: dotY }}
      >
        <motion.span
          animate={{
            scale: hovering ? 0.4 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="block h-full w-full rounded-full bg-brand shadow-[0_0_8px_var(--brand)]"
        />
      </motion.div>
    </>
  );
}
