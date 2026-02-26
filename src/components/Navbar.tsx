import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-blue-900/60 bg-blue-950/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.25em] uppercase text-sky-200"
        >
          Caesura 2026
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-sky-100 hover:text-sky-300 transition-colors"
          >
            MBA Batch of &apos;26
          </Link>
          <Link
            href="/theme"
            className="rounded-full border border-sky-500/60 bg-sky-500/10 px-4 py-1.5 text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.35)] transition hover:bg-sky-400/20 hover:border-sky-300"
          >
            So what&apos;s the theme?
          </Link>
        </div>
      </nav>
    </header>
  );
}

