"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-[-20%] opacity-90"
        animate={{
          backgroundImage: [
            "radial-gradient(circle at top, #0f172a, #020617 60%)",
            "radial-gradient(circle at top, #1d4ed8, #020617 65%)",
            "radial-gradient(circle at top, #38bdf8, #0f172a 70%)",
            "radial-gradient(circle at top, #0ea5e9, #1d4ed8 75%)",
            "radial-gradient(circle at top, #0f172a, #020617 60%)",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "140% 140%",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.5),_transparent_60%)] mix-blend-screen"
        animate={{ opacity: [0.2, 0.5, 0.3, 0.6, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

