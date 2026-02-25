"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TEASER_MESSAGES = [
  "Nice try, but you'll have to look closer!",
  "Is that your final answer? Keep guessing!",
  "Not quite, but we love the enthusiasm!",
  "You're getting warmer... or maybe colder.",
];

export default function ThemePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState(TEASER_MESSAGES[0]);
  const [hasStarted, setHasStarted] = useState(false);

  const shuffledMessages = useMemo(
    () => [...TEASER_MESSAGES],
    []
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextMessage =
      shuffledMessages[Math.floor(Math.random() * shuffledMessages.length)];
    setActiveMessage(nextMessage);
    setIsOpen(true);
  }

  return (
    <>
      <section className="w-full max-w-3xl space-y-8 text-center sm:text-left">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-sky-50 sm:text-3xl">
            Can you guess the theme from this video?
          </h2>
          <p className="text-sm text-sky-100/80 sm:text-base">
            Watch closely, listen carefully, and trust your instincts. Drop
            your best guess below—we&apos;re not saying you&apos;ll be right,
            but we promise it&apos;ll be fun.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative aspect-[9/16] w-full max-w-xs overflow-hidden rounded-3xl border border-sky-500/40 bg-blue-950/60 shadow-[0_0_40px_rgba(30,64,175,0.75)] sm:max-w-sm">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-sky-500/10" />
            {!hasStarted ? (
              <button
                type="button"
                onClick={() => setHasStarted(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sky-100"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-blue-950 shadow-[0_0_30px_rgba(56,189,248,0.8)]">
                  ▶
                </span>
                <span className="text-xs font-medium tracking-wide uppercase text-sky-100/80">
                  Play Teaser
                </span>
              </button>
            ) : (
              <video
                className="relative block h-full w-full bg-blue-900 object-contain"
                controls
                autoPlay
              >
                <source src="/Until we meet again (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              name="guess"
              placeholder="Drop your guess here..."
              className="flex-1 rounded-full border border-sky-500/50 bg-blue-900/60 px-4 py-2 text-sm text-sky-50 placeholder:text-sky-200/70 outline-none ring-sky-400/60 focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-blue-950 shadow-[0_0_24px_rgba(56,189,248,0.6)] transition hover:bg-sky-400 hover:shadow-[0_0_32px_rgba(56,189,248,0.9)]"
            >
              Submit Guess
            </button>
          </form>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center bg-blue-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md rounded-3xl border border-sky-500/60 bg-gradient-to-br from-blue-950 via-blue-900 to-sky-700/40 p-6 text-center shadow-[0_0_60px_rgba(37,99,235,0.9)]"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full border border-sky-500/60 bg-blue-900/70 px-2 py-1 text-xs font-semibold text-sky-100 hover:bg-blue-800"
                aria-label="Close teaser"
              >
                ×
              </button>
              <h3 className="mb-3 text-lg font-semibold text-sky-50">
                Keep those guesses coming
              </h3>
              <p className="text-sm text-sky-100/90">{activeMessage}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

